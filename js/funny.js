var svg_ph = d3.select("#svg1")
var run=true
d3.timer(update,10)
var maxheigth=9

var i=0
var b=0
var c=0
var x=0

function update(e){
    i+=1
    if(i<500){
        var b1 = b+0.01*randnScalar();
        var s = false
        var c1 = c*math.exp(-2)
        if(math.random()<0.1 && i>120) s=true
        if(s) c1+=10*math.abs(randnScalar())
        svg_ph.append("line")
        .attr("x1",i-1)
        .attr("x2",i)
        .attr("y1",maxheigth-c)
        .attr("y2",maxheigth-c1)
        .attr("stroke-width",0.2)
        .attr("stroke","black")

        c=c1
        console.log(c)
    }
}



// Gaussian random number (mean = 0, variance = 1;
//  Gaussian noise with the polar form of the Box-Muller transformation
function randnScalar() {

    var x1;
    var x2;
    var w;
    var y1;
  var y2;

  do {
    x1 = 2.0 * math.random() - 1.0;
    x2 = 2.0 * math.random() - 1.0;
    w = x1 * x1 + x2 * x2;
  } while ( w >= 1.0 );

  w = math.sqrt( (-2.0 * math.log( w ) ) / w );
  y1 = x1 * w;
  y2 = x2 * w;

  return y1;
}

