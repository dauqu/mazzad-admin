import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import ShieldTwoToneIcon from "@mui/icons-material/ShieldTwoTone";
import "../styles/login.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 0,
}));

export default function Login() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#1A2027",
        
      }}>
        <Grid item xs={3} sx={{
          minWidth: "300px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1A2027",
        }}>
          <Item
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1A2027",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "auto",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#d6d4d4",
                padding: "20px",
                borderRadius: "10px",
                paddingBottom: "50px",
                paddingTop: "50px",
              }}
            >
              <Typography component="h1" variant="h5">
                Secure Sign In
              </Typography>

              {/* Icon */}
              <IconButton
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  mt: "20px",
                  mb: "20px",
                }}
              >
                <ShieldTwoToneIcon
                  sx={{
                    fontSize: 60,
                  }}
                />
              </IconButton>

              {/* Text  */}
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color: "#333333",
                  mt: "20px",
                  mb: "20px",
                }}
              >
                Mazzad
              </Typography>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: "20px",
                  boxShadow: "none",
                  borderRadius: "50px",
                  border: "1px solid #d6d4d4",
                }}
              >
                Login Now !
              </Button>

              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color: "#333333",
                  mt: "20px",
                  mb: "20px",
                  fontSize: "18px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Forgot Password ? Reset Here
              </Typography>

              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color: "#333333",
                  mt: "20px",
                  mb: "20px",
                  fontSize: "18px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Don't have an account ? Sign Up Here
              </Typography>

              {/* Login with social */}
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9} className="bg-image">
          <Item
            sx={{
              backgroundImage: `url("https://source.unsplash.com/random/800x600")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "#fff" }}
            >
              Mazzad is a secure and easy to use web application
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "#fff" }}
            >
              for managing auctions.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
