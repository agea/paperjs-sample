// disegno il campo
new Path.Circle(view.center, view.size.height / 8).strokeColor = 'white';
new Path.Line(new Point(view.size.width / 2, 0), new Point(view.size.width / 2,
		view.size.height)).strokeColor = 'white';

var ev = new Path.Circle(view.center, 16);
ev.fillColor = 'white';

// posiziono le 2 squadre: portiere, difesa, centrocampo, attacco

var sqa_portiere = new Rectangle(0, view.center.y - view.size.height / 10,
		view.size.width / 20, view.size.height / 5);
var sqa_difesa = new Rectangle(0, 0, view.size.width / 2, view.size.height);
var sqa_centrocampo = new Rectangle(view.size.width / 4, 0,
		view.size.width * .5, view.size.height);
var sqa_attacco = new Rectangle(view.size.width * .4, 0, view.size.width * .5,
		view.size.height);

var sqb_portiere = new Rectangle(view.size.width - view.size.width / 20,
		view.center.y - view.size.height / 10, view.size.width / 20,
		view.size.height / 5);

var sqb_difesa = new Rectangle(view.size.width / 2, 0, view.size.width / 2,
		view.size.height);
var sqb_centrocampo = new Rectangle(view.size.width * .25, 0,
		view.size.width * .5, view.size.height);
var sqb_attacco = new Rectangle(view.size.width * .1, 0, view.size.width * .5,
		view.size.height);

function destination(area) {
	return area.topLeft + Point.random() * area.size;
}

// creo i giocatori
sqa = [ new PointText(destination(sqa_portiere)),
		new PointText(destination(sqa_difesa)),
		new PointText(destination(sqa_difesa)),
		new PointText(destination(sqa_difesa)),
		new PointText(destination(sqa_difesa)),
		new PointText(destination(sqa_centrocampo)),
		new PointText(destination(sqa_centrocampo)),
		new PointText(destination(sqa_centrocampo)),
		new PointText(destination(sqa_centrocampo)),
		new PointText(destination(sqa_attacco)),
		new PointText(destination(sqa_attacco)) ];

for ( var i = 0; i < sqa.length; i++) {
	sqa[i].content = i + 1;
	sqa[i].fillColor = 'white';
	sqa[i].paragraphStyle.justification = 'center';
	sqa[i].characterStyle.fontSize = 16;
}

sqb = [ new PointText(destination(sqb_portiere)),
		new PointText(destination(sqb_difesa)),
		new PointText(destination(sqb_difesa)),
		new PointText(destination(sqb_difesa)),
		new PointText(destination(sqb_difesa)),
		new PointText(destination(sqb_centrocampo)),
		new PointText(destination(sqb_centrocampo)),
		new PointText(destination(sqb_centrocampo)),
		new PointText(destination(sqb_centrocampo)),
		new PointText(destination(sqb_attacco)),
		new PointText(destination(sqb_attacco)) ];

for ( var i = 0; i < sqb.length; i++) {
	sqb[i].content = i + 1;
	sqb[i].fillColor = 'black';
	sqb[i].paragraphStyle.justification = 'center';
	sqb[i].characterStyle.fontSize = 16;
}

var dsta = [ destination(sqa_portiere), destination(sqa_difesa),
		destination(sqa_difesa), destination(sqa_difesa),
		destination(sqa_difesa), destination(sqa_centrocampo),
		destination(sqa_centrocampo), destination(sqa_centrocampo),
		destination(sqa_centrocampo), destination(sqa_attacco),
		destination(sqa_attacco) ];

var dstb = [ destination(sqb_portiere), destination(sqb_difesa),
		destination(sqb_difesa), destination(sqb_difesa),
		destination(sqb_difesa), destination(sqb_centrocampo),
		destination(sqb_centrocampo), destination(sqb_centrocampo),
		destination(sqb_centrocampo), destination(sqb_attacco),
		destination(sqb_attacco) ]

var bcg = 180;
var vg = 8;
var dg = 0;

bcgSpan = $('#bcg span');
vgSpan = $('#vg span');
dgSpan = $('#dg span');
var bgb = $('#bgb');

var adj = new Point(0,6);

function move(target, pointText, area, s, u) {
	var vector = target - pointText.position;
	pointText.position += vector / 50;
	if (pointText.content == selected && s) {
		dg += Math.round(vector.length / 50);
		vg = Math.round(vector.length / 10);
		bcg += Math.round(Math.random() * 6 - 3);
		if (u) {
			bcgSpan.html(bcg);
			vgSpan.html(vg);
			dgSpan.html(dg/10);
			bgb.width(bcg/2);
		}
		ev.position = pointText.position - adj;
	}
	if (vector.length < 5) {
		target = destination(area);
	}
	return target;

}

function onFrame(event) {

	var u = ((Math.round(event.time * 100)) % 5) == 0;
	// console.log(s);

	var s = true;

	dsta[0] = move(dsta[0], sqa[0], sqa_portiere, s, u);
	dsta[1] = move(dsta[1], sqa[1], sqa_difesa, s, u);
	dsta[2] = move(dsta[2], sqa[2], sqa_difesa, s, u);
	dsta[3] = move(dsta[3], sqa[3], sqa_difesa, s, u);
	dsta[4] = move(dsta[4], sqa[4], sqa_difesa, s, u);
	dsta[5] = move(dsta[5], sqa[5], sqa_centrocampo, s, u);
	dsta[6] = move(dsta[6], sqa[6], sqa_centrocampo, s, u);
	dsta[7] = move(dsta[7], sqa[7], sqa_centrocampo, s, u);
	dsta[8] = move(dsta[8], sqa[8], sqa_centrocampo, s, u);
	dsta[9] = move(dsta[9], sqa[9], sqa_attacco, s, u);
	dsta[10] = move(dsta[10], sqa[10], sqa_attacco, s, u);

	dstb[0] = move(dstb[0], sqb[0], sqb_portiere, false);
	dstb[1] = move(dstb[1], sqb[1], sqb_difesa, false);
	dstb[2] = move(dstb[2], sqb[2], sqb_difesa, false);
	dstb[3] = move(dstb[3], sqb[3], sqb_difesa, false);
	dstb[4] = move(dstb[4], sqb[4], sqb_difesa, false);
	dstb[5] = move(dstb[5], sqb[5], sqb_centrocampo, false);
	dstb[6] = move(dstb[6], sqb[6], sqb_centrocampo, false);
	dstb[7] = move(dstb[7], sqb[7], sqb_centrocampo, false);
	dstb[8] = move(dstb[8], sqb[8], sqb_centrocampo, false);
	dstb[9] = move(dstb[9], sqb[9], sqb_attacco, false);
	dstb[10] = move(dstb[10], sqb[10], sqb_attacco, false);

}
