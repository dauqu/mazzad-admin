import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 1,
}));

export default function NewCategory() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log("click");
    };

    const [title, setTitle] = React.useState("Enter category name here...");
    const [description, setDescription] = React.useState("Enter Category Description Here...");
    const [image, setImage] = React.useState("https://picsum.photos/200/300");

    //Axios POST request
    const handleSubmit = (e) => {
        console.log("submit");
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/categories`, {
            name: title,
            description: description,
            image: image,
        }).then((res) => {
            console.log(res);
        })
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
                        onClick={() => navigate("/categories")}
                    >
                        <CloseIcon />
                    </IconButton>

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                            width: "60%",
                            height: "35px",
                            color: "#fff",
                            backgroundColor: "#00000000",
                            outline: "none",
                            border: "none",
                            fontSize: "1.2rem",
                            placeholder: "Enter Page Title",
                            placeholderColor: "#fff",
                        }}
                    />

                    <Divider sx={{ flexGrow: 1 }} />
                    <Button
                        variant="contained"
                        size="small"
                        color="success"
                        sx={{
                            boxShadow: 0,
                        }}
                        onClick={handleSubmit}
                    >
                        Publish
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={1} alignItems="stretch">
                <Grid item xs={12} alignItems="stretch">
                    <Item
                        onDoubleClick={handleClick}
                        sx={{
                            height: "86vh",
                        }}
                    >
                        {/* Product Content */}
                        <TextField id="outlined-basic" placeholder="Category Description" label="Category Description" focused={true} multiline={true} minRows={6} variant="filled" sx={{
                            width: "100%",
                            color: "#fff",
                            backgroundColor: "#f0f0f0",
                            outline: "none",
                            border: "none",
                            fontSize: "1.2rem",
                            placeholder: "Enter Page Title",
                            placeholderColor: "#fff",
                        }} onChange={
                            (e) => setDescription(e.target.value)
                        } />

                        {/* Product Content */}
                        <TextField id="outlined-basic" placeholder="Category Image" label="Category Image" focused={true} size="small" variant="filled" sx={{
                            width: "100%",
                            color: "#fff",
                            backgroundColor: "#f0f0f0",
                            outline: "none",
                            border: "none",
                            fontSize: "1.2rem",
                            placeholder: "Enter Page Title",
                            placeholderColor: "#fff",
                            marginTop: 2
                        }} onChange={
                            (e) => setImage(e.target.value)
                        } />

                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}