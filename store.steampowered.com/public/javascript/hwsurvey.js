
function toggleRow( statID )
{
	details = document.getElementById( statID + '_details' );
	if ( details.style.display != 'block' )
	{
		details.style.display = 'block';
		crow = document.getElementById( statID + '_stats_row' );
		crow.className += ' stats_row_on';
		document.getElementById( statID + '_val_1_on' ).style.display = 'none';
		document.getElementById( statID + '_val_2_on' ).style.display = 'none';
		document.getElementById( statID + '_val_3_on' ).style.display = 'none';
		document.getElementById( statID + '_val_1_off' ).style.display = 'inline';
		document.getElementById( statID + '_val_2_off' ).style.display = 'inline';
		document.getElementById( statID + '_val_3_off' ).style.display = 'inline';
	}
	else
	{
		details.style.display = 'none';
		crow = document.getElementById( statID + '_stats_row' );
		crow.className = crow.className.replace( /stats_row_on/, '' );
		document.getElementById( statID + '_val_1_on' ).style.display = 'inline';
		document.getElementById( statID + '_val_2_on' ).style.display = 'inline';
		document.getElementById( statID + '_val_3_on' ).style.display = 'inline';
		document.getElementById( statID + '_val_1_off' ).style.display = 'none';
		document.getElementById( statID + '_val_2_off' ).style.display = 'none';
		document.getElementById( statID + '_val_3_off' ).style.display = 'none';
	}
}

function iSwap( imgID, t )
{
	e = document.getElementById( imgID );
	if ( e.src.indexOf( '_on.' ) != -1 )
	{
		if ( t == 'g' )
		{
			e.src = e.src.replace( /_on\.gif/, '.gif' );
		}
		else
		{
			e.src = e.src.replace( /_on\.jpg/, '.jpg' );
		}
	}
	else
	{
		if ( t == 'g' )
		{
			e.src = e.src.replace( /\.gif/, '_on.gif' );
		}
		else
		{
			e.src = e.src.replace( /\.jpg/, '_on.jpg' );
		}
	}
}

function TrimPlot(series)
{
	for ( var j = 0; j < series.length; j++ )
	{
		for ( var i = series[ j ].data.length - 1; i >= 0; i-- )
		{
			if ( series[ j ].data[ i ][ 0 ] <= 1519891200000 )
			{
				series[ j ].data.splice ( i, 1 );
			}
		}
	}

	return series;
}

function ChartPlot( chartDiv, chartLegend, chartKey, series ) {

	var div = jQuery( chartDiv );
	var legendContainer = jQuery(chartLegend );
	var keyContainer = jQuery( chartKey );

	series = TrimPlot(series);

	for (var i = 0; i < series.length; i++) {
		keyContainer.prepend('<div class="legendChild" ><div class="legendColor" style="background-color:' + series[i].color + '"></div><div class="legendText" >' + series[i].label + '</div></div>');
	}

	function legendFormatter(label, series) {
		return '<div style="color:' + series.color + '">' + series.data[ series.data.length - 1 ][1].toFixed( 2 ) + '%</div>';
	};

	jQuery.plot(div, series, {
		series: {
			stack: true,
			lines: {
				show: true,
				fill: 1,
				steps: false,
				lineWidth: 0
			},
			bars: {
				show: false,
			}
		},
		legend: {
			show: true,
			container: legendContainer,
			labelFormatter: legendFormatter,
			sorted: "reverse"
		},
		yaxis: {
			min: 0,
			max:100,
			show: false
		},
		xaxis: {
			show: false
		},
		grid: {
			hoverable: true,
			clickable: false,
			margin: 0,
			borderWidth: 0,
			axisMargin: 0,
			minBorderMargin: 0,
			labelMargin: 0
		}
	});

	div.bind("plothover", function (event, pos, item) {
		if (item) {
			var x = (item.datapoint[1] - item.datapoint[2]).toFixed(1);
			jQuery("#charttooltip").html( item.series.label + ' ' + x  )
				.css({top: item.pageY-30, left: item.pageX-25})
				.fadeIn(200);
		} else {
			jQuery("#charttooltip").hide();
		}
	} );

}

function nFormatter(num) {
	isNegative = false
	if (num < 0) {
		isNegative = true
	}
	num = Math.abs(num)
	if (num >= 1000000000) {
		formattedNumber = (num / 1000000000).toFixed(1) + 'G';
	} else if (num >= 1000000) {
		formattedNumber =  (num / 1000000).toFixed(1) + 'M';
	} else  if (num >= 1000) {
		formattedNumber =  (num / 1000).toFixed(1) + 'K';
	} else {
		formattedNumber = num;
	}
	if(isNegative) { formattedNumber = '-' + formattedNumber }
	return formattedNumber;
}


function UsersChartPlot( chartDiv, chartLegend, url ) {

	var div = jQuery( chartDiv );
	var legendContainer = jQuery(chartLegend );

	function legendFormatter(label, series) {
		return '<div style="color:' + series.color + '">' + series.data[ series.data.length - 1 ][1] + '</div>';
	};

	function onDataReceived(series) {
		var plot = jQuery.plot(div, series, {
			series: {
				lines: {
					show: true,
					fill: false
				},
				bars: {
					show: false
				}
			},
			legend: {
				show: true,
				backgroundColor: '#c98d3',
				position: "sw",
				margin: 0,
				labelBoxBorderColor: 'black'
			},
			yaxis: {
				show: true,
				tickFormatter: (function (d) {
					return nFormatter(d);
				}),
				tickColor: '#323232',
				autoscaleMargin: 0.15,
			},
			xaxis: {
				show: true,
				mode: "time",
				minTickSize: [1, "hour"],
				ticks: 20,
				labelWidth: '100',
				alignTicksWithAxis: 1,
				tickFormatter: (function (val, axis) {
					var d = new Date(val);
					var crossedDay = ( axis.lastDate == null || d.getDay() != axis.lastDate.getDay() )
					axis.lastDate = d;
					if ( axis.ticks.length == 0 || crossedDay)
					{
						return '<div class="dateAxis">' + d.toLocaleDateString( navigator.language, {  year: '2-digit', month: 'short', day: 'numeric' }) + '</div>';

					}
					else
					{
						return d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
					}
				}),
				lastDate: null,
				tickColor: '#232628'
			},
			grid: {
				hoverable: true,
				clickable: false,
				borderWidth: 0,
				backgroundColor: '#232628'
			}
		});

		div.bind("plothover", function (event, pos, item) {
			if (item) {
				var x = (item.datapoint[1] ).toFixed(0);
				var date = new Date( item.datapoint[0] );
				jQuery("#charttooltip").html( date.toLocaleTimeString() + ' ' + x + ' USERS'  )
					.css({top: item.pageY-30, left: item.pageX-25})
					.fadeIn(200);
			} else {
				jQuery("#charttooltip").hide();
			}
		} );
	}

	jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: onDataReceived
	});
}

function SupportChartPlot( chartDiv, chartLegend, url, strHoverLabel ) {

	var div = jQuery( chartDiv );
	var legendContainer = jQuery(chartLegend );

	function legendFormatter(label, series) {
		return '<div style="color:' + series.color + '">' + series.data[ series.data.length - 1 ][1] + '</div>';
	};

	function onDataReceived(series) {
		var plot = jQuery.plot(div, series, {
			series: {
				lines: {
					show: true,
					fill: false
				},
				bars: {
					show: false
				}
			},
			legend: {
				show: true,
				backgroundColor: '#c98d3',
				position: "sw",
				margin: 0,
                container: "#legenddivsupport",
                noColumns: 3,
				labelBoxBorderColor: 'black'
			},
			yaxis: {
				show: true,
				tickFormatter: (function (d) {
					return nFormatter(d);
				}),
				tickColor: '#323232',
				autoscaleMargin: 0.15,
				min: 0
			},
			xaxis: {
				show: true,
				mode: "time",
				minTickSize: [7, "day"],
				ticks: 16,
				labelWidth: '100',
				alignTicksWithAxis: 1,
				tickFormatter: (function (val, axis) {
					var d = new Date(val);
					return '<div class="dateAxis">' + d.toLocaleDateString( navigator.language, {  year: '2-digit', month: 'short', day: 'numeric' }) + '</div>';
				}),
				tickColor: '#232628'
			},
			grid: {
				hoverable: true,
				clickable: false,
				borderWidth: 0,
				backgroundColor: '#232628'
			}
		});

		div.bind("plothover", function (event, pos, item) {
			if (item) {
				var x = (item.datapoint[1] ).toFixed(0);
				var date = new Date( item.datapoint[0] );
				jQuery("#charttooltip").html( date.toLocaleDateString() + ' ' + x + strHoverLabel  )
					.css({top: item.pageY-30, left: item.pageX-25})
					.fadeIn(200);
			} else {
				jQuery("#charttooltip").hide();
			}
		} );
	}

	jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: onDataReceived
	});
}


