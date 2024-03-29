$(document).ready(function () {
    var url = "https://data.covid19india.org/data.json";

    $.getJSON(url, function (data) {
        console.log(data);


        var total_active, total_recovered, total_deaths, total_confirmed

        var state = []
        var confirmed = []
        var recovered = []
        var deaths = []

        $.each(data.statewise, function (id, object) {
            state.push(object.state)
            confirmed.push(object, confirmed)
            recovered.push(object, recovered)
            deaths.push(object, deaths)

        })


        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()

        total_active = data.statewise[0].active
        total_confirmed = data.statewise[0].confirmed
        total_recovered = data.statewise[0].recovered
        total_deaths = data.statewise[0].deaths


        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#death").append(total_deaths)

        var myCharts = document.getElementById("myChart").getContext("2d")
        var chart = new Chart(myCharts, {

            type: 'line',
            data: {
                labels: state,
                datasets: [
                    {
                        label: "Confirmed cases",
                        data: confirmed,
                        backgroundColor: "#f1c407",
                        minBarLength: 100
                    },
                    {
                        label: "Recovered cases",
                        data: recovered,
                        backgroundColor: "#2ec771",
                        minBarLength: 100
                    },
                    {
                        label: "Death cases",
                        data: deaths,
                        backgroundColor: "#e74c3c",
                        minBarLength: 100
                    }
                ]
            },
            options: {

            }

        })
    })

})