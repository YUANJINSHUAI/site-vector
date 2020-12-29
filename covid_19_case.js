async function getData(){
    console.log("start to run");
    const api_url = 'https://data.rivm.nl/covid-19/COVID-19_aantallen_gemeente_cumulatief.json';
    const response = await fetch(api_url);
    const data = await response.json();
    const {}
    console.log(data);
}

getData();