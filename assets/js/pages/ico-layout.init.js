var swiper=new Swiper(".icoSlider",{slidesPerView:1,spaceBetween:30,loop:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}}}),options={series:[25,20,18,32,15],chart:{height:450,type:"polarArea"},labels:["Marketing & General","Pre-ICO Token","Team & Advisor","Platform Integration","Mobile Ad Platform"],colors:["#6666ff","#00b074","#f7cc53","#5fd0f3","#da3746"],fill:{opacity:1},stroke:{width:0},legend:{position:"bottom"},plotOptions:{polarArea:{rings:{strokeWidth:0},spokes:{strokeWidth:0}}},yaxis:{show:!1}},chart=new ApexCharts(document.querySelector("#tokensale-chart1"),options);chart.render();options={series:[24,10,26,9,32],chart:{height:450,type:"radialBar"},legend:{show:!0,position:"bottom"},plotOptions:{radialBar:{hollow:{margin:5,size:"45%"},dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return 249}}}}},labels:["Bounty","ICO Sale","Build Out","Branding & Marketing","Public Sale"],colors:["#6666ff","#00b074","#f7cc53","#5fd0f3","#da3746"]};(chart=new ApexCharts(document.querySelector("#tokensale-chart2"),options)).render();