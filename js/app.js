/* Gráfico STUDENT-SATISFACTION*/
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartStudentSatisfaction);
	function drawChartStudentSatisfaction() {
		var data = google.visualization.arrayToDataTable([
        	["Sprints", "score", { role: "style" } ], // role:style, para cambiar color de barras
        	
        	["Sprint 1", 4.8, "#F9A91A"],
        	["Sprint 2", 4.3, "#F9A91A"]
		]);

		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

		var options = {
        //title: "Density of Precious Metals, in g/cm^3",
        //width: 600,
        //height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("student_satisfaction_grafico"));
      chart.draw(view, options);
  }


/* -----Gráfico TEACHER-RATING-----*/
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartTeacher);
	function drawChartTeacher() {
		var data = google.visualization.arrayToDataTable([
        	["Sprints", "score", { role: "style" } ], // role:style, para cambiar color de barras
        	
        	["Sprint 1", 4.0, "#F9A91A"],
        	["Sprint 2", 3.9, "#F9A91A"]
		]);

		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

		var options = {
        //title: "Density of Precious Metals, in g/cm^3",
        //width: 600,
        //height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("teacher_rating_grafico"));
      chart.draw(view, options);
  }


/* -----Gráfico JEDI-RATING-----*/
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartJedi);
	function drawChartJedi() {
		var data = google.visualization.arrayToDataTable([
        	["Sprints", "score", { role: "style" } ], // role:style, para cambiar color de barras
        	
        	["Sprint 1", 4.8, "#F9A91A"],
        	["Sprint 2", 4.3, "#F9A91A"]
		]);

		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

		var options = {
        //title: "Density of Precious Metals, in g/cm^3",
        //width: 600,
        //height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("grafico_jedi_master"));
      chart.draw(view, options);
  }