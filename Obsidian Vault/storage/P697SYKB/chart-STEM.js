// JavaScript Document
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Percentage of STEM Degrees Conferred 2008-2016",
		fontSize: 15,
		fontWeight: "bold",
		fontFamily: "calibri"
		
	},
	axisX: {
		interval: 1,
	/*	intervalType: "year",*/
	/*	valueFormatString: "YYYY"*/
	},
	axisY: {
		suffix: "%",
		maximum: 14,
		minimum: 0,
		interval: 2
	},
	toolTip: {
		shared: false,
		enabled: false
	},
	legend: {
		reversed: true,
		verticalAlign: "center",
		horizontalAlign: "right"
	},
	data: [
	
	
	{
		type: "spline",
		name: "Hispanic Males",
		color: "#30bdaa",
		showInLegend: true,
		/* xValueFormatString: "YYYY", */
		yValueFormatString: "#,##0\"%\"",
		dataPoints: [
		/*	{ x: new Date(2010,0), y: 15 },
			{ x: new Date(2011,0), y: 12 },
			{ x: new Date(2012,0), y: 10 },
			{ x: new Date(2013,0), y: 9 },
			{ x: new Date(2014,0), y: 7 },
			{ x: new Date(2015,0), y: 5 },
			{ x: new Date(2016,0), y: 1 },*/
			
			{ label: "2008-2009", y:  7.5  },
			{ label: "2009-2010",  y: 7.2 },
			{ label: "2010-2011", y: 7.8 },
			{ label: "2011-2012",  y: 8  },
			{ label: "2012-2013",  y: 8.6  },
			
			{ label: "2013-2014",   y:  8.9 },
			{ label: "2014-2015",   y:  9.4  },
			{ label: "2015-2016",   y:  10.9 }
			
			
		]
	},
	{
		type: "spline",
		name: "African American Males",
		color: "#ffbb00",
		showInLegend: true,
	/*	xValueFormatString: "YYYY",*/
		yValueFormatString: "#,##0\"%\"",
		dataPoints: [
		/*	{ x: new Date(2010,0), y: 17 },
			{ x: new Date(2011,0), y: 20 },
			{ x: new Date(2012,0), y: 18 },
			{ x: new Date(2013,0), y: 20 },
			{ x: new Date(2014,0), y: 20 },
			{ x: new Date(2015,0), y: 23 },
			{ x: new Date(2016,0), y: 27 }*/
			
	{ label: "2008-2009", y:  6  },
			{ label: "2009-2010",  y: 6  },
			{ label: "2010-2011", y: 6 },
			{ label: "2011-2012",  y: 6.1  },
			{ label: "2012-2013", y:  6.3},
			{ label: "2013-2014",   y:  6.1  },
			{ label: "2014-2015",   y:  6.1   },
			{ label: "2015-2016",   y:  6  }
		]
	}]
});
chart.render();

}
