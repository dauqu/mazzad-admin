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
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 1,
}));

export default function AddProduct() {
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
    <Box
      sx={{
        flexGrow: 1,
        marginTop: 3,
        direction:
          localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",
      }}
    >
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ background: "#333" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,ml:3 }}
            onClick={() => navigate("/products")}
          >
            <CloseIcon />
          </IconButton>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={
              localStorage.getItem("language") === "arabic"
                ? "أدخل عنوان الصفحة"
                : "Enter Page Title"
            }
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
            {/* Product Content */}
            <TextField
              id="outlined-basic"
              placeholder={
                localStorage.getItem("language") === "arabic"
                  ? "وصف"
                  : "Description"
              }
              label={
                localStorage.getItem("language") === "arabic"
                  ? "وصف"
                  : "Description"
              }
              focused={true}
              multiline={true}
              minRows={6}
              variant="filled"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1.2rem",
                placeholderColor: "#fff",
              }}
            />

            {/* Category */}
            <TextField
              id="outlined-basic"
              placeholder="254"
              label={
                localStorage.getItem("language") === "arabic" ? "سعر" : "Price"
              }
              focused={true}
              variant="filled"
              size="small"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1rem",
                placeholderColor: "#fff",
                marginTop: 1,
              }}
            />

            <TextField
              id="outlined-basic"
              placeholder="254"
              label={
                localStorage.getItem("language") === "arabic"
                  ? "بائع"
                  : "Vendor"
              }
              focused={true}
              variant="filled"
              size="small"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1rem",
                placeholderColor: "#fff",
                marginTop: 1,
              }}
            />

            {/* Category */}
            <TextField
              id="outlined-basic"
              placeholder="https://google.com/image.png"
              label={
                localStorage.getItem("language") === "arabic" ? "صورة" : "Image"
              }
              focused={true}
              variant="filled"
              size="small"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1rem",
                placeholderColor: "#fff",
                marginTop: 1,
              }}
            />

            <TextField
              id="outlined-basic"
              placeholder={
                localStorage.getItem("language") === "arabic"
                  ? "حالة"
                  : "Status"
              }
              label={
                localStorage.getItem("language") === "arabic"
                  ? "حالة"
                  : "Status"
              }
              focused={true}
              variant="filled"
              size="small"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1rem",
                placeholderColor: "#fff",
                marginTop: 1,
              }}
            />

            {/* Category */}
            <TextField
              id="outlined-basic"
              placeholder={
                localStorage.getItem("language") === "arabic" ? "نوع" : "Type"
              }
              label={
                localStorage.getItem("language") === "arabic" ? "نوع" : "Type"
              }
              focused={true}
              variant="filled"
              size="small"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1rem",
                placeholderColor: "#fff",
                marginTop: 1,
              }}
            />

            {/* Category */}
            <TextField
              id="outlined-basic"
              placeholder={
                localStorage.getItem("language") === "arabic"
                  ? "ميزة"
                  : "Featured"
              }
              label={
                localStorage.getItem("language") === "arabic"
                  ? "ميزة"
                  : "Featured"
              }
              focused={true}
              variant="filled"
              size="small"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1rem",
                placeholderColor: "#fff",
                marginTop: 1,
              }}
            />

            {/* Category */}
            <TextField
              id="outlined-basic"
              placeholder={
                localStorage.getItem("language") === "arabic"
                  ? "لغة"
                  : "Language"
              }
              label={
                localStorage.getItem("language") === "arabic"
                  ? "لغة"
                  : "Language"
              }
              focused={true}
              variant="filled"
              size="small"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "1rem",
                placeholderColor: "#fff",
                marginTop: 1,
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
