/* -------------------- enrollment gráfico -------------------- */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartEnrollment);

	function drawChartEnrollment() {

        var data = google.visualization.arrayToDataTable([
          ["Status", "total"],
          ["Enrolled", 26,],
          ["Dropout", 32]
        ]);

        var options = {
        	slices: {
            0: { color: "#F9A91A"},
            1: { color: "#A4A4A4"}
          }
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
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartTechSkills1);
      function drawChartTechSkills1() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ["Student","Donna Sloper","Judy Meindl","Jillene Porch","Sydney Burlingham","Alexi Gindghill","Chiarra Dutton","Jacquelin Beglin","Collette Tubby","Dacey Bullers","Leta Cuel","Henrieta Osman","Wilie Dunkinson","Marisa Tumber","Arlina Flacke","Modesta Donnison","Arleyne Olding","Adelice Lantiffe","Jacintha Richen","Nanice Ackeroyd","Tricia Meyer","Ellynn Shilleto","Josie Southorn","Carlynne Yo","Katharina Ponton","Hephzibah Poschel","Ericka Carnilian"],
         ["score",	  1143,      		1689,         1701,             1400,          		 1113,      		1030,		 995,				1409,			1204,			987,			1640,			1790,			1525,			1569,				1436,			1158,				1227,			1602,				1561,			1346,			1483,			910,			1502,				1768,			1591,			  1790	],
      ]);

    var options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {26: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById("tech_skills_grafico1"));
    chart.draw(data, options);
  }
/* -------------------- SEGUNDO GRAFICO TECH SKILL -------------------- */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartTechSkills2);

	function drawChartTechSkills2() {
    	var data = google.visualization.arrayToDataTable([
          ["Status", "total"],
          ["# STUDENTS THAT MEET THE TARGET", 17],
          ["# STUDENTS THAT DON'T MEET THE TARGET", 9]
        ]);

        var options = {
        	slices: {
            0: { color: "#F9A91A"},
            1: { color: "#A4A4A4"}
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById("tech_skills_grafico2"));
        chart.draw(data, options);
      }


/* -------------------- hacer ventana oculta de life skills  --------------------*/

/* -------------------- Life skills gráfico -------------------- */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartLifeSkills1);
      function drawChartLifeSkills1() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ["Student","Donna Sloper","Judy Meindl","Jillene Porch","Sydney Burlingham","Alexi Gindghill","Chiarra Dutton","Jacquelin Beglin","Collette Tubby","Dacey Bullers","Leta Cuel","Henrieta Osman","Wilie Dunkinson","Marisa Tumber","Arlina Flacke","Modesta Donnison","Arleyne Olding","Adelice Lantiffe","Jacintha Richen","Nanice Ackeroyd","Tricia Meyer","Ellynn Shilleto","Josie Southorn","Carlynne Yo","Katharina Ponton","Hephzibah Poschel","Ericka Carnilian"],
         ["score",	  1143,      		1689,         1701,             1400,          		 1113,      		1030,		 995,				1409,			1204,			987,			1640,			1790,			1525,			1569,				1436,			1158,				1227,			1602,				1561,			1346,			1483,			910,			1502,				1768,			1591,			  1790	],
      ]);

    var options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {26: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById("life_skills_grafico1"));
    chart.draw(data, options);
  }

/* -------------------- SEGUNDO GRAFICO LIFE SKILL -------------------- */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartLifeSkills2);

	function drawChartLifeSkills2() {
    	var data = google.visualization.arrayToDataTable([
          ["Status", "total"],
          ["# STUDENTS THAT MEET THE TARGET", 17],
          ["# STUDENTS THAT DON'T MEET THE TARGET", 9]
        ]);

        var options = {
        	slices: {
            0: { color: "#F9A91A"},
            1: { color: "#A4A4A4"}
          }
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