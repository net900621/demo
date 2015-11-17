$(function () {
    function legendTitleMove(e) {
        var title = this.legend.title;
        title.translate(-40, 24);
    }
    $('.chart-line').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'line',
            backgroundColor: null,
            events: {
                load: legendTitleMove,
                redraw: legendTitleMove
            }
        },
        title: {
            text: '时段新增曲线',
            align: 'left',
            style: {
                color: '#3effcc',
                fontSize: '15px'
            }
        },
        xAxis: {
            categories: [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            tickInterval: 1,
            tickmarkPlacement: 'on',//设置刻度线位于在类别名称的中心
            tickLength: 5,//设置刻度线的长度
            lineColor: '#4d5357',
            tickColor: '#8e958e',
            tickPosition: 'inside',//刻度线在轴的内部
            title: {style: {color: '#000000'}}
        },
        yAxis: {
            // plotLines: [{
            //     value: 0,
            //     width: 1,
            //     color: '#ffff00'
            // }],
            tickPosition: 'inside',//刻度线在轴的内部
            lineColor: '#4d5357',
            lineWidth: 1,
            tickWidth: 1,
            tickLength: 5,//设置刻度线的长度
            tickColor: '#8e958e',
            gridLineColor: '#4d5357',
            gridLineDashStyle: 'solid',
            labels: {style: {color: '#666'}},
            title: {
                text: null
            }
        },
        plotOptions: {
            series: {
                marker: {
                    radius: 4,
                    symbol: 'circle' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                }
            }
        },
        tooltip: {
            valueSuffix: '°C'
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        legend: {
            layout: 'horizontal', //or vertical
            itemDistance: 20,
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,
            itemStyle: {
                color: '#ffffff',
                fontWeight: 'normal'
            },
            title: {
                text: '对比：',
                style: {
                    color: '#ffffff'
                }
            },
            x: -150
        },
        series: [{
            name: '今日',
            color: '#3effcc',
            data: [35,22,16,20,18,23,38,35,46,53,50,64,65,66,67,73,77,70,84,80,71,70,73]
        }, {
            name: '昨日',
            color: '#fa348d',
            data: [34,42,23,22,21,20,32,37,43,35,57,67,63,64,72,78,84,65,80,68,73,62,65]
        }]
    });
    
    
    $('.chart-bar').highcharts({
        chart: {
            type: 'bar',
            backgroundColor: null,
            events: {
                load: legendTitleMove,
                redraw: legendTitleMove
            }
        },
        title: {
            text: '版本'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: [3.3,3.2,3.1,2.6,2.3,2.1,1.6,1.4,1.3,1.1],
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: null
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            series: {
                fillColor: '#ff0000'
            },
            column:{
                borderColor: "",//去边框
                shadow: false       //去阴影
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            itemStyle: {
                color: '#ffffff',
                fontWeight: 'normal'
            },
            title: {
                text: '对比：',
                style: {
                    color: '#ffffff'
                }
            },
            x: -100
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: '今日',
            color: '#3effcc',
            data: [96,82,76,57,49,42,38,24,20,8],
            dataLabels: {
                enabled: true,
                color: '#000000',
                align: 'right',
                //format: '{point.y:.1f}', // one decimal
                //y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});