import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, loadEmployees } from '../actions'
import EmpHeader from '../Components/EmpHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        marginLeft: 150,
        marginRight: 150,
        marginTop: 50,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
    },
    typography: {
        backgroundColor: "#fff",
        padding: theme.spacing(1),
    },
    typographyHeading: {
        padding: theme.spacing(1),
    },
    tableContent: {
        fontSize: '0.9rem'
    }
}));

export default function Employee() {
    const classes = useStyles();
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(loadEmployees());
    }, [])

    const { employeeList } = useSelector(state => state.employees)

    function GetYearsFrom(year) {
        const currentYear = new Date().getFullYear();
        const totalYear = currentYear - parseInt(year.data)
        return totalYear + "yrs";
    }

    const DeleteEmployee = (id) => {
        if (window.confirm("Are you sure, you want to delete this employee?")) {
            dispatch(deleteEmployee(id))
            dispatch(loadEmployees());
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <EmpHeader />
            <main className={classes.content}>
                <Grid container spacing={1}>
                    <Box width="99%" display="flex" flexDirection="row" boxShadow='2' borderRadius='8px' p='14px' marginLeft='7px'>
                        <Box width="85%">
                            <Typography className={classes.typographyHeading}>
                                Please click on 'Edit' to find more details of each employee.
                            </Typography>
                        </Box>
                        <Box width="15%">
                            <Button variant="outlined"
                                onClick={() => navigate('/addEmployee')}>Add Employee</Button>
                        </Box>
                    </Box>

                    <Box width="100%" display="flex" flexDirection="row" alignItems="stretch" padding={1}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableBody>
                                    {employeeList && employeeList.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                <Typography className={classes.tableContent}>
                                                    {row.firstName} {row.middleName} {row.lastName}
                                                </Typography>
                                                <Typography className={classes.tableContent}>
                                                    {row.contractType} - <GetYearsFrom data={row.workingFrom} />
                                                </Typography>
                                                <Typography className={classes.tableContent}>
                                                    {row.email}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    onClick={() => navigate(`/editEmployee/${row.id}`)}>
                                                    <EditIcon />
                                                </Button>
                                                |
                                                <Button
                                                    onClick={() => DeleteEmployee(row.id)}>
                                                    <DeleteIcon />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </main>
        </div>
    );
}
