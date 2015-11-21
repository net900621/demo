var chartTools = {
    legendTitleMove: function() {
        var title = this.legend.title;
        title.translate(-40, 24);
    },
    setTitle: function(el, title) {
        var titleStr = '<p>';
        if(title && title.h1) {
            titleStr += '<span style="color: ' + title.h1.color + '; font-size: ' + title.h1.fontSize + ';">' + title.h1.txt + ' </span>';
        }
        if(title && title.h2) {
            titleStr += '<span style="color: ' + title.h2.color + '; font-size: ' + title.h2.fontSize + ';">' + title.h2.txt + '</span>';
        }
        titleStr += '</p>';
        el.highcharts().setTitle({
            text: titleStr
        });
    }
};
function lineChart(el, options) {
    var settings = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'line',
            backgroundColor: null,
            events: {
                load: chartTools.legendTitleMove,
                redraw: chartTools.legendTitleMove
            }
        },
        title: {
            align: 'left'
        },
        xAxis: {
            categories: [],
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
            layout: 'horizontal', //default is horizontal, it can change to vertical
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
        series: []
    };
    el.highcharts($.extend(true,{}, settings, options));
    chartTools.setTitle(el, options.title);
}

function barChart(el, options) {
    var settings = {
        chart: {
            type: 'bar',
            backgroundColor: null,
            marginLeft: 92,
            events: {
                load: chartTools.legendTitleMove,
                redraw: chartTools.legendTitleMove
            }
        },
        title: {
            align: 'left'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: [],
            labels: {
                style: {color: '#B0B7AE'}
            },
            tickWidth: 0,//刻度线宽度为0
            tickLength: 0,//刻度线长度为0
            lineWidth: 0,//刻度线宽度为0
            title: {
                text: null
            }
        },
        yAxis: {
            gridLineColor: '#4d5357',
            max: 100,//todo
            labels: {style: {color: '#B0B7AE'}},
            title: {
                text: null
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            series: {
                shadow: false,
                borderColor: null,
                //pointPadding: 0,
                groupPadding: 0.1,
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    align: 'right',
                    style: {
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textShadow: false
                    }
                }
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
        series: []
    };
    el.highcharts($.extend(true, {}, settings, options));
    chartTools.setTitle(el, options.title);
}
function pieChart(el, options) {
    var settings = {
        chart: {
            type: 'pie',
            backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: null,
            align: 'left'
        },
        subtitle: {
            text: null
        },
        tooltip: {
            pointFormat: '{point.key}占比：<b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            series: {
                innerSize: '75%',
                shadow: false,
                borderColor: null,
                //pointPadding: 0,
                groupPadding: 0.1,
                dataLabels: {
                    enabled: false,
                    color: '#000000',
                    align: 'right',
                    style: {
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textShadow: false
                    }
                }
            },
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                showInLegend: true
            }
        },
        legend: {
            useHTML: true,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            // width: 200,
            // itemWidth: 100,
            //padding: 3,
            itemMarginTop: 5,
            itemMarginBottom: 5,
            itemStyle: {
                color: '#ffffff',
                fontWeight: 'normal'
            },
            labelFormatter: function () {
                return '<p><span style="color: ' + this.color + '">' + this.name + '</span><br><span style="color: ' + this.color + '; margin-left: -21px; font-size: 22px; font-weight: bold;">' + Math.round(this.percentage) + '%</span><br><span style="color: ' + this.color + '; margin-left: -21px;">' + this.y + '</span></p>';
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: []
    };
    el.highcharts($.extend(true, {}, settings, options));
    //chartTools.setTitle(el, options.title);
}
