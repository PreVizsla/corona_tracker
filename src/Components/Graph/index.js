import React, {useEffect, useState} from 'react';
import LineGraph from '../LineGraph';
import CovidSummary from '../CovidSummary';
import axios from './axios';

function Graph() {

  const [confirmedCases, setConfirmedCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({})
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState('');
  const [coronaCountArray, setCoronaCountArray] = useState([]);
  const [label, setLabel] = useState([]);

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

    axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
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

  }

  if(loading) {
    return <p>Please wait while data is being fetched from the server...</p>
  }

  return (
    <div className="App">
      <CovidSummary 
        confirmedCases={confirmedCases}
        recoveredCases={recoveredCases}
        deaths={deaths}
        country={country}
      />

      <div>
        <select value={country} onChange={countryHandler}>
          <option value="">Select Country</option>
          {
            covidSummary.Countries && covidSummary.Countries.map(country => 
            <option value={country.Slug}>{country.Country}</option>
            )
          }
        </select>
        <select value={days} onChange={daysHandler}>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
        </select>
      </div>
      <LineGraph 
        yAxis = {coronaCountArray}
        label={label}
      />
    </div>
  );
}

export default Graph;
