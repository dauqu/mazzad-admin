import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 0,
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Item
            sx={{
              minWidth: "200px",
            }}
          >
            xs=8
          </Item>
        </Grid>
        <Grid item xs>
          <Item
            sx={{
              minWidth: "200px",
            }}
          >
            xs=4
          </Item>
        </Grid>
        <Grid item xs>
          <Item
            sx={{
              minWidth: "200px",
            }}
          >
            xs=4
          </Item>
        </Grid>
        <Grid item xs>
          <Item
            sx={{
              minWidth: "200px",
            }}
          >
            xs=8
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
