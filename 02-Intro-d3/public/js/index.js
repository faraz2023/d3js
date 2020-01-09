//see how I pass around the d3 object with no worry
//import { myDo } from './util.js'
//myDo(d3)

let select = d3.select

const svg = select('svg');

const c1 = svg.append('circle')
c1.attr('r', 0)
c1.attr('cx', 960/2)
c1.attr('cy', 500/2)



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