import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import EmpHeader from '../Components/EmpHeader';
import { useNavigate } from 'react-router-dom';
import { FormControl, FormLabel, Button, TextField, FormControlLabel, Radio, RadioGroup, Box, CircularProgress } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from 'react-redux'
import { addEmployee } from '../actions/employee.actions';

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
  formContent: {
    marginLeft: 150,
    marginRight: 150,
  },
  typography: {
    backgroundColor: "#fff",
    padding: theme.spacing(1),
  },
  typographySubHeading: {
    color: '#3f51b5',
    marginTop: 10
  },
  formControl: {
    minWidth: 300,
    marginLeft: 7
  },
  formTwoControl: {
    minWidth: 450,
    marginLeft: 7
  },
  formOneControl: {
    minWidth: 900,
  },
  typographyHeading: {
    padding: theme.spacing(1),
  },
  formRadioControl: {
    marginTop: 10,
  },
  submit: {
    width: 100
  }
}));

export default function AddEmployee() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [startsDate, handleStartDateChange] = useState(new Date());
  const [endsDate, handleEndDateChange] = useState(new Date());

  const [state, setState] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    address: '',
    contractType: 'Permanent',
    startDate: new Date(),
    endDate: new Date(),
    jobType: 'Fulltime',
    hourPerWeek: '',
    workingFrom: new Date().getFullYear()
  });
  const [error, setError] = useState();
  const [showProgress, setShowProgress] = useState();

  const {  
    firstName, middleName, lastName, email, mobileNumber,
    address, contractType,
    startDate,
    endDate,
    jobType, hourPerWeek, workingFrom } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowProgress(true);
    setState({ ...state, [startDate]: startsDate });
    setState({ ...state, [endDate]: endsDate });
    console.log('add state', state);
    if (!firstName) {
      setError('Please insert first name!.');
    }
    else if (!email) {
      setError('Please insert email!.');
    }
    else {
      dispatch(addEmployee(state));
      navigate('/');
      setError('');
    }
    setShowProgress(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <EmpHeader />
      <main className={classes.content}>
        <Box width="100%" display="flex" flexDirection="row" boxShadow='2' borderRadius='8px' p='14px' marginLeft='7px'>
          <Box width="85%">
            <Typography className={classes.typographyHeading}>
              Add Employee
            </Typography>
          </Box>
          <Box width="15%">
            <Button variant="outlined"
              onClick={() => navigate('/')}>Employee Details</Button>
          </Box>
        </Box>

        {error && <h6 style={{ color: 'red' }}>{error}</h6>}

        <Box width="100%" display="flex" flexDirection="row" alignItems="stretch" padding={1} className={classes.formContent}>
          <form onSubmit={handleSubmit}>
            <div>
              <Typography className={classes.typographySubHeading}>
                Personal information
              </Typography>
              <TextField className={classes.formControl} id="firstName" label="First Name" name="firstName" value={firstName} onChange={handleInputChange} />
              <TextField className={classes.formControl} id="middleName" label="Middle Name" name="middleName" value={middleName} onChange={handleInputChange} />
              <TextField className={classes.formControl} id="lastName" label="Last Name" name="lastName" value={lastName} onChange={handleInputChange} />
            </div>

            <div>
              <Typography className={classes.typographySubHeading}>
                Contact Details
              </Typography>
              <TextField className={classes.formTwoControl} required id="email" type="email" label="Email" name="email" value={email} onChange={handleInputChange} />
              <TextField className={classes.formTwoControl} id="mobileNumber" label="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={handleInputChange} />
            </div>
            <div>
              <TextField className={classes.formOneControl}
                margin="normal"
                fullWidth
                id="address"
                label="Address"
                placeholder="Address"
                name="address"
                value={address} onChange={handleInputChange} />
            </div>

            <div>
              <Typography className={classes.typographySubHeading}>
                Employee Status
              </Typography>

              <FormControl className={classes.formRadioControl}>
                <FormLabel id="demo-radio-buttons-group-label">What is contract type?</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={contractType}
                  name="contractType"
                >
                  <FormControlLabel value="Permanent" control={<Radio color="primary" onChange={handleInputChange} />} label="Permanent" />
                  <FormControlLabel value="Contract" control={<Radio color="primary" onChange={handleInputChange} />} label="Contract" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker className={classes.formTwoControl}
                  disableFuture
                  openTo="year"
                  format="dd/MM/yyyy"
                  label="start Date"
                  views={["year", "month", "date"]}
                  name="startsDate"
                  value={startsDate}
                  onChange={handleStartDateChange}
                />
                <DatePicker className={classes.formTwoControl}
                  disableFuture
                  openTo="year"
                  format="dd/MM/yyyy"
                  label="End Date"
                  views={["year", "month", "date"]}
                  name="endsDate"
                  value={endsDate}
                  onChange={handleEndDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>

            <div>
              <FormControl className={classes.formRadioControl}>
                <FormLabel id="demo-radio-buttons-group-label">Is this on full time or part time basis?</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={jobType}
                  name="jobType"
                >
                  <FormControlLabel value="Fulltime" control={<Radio color="primary" onChange={handleInputChange} />} label="Full Time" />
                  <FormControlLabel value="Parttime" control={<Radio color="primary" onChange={handleInputChange} />} label="Part Time" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <TextField className={classes.formTwoControl} id="hourPerWeek" label="Hour Per Week" name="hourPerWeek" value={hourPerWeek} onChange={handleInputChange} />
            </div>
            {showProgress ?
              <CircularProgress size={24} thickness={4} />
              : null}<br />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}>
              Add
            </Button>
          </form>
        </Box>
      </main>
    </div>
  );

}

