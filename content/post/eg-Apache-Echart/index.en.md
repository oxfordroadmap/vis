---
title: "Dream of the Red Chamber Graph"
date: 2025-06-30
type: post
tags:
  - 'insights'
  - 'Social Network Analysis'
  - 'Dream of the Red Chamber'
---

Explore the character relationships in a Chinese novel written in 18th century China called [_**Dream of the Red Chamber**_《红楼梦》](https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamberusing) with a network graph.

<!-- more -->

This character network graph is based on [the dataset](https://github.com/XianWoo/SNA_Dream_of_the_Red_Chamber/blob/main/relationship.csv).

<!--
{{< echarts-network name="Character Relationship Network: 红楼梦 (Dream of the Red Chamber)" id="Network_Dream_of_the_Red_Chamber" data="red_chamber_characters.yaml">}} -->

<!-- Load ECharts from CDN -->
<div id="echart-network" style="width: 600px; height: 400px;"></div>
<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
<script>
  var chartDom = document.getElementById('echart-network');
  var myChart = echarts.init(chartDom);
  var option = {
    title: { text: 'Simple Network Graph' },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      type: 'graph',
      layout: 'force',
      symbolSize: 50,
      roam: true,
      label: { show: true },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: { fontSize: 12 },
      data: [
        { name: 'Node 1', draggable: true },
        { name: 'Node 2', draggable: true },
        { name: 'Node 3', draggable: true }
      ],
      links: [
        { source: 'Node 1', target: 'Node 2' },
        { source: 'Node 2', target: 'Node 3' }
      ],
      lineStyle: { opacity: 0.9, width: 2, curveness: 0 }
    }]
  };
  myChart.setOption(option);
</script>
