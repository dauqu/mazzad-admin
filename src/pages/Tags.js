import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { visuallyHidden } from "@mui/utils";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import AppBar from "@mui/material/AppBar";
import AddIcon from "@mui/icons-material/Add";
import { Dialog, Divider, Button, TextField, Grid, LinearProgress } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Stack } from "@mui/system";
import axios from "axios";
import Loading from "../components/Loading";


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

// Hello
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


const headCells = [
  {
    id: "1",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "2",
    numeric: false,
    disablePadding: true,
    label: "Description",
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
            sx={
              {
                // color: "white"
              }
            }
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
            <RemoveRedEyeTwoToneIcon />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}

      {/* Edit Product */}
      {numSelected === 1 ? (
        <Tooltip
          title="Edit"
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

export default function Tags() {


  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("description");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  const [open, setOpen] = React.useState(false);
  const [tags, setTags] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  const [deleting, setDeleting] = React.useState("");

  const [isEdit, setIsEdit] = React.useState(false);
  const [tagData, setTagData] = React.useState({
    name: "",
    description: "",
  });

  // Alert
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // load all tags 
  React.useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/tags`).then((res) => {
      setTags(res.data);

      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    });
  }, []);


  const addTag = () => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/tags`, tagData, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then(
      (res) => {
        console.log(res.data);
        setOpen(false);
        setTags([...tags, res.data.tag]);
        setTagData({
          name: "",
          description: "",
        });

      })
      .catch((err) => {
        console.log(err);
      }
      );
  };

  const deleteTag = (id) => {
    setDeleting(id);
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tags/${id}`)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setTags(tags.filter((tag) => tag.id !== id));
        }, 400);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setTimeout(() => {
          setDeleting("");
        }, 400);
      });
  };

  const updateTag = () => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/tags/${tagData.id}`, tagData)
      .then((res) => {
        console.log(res.data);
        setOpen(false);

        setTags(
          tags.map((tag) => {
            if (tag.id === tagData.id) {
              return res.data.tag;
            } else {
              return tag;
            }
          })
        );
        setTagData({
          name: "",
          description: "",
        });
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
      }}
    >
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-[20px] flex flex-col">
          <TextField
            value={tagData.name}
            onChange={(e) => setTagData({ ...tagData, name: e.target.value })}
            size="small"
            type="text"
            placeholder="Tag"
            className="w-[500px] my-2 outline-none border-[1px]"
            sx={{ margin: "10px 0" }}
          />
          <TextField
            value={tagData.description}
            onChange={(e) => setTagData({ ...tagData, description: e.target.value })}
            multiline
            type="text"
            variant="outlined"
            placeholder="Description.."
            className=" p-2 my-2 w-[500px] outline-none border-[1px] resize-none"
            minRows={8}
            sx={{ margin: "5px 0 20px 0" }}
          />
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setOpen(false)
                setTagData({
                  name: "",
                  description: "",
                })
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#333",
                color: "#fff",
                elevation: 0,
              }}

              onClick={() => isEdit ? updateTag() : addTag()}
            >
              {isEdit ? "Update" : "Submit"}
            </Button>
          </Stack>
        </div>
      </Dialog>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ background: "#333", color: "#fff" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpen(true)
              setIsEdit(false)
            }}
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
        <Alert sx={{ width: "100%" }}>"Dgssdg"</Alert>
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
          ) : (<Paper
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
                <EnhancedTableHead />
                <TableBody>
                  {stableSort(tags, getComparator(order, orderBy))
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row, index) => {
                      const isItemSelected = isSelected(row._id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          sx={{ color: "#fff" }}
                          key={row.id}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>

                          <TableCell scope="row" padding="none">
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
                              {row.name}
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
                            {row.description}
                          </TableCell>
                          <TableCell align="left" sx={{}}>
                            {new Date(row.createdAt).toLocaleDateString()}
                          </TableCell>
                          <TableCell align="left" sx={{}} style={{}}>
                            <Stack direction={"row"} sx={{
                              columnGap: "10px",
                              alignItems: "center"
                            }}>
                              <AiOutlineEdit size="18" onClick={() => {
                                setOpen(true);
                                setTagData(row);
                                setIsEdit(true);
                              }} />
                              {deleting === row.id ?
                                <Loading height={30} width={30} />
                                : (
                                  <AiOutlineDelete size="18" onClick={() => deleteTag(row.id)} />
                                )}
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
              count={tags.length}
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
  );
}
