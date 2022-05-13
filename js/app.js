const closeButton = document.querySelector(".close");
const alert = document.querySelector(".alert");
const line = document.getElementById("line").getContext("2d");
const bar = document.getElementById("bar").getContext("2d");
const doughnut = document.getElementById("doughnut").getContext("2d");

/* ALERT NOTIFICATION */
closeButton.addEventListener("click", () => {
  alert.style.visibility = "hidden";
  alert.style.display = "none";
});

/* CHART ONE */
const lineChart = new Chart(line, {
  type: "line",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        data: [10, 15, 50, 100, 300, 400],
        fill: true,
        backgroundColor: "#7476bf52",
        borderColor: ["#787bc9", "#787bc9", "#787bc9", "#787bc9"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 5,
            stepValue: 10,
            max: 100,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

/* CHART TWO */
const barChart = new Chart(bar, {
  type: "bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        data: [10, 15, 50, 100, 300, 400],
        fill: true,
        backgroundColor: "#7476bf52",
        borderColor: ["#787bc9", "#787bc9", "#787bc9", "#787bc9"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 5,
            stepValue: 10,
            max: 100,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

/* CHART THREE */
const doughnutChart = new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        data: [10, 15, 50, 100, 300, 400],
        fill: true,
        backgroundColor: "#7476bf52",
        borderColor: ["#787bc9", "#787bc9", "#787bc9", "#787bc9"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 5,
            stepValue: 10,
            max: 100,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
