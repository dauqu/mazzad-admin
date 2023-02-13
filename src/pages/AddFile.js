import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const AddFile = () => {
    const inputRef = React.useRef(null)
    const drop = React.useRef(null)

    const [fileData, setFileData] = React.useState(null)
    const [isFile, setIsFile] = React.useState(false)

    const [server_alert, setAlert] = React.useState(null);
    const [status, setStatus] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();


    // create url object from file
    const setData = (file) => {
        setFileData(file);
        setIsFile(true);
    }
    const handleClose = (reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };


    React.useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);

        return () => {
            window.removeEventListener('dragover', handleDragOver);
            window.removeEventListener('drop', handleDrop);
        };
    }, []);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { files } = e.dataTransfer;

        if (!files && files.length == 0 || files.length > 1) {
            alert('Please select one file');
            return;
        }
        inputRef.current.files = files;
        setData(files[0]);
    };

    // Upload File
    const uploadFile = (file) => {
        if (!fileData) {
            setAlert("Please select a file");
            setStatus("error");
            setOpen(true);
            return;
        }
        let formData = new FormData();
        formData.append("uploadedFile", fileData);
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/storage`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((e) => {
                setAlert("File successfully uploaded", e);
                setStatus("success", e);
                setOpen(true);
                setTimeout(() => {
                    navigate("/file-manager")
                }
                    , 1000);
            })
            .catch((e) => {
                setAlert(e.response.data.message);
                setStatus(e.response.data.status);
            });
    };

    function formatBytes(a, b = 2) {
        if (!+a) return "0 Bytes";
        const c = 0 > b ?
            0
            :
            b, d = Math.floor(Math.log(a) / Math.log(1024));
        return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]}`
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className='w-full py-4 flex flex-col items-center justify-center'>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                resumeHideDuration={3000}
                action={action}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
                    {server_alert}
                </Alert>
            </Snackbar>
            <div
                className='mt-4 w-[60%] h-[400px] flex flex-col items-center justify-center rounded-[30px]'
                style={{
                    outline: '2px dashed #000',
                }}
                ref={drop}
                onClick={() => inputRef.current.click()}
            >
                {isFile ? (
                    <div>
                        <h3 className='mb-3 text-xl'>{fileData.name}</h3>

                        <h3 className='text-base'>{formatBytes(fileData.size)}</h3>
                    </div>
                ) : (
                    <h2 className='font-serif text-xl text-gray-700'>To Upload file, Click or Drag in this area.</h2>
                )}
                <input type="file" hidden ref={inputRef} onChange={(e) => e.target.files.length > 0 && setData(e.target.files[0])} />
            </div>
            <Button
            sx={{
                width: '60%',
                marginTop: '2rem',
            }}
                variant="contained"
                className='ml-4'
                color='success'
                onClick={() => uploadFile()}
            >Upload File</Button>
        </div>
    )
}

export default AddFile