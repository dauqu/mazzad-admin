import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, MenuItem, Select } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';

export default function AddRefund() {
    const navigate = useNavigate();

    const [refundData, setRefundData] = React.useState({});
    const { id } = useParams();

    React.useEffect(() => {
        if (!id || id === undefined) return;
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/refund/${id}`)
            .then((res) => {
                setRefundData(res.data.refund);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);


    const updateComplaints = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/refund/${id}`, refundData)
            .then((res) => {
                console.log(res);
                navigate("/refund");
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{ background: "#333" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/complaints")}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Divider sx={{ flexGrow: 1 }} />
                    <Button
                        variant="contained"
                        size="small"
                        color="success"
                        sx={{
                            boxShadow: 0,
                        }}
                        onClick={() => updateComplaints()}
                    >
                        Update
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={1} alignItems="stretch">
                <Grid item xs={12} alignItems="stretch">


                    <OutlinedInput id="outlined-basic"
                        value={refundData.title}
                        onChange={(e) => setRefundData({ ...refundData, title: e.target.value })}
                        placeholder="Title"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />


                    <OutlinedInput
                        multiline
                        minRows={5}
                        value={refundData.description}
                        onChange={(e) => setRefundData({ ...refundData, description: e.target.value })}
                        id="outlined-basic"
                        placeholder="Description"
                        focused={true}
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />
                    <Select
                        sx={{
                            width: "100%",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={refundData.status || "active"}
                        onChange={(e) => setRefundData({ ...refundData, status: e.target.value })}
                    >
                        <MenuItem value={"active"}>Active</MenuItem>
                        <MenuItem value={"pending"}>Pending</MenuItem>
                        <MenuItem value={"blacklist"}>Blacklist</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </Box>
    );
}