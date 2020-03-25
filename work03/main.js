$(function(){
  var myChart = echarts.init(document.getElementById('main'));
  var container = document.getElementById('table');
  
  var data = [
    ['Java','1', '降', '-0.01%'],
    ['C','2', '升', '+2.44%'],
    ['Python','3', '升','+1.41%'],
    ['C++','4','降','-2.58%'],
    ['C#','5','升','+2.07%'],
    ['Visual Basic .NET','6','降','-1.17%'],
    ['JavaScript','7','降','-0.85%']
  ];

  var hot = new Handsontable(container, {
    data: data,
    width:1000,
    height: 300,
    colHeaders: ["语言名称","排名","升或降","变化幅度"],
    rowHearders: 0, 
    manualColumnResize: true,
    manualRowResize: true,
    className: "htCenter",
    filters: true,
    dropdownMenu: true,
    colWidths:190,
    rowHeight:70,
  });


    var xData = [],
        yData = [];

    for(var p=2000;p<=2020;p+=5){
        xData.push(p);
        if(p === 2000){
          yData.push(6);
        }else if(p === 2005){
          yData.push(9);
        }else if(p === 2010 || p === 2015){
          yData.push(8);
        }else{
          yData.push(7);
        }
    }

    // 指定图表的配置项和数据
    var option = {
      title: {
          text: 'JavaScript语言排名变化'
      },
      tooltip: {},
      legend: {
          data:['信息量']
      },
      xAxis: {
          data: xData
      },
      yAxis: {
      },
      series: [{
          name: '信息量',
          type: 'line',
          data: yData
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})
