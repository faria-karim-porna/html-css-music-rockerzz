google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Month", "Videos", "Audios"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 1030, 540],
    ["May", 1000, 400],
    ["Jun", 1170, 460],
    ["Jul", 660, 1120],
    ["Aug", 1030, 540],
    ["Sep", 1000, 400],
    ["Oct", 1170, 460],
    ["Nov", 660, 1120],
    ["Dec", 1030, 540],
  ]);

  var options = {
    title: "Music Downloads",
    titleTextStyle: { color: "white", fontSize: 16 },
    curveType: "function",
    legend: { position: "bottom", textStyle: { color: "white", fontSize: 16 } },
    colors: ["red", "#ff0"],
    backgroundColor: "black",
    vAxis: { textStyle: { color: "white", fontSize: 16 } },
    hAxis: { textStyle: { color: "white", fontSize: 16 } },
  };

  var chart = new google.visualization.LineChart(document.getElementById("curve_chart"));

  chart.draw(data, options);
}
