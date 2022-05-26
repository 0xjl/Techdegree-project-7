const closeButton = document.querySelector(".close");
const alert = document.querySelector(".alert");
const line = document.getElementById("line").getContext("2d");
const bar = document.getElementById("bar").getContext("2d");
const doughnut = document.getElementById("doughnut").getContext("2d");
const toggleData = document.querySelector(".toggle");
const bell = document.querySelector(".bell-container");
const notification = document.querySelector("#notifications");
const dropdown = document.querySelector(".notificationsDropdown");
const input = document.querySelector(".form-field");

const searchables = [
  "victoria chambers",
  "dale byrd",
  "dawn wood",
  "dan oliver",
];

input.addEventListener("keyup", (e) => {
  let input = e.target.value;
  if (searchables.includes(input) === true) {
    console.log("YES");
  }
});

/* NOTIFICATIONS DROPDOWN */
bell.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

/* ALERT NOTIFICATION */
closeButton.addEventListener("click", () => {
  alert.style.visibility = "hidden";
  alert.style.display = "none";
});

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
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
      },
    ],
  },
  options: trafficOptions,
});

const original = [
  750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500,
];
const daily = [750, 1700, 600, 1500, 1800, 1200, 900, 2250, 1500, 2500, 600];
const weekly = [2500, 900, 1500, 1200, 1100, 700, 2500, 2250, 1700, 800, 600];
const monthly = [2500, 900, 1500, 1200, 700, 1200, 2000, 1200, 1500, 900, 2500];

function updateData(trafficChart, data) {
  trafficChart.data.datasets[0].data = data;
  trafficChart.update();
}

toggleData.addEventListener("click", (e) => {
  let element = e.target.id;
  if (element === "day") {
    updateData(trafficChart, daily);
  } else if (element === "week") {
    updateData(trafficChart, weekly);
  } else if (element === "month") {
    updateData(trafficChart, monthly);
  } else if (element === "hourly") {
    updateData(trafficChart, original);
  }
});

/* CHART TWO */
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

/* CHART THREE */
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
