import React, {useEffect, useState} from 'react';
import LineGraph from '../LineGraph';

import { ThreeBounce } from 'better-react-spinkit'
import RadarGraph from '../RadarGraph';
import CovidSummary from '../Card/CovidSummary';
import axios from './axios';
import { Line } from 'react-chartjs-2';
import {Option} from './Graphelements';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,  
    textAlign: "left",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const Graph = ({lightTheme}) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [confirmedCases, setConfirmedCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({})
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState('');
  const [coronaCountArray, setCoronaCountArray] = useState([]);
  const [label, setLabel] = useState([]);
  const prefersDarkMode= lightTheme? false:true;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  
  //componentDidMount
  useEffect(() => {

    setLoading(true);
    axios.get(`/summary`)
    .then(res => {
      setLoading(false);
      
      if(res.status === 200) {

        setConfirmedCases(res.data.Global.TotalConfirmed);
        setRecoveredCases(res.data.Global.NewRecovered);
        setDeaths(res.data.Global.TotalDeaths);
        setCovidSummary(res.data);

      }

      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  
  if(loading) {
    return <>
      <p>Please wait while data is being fetched from the server...</p>
      <ThreeBounce size={26} color='#ebc634'/>
    </>
  }

  const formatDate = (date) => {
    const d = new Date(date);
    // To get date in YYYY-MM-DD format
    const year = d.getFullYear();
    const month = `0${d.getMonth()+1}`.slice(-2);
    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  }

  const countryHandler = (e) => {
    setCountry(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate()-days));  
    getCoronaReportByDateRange(e.target.value, from, to);
  }

  const daysHandler = (e) => {
    setDays(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate()-e.target.value));
    getCoronaReportByDateRange(country, from, to);
  }

  const getCoronaReportByDateRange = (countrySlug, from, to) => {
    
    
    console.log("HEYYYY "+countrySlug);
    if(countrySlug){
      axios.get(`/total/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then(res => {
        console.log(res);

        const yAxisCount = res.data.map(d => d.Cases); // Array
        const xAxisLabel = res.data.map(d => d.Date);
        const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug);
        
        setCoronaCountArray(yAxisCount);
        setConfirmedCases(covidDetails.TotalConfirmed);
        setRecoveredCases(covidDetails.TotalRecovered);
        setDeaths(covidDetails.TotalDeaths);
        setLabel(xAxisLabel);

      })
      .catch(err => {
        console.log(err);
      })
    
    }else{
      axios.get(`/summary`)
      .then(res => {
        console.log(res);
        setConfirmedCases(res.data.Global.TotalConfirmed);
        setRecoveredCases(res.data.Global.NewRecovered);
        setDeaths(res.data.Global.TotalDeaths);
        setCovidSummary(res.data);

        const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug);
        
        setCoronaCountArray([]);
        setLabel([]);
  
      })
      .catch(err => {
        console.log(err);
      })
  
    };

  }
  
  if(loading) {
    return <p>Please wait while data is being fetched from the server...</p>
  }
  return (
    
    <ThemeProvider theme={theme}>
    <div className="App">
      <CovidSummary 
      
        Theme = {lightTheme}
        confirmedCases={confirmedCases}
        recoveredCases={recoveredCases}
        deaths={deaths}
        country={country}
      />
      <br/>
      <div>
        {/* <select value={country} onChange={countryHandler}>
          <option value="">Select Country</option>
          {
            covidSummary.Countries && covidSummary.Countries.map(country => 
            <option value={country.Slug}>{country.Country}</option>
            )
          }
        </select> */}
        <FormControl variant="filled" className={classes.formControl} color="white">
          <InputLabel id="demo-simple-select-filled-label" color="white">Select Country</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={country}
            onChange={countryHandler}
          >
              <MenuItem value="">World</MenuItem>
            {
              covidSummary.Countries && covidSummary.Countries.map(country => 
              <MenuItem value={country.Slug}>{country.Country}</MenuItem>
              )
            }
          </Select>
        </FormControl>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Select Interval</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={days}
            onChange={daysHandler}
          >
              <MenuItem value="7">Last 7 days</MenuItem>
              <MenuItem value="30">Last 30 days</MenuItem>
              <MenuItem value="90">Last 90 days</MenuItem>
          </Select>
        </FormControl>
        {/* <select value={days} onChange={daysHandler}>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
        </select> */}
      </div>

      <h2>Line Graph</h2>
      <LineGraph 
        Theme = {lightTheme}
        yAxis = {coronaCountArray}
        label = {label}
      />
      <h2>Radar Graph</h2>
      <RadarGraph 
        Theme = {lightTheme}
        yAxis = {coronaCountArray}
        label = {label}
      />
    </div>
    </ThemeProvider>
  );
}

export default Graph;
