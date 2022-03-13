google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Videos", "Audios"],
    ["2011", 1000, 400],
    ["2012", 1170, 460],
    ["2013", 660, 1120],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
    ["2018", 1000, 400],
    ["2019", 1170, 460],
    ["2020", 660, 1120],
    ["2021", 1030, 540],
    ["2022", 1000, 400],
  ]);

  var options = {
    legend: { position: "bottom", textStyle: { color: "white", fontSize: 16 } },
    title: "Yearly Music Downloads",
    titleTextStyle: { color: "white", fontSize: 16 },
    backgroundColor: "black",
    chartArea: { backgroundColor: "black" },
    colors: ["red", "#ff0"],
    vAxis: { textStyle: { color: "white", fontSize: 16 } },
    hAxis: { textStyle: { color: "white", fontSize: 16 } },
  };

  var chart = new google.charts.Bar(document.getElementById("columnchart_material"));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
