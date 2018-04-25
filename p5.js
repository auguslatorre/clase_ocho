
var data;
var n;
function preload() {
	data = loadTable('https://raw.githubusercontent.com/auguslatorre/clase_ocho/gh-pages/data/Days.csv','csv', 'header');
}
function setup() {
	console.log(data);
	console.log(data.getRowCount() + ' son las filas en la tabla');
	console.log(data.getColumnCount() + ' son las columnas en la tabla');
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	noStroke();
	fill(0,150);
	textAlign(CENTER);
	textStyle(BOLD);
	beginShape();
	vertex(0,height)
   	for (var a = 0; a < data.getRowCount(); a++) {
		var days = data.get(a, 2);
		var posX = (windowWidth/(data.getRowCount()+1))*(a+1);
		var posY = map(days, 0, 22, (windowHeight-50), 100);
		vertex(posX,posY);
   		var name = data.get(a, 1);
   		textSize(11);
   		text(name + '\n•',posX,posY-10);
	}
	vertex(width,height);
	endShape(CLOSE);
	canvas.parent('grafico');
}
