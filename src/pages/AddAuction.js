import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import Loading from "../components/Loading";


// title: req.body.title,
//     value: req.body.value,
//     currency: req.body.currency,
//     description: req.body.description,
//     minimal_step: req.body.minimal_step,
//     token: req.body.token,
//     items: req.body.items,
//     type: req.body.type,
//     contract: req.body.contract,


export default function AddAuction() {
    const navigate = useNavigate();

    const [bidData, setBidData] = React.useState({
        title: "",
        value: "",
        currency: "",
        description: "",
        minimal_step: "",
        token: "",
        type: "",
        contract: ""
    });
    const [items, setItems] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const { id } = useParams();

    const [updating, setUpdating] = React.useState(false);

    React.useEffect(() => {
        if (!id || id === undefined) return;
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/auctions/${id}`)

            .then((res) => {
                setBidData(res.data);
                // check if items is not null
                if (res.data.items){
                    setItems([...res.data.items]);
                }
                console.log(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const updateAuction = () => {
        setUpdating(true);
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/auctions/${id}`, {
            ...bidData,
            items: items
        })
        .then((res) => {
            console.log(res);
            navigate("/auctions");
        })
        .catch((err) => {
            console.log(err);
        }).finally(() => {
            setUpdating(false);
        });
    };

    React.useEffect(() => {
        // get products 
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{ justifyContent: "space-between", background: "#333" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/auctions")}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* <Divider sx={{ flexGrow: 1 }} /> */}
                    {updating ? <Loading height={45} width={45} /> : (

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
                    )}
                </Toolbar>
            </AppBar>

            <Grid container spacing={1} alignItems="stretch">
                <Grid item xs={12} alignItems="stretch">


                    <OutlinedInput id="outlined-basic"
                        value={bidData.title}
                        onChange={(e) => setBidData({ ...bidData, title: e.target.value })}
                        placeholder="Title"
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                    <OutlinedInput
                        value={bidData.value}
                        onChange={(e) => setBidData({ ...bidData, value: e.target.value })}
                        id="outlined-basic"
                        placeholder="Value"
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
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />





                    {/* Category */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', columnGap: "10px" }}>
                        <OutlinedInput id="outlined-basic"
                            value={bidData.currency}
                            onChange={(e) => setBidData({ ...bidData, currency: e.target.value })}
                            placeholder="Currency"
                            variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                        <OutlinedInput id="outlined-basic"
                            value={bidData.minimal_step}
                            onChange={(e) => setBidData({ ...bidData, minimal_step: e.target.value })}
                            placeholder="Minimal Step"
                            variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />

                        <OutlinedInput id="outlined-basic"
                            value={bidData.type}
                            onChange={(e) => setBidData({ ...bidData, type: e.target.value })}
                            placeholder="Type"
                            variant="filled" size="small"
                            className="w-full my-2 outline-none border-[1px]" />
                    </Box>

                    <OutlinedInput id="outlined-basic"
                        value={bidData.token}
                        onChange={(e) => setBidData({ ...bidData, token: e.target.value })}
                        placeholder="Token"
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]" />

                    {/* how to add multiple value in array in database using autocomplete tag*/}
                    <Autocomplete
                        multiple
                        sx={{
                            width: "100%",
                        }}
                        label="Items"
                        defaultChecked={items}
                        isOptionEqualToValue={(option, value) => value === option.id}
                        id="tags-standard"
                        options={products}
                        size="small"
                        //  get optionlabel from array without using map
                        getOptionLabel={option => option.title}
                        onChange={(e, value) => {
                            setItems(value.map((item) => item.id));
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Items"
                                placeholder="Items"
                                value={items}
                            />
                        )}
                    />




                    <OutlinedInput id="outlined-basic"
                        value={bidData.contract}
                        onChange={(e) => setBidData({ ...bidData, contract: e.target.value })}
                        placeholder="Contract"
                        variant="filled" size="small"
                        className="w-full my-2 outline-none border-[1px]"
                    />

                </Grid>
            </Grid>
        </Box>
    );
}