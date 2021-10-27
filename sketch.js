var weight = [35,38,42,45,43,34,36,41,48,32];

function avg_weight(){
var tot=0;
for (var i=0;i<weight.length;i=i+1){
  tot=tot+weight[i]
}
var avg = tot /weight.length;
console.log(avg);
}
function setup() {
  createCanvas(400,400);
avg_weight();
}

function draw() 
{
  background(30);
}

 

