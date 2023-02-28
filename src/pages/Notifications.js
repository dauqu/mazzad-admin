import {
  AppBar,
  Button,
  Divider,
  IconButton,
  InputLabel,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { toast } from "react-toastify";

function Notifications() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    // email validation
    if (email === "") {
      toast.error("Please enter email");
      return;
    }
    if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      toast.error("Please enter valid email");
      return;
    }

    // subject validation
    if (subject === "") {
      toast.error("Please enter subject");
      return;
    }

    // body validation
    if (body == "") {
      toast.error("Please enter body");
      return;
    }

    const data = {
      email: email,
      subject: subject,
      body: body,
    };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/notification/notify`, data)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.message);
      });
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 3,
        boxShadow: 0,
        animation: "fadeIn 0.5s ease-in-out",
        transition: "box-shadow 1s ease-in-out",
        direction:
          localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",
      }}
    >
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ background: "#333", color: "#fff" }}>
          <Typography variant="h6" color="inherit" component="div">
            {localStorage.getItem("language") === "arabic"
              ? "إشعارات"
              : "Notifications"}
          </Typography>

          <Divider sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            color="success"
            onClick={() => handleSubmit()}
          >
            {localStorage.getItem("language") === "arabic"
              ? "إضافة إشعار"
              : "Send"}
          </Button>
        </Toolbar>
      </AppBar>
      <form
        style={{
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "25%",
            }}
          >
            <InputLabel htmlFor="bootstrap-input" style={{}}>
              {localStorage.getItem("language") === "arabic"
                ? "البريد الإلكتروني"
                : "To Email"}
            </InputLabel>
          </div>
          <div
            style={{
              width: "75%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              name={email}
              variant="outlined"
              size="small"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "25%",
            }}
          >
            <InputLabel htmlFor="bootstrap-input" style={{}}>
              {localStorage.getItem("language") === "arabic"
                ? "عنوان الإشعار"
                : "Notification Title"}
            </InputLabel>
          </div>
          <div
            style={{
              width: "75%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => setSubject(e.target.value)}
              name={subject}
              size="small"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "25%",
            }}
          >
            <InputLabel htmlFor="bootstrap-input" style={{}}>
              {localStorage.getItem("language") === "arabic"
                ? "محتوى الإشعار"
                : "Notification Content"}
            </InputLabel>
          </div>
          <div
            style={{
              width: "75%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Content"
              multiline
              rows={4}
              onChange={(e) => setBody(e.target.value)}
              name={body}
              variant="outlined"
              size="small"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      </form>
    </Box>
  );
}

export default Notifications;
