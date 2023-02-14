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

export default function AddContract() {
    const navigate = useNavigate();

    const { id } = useParams();



    const [contractData, setContractData] = React.useState({
        title: "",
        terms: "",
        stamp_profile: "",
        signature_profile: "",
        return_terms: "",
        local_ship_terms: {
            price: 0,
            days: 0,
        },
        international_ship_terms: {
            price: 0,
            days: 0,
        },
        
    });


    React.useEffect(() => {
        if (!id || id === undefined) {
            return;
        }
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/contract/${id}`)
            .then((res) => {
                console.log(res.data);
                setContractData(res.data.contract);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    const updateContract = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/contract/${id}`, contractData)
            .then((res) => {
                console.log(res);
                // navigate("/contracts");
            })
            .catch((e) => {
                console.log(e);
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
                        onClick={() => navigate("/contracts")}
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
                        onClick={() => updateContract()}
                    >
                        Publish
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={1} alignItems="stretch">
                <Grid item xs={12} alignItems="stretch">
                    <OutlinedInput id="outlined-basic"
                        value={contractData.title}
                        onChange={(e) => setContractData({ ...contractData, title: e.target.value })}
                        placeholder="Title"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                    <OutlinedInput
                        value={contractData.terms}
                        onChange={(e) => setContractData({ ...contractData, terms: e.target.value })}
                        id="outlined-basic"
                        placeholder="Terms"
                        focused={true}
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        columnGap: "10px",
                        alignItems: "center",
                    }} >
                        <h2 className="text-start">Local Ship Term:</h2>
                        <OutlinedInput id="outlined-basic"
                            value={contractData.local_ship_terms.price}
                            onChange={(e) => setContractData({
                                ...contractData,
                                local_ship_terms: {
                                    ...contractData.local_ship_terms,
                                    price: e.target.value
                                }
                            })}
                            placeholder="Price"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                        <OutlinedInput id="outlined-basic"
                            value={contractData.local_ship_terms.days}
                            onChange={(e) => setContractData({
                                ...contractData,
                                local_ship_terms: {
                                    ...contractData.local_ship_terms,
                                    days: e.target.value
                                }
                            })}
                            placeholder="Days"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                    </Box>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            columnGap: "10px",
                            alignItems: "center"
                        }}>
                        <h2 className="text-start">International Ship Term:</h2>
                        <OutlinedInput id="outlined-basic"
                            value={contractData.international_ship_terms.days}
                            onChange={(e) => setContractData({
                                ...contractData,
                                international_ship_terms: {
                                    ...contractData.international_ship_terms,
                                    days: e.target.value
                                }
                            })}
                            placeholder="Price"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                        <OutlinedInput id="outlined-basic"
                            value={contractData.international_ship_terms.days}
                            onChange={(e) => setContractData({
                                ...contractData,
                                international_ship_terms: {
                                    ...contractData.international_ship_terms,
                                    days: e.target.value
                                }
                            })}
                            placeholder="Days"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                    </Box>

                    <OutlinedInput id="outlined-basic"
                        value={contractData.return_terms}
                        onChange={(e) => setContractData({ ...contractData, return_terms: e.target.value })}
                        placeholder="Return Terms"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />


                    <OutlinedInput
                        value={contractData.signature_profile}
                        onChange={(e) => setContractData({ ...contractData, signature_profile: e.target.value })}
                        id="outlined-basic"
                        placeholder="Signature from Profile"
                        focused={true}
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />
                    <OutlinedInput
                        value={contractData.stamp_profile}
                        onChange={(e) => setContractData({ ...contractData, stamp_profile: e.target.value })}
                        id="outlined-basic"
                        placeholder="Company from Profile"
                        focused={true}
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                </Grid>
            </Grid>
        </Box>
    );
}