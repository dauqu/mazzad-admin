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

    const [fileData, setFileData] = React.useState([])
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
        console.log(files);

        if (!files && files.length <= 0) {
            return;
        }

        setFileData([...files]);
        setIsFile(true);

        inputRef.current.files = files;
        // setData(updatedFiles);
    };

    // Upload File
    const uploadFile = () => {
        if (!fileData || fileData.length <= 0) {
            setAlert("Please select a file");
            setStatus("error");
            setOpen(true);
            return;
        }
        fileData.forEach(async (file) => {
            let formData = new FormData();
            formData.append("uploadedFile", file);
            await axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/storage`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
        });
        setAlert("File successfully uploaded");
        setStatus("success");
        setOpen(true);
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
        <div className='h-[90vh] py-4 flex flex-col items-center justify-center'>
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
                className={`justify-center mt-4 max-w-[60%] w-[60%] h-[400px] flex flex-row flex-wrap items-center p-3 rounded-[30px] gap-x-[10px]`}
                style={{
                    outline: '2px dashed #000',
                    overflow: 'hidden',
                    overflowY: 'auto',
                }}
                ref={drop}
                onClick={() => inputRef.current.click()}
            >
                {isFile ? (
                    fileData.map((file, idx) => (
                        <div className='h-[150px] overflow-hidden w-[200px] p-2 flex justify-between flex-col items-start shadow-lg' key={idx}>
                            <h3 className='mb-3 text-xl'
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textAlign: "left",
                            }}
                            >{file.name}</h3>
                            <div>
                                <h3 className='text-base'>{formatBytes(file.size)}</h3>
                                <h3 className='text-base'>{String(file.type).split('/')[0]}</h3>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2 className='font-serif text-xl text-gray-700'>To Upload file, Click or Drag in this area.</h2>
                )}
                <input multiple type="file" hidden ref={inputRef} onChange={(e) => e.target.files.length > 0 && setData([...e.target.files])} />
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