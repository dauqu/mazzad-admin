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
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import AddIcon from "@mui/icons-material/Add";
import { Chip, Divider, Grid, LinearProgress } from "@mui/material";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoBanOutline } from "react-icons/io5";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
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
    id: "fullname",
    numeric: false,
    disablePadding: true,
    label: "Full Name",
    arabic: "الاسم الكامل",
  },
  {
    id: "username",
    numeric: false,
    disablePadding: false,
    label: "@username",
    arabic: "اسم المستخدم",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email address",
    arabic: "البريد الالكتروني",
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone Number",
    arabic: "رقم الهاتف",
  },
  {
    id: "Status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    arabic: "الحالة",
  },
  {
    id: "Action",
    numeric: false,
    disablePadding: false,
    label: "Action",
    arabic: "الاجراء",
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
            sx={{}}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {localStorage.getItem("language") === "arabic"
                ? headCell.arabic
                : headCell.label}
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
          sx={{
            flex: "1 1 100%",
            display: { xs: "none", md: "flex" },
            // color: "#fff",
          }}
          color="inherit"
          variant="h6"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{
            flex: "1 1 100%",
            mr: 2,
            display: { xs: "none", md: "flex" },
            // color: "#fff",
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {localStorage.getItem("language") === "arabic"
            ? "المستخدمين"
            : "Users"}
        </Typography>
      )}

      {numSelected === 1 ? (
        <Tooltip title="Update">
          <IconButton sx={{}}>
            <ModeEditTwoToneIcon />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete" sx={{}}>
          <IconButton>
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

export default function Users() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("description");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  // open modal
  const [open, setOpen] = React.useState(false);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n._id);
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

  const [server_alert, setAlert] = useState();
  const [status, setStatus] = useState();

  const [userdata, setUserdata] = useState({
    fullName: "",
    username: "",
    email: "",
    role: "",
    password: "",
    phone: "",
  });

  const [openalert, setOpenAlert] = useState(false);
  const [rows, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [blocking, setBlocking] = React.useState(false);
  const [addingUser, setAddingUser] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  // load all users
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // to delete a user
  const handleDelete = (id) => {
    setIsDeleting(id);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
      .then((res) => {
        setAlert("User successfully deleted", res);
        setStatus("success");
      })
      .catch((e) => {
        setAlert(e.response.data.message);
        setStatus(e.response.data.status);
      })
      .finally(() => {
        setTimeout(() => {
          setOpenAlert(true);
          const removed = rows.filter((row) => row.id !== id);
          setUsers(removed);
          setIsDeleting("");
        }, 500);
      });
  };

  // to block user
  const handleBlock = (id) => {
    setBlocking(id);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/users/block/${id}`)
      .then((res) => {
        setAlert("User Blocked successfully.");
        setStatus("success");
      })
      .catch((e) => {
        setAlert(e.response.data.message);
        setStatus(e.response.data.status);
      })
      .finally(() => {
        setTimeout(() => {
          setOpenAlert(true);
          setBlocking("");
          // change status of user
          const updated = rows.map((row) => {
            if (row.id === id) {
              row.status = "blacklist";
            }
            return row;
          });
          setUsers(updated);
        }, 500);
      });
  };

  // to unblock user
  const handleUnBlock = (id) => {
    setBlocking(id);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/users/unblock/${id}`)
      .then((res) => {
        setAlert("User unblocked successfully.");
        setStatus("success");
      })
      .catch((e) => {
        setAlert(e.response.data.message);
        setStatus(e.response.data.status);
      })
      .finally(() => {
        setTimeout(() => {
          setOpenAlert(true);
          setBlocking("");
          // change status of user
          const updated = rows.map((row) => {
            if (row.id === id) {
              row.status = "active";
            }
            return row;
          });
          setUsers(updated);
        }, 500);
      });
  };

  // to add user
  const createPost = (e) => {
    setAddingUser(true);
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/register`, userdata)
      .then((res) => {
        setAlert("User successfully added");
        setStatus("success");
        setUsers([...rows, res.data.user]);
      })
      .catch((e) => {
        setAlert(e.response.data.message);
        setStatus(e.response.data.status);
      })
      .finally(() => {
        setTimeout(() => {
          setOpenAlert(true);
          setAddingUser(false);
          setOpen(false);
        }, 500);
      });
  };

  const updatePost = (e) => {
    e.preventDefault();
    setAddingUser(true);
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/users/${userdata.id}`,
        userdata
      )
      .then((res) => {
        setAlert("User successfully updated");
        setStatus("success");
        const updated = rows.map((row) => {
          if (row.id === userdata.id) {
            row = userdata;
          }
          return row;
        });
        setUsers(updated);
      })
      .catch((e) => {
        setAlert(e.response.data.message);
        setStatus(e.response.data.status);
      })
      .finally(() => {
        setTimeout(() => {
          setOpenAlert(true);
          setOpen(false);
          setAddingUser(false);
        }, 500);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
    setUserdata({
      fullName: "",
      username: "",
      email: "",
      role: "",
      password: "",
      phone: "",
    });

    setIsEditing(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // to add user
  const handleEdit = (user) => {
    setUserdata(user);
    setOpen(true);
    setIsEditing(true);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleAlertClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  // Alert
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleAlertClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 3,
        boxShadow: 0,
        direction:
          localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",
      }}
    >
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ background: "#333", color: "#fff" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: 3 }}
            onClick={handleClickOpen}
          >
            {/* <CloseIcon /> */}
            <AddIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {localStorage.getItem("language") === "arabic"
              ? "المستخدمين"
              : "Users"}
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      {/* Show Alert */}
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Snackbar
          open={openalert}
          autoHideDuration={5000}
          resumeHideDuration={5000}
          action={action}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity={status}
            sx={{ width: "100%" }}
          >
            {server_alert}
          </Alert>
        </Snackbar>
      </Stack>

      <Dialog open={open} onClose={handleClose} 
        style={{
          direction: localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",
        }}
      >
        <form>
          <DialogTitle
            
          >
            {localStorage.getItem("language") === "arabic"
              ? "إضافة مستخدم جديد"
              : "Add New User"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {localStorage.getItem("language") === "arabic"
                ? "للاشتراك في هذا الموقع ، يرجى إدخال عنوان بريدك الإلكتروني هنا. سوف نرسل التحديثات من حين لآخر."
                : " To subscribe to this website, please enter your email address here. We will send updates occasionally."}{" "}
            </DialogContentText>

            <TextField
              hiddenLabel
              value={userdata.fullName}
              variant="filled"
              size="small"
              onChange={(e) =>
                setUserdata({
                  ...userdata,
                  fullName: e.target.value,
                })
              }
              margin="dense"
              sx={{ width: "100%" }}
              placeholder={
                localStorage.getItem("language") === "arabic" ? "الاسم" : "Name"
              }
            />
            <TextField
              hiddenLabel
              value={userdata.username}
              variant="filled"
              size="small"
              onChange={(e) =>
                setUserdata({
                  ...userdata,
                  username: e.target.value,
                })
              }
              margin="dense"
              sx={{ width: "100%" }}
              placeholder={
                localStorage.getItem("language") === "arabic" ? "اسم المستخدم" : "Username"
              }
            />
            <TextField
              hiddenLabel
              value={userdata.email}
              variant="filled"
              size="small"
              onChange={(e) =>
                setUserdata({
                  ...userdata,
                  email: e.target.value,
                })
              }
              margin="dense"
              sx={{ width: "100%" }}
              placeholder={
                localStorage.getItem("language") === "arabic" ? "البريد الإلكتروني" : "Email"
              }
            />
            <Select
              size="small"
              variant="filled"
              sx={{ width: "100%", mt: 2 }}
              labelId="demo-select-small"
              id="demo-select-small"
              hiddenLabel
              value={userdata.role}
              onChange={(e) =>
                setUserdata({
                  ...userdata,
                  role: e.target.value,
                })
              }
            >
              <MenuItem value={"user"}>user</MenuItem>
              <MenuItem value={"vendor"}>vendor</MenuItem>
            </Select>
            {!isEditing && (
              <TextField
                hiddenLabel
                value={userdata.password}
                variant="filled"
                size="small"
                onChange={(e) =>
                  setUserdata({
                    ...userdata,
                    password: e.target.value,
                  })
                }
                margin="dense"
                sx={{ width: "100%" }}
                placeholder={
                  localStorage.getItem("language") === "arabic" ? "كلمه السر" : "Password"
                }
              />
            )}
            <TextField
              hiddenLabel
              value={userdata.phone}
              variant="filled"
              size="small"
              onChange={(e) =>
                setUserdata({
                  ...userdata,
                  phone: e.target.value,
                })
              }
              margin="dense"
              sx={{ width: "100%" }}
              placeholder={
                localStorage.getItem("language") === "arabic" ? "رقم الهاتف" : "Phone"
              }
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {addingUser ? (
              <Loading height={50} width={50} />
            ) : (
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ boxShadow: 0 }}
                onClick={isEditing ? updatePost : createPost}
              >
                {isEditing ? "Update" : " Submit"}
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>

      <Grid container spacing={1}>
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
                  // background: "#1A2027",
                  borderRadius: 0,
                }}
              >
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                      {stableSort(rows, getComparator(order, orderBy))
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .slice()
                        .reverse()
                        .map((row, index) => {
                          const isItemSelected = isSelected(row._id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              // onClick={(event) => handleClick(event, row._id)}
                              // aria-checked={isItemSelected}
                              // selected={isItemSelected}
                              role="checkbox"
                              tabIndex={-1}
                              key={row._id}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  sx={{}}
                                />
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                sx={{
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  maxWidth: "30ch",
                                  textOverflow: "ellipsis",
                                  // color: "#fff",
                                }}
                              >
                                <Typography
                                  sx={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    maxWidth: "30ch",
                                    textOverflow: "ellipsis",
                                    // color: "#ffffff",
                                  }}
                                >
                                  {row.fullName}
                                </Typography>
                              </TableCell>
                              <TableCell align="left" sx={{}}>
                                <Typography
                                  sx={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    maxWidth: "30ch",
                                    textOverflow: "ellipsis",
                                    // color: "#ffffff",
                                  }}
                                >
                                  {row.username}
                                </Typography>
                              </TableCell>
                              <TableCell align="left" sx={{}}>
                                <Typography
                                  sx={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    maxWidth: "30ch",
                                    textOverflow: "ellipsis",
                                    // color: "#ffffff",
                                  }}
                                >
                                  {row.email}
                                </Typography>
                              </TableCell>

                              <TableCell align="left" sx={{}}>
                                <Typography
                                  sx={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    maxWidth: "30ch",
                                    textOverflow: "ellipsis",
                                    // color: "#ffffff",
                                  }}
                                >
                                  {row.phone}
                                </Typography>
                              </TableCell>
                              <TableCell align="left" sx={{}}>
                                <Chip
                                  label={row.status || "active"}
                                  color={
                                    row.status === "active" ||
                                    row.status === undefined ||
                                    row.status === ""
                                      ? "success"
                                      : "error"
                                  }
                                  sx={{}}
                                />
                              </TableCell>

                              <TableCell align="left" sx={{}}>
                                <Stack
                                  direction={"row"}
                                  sx={{
                                    alignItems: "center",
                                    columnGap: "10px",
                                  }}
                                >
                                  <AiOutlineEdit
                                    onClick={() => handleEdit(row)}
                                    size={20}
                                  />
                                  {isDeleting === row.id ? (
                                    <Loading height={33} width={33} />
                                  ) : (
                                    <AiOutlineDelete
                                      title={`Delete ${
                                        row.fullname || row.email
                                      }`}
                                      onClick={() => handleDelete(row.id)}
                                      size={20}
                                    />
                                  )}
                                  {blocking === row.id ? (
                                    <Loading height={33} width={33} />
                                  ) : row.status === "blacklist" ? (
                                    <MdOutlineRemoveCircleOutline
                                      onClick={() => handleUnBlock(row.id)}
                                      title={`Unban ${
                                        row.fullname || row.email
                                      }`}
                                      size={20}
                                    />
                                  ) : (
                                    <IoBanOutline
                                      onClick={() => handleBlock(row.id)}
                                      title={`Ban ${row.fullname || row.email}`}
                                      size={20}
                                    />
                                  )}
                                </Stack>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[15, 30, 40]}
                  component="div"
                  count={rows.length}
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
      </Grid>
    </Box>
  );
}
