import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';

export default function AddAuction() {
    const navigate = useNavigate();

    const [bidData, setBidData] = React.useState({});
    const { id } = useParams();

    React.useEffect(() => {
        if (!id || id === undefined) return;
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/bids/${id}`)

            .then((res) => {
                setBidData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const updateAuction = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/bids/${id}`, bidData)

            .then((res) => {
                console.log(res);
                navigate("/auctions");
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
                        onClick={() => navigate("/auctions")}
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
                        onClick={() => updateAuction()}
                    >
                        Update
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={1} alignItems="stretch">
                <Grid item xs={12} alignItems="stretch">


                    <OutlinedInput id="outlined-basic"
                        value={bidData.title}
                        onChange={(e) => setBidData({ ...bidData, title: e.target.value })}
                        placeholder="Title"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                    <OutlinedInput
                        value={bidData.value}
                        onChange={(e) => setBidData({ ...bidData, value: e.target.value })}
                        id="outlined-basic"
                        placeholder="Value"
                        focused={true}
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />
                    <OutlinedInput
                        multiline
                        minRows={5}
                        value={bidData.description}
                        onChange={(e) => setBidData({ ...bidData, description: e.target.value })}
                        id="outlined-basic"
                        placeholder="Description"
                        focused={true}
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />





                    {/* Category */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
                        <OutlinedInput id="outlined-basic"
                            value={bidData.currency}
                            onChange={(e) => setBidData({ ...bidData, currency: e.target.value })}
                            placeholder="Currency"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                        <OutlinedInput id="outlined-basic"
                            value={bidData.minimal_step}
                            onChange={(e) => setBidData({ ...bidData, minimal_step: e.target.value })}
                            placeholder="Minimal Step"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
                        <OutlinedInput id="outlined-basic"
                            value={bidData.token}
                            onChange={(e) => setBidData({ ...bidData, token: e.target.value })}
                            placeholder="Token"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                        <OutlinedInput id="outlined-basic"
                            value={bidData.items}
                            onChange={(e) => setBidData({ ...bidData, items: e.target.value })}
                            placeholder="Days"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                    </Box>

                    <OutlinedInput id="outlined-basic"
                        value={bidData.contract}
                        onChange={(e) => setBidData({ ...bidData, contract: e.target.value })}
                        placeholder="Return Terms"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                </Grid>
            </Grid>
        </Box>
    );
}