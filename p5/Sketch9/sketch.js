let shape = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(169,200,1);
	colorMode(HSB);
	for (let i = 0; i < 100; i = i + 1) {
		let x = random(0, width);
		let y = random(0, height);
		shape[i] = makeShape(x, y);
	}
}

function draw() {
	background(0);
	

	for (let i = 0; i < 100; i = i + 1) {
		updateShape(shape[i]);
	}
}


function makeShape(x, y) {
	let shape = {};
	shape.x = x;
	shape.y = y;
	shape.velX = random(-10, 10);
	shape.size = random(1, 200);
	shape.hue = random(0, 240);
	return shape;
}

function updateShape(t) {
	t.x = t.x + t.velX;
	if (t.x > width || t.x < 0) {
		t.velX = t.velX * -8;
		t.size = t.size * 1.5;
	}
	fill(t.hue, 20, 50);
	rect(t.x, t.y, t.size, t.size);
}

