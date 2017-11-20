/* -------------------- enrollment gráfico -------------------- */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartEnrollment);

	function drawChartEnrollment() {

        var data = google.visualization.arrayToDataTable([
          ["Status", 'total', { role: "style" }],
          ["Enrolled", 26, "#F9A91A"],
          ["Dropout", 32, "#F2F2F2"]
        ]);

        var options = {


        };

        var chart = new google.visualization.PieChart(document.getElementById("enrollment_grafico"));
        chart.draw(data, options);
      }

/* -------------------- achievement gráfico -------------------- */
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartAchievement);
	function drawChartAchievement() {
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
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("achievement_grafico"));
      chart.draw(view, options);
  }

/* -------------------- net promoter score gráfico --------------------*/
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartNetPromoterScore);
	function drawChartNetPromoterScore() {
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
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("net_promoter_score_grafico"));
      chart.draw(view, options);
  }

/* -------------------- hacer ventana oculta de tech skills -------------------- */
function techSkills(){
	var techSkills_hacerClick = document.getElementById("contenedorTechSkills")	
}

/* -------------------- tech skills gráfico --------------------*/
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartTechSkills1);
	function drawChartTechSkills1() {
		var data = google.visualization.arrayToDataTable([
        	["Student", "score", { role: "style" } ], // role:style, para cambiar color de barras
        	["Donna Sloper", 1143, "#F9A91A"],
        	["Judy Meindl", 1689, "#F9A91A"],
        	["Jillene Porch", 1701, "#F9A91A"],
        	["Sydney Burlingham", 1400, "#F9A91A"],
        	["Alexi Gindghill", 1113, "#F9A91A"],
        	["Chiarra Dutton", 1030, "#F9A91A"],
        	["Jacquelin Beglin", 995, "#F9A91A"],
        	["'Collette Tubby", 1409, "#F9A91A"],
        	["Dacey Bullers", 1204, "#F9A91A"],
        	["Leta Cuel", 987, "#F9A91A"],
        	["Henrieta Osman", 1640, "#F9A91A"],
        	["Wilie Dunkinson", 1790, "#F9A91A"],
        	["Marisa Tumber", 1525, "#F9A91A"],
        	["Arlina Flacke", 1569, "#F9A91A"],
			["Modesta Donnison", 1436, "#F9A91A"],
        	["Arleyne Olding", 1158, "#F9A91A"]
        	["Adelice Lantiffe", 1227, "#F9A91A"],
        	["Jacintha Richen", 1602, "#F9A91A"],
        	["Nanice Ackeroyd", 1561, "#F9A91A"],
        	["Tricia Meyer", 1346, "#F9A91A"],
        	["Ellynn Shilleto", 1483, "#F9A91A"],
        	["Josie Southorn", 910, "#F9A91A"],
        	["Carlynne Yo", 1502, "#F9A91A"],
        	["Katharina Ponton", 1768 , "#F9A91A"],
        	["Hephzibah Poschel", 1591, "#F9A91A"],
        	["Ericka Carnilian", 1790, "#F9A91A"]
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
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("tech_skills_grafico1"));
      chart.draw(view, options);
  }

/* -------------------- SEGUNDO GRAFICO TECH SKILL -------------------- */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartTechSkills2);

	function drawChartTechSkills2() {
    	var data = google.visualization.arrayToDataTable([
          ["Status", 'total', { role: "style" }],
          ["Enrolled", 26, "#F9A91A"],
          ["Dropout", 32, "#F2F2F2"]
        ]);

        var options = {


        };

        var chart = new google.visualization.PieChart(document.getElementById("tech_skills_grafico2"));
        chart.draw(data, options);
      }


/* -------------------- hacer ventana oculta de life skills  --------------------*/

/* -------------------- Life skills gráfico -------------------- */
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartLifeSkills1);
	function drawChartLifeSkills1() {
		var data = google.visualization.arrayToDataTable([
        	["Student", "score", { role: "style" } ], // role:style, para cambiar color de barras
        	["Donna Sloper", 764, "#F9A91A"],
        	["Judy Meindl", 1153, "#F9A91A"],
        	["Jillene Porch", 1004, "#F9A91A"],
        	["Sydney Burlingham", 648, "#F9A91A"],
        	["Alexi Gindghill", 1068, "#F9A91A"],
        	["Chiarra Dutton", 939, "#F9A91A"],
        	["Jacquelin Beglin", 823, "#F9A91A"],
        	["'Collette Tubby", 894, "#F9A91A"],
        	["Dacey Bullers", 1099, "#F9A91A"],
        	["Leta Cuel", 671, "#F9A91A"],
        	["Henrieta Osman", 1036, "#F9A91A"],
        	["Wilie Dunkinson", 927, "#F9A91A"],
        	["Marisa Tumber", 1154, "#F9A91A"],
        	["Arlina Flacke", 1029, "#F9A91A"],
			["Modesta Donnison", 631, "#F9A91A"],
        	["Arleyne Olding", 1088, "#F9A91A"]
        	["Adelice Lantiffe", 1093, "#F9A91A"],
        	["Jacintha Richen", 924, "#F9A91A"],
        	["Nanice Ackeroyd", 676, "#F9A91A"],
        	["Tricia Meyer", 1032, "#F9A91A"],
        	["Ellynn Shilleto", 1197, "#F9A91A"],
        	["Josie Southorn", 800, "#F9A91A"],
        	["Carlynne Yo", 649, "#F9A91A"],
        	["Katharina Ponton", 836 , "#F9A91A"],
        	["Hephzibah Poschel", 834, "#F9A91A"],
        	["Ericka Carnilian", 859, "#F9A91A"]
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
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("life_skills_grafico1"));
      chart.draw(view, options);
  }

/* -------------------- SEGUNDO GRAFICO LIFE SKILL -------------------- */
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartLifeSkills2);

      function drawChartLifeSkills2() {
        var data = google.visualization.arrayToDataTable([
          ["Status", 'total', { role: "style" }],
          ["Enrolled", 26, "#F9A91A"],
          ["Dropout", 32, "#F2F2F2"]
        ]);

        var options = {


        };

        var chart = new google.visualization.PieChart(document.getElementById("life_skills_grafico2"));
        chart.draw(data, options);
      }

/* -------------------- Gráfico STUDENT-SATISFACTION -------------------- */
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
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("student_satisfaction_grafico"));
      chart.draw(view, options);
  }


/* -------------------- Gráfico TEACHER-RATING -------------------- */
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
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("teacher_rating_grafico"));
      chart.draw(view, options);
  }


/* -------------------- Gráfico JEDI-RATING -------------------- */
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
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("grafico_jedi_master"));
      chart.draw(view, options);
  }