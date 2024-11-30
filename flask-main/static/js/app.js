document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');
    let data = null;
    let chart = null;
    let intervalId = null;
    let dataIndex = 0;

    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            data = result.data;
            createChart();
            if (data && data.length > 0) {
                playButton.disabled = false;
            } else {
                playButton.disabled = true;
            }
        })
        .catch(error => console.error('Error:', error));
    });

    playButton.addEventListener('click', () => {
        if (data && data.length > 0) {
            intervalId = setInterval(updateChart, 1000);
        }
    });

    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
    });

    function createChart() {
        const ctx = document.getElementById('myChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Data',
                    borderColor: 'rgb(75, 192, 192)',
                    data: []
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        });
    }

    function updateChart() {
        if (dataIndex < data.length) {
            chart.data.labels.push(dataIndex);
            chart.data.datasets[0].data.push(data[dataIndex]);
            chart.update();
            dataIndex++;
        } else {
            clearInterval(intervalId);
        }
    }
});
