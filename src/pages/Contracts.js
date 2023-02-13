import React, { useEffect, useState } from 'react'

import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Checkbox,
    TablePagination,
    Stack,
    TableHead,
    TableSortLabel,
    Snackbar,
    Alert,
    Tooltip,
    Grid,
    LinearProgress,
} from '@mui/material'
import { visuallyHidden, } from '@mui/utils'
import { alpha } from "@mui/material/styles";
import PropTypes from 'prop-types'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios';


const headCells = [
    {
        id: "1",
        numeric: false,
        disablePadding: true,
        label: "ID",
    },
    {
        id: "2",
        numeric: false,
        disablePadding: true,
        label: "Title",
    },
    {
        id: "3",
        numeric: false,
        disablePadding: false,
        label: "Terms",
    },
    {
        id: "4",
        numeric: false,
        disablePadding: false,
        label: "Actions",
    },
];


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        sx={{
                            // color: "white" 
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    // sx={{ color: "white" }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: "1 1 100%", display: { xs: "none", md: "flex" } }}
                    color="inherit"
                    variant="h6"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: "1 1 100%", mr: 2, display: { xs: "none", md: "flex" } }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Tags Details
                </Typography>
            )}

            {/* View Product */}
            {numSelected === 1 ? (
                <Tooltip title="View">
                    <IconButton
                        // sx={{ color: "#fff" }}
                        to={`./../view-product/${window.selected}`}
                        component={RouterLink}
                    >
                        <EditTwoToneIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                ""
            )}

            {/* Edit Product */}
            {numSelected === 1 ? (
                <Tooltip title="Edit"
                // sx={{ color: "#fff" }}
                >
                    <IconButton
                        to={`./../update-product/${window.selected}`}
                        component={RouterLink}
                    >
                        <EditTwoToneIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                ""
            )}

            {/* Delete Product */}
            {numSelected > 0 ? (
                <Tooltip title="Delete" sx={{}}>
                    <IconButton onClick={window.deleteProduct}>
                        <DeleteTwoToneIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};


const Contracts = () => {
    const navigate = useNavigate();

    const [allContracts, setAllContracts] = useState([]);
    const [loading, setLoading] = React.useState(false);

    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("description");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = allContracts.map((n) => n._id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (_id) => selected.indexOf(_id) !== -1;


    useEffect(() => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/contract`)
            .then((res) => {
                setAllContracts(res.data);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            });
    }, []);

    const deleteContract = (id) => {
        axios
            .delete(`${process.env.REACT_APP_BACKEND_URL}/contract/${id}`)
            .then((res) => {
                console.log(res);
                setAllContracts(allContracts.filter((contract) => contract.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    }



    return (
        <Box
            sx={{
                width: "100%",
                marginTop: 3,
                boxShadow: 0,
                animation: "fadeIn 0.5s ease-in-out",
                transition: "box-shadow 1s ease-in-out",
            }}
        >

            <AppBar position="static">
                <Toolbar variant="dense" sx={{ background: "#333", color: "#fff" }}>
                    {/* <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/add-contract")}
                    >
                        <AddIcon />
                    </IconButton> */}
                    <Typography variant="h6" color="inherit" component="div">
                        Manage Contracts
                    </Typography>
                    <Divider sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>

            {/* Alert */}
            <Snackbar
                autoHideDuration={5000}
                resumeHideDuration={5000}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    sx={{ width: "100%" }}
                >
                    "Dgssdg"
                </Alert>
            </Snackbar>


            {/*  */}
            <Grid item xs>
                <Paper sx={{ boxShadow: 0, borderRadius: 1 }}>
                    {loading ? (
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                width: "100%",
                                height: "100%",
                                marginTop: 0,
                                paddingBottom: 4,
                                paddingTop: 2,
                                paddingLeft: 2,
                                paddingRight: 2,
                            }}
                        >
                            <Grid item xs={12}>
                                <LinearProgress />
                            </Grid>
                        </Grid>
                    ) : (
                        <Paper
                            sx={{
                                width: "100%",
                                mb: 2,
                                boxShadow: 0,
                                overflow: "scroll",
                            }}
                        >
                            <EnhancedTableToolbar
                                numSelected={selected.length}
                            />
                            <TableContainer>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                    size="small"
                                >
                                    <EnhancedTableHead
                                        numSelected={5}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={allContracts.length}
                                    />
                                    <TableBody>


                                        {stableSort(allContracts, getComparator(order, orderBy))
                                            .slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            .slice()
                                            .reverse()
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row._id);

                                                return (
                                                    <TableRow
                                                        hover
                                                        // onClick={(event) => handleClick(event, row._id)}
                                                        // aria-checked={isItemSelected}
                                                        // selected={isItemSelected}
                                                        role="checkbox"
                                                        tabIndex={-1}
                                                        key={row.id}
                                                    >


                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                                color="primary"
                                                            />
                                                        </TableCell>

                                                        <TableCell
                                                            scope="row"
                                                            padding="none"
                                                        >
                                                            <Typography
                                                                size="small"
                                                                sx={{
                                                                    overflow: "hidden",
                                                                    whiteSpace: "nowrap",
                                                                    maxWidth: "20ch",
                                                                    textOverflow: "ellipsis",
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                {row.id}
                                                            </Typography>
                                                        </TableCell>

                                                        <TableCell
                                                            component="th"
                                                            scope="row"
                                                            padding="none"
                                                            sx={{
                                                                overflow: "hidden",
                                                                whiteSpace: "nowrap",
                                                                maxWidth: "20ch",
                                                                minWidth: "15ch",
                                                                textOverflow: "ellipsis",
                                                            }}
                                                        >
                                                            {row.title}
                                                        </TableCell>
                                                        <TableCell align="left" sx={{}}>
                                                            {row.terms}
                                                        </TableCell>
                                                        <TableCell align="left" sx={{}} style={{
                                                        }}>
                                                            <Stack direction={"row"} sx={{ columnGap: "10px" }}>

                                                                <AiOutlineEdit size="18" onClick={() => navigate(`/edit-contract/${row.id}`)} />
                                                                <AiOutlineDelete size="18" onClick={() => deleteContract(row.id)} />
                                                            </Stack>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[15, 30, 40]}
                                component="div"
                                count={allContracts.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                sx={{}}
                            />
                        </Paper>
                    )}
                </Paper>
            </Grid>
        </Box>
    )
}

export default Contracts