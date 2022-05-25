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

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
};

let trafficOptions = {
  backgroundColor: "rgba(112, 104, 201, .5)",
  fill: true,
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

let trafficChart = new Chart(line, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
});

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};

const dailyOptions = {
  aspectRatio: 2.1,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

let dailyChart = new Chart(bar, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
};

const mobileOptions = {
  aspectRatio: 2.1,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
};

let mobileChart = new Chart(doughnut, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});

/* traffic 
const lineChart = new Chart(line, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        fill: true,
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    backgroundColor: "rgba(112, 104, 201, .5)",
    fill: true,
    aspectRatio: 2.5,
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

*/

/* CHART TWO 
const barChart = new Chart(bar, {
  type: "bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    aspectRatio: 2.5,
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
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
*/

/* CHART THREE 
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
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
*/
