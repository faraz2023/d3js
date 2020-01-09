//see how I pass around the d3 object with no worry
//import { myDo } from './util.js'
//myDo(d3)

let select = d3.select;
let arc = d3.arc;

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const g = svg.append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

const circle = g.append('circle');

circle.attr('r', (height - 300)/ 2);
circle.attr('fill', '#1EFF00');
circle.attr('stroke', 'black');

const eyeSpacing = 101;
const eyeYOffset = -89;
const eyeRadius = 40;
const eyebrowWidth = 70;
const eyebrowHeight = 20;
const eyebrowYOffset = -70;

const eyesG = g
  .append('g')
    .attr('transform', `translate(0, ${eyeYOffset})`);

const leftEye = eyesG
  .append('circle')
    .attr('r', eyeRadius)
    .attr('cx', -eyeSpacing);

const rightEye = eyesG
  .append('circle')
    .attr('r', eyeRadius)
    .attr('cx', eyeSpacing);

const eyebrowsG = eyesG
  .append('g')
    .attr('transform', `translate(0, ${eyebrowYOffset})`);

eyebrowsG
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowYOffset})`);

const leftEyebrow = eyebrowsG
  .append('rect')
    .attr('x', -eyeSpacing - eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight);

const rightEyebrow = eyebrowsG
  .append('rect')
    .attr('x', eyeSpacing - eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight); 

const beard = g
  .append('path')
    .attr('d', arc()({
      innerRadius: 200,
      outerRadius: 330,
      startAngle: Math.PI / 2,
      endAngle: Math.PI * 3 / 2
    }));

const mouth = g
  .append('path')
    .attr('d', arc()({
      innerRadius: 170,
      outerRadius: 180,
      startAngle: Math.PI / 2,
      endAngle: Math.PI * 3 / 2
    }));


//cool expeirnece with async and d3 capabilities. circle changes 
//size and position
/*
const wait_500 = () =>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 10);
    })
}

const experiment = async () => {
    let r = 1.0;
    let noise = 10;
    let cx = 960/2;
    let cy = 500/2;
    while(true){
        for(let i =0; i < 1000; i++){
            noise = -1 * noise;
            var x = await wait_500();
            if(i < 501){
                r += 1/10;
            }
            else{
                r -= 1/10;
            }
            cx += noise;
            cy += noise;
            c1.attr('r', r);
            c1.attr('cx', cx);
            c1.attr('cy', cy);
        }
    }
}

experiment();

*/