import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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


export default function AddContract() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [companyData, setCompanyData] = useState({
        status: "active",
    });

    const onUpdate = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/companies/${id}`, companyData)
            .then((res) => {
                navigate("/companies");
            })
            .catch((e) => {
                console.log(e);
            });
    };




    useEffect(() => {
        if (id && id !== undefined && id !== null) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/companies/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setCompanyData(res.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [id]);



    return (
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{ background: "#333" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/companies")}
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
                        onClick={onUpdate}
                    >
                        Update
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={1} alignItems="stretch">
                <Grid item xs={12} alignItems="stretch">
                    <OutlinedInput
                        value={companyData.name}
                        onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                        placeholder="Name"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                    <OutlinedInput
                        value={companyData.title}
                        onChange={(e) => setCompanyData({ ...companyData, title: e.target.value })}
                        placeholder="Title"
                        focused={true}
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                    <OutlinedInput
                        value={companyData.description}
                        onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
                        multiline
                        minRows={6}
                        placeholder="description"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]" />

                    <OutlinedInput
                        value={companyData.address}
                        onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                        placeholder="Address"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]" />

                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

                        <OutlinedInput
                            value={companyData.phone}
                            onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                            type="number"
                            placeholder="Phone"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />
                        <OutlinedInput
                            value={companyData.email}
                            onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                            type="text"
                            placeholder="Email"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />
                    </Box>

                    <OutlinedInput
                        value={companyData.gst}
                        onChange={(e) => setCompanyData({ ...companyData, gst: e.target.value })}
                        placeholder="GST No."
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]" />
                    <OutlinedInput
                        value={companyData.company_owner}
                        onChange={(e) => setCompanyData({ ...companyData, company_owner: e.target.value })}
                        placeholder="Company Owner"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]" />
                    <OutlinedInput
                        value={companyData.category}
                        onChange={(e) => setCompanyData({ ...companyData, category: e.target.value })}
                        placeholder="Category"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]" />

                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <OutlinedInput
                            value={companyData.contact_email}
                            onChange={(e) => setCompanyData({ ...companyData, contact_email: e.target.value })}
                            placeholder="Contact Email"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                        <OutlinedInput
                            value={companyData.contact_phone}
                            onChange={(e) => setCompanyData({ ...companyData, contact_phone: e.target.value })}
                            placeholder="Contact Phone"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                    </Box>

                    <OutlinedInput
                        value={companyData.contact_name}
                        onChange={(e) => setCompanyData({ ...companyData, contact_name: e.target.value })}
                        placeholder="Contact Name"
                        focused={true} variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />
                    <Box>
                        <OutlinedInput
                            value={companyData.tags}
                            onChange={(e) => setCompanyData({ ...companyData, tags: e.target.value })}
                            placeholder="Tags"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]"
                        />
                    </Box>


                    <Select
                        sx={{
                            width: "100%",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={companyData.status || "active"}
                        onChange={(e) => setCompanyData({ ...companyData, status: e.target.value })}
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