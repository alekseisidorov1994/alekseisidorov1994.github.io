'use strict';
const canvas = document.querySelector('canvas');
const context =canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let points = [];
let number = 30;
let Speed = 2.2;
let DIST = 200;
let btn = document.querySelector('button');
tick();

function tick(){
    
    drawBcolor ();
    drawPoint ();
    movePoints();
    drawLine();
    requestAnimationFrame(tick);
        
}

// создали массив points
for(let i=0; i<number;i++){
    const point = {
        x: getRandom(0, canvas.width),
        y: getRandom(0,canvas.width),
        angle: getRandom(0, 2*Math.PI)
        
    };
    points.push(point);
}


// let myGradient=context.createLinearGradient(1,0,170,0);
// myGradient.addColorStop(0,"black");
// myGradient.addColorStop(1,"white");
// рисуем шары
function drawPoint (){
  
    
   points.forEach(point => {
        context.beginPath();
        context.fillStyle = 'green';
        context.arc(point.x, point.y, 0, 0, 2*Math.PI);
        context.fill();
        // console.log(point);
    });
   
    
    // for( const point of points){
    //     context.beginPath();
    //     context.fillStyle = 'red';
    //     context.strokeStyle = 'red';
    //     context.arc(point.x, point.y, 6, 0, 2*Math.PI);
    //     context.fill();
        
    // }
}
function movePoints(){
    
    for( const point of points){
        point.x = point.x+Speed*Math.cos(point.angle);
        point.y = point.y+Speed*Math.sin(point.angle);
        if(point.x<0){
            point.x+=canvas.width;
            
        }
        if(point.x>canvas.width){
            point.x-=canvas.width;
           
        }
        if(point.y>canvas.height){
            point.y-=canvas.height;
        }
        if(point.y<0){
            point.y+=canvas.height;
        }
    }

}
function getRandom (min,max){
    return min + Math.random() * (max-min+1);

}

function drawBcolor (){
    // context.beginPath();
    context.fillStyle = '#fa6055';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLine(){
    for(let i=0; i<number-1 ;i++){
        for(let j=i+1 ; j<points.length; j++){
            const pointA = points[i];
            const pointB = points[j];
            // console.log(points.length);
            let dist = findDist(pointA, pointB);
            console.log(dist);
            if(dist<DIST){
                context.beginPath();
                context.fillStyle = 'white';
                context.strokeStyle = '#c90d02';
                context.shadowColor ='#fff';
                context.shadowBlur = 5;
                context.lineWidth = (1-dist/DIST)**1.5;
                context.moveTo(pointA.x,pointA.y);
                context.lineTo(pointB.x, pointB.y);
                context.stroke();

            }
        }
    }
}

function findDist(a,b){
    // return ((a.x-b.x)**2+(a.y-b.y)**2)**0.5;
    return Math.sqrt(Math.pow(a.x-b.x,2)+ Math.pow(a.y-b.y,2));
}

