function fetchCovidData() {
    fetch("https://api.covidtracking.com/v1/us/current.json")
    .then(respone => respone.json())
    .then(data =>{
        let container = document.getElementById("container");
        let deathCases = document.createElement("p");
        deathCases.innerHTML = "<span> Death Cases: </span>" + data[0].death;
        container.appendChild(deathCases);
        let hospitalized = document.createElement("p");
        hospitalized.innerHTML = "<span> Hospitalized : </span>" + data[0].hospitalized;
        container.appendChild(hospitalized);
        let negative = document.createElement("p");
        negative.innerHTML= "<span> NegativeCases : </span>" + data[0].negative;
        container.appendChild(negative);
        let totalTestResults = document.createElement("p");
        totalTestResults.innerHTML = "<span> totalTestResults : </span>" + data[0].totalTestResults;
        container.appendChild(totalTestResults);
    })
}

async function fetchCovidDataUsingAsync() {
    let respone = await fetch("https://api.covidtracking.com/v1/us/current.json");
    let data = await respone.json();
        let container = document.getElementById("container");
        let deathCases = document.createElement("p");
        deathCases.innerHTML = "<span> Death Cases: </span>" + data[0].death;
        container.appendChild(deathCases);
        let hospitalized = document.createElement("p");
        hospitalized.innerHTML = "<span> Hospitalized : </span>" + data[0].hospitalized;
        container.appendChild(hospitalized);
        let negative = document.createElement("p");
        negative.innerHTML= "<span> NegativeCases : </span>" + data[0].negative;
        container.appendChild(negative);
        let totalTestResults = document.createElement("p");
        totalTestResults.innerHTML = "<span> totalTestResults : </span>" + data[0].totalTestResults;
        container.appendChild(totalTestResults);
}
fetchCovidDataUsingAsync();
fetchCovidData();