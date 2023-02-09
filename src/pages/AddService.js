import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import OutlinedInput from '@mui/material/OutlinedInput';



const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: "#1A2027",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 1,
}));

export default function AddService() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log("click");
    };

    //get pages
    const [pages, setPages] = React.useState([]);
    const [content, setContent] = React.useState([]);

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState(
        "Enter Page Description Here..."
    );

    //Axios POST request
    const handleSubmit = (e) => {
        console.log("submit");
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, {
            title: title,
            slug: slug,
            description: description,
            content: content,
        });
    };

    //Generate Slug
    const slug = slugify(title, {
        replacement: "-", // replace spaces with replacement
        remove: null, // regex to remove characters
        lower: true, // result in lower case
        remove: /[*+~.()'"!:@#/]/g,
    });

    return (
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{ background: "#333" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/products")}
                    >
                        <CloseIcon />
                    </IconButton>

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Name"
                        style={{
                            width: "60%",
                            height: "35px",
                            color: "#fff",
                            backgroundColor: "#00000000",
                            outline: "none",
                            border: "none",
                            fontSize: "1.2rem",
                        }}
                    />

                    <Divider sx={{ flexGrow: 1 }} />
                    {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <AddIcon />
          </IconButton> */}
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


                        {/* Category */}
                        <OutlinedInput id="outlined-basic"
                            placeholder="Video"
                            focused={true} variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]"
                        />

                        <OutlinedInput
                            id="outlined-basic"
                            placeholder="Video Thumbnail"
                            focused={true}
                            variant="filled" size="small" 
                            className="w-full my-2 outline-none border-[1px]"
                         />


                        {/* Category */}
                        <OutlinedInput id="outlined-basic"
                            placeholder="https://google.com/image.png"
                            focused={true} variant="filled" size="small" 
                            className="w-full my-2 outline-none border-[1px]" />


                        <OutlinedInput id="outlined-basic"
                            placeholder="https://google.com/image.png"
                            focused={true} variant="filled" size="small" 
                            className="w-full my-2 outline-none border-[1px]"
                             />
                             
                        <OutlinedInput id="outlined-basic"
                            placeholder="https://google.com/image.png"
                            label="Image 3"
                            focused={true} variant="filled" size="small" sx={{
                                width: "100%",
                                color: "#fff",
                                backgroundColor: "#fff",
                                outline: "none",
                                border: "none",
                                fontSize: "1rem",
                                placeholderColor: "#fff",
                                marginTop: 1,
                            }} />


                        <OutlinedInput
                            id="outlined-basic"
                            placeholder="Tags"
                            label="Tags"
                            focused={true} variant="filled" size="small" sx={{
                                width: "100%",
                                color: "#fff",
                                backgroundColor: "#fff",
                                outline: "none",
                                border: "none",
                                fontSize: "1rem",
                                placeholderColor: "#fff",
                                marginTop: 1,
                            }} />

                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}