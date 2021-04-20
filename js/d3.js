const DUMMY_DATA = [
    { id: 'd1', value: 9, region: 'Rivendale' },
    { id: 'd2', value: 12, region: 'Gondor' },
    { id: 'd3', value: 7, region: 'Ministirith' },
    { id: 'd4', value: 4, region: 'Germany' },
    { id: 'd3', value: 20, region: 'USA' }
];

const xScale = d3.scaleBand().domain(DUMMY_DATA.map(dataPoint => dataPoint.region)).rangeRound([0, 250]).padding(0.3);
const yScale = d3.scaleLinear().domain([0, 30]).range([200, 0]);


const container = d3.select('.svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));