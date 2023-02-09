import React from 'react'

import { 
    Box, Dialog, 
    OutlinedInput, 
    TextareaAutosize, 
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
} from '@mui/material'
import { visuallyHidden, } from '@mui/utils'
import { alpha } from "@mui/material/styles";
import PropTypes from 'prop-types'
import { Link as RouterLink } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import AddIcon from '@mui/icons-material/Add';


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
        label: "Published At",
    },
    {
        id: "4",
        numeric: false,
        disablePadding: false,
        label: "Actions",
    },
];

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
    const [open, setOpen] = React.useState(false);
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
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="p-[20px] flex flex-col">
                    <OutlinedInput size="small" type="text" placeholder="Tag" className="w-[500px] my-2 outline-none border-[1px]" />
                    <TextareaAutosize type="text" placeholder="Description.." className=" p-2 my-2 w-[500px] outline-none border-[1px] resize-none" minRows={8} ></TextareaAutosize>
                    <div className="flex gap-x-3">
                        <button className="bg-red-400 text-white p-2 mt-4 px-5" onClick={() => setOpen(false)}>Close</button>
                        <input type="button" placeholder="Tag " value={"Submit"} className="bg-teal-500 text-white p-2 mt-4 px-5 cursor-pointer" />
                    </div>
                </div>
            </Dialog>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{ background: "#333", color: "#fff" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setOpen(true)}
                    >
                        <AddIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Manage Tags
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

            <Paper
                sx={{
                    width: "100%",
                    mb: 2,
                    boxShadow: 0,
                    overflow: "scroll",
                }}
            >
                <EnhancedTableToolbar />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="small"
                    >
                        <EnhancedTableHead
                        />
                        <TableBody>

                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                sx={{ color: "#fff" }}
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
                                        SDFDG
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
                                    gjfgj
                                </TableCell>
                                <TableCell align="left" sx={{}}>
                                    4 USD
                                </TableCell>
                                <TableCell align="left" sx={{}} style={{
                                }}>
                                    <Stack direction={"row"} sx={{ columnGap: "10px" }}>

                                        <AiOutlineEdit size="18" />
                                        <AiOutlineDelete size="18" />
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={100}
                    rowsPerPage={5}
                    page={0}
                    onPageChange={() => { }}
                />
            </Paper>
        </Box>
    )
}

export default Contracts