// Temperature chart
var ctx = document.getElementById('temperatureChart').getContext('2d');
var temperatureChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan 2015', 'Apr 2015', 'Jul 2015', 'Oct 2015'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [26.0029, 26.3509, 26.6079, 26.6217],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Humidity chart
var ctx2 = document.getElementById('humidityChart').getContext('2d');
var humidityChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan 2015', 'Apr 2015', 'Jul 2015', 'Oct 2015'],
        datasets: [{
            label: 'Humidity (%)',
            data: [50, 52, 55, 53],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
