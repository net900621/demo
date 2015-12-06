var chartTools = {
    legendTitleMove: function() {
        if(this.legend.title) {
            var title = this.legend.title;
            title.translate(-40, 24);
        }
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
            labels:{
                style: {color: '#B0B7AE'},
                format: '{value}'
            },
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
            title: {
                text: '对比：',
                style: {
                    color: '#ffffff'
                }
            },
            labelFormatter: function () {
                return '<span style="color: ' + this.color + '">' + this.name + '</span>';
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
            //max: 100,//todo
            labels: {style: {color: '#B0B7AE'}},
            title: {
                text: null
            }
        },
        tooltip: {
            valueSuffix: ''
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
                    align: 'left',
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
    if(options.title.h1 || options.title.h2) {
        chartTools.setTitle(el, options.title);
    }
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
                innerSize: '0%',
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
function columnChart(el, options) {
    var settings = {
        chart: {
            //type: 'column',
            backgroundColor: null
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
            labels: {
                style: {color: '#B0B7AE'}
            },
            gridLineDashStyle: 'longdash',
            gridLineColor: '#5E6566',
            gridLineWidth: 1,
            tickWidth: 1,//刻度线宽度为0
            tickLength: 1,//刻度线长度为0
            lineWidth: 0,//轴线宽度为0
            title: {
                text: null
            }
        },
        yAxis: [{
            gridLineColor: '#4d5357',
            labels:{
                style: {color: '#B0B7AE'},
                format: '{value}'
            },
            title:{  //左边y轴的标题
                text: null
            }
        },{
            gridLineColor: '#4d5357',
            labels:{
                style: {color: '#B0B7AE'},
                format: '{value}%'
            },
            title:{  //右边的Y轴
                text: null
            },
            opposite: true//这个属性的作用是说 是否与第一条y轴相反
        }], 
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            labelFormatter: function () {
                return '<span style="color: ' + this.color + '">' + this.name + '</span>';
            }
        },
        tooltip: {//todo
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
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
                    style: {
                        fontSize: '12px',
                        fontWeight: 'normal',
                        textShadow: false
                    }
                }
            },
            column: {
                
            },
            line: {
                lineWidth: 1
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
}

function chinaMap(el) {
    Highcharts.setOptions({
        lang:{
            drillUpText:"返回 > 中国"
        }
    });
    var data = Highcharts.geojson(Highcharts.maps['countries/cn/custom/cn-all-china']);
    //给定范围随机数生成器 just for fun, wait to delete
    function random(range){
        var min = Math.min(range[0], range[1]);
        var max = Math.max(range[0], range[1]);
        var diff = max - min;
        var number = Math.round(Math.random() * diff) + min;
        return number;
    }
    // 给城市设置随机数据
    $.each(data, function (i) {
        this.drilldown = this.properties['drill-key'];
        this.value = random([1, 100]);
    });
    //初始化地图
    el.highcharts('Map', {
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
        chart: {
            backgroundColor: null,
            width: 500,
            height: 500,
            events: {
                drilldown: function (e) {
                    if (!e.seriesOptions) {
                        var chart = this;
                        var cname = e.point.properties["cn-name"];
                        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>');
                        // 加载城市数据
                        $.ajax({
                            url:"http://123.56.143.227:8080/mapJson/" + e.point.drilldown + ".geo.json",
                            type:"GET",
                            dataType:"json",   
                            success: function(json) {
                                data = Highcharts.geojson(json);           
                                $.each(data, function (i) {         
                                    this.value = random([1, 100]);
                                    this.events = {};
                                    this.events.click = function(e) {
                                        console.log(cname + ' ' + e.point.name);
                                        console.log(e.point);
                                    };
                                });
                                chart.hideLoading();
                                chart.addSeriesAsDrilldown(e.point, {
                                    name: e.point.name,
                                    data: data,                             
                                    dataLabels: {
                                        enabled: true,
                                        format: '{point.name}'
                                    }
                                });
                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                console.log(XMLHttpRequest);
                            }
                        });
                    }
                    //this.setTitle(null, { text: cname });
                },
                drillup: function () {
                    //this.setTitle(null, { text: '中国' });
                }
            }
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title : {
            text : null
        },
        subtitle: {
            text: null
        },
        legend: {
            enabled: false
        },
        colorAxis: {
            // min: 1,
            // max: 60,
            minColor: '#efecf3',
            maxColor: '#445159'
        },
        mapNavigation: {
            enabled: false
        },
        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#EEDD66'
                    }
                }
            }
        },
        series : [{
            data : data,
            dataLabels: {
                enabled: false,
                format: '{point.properties.cn-name}'
            }
        }],
        drilldown: {
            activeDataLabelStyle: {
                enabled: false,
                color: '#FFFFFF',
                textDecoration: 'none',
                textShadow: false
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        },
        loading: {
            style: {
                backgroundColor: '#2f363e',
                opacity: 0.5
            }
        }
    });
}
