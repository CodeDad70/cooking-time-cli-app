(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/car.png", id:"car"},
		{src:"images/card_bassPro.png", id:"card_bassPro"},
		{src:"images/card_lowes.jpg", id:"card_lowes"},
		{src:"images/eBay_nodenom.png", id:"eBay_nodenom"},
		{src:"images/Nike_2015_nodenomcopy.png", id:"Nike_2015_nodenomcopy"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,84);


(lib.card_bassPro = function() {
	this.initialize(img.card_bassPro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,74);


(lib.card_lowes = function() {
	this.initialize(img.card_lowes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,74);


(lib.eBay_nodenom = function() {
	this.initialize(img.eBay_nodenom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,73);


(lib.Nike_2015_nodenomcopy = function() {
	this.initialize(img.Nike_2015_nodenomcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,73);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIE5QgcgdgBgtQABgvAcgcQAbgdAtAAQAuAAAbAdQAcAcABAvQAAAtgcAdQgcAcguABQgtgBgbgcgAhBBiIgZm3IC2AAIgZG3g");
	this.shape.setTransform(186.3,-49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipC9QhGhCAAh2QAAgqAOgtQAOguAfgnQAfgnAwgYQAxgYBBgBQBPABAzAiQAyAjAYA4QAXA5AABFQAAAUgCASQgCASgCAKIkuAAQAEATARAOQASAOAcAGQAZAIAgAAQAjAAAhgFQAhgEAigKIAXB5QgtAQgvAIQgvAGguAAQiAAAhGhDgAgkh7QgQANgIASQgIASgCARICQAAQABgPgGgTQgGgSgPgOQgQgOgbAAQgZAAgQAOg");
	this.shape_1.setTransform(146.5,-41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AihD7IAAlEIgBhhQAAgogDgdICaAAIAIBZIADAAQAMglAWgXQAXgVAZgKQAZgJAWAAIATAAIASADIAACpIgVgDQgLgCgOAAQgpAAgaAQQgZAQgHAeIgCAOIAAAPIAADzg");
	this.shape_2.setTransform(101.7,-41.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AipC9QhGhCAAh2QAAgqAOgtQAOguAfgnQAfgnAwgYQAxgYBBgBQBPABAzAiQAyAjAYA4QAXA5AABFQAAAUgCASQgCASgCAKIkuAAQAEATARAOQASAOAcAGQAZAIAgAAQAjAAAhgFQAhgEAigKIAXB5QgtAQgvAIQgvAGguAAQiAAAhGhDgAgkh7QgQANgIASQgIASgCARICQAAQABgPgGgTQgGgSgPgOQgQgOgbAAQgZAAgQAOg");
	this.shape_3.setTransform(54.3,-41);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABtFQIAAkJIjZAAIAAEJIi1AAIAAqgIC1AAIAAD6IDZAAIAAj6IC1AAIAAKgg");
	this.shape_4.setTransform(-7.2,-50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah6D2QgsgJgdgQIAeh/QAPAJAXAIQAXAJAbAGQAaAFAWAAQAdAAAMgGQAMgGgBgOQABgOgMgIQgMgJgngLQhQgbghgnQghgoABgrQABgyAagmQAagmAwgVQAwgWBAAAQAtAAAmAJQAmAIAYALIgcB6QgTgJgegJQgdgJgfAAQgYAAgNAGQgLAHAAAPQAAALAOAKQAPAKArAOQBJAYAfAkQAgAmgBA0QAAAwgYAlQgZAlgyAWQgyAVhKAAQg0AAgrgKg");
	this.shape_5.setTransform(-82.7,-41);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKADQAUhFALhHICigJQgaBOggBFQghBHgnBCIhsAJQAahJAThHg");
	this.shape_6.setTransform(-118.5,-70.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKE0QgfgMgUgTQgWgXgMglQgMgmAAg4IAAirIg9AAIAAiDIA9AAIAAhdICugwIAACNIBmAAIAACDIhmAAIAACLQAAAsAMATQANAVAggBIAXAAQAKAAAKgDIAACIQgQAHgdADQgbAEgjAAQgoAAgegNg");
	this.shape_7.setTransform(-151.5,-47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhZFQIAAqgICzAAIAAKgg");
	this.shape_8.setTransform(-184.3,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-118.7,596,129.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Egu3BdvMAAAi7eMBdvAAAMAAAC7eg");
	this.shape.setTransform(300,600);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logos_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kings
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("Ag7A7QgYgYAAgjQAAgiAYgYQAZgZAiAAQAiAAAZAZQAZAZAAAhQAAAjgZAYQgZAZgiAAQghAAgagZgAgtgwQgUATABAdQgBAeAUATQASAUAbAAQAcAAASgUQAUgTgBgeQABgdgUgTQgSgUgcAAQgbAAgSAUgAAdAsQgHAAgGgKIgQgdIgJAAIAAAYQAAAKAJAAIAAAFIgmAAIAAgFQAJAAABgKIAAg6QAAgKgKAAIAAgGIAsAAQAbAAAAAYQgBASgRAEIAPAZQAIANAHAAIAAAFgAgJAAIAJAAQAOAAAAgVQAAgRgOAAIgJAAg");
	this.shape.setTransform(127.1,33.2,0.397,0.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E33539").s().p("AhKAxIAohXIBtgMIhNBlg");
	this.shape_1.setTransform(58.6,-4.8,0.397,0.397,0,0,0,-0.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E33539").s().p("AhDA9IBRh5IA2AAIhEB5g");
	this.shape_2.setTransform(69.2,-4.5,0.397,0.397,0,0,0,-0.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E33539").s().p("AhEA+ICJiIIgDCVg");
	this.shape_3.setTransform(83.7,8.9,0.397,0.397,0,0,0,-0.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmbKVQhHAAg2g9Qg0g8AAhQIAAuZQAAhSA5g5QA6g8BaABIM9AAIAAGTIndAAQgSAAgOAPQgPAPAAASIAAFwQAAAmAeAWQAbAUAlABQAnAAAbgTQAegWAAgmIAAjHIHcAAIAAHnQAABeg8A6Qg/A7hqAAg");
	this.shape_4.setTransform(79.6,-62.7,0.397,0.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ApsKVIAA0pIG7AAIEUFfIAAlfIIKAAIAAUnInIAAIkbmRIAAGTg");
	this.shape_5.setTransform(25,-62.7,0.397,0.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Aj1KUIAA0nIHrAAIAAUng");
	this.shape_6.setTransform(-17.1,-62.7,0.397,0.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABQKTIAAkBQAAgwglgcQghgZgvAAQgwgBgiAZQglAbAAAuIAAEGIn3AAIAA0oIH7AAIAAGIIEhmIIILAAImOInQBvgPBfBLQBmBQAACEIAAHwIj1ACIhYAAQidAAAAgCg");
	this.shape_7.setTransform(-56.6,-62.7,0.397,0.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E33539").s().p("AhsB+QgDgDADgFIADgFIDYjyIgIAjQgLArgOAlQguB1hBARQgpAKgTAAQgMAAgDgEg");
	this.shape_8.setTransform(92.6,-0.6,0.397,0.397);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E33539").s().p("AhCAvQgEAAALgTQAMgVARgRQAvg2AfAbQAbAYgLAfQgFARgLAMg");
	this.shape_9.setTransform(47.2,-7.2,0.397,0.397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E33539").s().p("AhsA7QA1hyBThKQA7gwAnAeQAoAfgnBJQgwBXh0BDQg7AhgxAQQAKgrAbg6g");
	this.shape_10.setTransform(17,0.2,0.397,0.397);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E33539").s().p("AhSC5IgTgFQg7grAhh2QALgjATgoIAQghQBtiEBDAyQAhAYAMA0IhaAAIgzCcIBdAAQg1BohKASQgPADgOAAIgSgBg");
	this.shape_11.setTransform(-10.5,-0.9,0.397,0.397);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E33539").s().p("AhSC5IgTgFQg7grAhh2QALgjATgoIAQghQBmiEBGAyQAjAYAOA0IhaAAIgzCcIBdAAQg1BohKASQgPADgOAAIgSgBg");
	this.shape_12.setTransform(-38,-0.9,0.397,0.397);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFF215").ss(2,0,0,4).p("AglCFQBBgRAuh1QAOglALgrIAIgkIjYDzQgCACgCADQgDAFADADQAKAKBCgQg");
	this.shape_13.setTransform(92.7,-1.1,0.397,0.397);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFF215").ss(2,0,0,4).p("AhCAvIByAAQALgMAFgRQALgggbgXQgfgbgvA2QgRARgMAVQgLATAEAAg");
	this.shape_14.setTransform(47.2,-7.1,0.397,0.397);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFF215").ss(2,0,0,4).p("AAeiEQhTBLg2BxQgbA6gKArQAygPA7ghQB0hDAwhYQAnhIgogfQgogfg6Awg");
	this.shape_15.setTransform(17,0.3,0.397,0.397);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFF215").ss(2,0,0,4).p("ACLhgQgMgzghgZQhDgxhtCEIgQAhQgTAogLAjQghB2A7ArIATAFQAXADAYgFQBKgSA1hoIhdAAIAzidg");
	this.shape_16.setTransform(-10.5,-0.8,0.397,0.397,0,0,0,-0.1,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFF215").ss(2,0,0,4).p("ACKhgQgOgzgjgZQhGgxhlCEIgRAhQgSAogLAjQgiB2A8ArIASAFQAXADAYgFQBKgSA2hoIheAAIAzidg");
	this.shape_17.setTransform(-37.9,-0.8,0.397,0.397,0,0,0,-0.2,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF215").s().p("AtOJqIDzp5IhMAAQh8EVj2AaQi4ASg9jZQgKgkAKhFIhLABQg7B9hQBJQhiBbiFAOQi4ASg9jZQgJghAIhCQAKhRAghLQBajPDVgnQC2ghBPCEQAoBDADBIIBXAAQAohZBDg7QBQhGBwgUQC2ghBPB9QAoBAADBFIBvAAICymuIDGAAIhiD7IB9g1QB2grA5CFQAdBDAGBLIBWAAQAfhHA5hDQByiGCVABQClAAAoByQAUA5gOA5IhcDQIj8AAQgXAAgMAQQgLAMACAUQACAUANAOQAPAPAVAAIDuAAIDolCQhHgUAChAQABgVAHgWIBRixIDGAAQghBPAUAcQAKAOAQgCIEqAAIjNG5QgYArAaASQAZARAggYIHWnvIEWAAIifIWQgxBbhGAmQgiASgZABIjAAAIACifIiiChIjygBQh0gHgGhaQgCgcAJgiIAJgbICTkqIg7AAIlVHnImUAAQiTAAghiIQgLgqACgyIAEgpIhCAAQhuDBiWBKQhLAlg1gBIiFhkIifGug");
	this.shape_18.setTransform(28.5,2.2,0.397,0.397);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF215").s().p("ApAJNIBajOIHgAAQAmAAACgcQABgagXgMQhPgnhpgvQjBhLgqiEQgNgnADgqIAGgiQBMjUCtiHQCeh6C4gVQEwgjBICgQAkBQgZBXIhxEIIjaAAIBjj7QAYhAgdghQgageg/AEQg+ADhLAhQhPAkhBA5QhcBPggBIQg1B0CJAxQBjAjBKAkQApAVBFAoQA/BAAFBMQAFBDgoBCQgmA8g+AnQg/Ang+AAg");
	this.shape_19.setTransform(-65.6,-10.8,0.397,0.397);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E33539").ss(5.3).p("AC7pFQEwgjBICgQAkBQgZBXIhxEIIjaAAIBjj7QAYhAgdghQgageg/AEQg+ADhLAhQhPAkhBA6QhcBOggBIQg1B0CJAxQBjAkBKAjQArAVBDAoQA/BAAFBMQAFBDgoBCQgmA8g+AnQg/Ang+AAIpLAAIBajNIHfAAQAnAAACgcQABgbgXgMQhPgnhpgvQjBhKgqiFQgNgnADgqIAGgiQBMjUCtiHQCch6C6gVg");
	this.shape_20.setTransform(-65.9,-10.8,0.397,0.397);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ApAJNIBajNIHgAAQAmAAACgcQABgbgXgMQhPgnhpgvQjBhKgqiFQgNgnADgqIAGgiQBMjUCtiHQCeh6C4gVQEwgjBICgQAkBQgZBXIhxEIIjaAAIBjj7QAYhAgdghQgageg/AEQg+ADhLAhQhPAkhBA6QhcBOggBIQg1B0CJAxQBjAkBKAjQArAVBDAoQA/BAAFBMQAFBDgoBCQgmA8g+AnQg/Ang+AAg");
	this.shape_21.setTransform(-65.6,-10.8,0.397,0.397);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E33539").ss(6).p("AmaKVIMBAAQBrAAA+g7QA8g5AAhfIAAnnIncAAIAADHQAAAmgeAVQgbAUgngBQglAAgbgUQgegWAAglIAAlxQAAgTAOgOQAPgPATAAIHdAAIAAmTIs9AAQhaAAg7A7Qg4A5AABSIAAOZQAABQA0A8QA1A9BIAAg");
	this.shape_22.setTransform(79.6,-62.8,0.397,0.397);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AmbKVQhHgBg2g8Qg0g8AAhQIAAuZQAAhSA5g5QA6g7BaAAIM9AAIAAGTIndAAQgSAAgOAOQgPAPAAATIAAFwQAAAlAeAXQAbATAlABQAnABAbgUQAegVAAgmIAAjIIHcAAIAAHoQAABfg8A5Qg/A6hqABg");
	this.shape_23.setTransform(79.6,-62.8,0.397,0.397);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E33539").ss(6).p("ApsqUIAAUpIH2AAIAAmUIEbGSIHIAAIAA0nIoKAAIAAFeIkUleg");
	this.shape_24.setTransform(25,-62.8,0.397,0.397);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ApsKVIAA0pIG7AAIEUFeIAAleIIKAAIAAUnInIAAIkbmRIAAGTg");
	this.shape_25.setTransform(25,-62.8,0.397,0.397);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E33539").ss(6).p("Aj1qTIAAUnIHrAAIAA0ng");
	this.shape_26.setTransform(-17.1,-62.8,0.397,0.397);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Aj1KUIAA0nIHrAAIAAUng");
	this.shape_27.setTransform(-17.1,-62.8,0.397,0.397);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E33539").ss(6).p("AIsCkIAAHwQh7ABh6AAQj1ABAAgCIAAkCQAAgwglgcQgggZgwAAQgxAAghAYQglAbAAAvIAAEFIn3AAIAA0oIH6AAIAAGIIEimIIIKAAImNInQBvgOBeBLQBnBPAACFg");
	this.shape_28.setTransform(-56,-62.8,0.397,0.397);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABQKUIAAkCQAAgwglgcQghgZgvAAQgwAAgiAYQglAbAAAvIAAEFIn3AAIAA0oIH7AAIAAGIIEhmIIILAAImOInQBvgOBfBLQBmBPAACFIAAHwIj1ABIhYAAQidAAAAgBg");
	this.shape_29.setTransform(-56.6,-62.8,0.397,0.397);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#E33539").ss(5.3).p("ATWA+IHWnuIEWAAIifIWQgyBbhFAlQgjATgZABIjAAAIADigIiiCiIjygCQh0gFgHhaQgCgdAJghIAKgcICTkrIg8AAIlVHpImTAAQiTAAgiiIQgKgrACgzIAEgoIhDAAQhtDAiXBLQhLAlg1gCIiEhjIifGuIjUAAIDzp5IhLAAQh9EVj2AZQi4ATg9jZQgJgkAJhFIhKABQg8B9hQBJQhiBaiFAOQi4ATg9jZQgJgiAIhBQAKhSAghKQBajPDVgnQC2ghBQCEQAnBCAEBJIBWAAQAphZBDg7QBPhGBwgUQC2ghBQB9QAnA/AEBGIBuAAICzmuIDFAAIhiD7IB+g1QB2grA4CFQAeBDAFBLIBWAAQAghHA5hDQBxiFCVAAQCmAAAnByQAUA5gNA5IhdDQIj7AAQgYAAgLAQQgLAMACAUQACAUANAOQAOAPAVAAIDvAAIDnlCQhGgUAChBQAAgUAIgWIBQixIDGAAQghBPAUAcQAKAOARgCIEpAAIjNG6QgXAqAaASQAZAQAggYg");
	this.shape_30.setTransform(28.6,2.2,0.397,0.397);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AtOJqIDzp5IhMAAQh8EVj2AZQi4ATg9jZQgKgkAKhFIhLABQg7B9hQBKQhiBZiFAOQi4ATg9jZQgJgiAIhBQAKhSAghJQBajQDVgnQC2ghBPCEQAoBCADBKIBXgBQAohZBDg7QBQhGBwgUQC2ghBPB+QAoA+ADBGIBvAAICymuIDGAAIhiD8IB9g1QB2gsA5CFQAdBDAGBLIBWAAQAfhHA5hDQByiFCVAAQClAAAoByQAUA5gOA5IhcDRIj8AAQgXAAgMAPQgLAMACAUQACAUANAOQAPAQAVAAIDuAAIDolCQhHgVAChBQABgUAHgWIBRixIDGAAQghBPAUAcQAKAOAQgCIEqAAIjNG5QgYArAaARQAZARAggYIHWnuIEWAAIifIWQgxBbhGAmQgiASgZAAIjAAAIACifIiiCiIjygCQh0gGgGhZQgCgdAJghIAJgbICTksIg7AAIlVHpImUAAQiTAAghiIQgLgqACg0IAEgoIhCAAQhuDAiWBLQhLAlg1gCIiFhjIifGug");
	this.shape_31.setTransform(28.5,2.2,0.397,0.397);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_32.setTransform(9.7,26.7,0.397,0.397,0,0,0,-0.1,-0.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_33.setTransform(9.8,14.2,0.397,0.397);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_34.setTransform(9.8,1.6,0.397,0.397);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_35.setTransform(9.8,-11,0.397,0.397);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_36.setTransform(9.8,-23.6,0.397,0.397);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_37.setTransform(9.8,-36.2,0.397,0.397);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_38.setTransform(9.8,-48.8,0.397,0.397);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_39.setTransform(9.8,-61.5,0.397,0.397);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_40.setTransform(9.8,-99.4,0.397,0.397);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_41.setTransform(9.8,-86.7,0.397,0.397);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E33539").s().p("EgsBAB9IAAj5MBYDAAAIAAD5g");
	this.shape_42.setTransform(9.8,-74.1,0.397,0.397);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(6,0,0,4).p("EAsCAaxMAAAg1hMhYDAAAMAAAA1hg");
	this.shape_43.setTransform(9.8,-36.3,0.397,0.397);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EgsBAaxMAAAg1hMBYDAAAMAAAA1hg");
	this.shape_44.setTransform(9.8,-36.3,0.397,0.397);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Egs3AbgMAAAg2/MBZvAAAMAAAA2/g");
	this.shape_45.setTransform(9.6,-36.3,0.397,0.397,0,0,0,-0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-125.5,300.4,171.5);


(lib.ClipGroup_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwjUgMAAAgo/MAhHAAAMAAAAo/g");
	mask.setTransform(106.1,131.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AABADIgBgBIAAgBIgBgBQgBAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAABAAAAQAAAAAAAAIACACIAAABIABABIgBABIAAABIgBgBg");
	this.shape.setTransform(133.3,175.3);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133,174.9,0.7,0.8);


(lib.ClipGroup_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ClipGroup_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cta_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{expand:7,contract:31});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(38));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBuIgriKIAAAAIAACKIgdAAIAAjbIAeAAIArCKIABAAIAAiKIAdAAIAADbg");
	this.shape.setTransform(216.1,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBoQgMgJgFgRQgGgQgCgVQgCgUAAgVQAAgVADgVQACgUAHgQQAGgQAMgKQALgJAQAAQATAAAMAKQAMAKAGAQQAFAQACAUQACAVAAAUQAAAWgDAWQgCAUgGAQQgHAQgLAJQgLAKgSgBQgSAAgMgKgAgMhNQgGAIgDAUQgEAVAAAgQAAAXACATQACASAGALQAGAMAJAAQALAAAFgMQAGgLACgWQACgVAAgaQAAgZgCgQQgCgQgEgIQgDgJgFgEQgFgDgFAAQgGAAgGAJg");
	this.shape_1.setTransform(203,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBuIAAjbIAfAAQASAAAPAHQAOAGAJAQQAIAPAAAYQAAAVgHAPQgGAOgOAJQgOAJgSAAIgFAAIAABTgAgQABQANAAAFgFQAIgFADgKQADgKAAgMQAAgUgIgKQgIgMgQAAg");
	this.shape_2.setTransform(191.3,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBrQgNgFgGgNQgHgNAAgXIAAikIAeAAIAACkIACAOQACAIAEAFQAFAFAIAAQAIAAAFgFQAFgFACgIIABgOIAAikIAfAAIAACkQAAAXgHANQgGANgMAFQgMAFgPAAQgOAAgLgFg");
	this.shape_3.setTransform(178.8,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBoQgMgJgFgRQgGgQgCgVQgCgUAAgVQAAgVADgVQACgUAHgQQAGgQAMgKQALgJAQAAQATAAAMAKQAMAKAGAQQAFAQACAUQACAVAAAUQAAAWgDAWQgCAUgGAQQgHAQgLAJQgLAKgSgBQgSAAgMgKgAgMhNQgGAIgDAUQgEAVAAAgQAAAXACATQACASAGALQAGAMAJAAQALAAAFgMQAGgLACgWQACgVAAgaQAAgZgCgQQgCgQgEgIQgDgJgFgEQgFgDgFAAQgGAAgGAJg");
	this.shape_4.setTransform(165.8,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBnQgOgMgGgZQgIgZABgpIABgdQABgPADgOQAEgQAHgMQAGgMAMgHQALgIAPAAQAUAAANAMQAOANAGAZIgfAKQgCgRgHgIQgGgIgHAAQgHAAgGAIQgGAGgDANQgDAMgCAPQgCAPAAAQQAAAXADAUQACAVAHALQAGANAKAAQAIAAAFgGQAGgGADgKQAEgKABgLIAeALQgDARgGANQgHAOgMAIQgMAHgSAAQgSABgNgMg");
	this.shape_5.setTransform(152.9,32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BuIAAjbIAjAAQAUAAAOAKQAOAJAJAQQAIAQAEATQADAVAAAUQAAARgDATQgDATgIARQgIAPgOALQgOAKgUAAgAgXBUQASAAAJgLQAKgLAEgUQAEgTAAgXQAAgogMgVQgKgVgXgBg");
	this.shape_6.setTransform(133.7,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBuIgJgtIguAAIgJAtIgdAAIAujbIAdAAIAyDbgAASAoIgShjIAAAAIgTBjIAlAAg");
	this.shape_7.setTransform(120.5,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBoQgMgJgFgRQgGgQgCgVQgCgUAAgVQAAgVADgVQACgUAHgQQAGgQAMgKQALgJAQAAQATAAAMAKQAMAKAGAQQAFAQACAUQACAVAAAUQAAAWgDAWQgCAUgGAQQgHAQgLAJQgLAKgSgBQgSAAgMgKgAgMhNQgGAIgDAUQgEAVAAAgQAAAXACATQACASAGALQAGAMAJAAQALAAAFgMQAGgLACgWQACgVAAgaQAAgZgCgQQgCgQgEgIQgDgJgFgEQgFgDgFAAQgGAAgGAJg");
	this.shape_8.setTransform(107.5,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBuIAAjbIAeAAIAADAIAwAAIAAAbg");
	this.shape_9.setTransform(97,32.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVBuIgriKIAAAAIAACKIgdAAIAAjbIAeAAIArCKIABAAIAAiKIAdAAIAADbg");
	this.shape_10.setTransform(84.9,32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWBuIgWiaIAAAAIgVCaIgdAAIgmjbIAgAAIAVCaIABAAIAUiaIAdAAIAVCaIAAAAIAWiaIAfAAIgmDbg");
	this.shape_11.setTransform(69.4,32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeBoQgMgJgFgRQgGgQgCgVQgCgUAAgVQAAgVADgVQACgUAHgQQAGgQAMgKQALgJAQAAQATAAAMAKQAMAKAGAQQAFAQACAUQACAVAAAUQAAAWgDAWQgCAUgGAQQgHAQgLAJQgLAKgSgBQgSAAgMgKgAgMhNQgGAIgDAUQgEAVAAAgQAAAXACATQACASAGALQAGAMAJAAQALAAAFgMQAGgLACgWQACgVAAgaQAAgZgCgQQgCgQgEgIQgDgJgFgEQgFgDgFAAQgGAAgGAJg");
	this.shape_12.setTransform(53.8,32.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BuIAAjbIAjAAQAUAAAOAKQAOAJAJAQQAIAQAEATQADAVAAAUQAAARgDATQgDATgIARQgIAPgOALQgOAKgUAAgAgXBUQASAAAJgLQAKgLAEgUQAEgTAAgXQAAgogMgVQgKgVgXgBg");
	this.shape_13.setTransform(41.1,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(51));

	// btn
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#68B240").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_14.setTransform(128,31);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7A9937").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_15.setTransform(128,31);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8D7F2E").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_16.setTransform(128,31);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F6625").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_17.setTransform(128,31);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B14C1B").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_18.setTransform(128,31);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C33312").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_19.setTransform(128,31);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D61909").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_20.setTransform(128,31);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E80000").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_21.setTransform(128,31);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DA1407").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_22.setTransform(128,31);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC280E").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_23.setTransform(128,31);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BD3B15").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_24.setTransform(128,31);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AF4F1C").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_25.setTransform(128,31);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A16324").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_26.setTransform(128,31);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#93772B").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_27.setTransform(128,31);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#848A32").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_28.setTransform(128,31);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#769E39").s().p("AwSEYQg4gBgBhhIAAlrQABhiA4AAMAgkAAAQA5AAAABiIAAFrQAABhg5ABg");
	this.shape_29.setTransform(128,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_14}]},6).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},17).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_14}]},1).wait(12));

	// Layer 3
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AwdE/QhWAAABhdIAAnDQgBheBWABMAg6AAAQBWgBABBeIAAHDQgBBdhWAAg");
	this.shape_30.setTransform(128.3,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,-0.6,228,64);


(lib.copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgUCVIAAgrIApAAIAAArgAgJBLIgRjfIA0AAIgQDfg");
	this.shape.setTransform(207.9,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgdBlQgPgHgJgPQgJgOgBgVIApAAQABAJAFAIQAFAHALAAQAIAAAIgGQAGgGABgLQAAgIgFgHQgEgGgNgFIgSgHQgVgIgKgNQgMgPgBgVQABgTAIgOQAJgOAOgHQAOgIAQgBQARABAOAIQAOAIAHAOQAIAOAAASIgoAAQgBgLgGgGQgGgFgIAAQgJABgGAFQgFAHAAAIQgBAGAEAGQADAGAMAEIAYAKQAXAKAJANQAKAQgBATQAAASgIAPQgJAOgNAIQgPAJgSAAQgPABgOgIg");
	this.shape_1.setTransform(195.4,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgoCRQgKgFgFgKQgEgHgCgLQgCgKAAgSIAAhRQAAgUACgMQABgLAEgGQAFgJAJgFQAJgFAPgBQANAAAIAGQAKAGAHAKIABAAIAAhpIArAAIAAEpIgrAAIAAgUQgIAKgJAGQgHAGgPAAQgNAAgJgFgAgPgPQgFAHAAAJIAABNQAAAOAFAHQAFAIAKAAQAJAAAGgHQAFgHABgMIAAhRQgBgKgFgGQgGgHgJAAQgLAAgEAIg");
	this.shape_2.setTransform(179.8,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgwBrIAAjTIArAAIAAAXQAKgMANgGQANgHASAAIAAAtIgGgCIgHAAQgJAAgKAEQgKAEgHAKQgFALAAARIAAB8g");
	this.shape_3.setTransform(166.7,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgnBoQgKgEgIgNQgGgMgBgXQAAgYAFgQQAHgPAOgHQAPgJAYAAIAKABIALAAIAAgVQAAgMgEgGQgGgIgLABQgHAAgHAFQgHAFgCALIgpAAQABgOAEgMQAGgLAIgKQAIgIAMgEQAMgGANAAQASAAAOAIQAPAIAIAOQAJAQAAAWIAACSIgrAAIAAgWIgBAAQgHAMgKAGQgGAHgQgBQgKABgLgFgAgMATQgJAIAAAQQAAANAGAHQAGAHAJAAQAKABAGgIQAGgGAAgOIAAgcIgGgBIgGgBQgMAAgKAGg");
	this.shape_4.setTransform(152,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgeCSQgQgHgLgQQgLgPAAgbIAAijQAAgTAJgQQAJgPAPgJQAQgKATABQAUgBAPAKQAPAJAKAQQAIAQABAVIAAAQIgrAAIAAgNQAAgNgIgKQgGgIgMgBQgOAAgGAKQgFAKAAAPIAACXQAAANAGAJQAFAJAOAAQAFAAAGgDQAGgCAFgIQAEgGAAgMIAAgOIArAAIAAASQgBATgIAPQgKAQgPAJQgPAKgUAAQgOAAgQgFg");
	this.shape_5.setTransform(136,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAbCKQgTAAgJgIQgMgHgFgMQgFgLAAgMIAAh/IgVAAIAAgiIAVAAIAAhAIApAAIAABAIAbAAIAAAiIgbAAIAAB0QAAAKADAEQADAFAGABQAFABAKAAIAAAog");
	this.shape_6.setTransform(239.7,-20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgaCVIAAixIgUAAIAAgiIAUAAIAAgdQABgVAIgMQAHgMALgHQAMgFAOAAIAUAAIAAAoIgTAAQgGAAgDAFQgEADAAAHIAAAfIAgAAIAAAiIggAAIAACxg");
	this.shape_7.setTransform(231.2,-21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUCVIAAjTIApAAIAADTgAgUhpIAAgrIApAAIAAArg");
	this.shape_8.setTransform(222.3,-21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AggCPQgRgIgKgQQgLgQAAgZIAAibQAAgZALgQQAKgRARgIQAQgHAQAAQASAAAQAHQAQAIALARQAKAQAAAZIAAAOIgqAAIAAgOQgBgQgIgHQgIgIgMAAQgKAAgJAIQgIAHAAAQIAACbQAAAQAIAHQAJAIAKAAQAMAAAIgIQAIgHABgQIAAg4IggAAIAAgjIBKAAIAABbQAAAZgKAQQgLAQgQAIQgQAIgSAAQgQAAgQgIg");
	this.shape_9.setTransform(209.4,-21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("Ag/CWIAAkpIArAAIAAAUQAIgKAJgGQAGgGAQAAQANAAAJAFQAKAFAFAKQAEAHACALQACALAAARIAABRQAAAUgCAMQgBALgEAGQgFAJgJAFQgJAGgPAAQgNAAgIgGQgKgGgHgKIgBAAIAABpgAgOhjQgGAHAAAMIAABRQAAAKAGAGQAGAHAIAAQAMAAAEgIQAFgHAAgJIAAhNQAAgNgFgIQgFgIgLAAQgIAAgGAHg");
	this.shape_10.setTransform(184.5,-13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgnBmQgKgFgHgLQgGgMgBgTIAAihIArAAIAACRQAAAMAGAHQAFAGAJAAQALAAAFgHQAFgIAAgOIAAiNIArAAIAADTIgrAAIAAgVIgBAAQgHAKgJAHQgIAGgPAAQgKAAgKgFg");
	this.shape_11.setTransform(168.2,-17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAcCVIgmhcIgUAgIAAA8IgrAAIAAkpIArAAIAACxIABAAIAxhbIAsAAIg0BUIA+B/g");
	this.shape_12.setTransform(145.1,-21.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AghBkQgOgIgHgOQgFgJgCgKQgBgMAAgNIAAhEQAAgNABgKQACgMAFgHQAHgPAOgIQAPgIASgBQATABAPAIQAOAKAHAPQAJAPgBAUIgrAAQABgNgGgGQgFgHgKABQgJgBgFAHQgGAGABAMIAABUQgBALAGAFQAFAGAJAAQAMgBAEgGQAEgIAAgHIArAAQAAANgEAMQgFAMgIAIQgJAJgLAGQgLAEgPAAQgSABgPgJg");
	this.shape_13.setTransform(128.7,-17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUCVIAAjTIApAAIAADTgAgUhpIAAgrIApAAIAAArg");
	this.shape_14.setTransform(116.4,-21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("Ag/CWIAAkpIArAAIAAAUQAIgKAJgGQAGgGAQAAQANAAAJAFQAKAFAFAKQAEAHACALQACALAAARIAABRQAAAUgCAMQgBALgEAGQgFAJgJAFQgJAGgPAAQgNAAgIgGQgKgGgHgKIgBAAIAABpgAgOhjQgGAHAAAMIAABRQAAAKAGAGQAGAHAIAAQAMAAAEgIQAFgHAAgJIAAhNQAAgNgFgIQgFgIgLAAQgIAAgGAHg");
	this.shape_15.setTransform(104.3,-13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUgjIApAAIAAApIgpAeg");
	this.shape_16.setTransform(257.2,-49.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AggBkQgPgIgHgOQgFgJgBgKQgCgMAAgNIAAhEQAAgNACgKQABgMAFgHQAHgPAPgIQAOgIASgBQATABAPAIQAOAKAHAPQAIAOAAATIAAA5IhSAAIAAAcQAAALAFAFQAGAFAIABQALgBAFgGQAEgIAAgHIArAAQAAANgEAMQgFAMgIAIQgIAJgMAGQgMAEgOAAQgSABgOgJgAgOg6QgFAGAAAMIAAAYIAnAAIAAgYQAAgMgFgGQgGgHgJABQgIgBgGAHg");
	this.shape_17.setTransform(245.5,-59.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("ABABrIAAiRQAAgMgGgGQgFgHgKAAQgMAAgFAHQgFAIAAAOIAACNIgpAAIAAiRQAAgMgFgGQgGgHgKAAQgMAAgFAHQgEAIAAAOIAACNIgrAAIAAjTIArAAIAAAVIABAAQAGgKAKgHQAJgGAPAAQAOAAAHAHQAKAGAFAIQAIgJAKgGQAKgGARAAQALAAAKAFQALAFAHALQAHAMAAATIAAChg");
	this.shape_18.setTransform(225.4,-59.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUCVIAAjTIApAAIAADTgAgUhpIAAgrIApAAIAAArg");
	this.shape_19.setTransform(209.1,-63.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAbCKQgTAAgJgIQgMgHgFgMQgFgLAAgMIAAh/IgVAAIAAgiIAVAAIAAhAIApAAIAABAIAbAAIAAAiIgbAAIAAB0QAAAKADAEQADAFAGABQAFABAKAAIAAAog");
	this.shape_20.setTransform(200.8,-62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgtCVIgLAAIAAgpIAJAAQAIABAGgEQAFgDAEgNQAFgLAEgZIg6jJIAuAAIAbCFIABAAIAdiFIAsAAIg9D4QgIAcgOALQgPAKgTAAIgCAAg");
	this.shape_21.setTransform(189.2,-54.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAVBrIAAiRQAAgMgGgGQgFgHgKAAQgKAAgFAHQgFAIAAAOIAACNIgrAAIAAjTIArAAIAAAVIABAAQAHgKAJgHQAIgGAOAAQALAAAKAFQAKAFAHALQAGAMABATIAAChg");
	this.shape_22.setTransform(173.6,-59.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgmBoQgLgEgHgNQgIgMAAgXQAAgYAFgQQAHgPAOgHQAPgJAYAAIAKABIALAAIAAgVQAAgMgEgGQgFgIgMABQgHAAgHAFQgGAFgDALIgpAAQABgOAEgMQAGgLAIgKQAIgIAMgEQANgGAMAAQASAAAOAIQAPAIAIAOQAJAQAAAWIAACSIgrAAIAAgWIgBAAQgIAMgIAGQgIAHgPgBQgKABgKgFgAgLATQgKAIAAAQQAAANAGAHQAGAHAJAAQAKABAGgIQAGgGAAgOIAAgcIgGgBIgGgBQgMAAgJAGg");
	this.shape_23.setTransform(157.5,-59.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("Ag/CWIAAkpIArAAIAAAUQAIgKAJgGQAGgGAQAAQANAAAJAFQAKAFAFAKQAEAHACALQACALAAARIAABRQAAAUgCAMQgBALgEAGQgFAJgJAFQgJAGgPAAQgNAAgIgGQgKgGgHgKIgBAAIAABpgAgOhjQgGAHAAAMIAABRQAAAKAGAGQAGAHAIAAQAMAAAEgIQAFgHAAgJIAAhNQAAgNgFgIQgFgIgLAAQgIAAgGAHg");
	this.shape_24.setTransform(133.9,-55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AggBkQgPgIgHgOQgFgJgBgKQgCgMAAgNIAAhEQAAgNACgKQABgMAFgHQAHgPAPgIQAOgIASgBQATABAOAIQAPAIAHAPQAFAHABAMQACAKAAANIAABEQAAANgCAMQgBAKgFAJQgHAOgPAIQgOAJgTgBQgSABgOgJgAgOg6QgFAGAAAMIAABRQAAAMAFAHQAGAFAIABQAJgBAGgFQAFgHAAgMIAAhRQAAgMgFgGQgGgHgJABQgIgBgGAHg");
	this.shape_25.setTransform(118,-59.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAVCVIAAiTQAAgKgGgGQgFgIgKABQgKAAgFAHQgFAIAAAMIAACPIgrAAIAAkpIArAAIAABrIABAAQAHgLAJgGQAIgGAOgBQALAAAKAGQAKAEAHAMQAGAMABATIAAChg");
	this.shape_26.setTransform(102,-63.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgeBlQgOgHgIgPQgJgOgCgVIApAAQABAJAFAHQAFAIALAAQAJAAAGgGQAIgGAAgLQAAgIgEgHQgGgGgLgFIgTgHQgVgIgLgNQgLgPAAgVQAAgTAJgOQAIgOAOgHQAPgIAPgBQARABANAIQAOAIAIAOQAIAOAAASIgoAAQgBgLgGgGQgGgFgIAAQgJABgFAFQgGAHAAAIQAAAGADAGQADAGAMAEIAYAKQAXAKAKANQAIAQABATQgBASgIAPQgIAOgPAIQgOAJgSAAQgQABgOgIg");
	this.shape_27.setTransform(86.5,-59.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgnBmQgKgFgHgLQgGgMgBgTIAAihIArAAIAACRQAAAMAGAHQAFAGAJAAQALAAAFgHQAFgIAAgOIAAiNIArAAIAADTIgrAAIAAgVIgBAAQgHAKgJAHQgIAGgPAAQgKAAgKgFg");
	this.shape_28.setTransform(231.9,-100.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AggBkQgPgIgHgOQgFgJgBgKQgCgMAAgNIAAhEQAAgNACgKQABgMAFgHQAHgPAPgIQAOgIASgBQATABAOAIQAPAIAHAPQAFAHABAMQACAKAAANIAABEQAAANgCAMQgBAKgFAJQgHAOgPAIQgOAJgTgBQgSABgOgJgAgOg6QgFAGAAAMIAABRQAAAMAFAHQAGAFAIABQAJgBAGgFQAFgHAAgMIAAhRQAAgMgFgGQgGgHgJABQgIgBgGAHg");
	this.shape_29.setTransform(216,-101);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgtCVIgLAAIAAgpIAJAAQAIABAGgEQAFgDAEgNQAFgLAEgZIg6jJIAuAAIAbCFIABAAIAciFIAtAAIg9D4QgIAcgOALQgPAKgTAAIgCAAg");
	this.shape_30.setTransform(200.8,-96.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AggBkQgPgIgHgOQgFgJgBgKQgCgMAAgNIAAhEQAAgNACgKQABgMAFgHQAHgPAPgIQAOgIASgBQATABAPAIQAOAKAHAPQAIAOAAATIAAA5IhSAAIAAAcQAAALAFAFQAGAFAIABQALgBAFgGQAEgIAAgHIArAAQAAANgEAMQgFAMgIAIQgIAJgMAGQgMAEgOAAQgSABgOgJgAgOg6QgFAGAAAMIAAAYIAnAAIAAgYQAAgMgFgGQgGgHgJABQgIgBgGAHg");
	this.shape_31.setTransform(177.8,-101);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgwBrIAAjTIArAAIAAAXQAKgMANgGQANgHASAAIAAAtIgGgCIgHAAQgJAAgKAEQgKAEgHAKQgFALAAARIAAB8g");
	this.shape_32.setTransform(165.1,-101.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AggBkQgPgIgHgOQgFgJgBgKQgCgMAAgNIAAhEQAAgNACgKQABgMAFgHQAHgPAPgIQAOgIASgBQATABAOAIQAPAIAHAPQAFAHABAMQACAKAAANIAABEQAAANgCAMQgBAKgFAJQgHAOgPAIQgOAJgTgBQgSABgOgJgAgOg6QgFAGAAAMIAABRQAAAMAFAHQAGAFAIABQAJgBAGgFQAFgHAAgMIAAhRQAAgMgFgGQgGgHgJABQgIgBgGAHg");
	this.shape_33.setTransform(150.6,-101);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgaCVIAAixIgUAAIAAgiIAUAAIAAgdQABgVAIgMQAHgMALgHQAMgFAOAAIAUAAIAAAoIgTAAQgGAAgDAFQgEADAAAHIAAAfIAgAAIAAAiIggAAIAACxg");
	this.shape_34.setTransform(138.5,-105.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AggBkQgPgIgHgOQgFgJgBgKQgCgMAAgNIAAhEQAAgNACgKQABgMAFgHQAHgPAPgIQAOgIASgBQATABAPAIQAOAKAHAPQAIAOAAATIAAA5IhSAAIAAAcQAAALAFAFQAGAFAIABQALgBAFgGQAEgIAAgHIArAAQAAANgEAMQgFAMgIAIQgIAJgMAGQgMAEgOAAQgSABgOgJgAgOg6QgFAGAAAMIAAAYIAnAAIAAgYQAAgMgFgGQgGgHgJABQgIgBgGAHg");
	this.shape_35.setTransform(125.7,-101);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AhECVIAAkpIA/AAQAaAAAQALQARAKAIASQAHARAAATIAAALQAAARgEAJQgDALgGAGQgHAHgKAGQAQAGAHANQAHAPAAAXIAAAQQAAAogTAVQgUAVgnAAgAgZBqIATAAQAPAAAHgGQAIgHADgLQACgMAAgOQAAgPgDgKQgDgKgIgGQgIgEgNAAIgTAAgAgZgaIATAAQATABAIgLQAIgLAAgUQAAgVgJgKQgIgJgTgBIgSAAg");
	this.shape_36.setTransform(109,-105.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.1,-136.7,202,184.4);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiChIgqhtIgLgdIgMggQgFgQgDgMIgBAAIADA5QABAmAAAvIAAA4IhAAAIAAlBIBDAAIAsB0IAKAaIAMAdIAKAdIABAAIgDglIgDgzQgCgdAAgfIAAg0IBBAAIAAFBg");
	this.shape.setTransform(32.1,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYCiIgFgQIgGgcIgFggQgCgTgEgLQgCgKgGgEQgGgEgIAAIgHAAIAAB8IhKAAIAAk8QARgEATgBQATgCAUAAQAaAAAYAFQAXAFASAPQAPAOAGAQQAGARgBAVQAAAZgLAVQgNAWgZAKIAAABQAQAHAJAPQAJAPAEAXIAHAkIAIAhQADAPAEAHgAgVhnIgGACIAABUIAKAAQARgBAIgNQAJgMAAgSQAAgSgIgLQgHgMgQgBIgHAAg");
	this.shape_1.setTransform(9.3,-12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlChIgLg/IgyAAIgLA/IhIAAIBElBIBYAAIA8FBgAAUAoIgIg7IgDgXIgEgbIgDgXIgBAAIgBAYIgEAbIgDAWIgKA7IAlAAg");
	this.shape_2.setTransform(-14.1,-12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhLChIAAlBICSAAIAABAIhIAAIAAA9IBFAAIAAA7IhFAAIAABJIBNAAIAABAg");
	this.shape_3.setTransform(-33.5,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-45.1,92.1,62.8);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGIAAAAIgLAZIgJgGIARgWIgBgBIgaAEIAAgKIAaADIgQgXIAKgFIAKAYIAAAAIALgZIAKAGIgQAXIAAAAIAagDIAAAKIgagEIAAABIARAWIgLAGg");
	this.shape.setTransform(107.4,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdBEIAAhOQAAgKgCgJQgDgJgGgEQgGgGgKAAQgJAAgIAHQgIAHgDAKIgBAGIAAAGIAABQIgYAAIAAhhIAAgTIgBgRIAVAAIABAVIABAAQAFgJAKgHQAKgHANgBQAKABAKAEQAKAFAGAMQAHAMABAVIAABRg");
	this.shape_1.setTransform(96.6,-7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABGQgQAAgNgIQgOgIgHgQQgIgPAAgXQAAgVAIgQQAIgQAOgIQAOgIAPAAQARAAANAJQANAIAIAQQAHAPAAAVQAAAYgJAQQgJAPgOAIQgMAHgOAAIgBAAgAgTgqQgIAIgEAMQgDALAAALQAAAOAEALQAEAMAIAHQAIAIAKAAQALAAAIgIQAIgHAEgMQAEgMAAgNQAAgHgCgJQgBgJgFgIQgEgIgHgFQgGgEgKgBQgLABgIAIg");
	this.shape_2.setTransform(82.5,-7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4BgIAAiRIAAgYIgBgTIAVAAIABAVIABAAQAHgMAKgGQALgGAMAAQAPAAAMAJQAMAIAGAPQAHAQAAAVQAAAZgIAOQgIAPgMAIQgNAHgPAAQgKAAgJgEQgKgGgFgJIgBAAIAABIgAgThDQgJAHgDANIgBAEIgBAFIAAAbIABAGIABAFQADALAJAHQAJAGAKAAQAKAAAIgGQAIgHAEgLQAEgKAAgQQAAgNgEgLQgEgMgHgGQgIgIgLABQgKgBgJAJg");
	this.shape_3.setTransform(68.6,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdA/QgKgFgGgMQgGgNAAgWIAAhPIAXAAIAABMQAAASAGALQAGAMAPAAQAGAAAGgDQAFgEAEgFQAEgEACgFIABgGIABgHIAAhTIAXAAIAABhIAAAUIABARIgUAAIgCgUIAAAAIgJAKQgFAFgIAEQgIADgJAAIgCABQgKAAgIgGg");
	this.shape_4.setTransform(53.9,-7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABGQgQAAgNgIQgOgIgHgQQgIgPAAgXQAAgVAIgQQAIgQAOgIQAOgIAPAAQARAAANAJQANAIAIAQQAHAPAAAVQAAAYgJAQQgJAPgOAIQgMAHgOAAIgBAAgAgTgqQgIAIgEAMQgDALAAALQAAAOAEALQAEAMAIAHQAIAIAKAAQALAAAIgIQAIgHAEgMQAEgMAAgNQAAgHgCgJQgBgJgFgIQgEgIgHgFQgGgEgKgBQgLABgIAIg");
	this.shape_5.setTransform(39.9,-7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA9QgOgIgIgPQgIgQAAgVQAAgTAJgQQAHgQAPgJQAPgKATAAQAJAAAIACQAJACAEADIgFASIgKgEQgHgCgIAAQgOAAgIAIQgJAHgFALQgFAMAAAMQAAAYAMANQALANASAAQAJAAAGgBQAGgCAFgCIADASQgFACgIACQgJADgMAAQgQAAgOgJg");
	this.shape_6.setTransform(27.5,-7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBiIAAjDIAVAAIAADDg");
	this.shape_7.setTransform(13,-10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBBQgIgGgFgJQgEgIAAgLQAAgZATgKQAUgNAhAAIAAgDQAAgHgCgHQgCgHgGgFQgGgFgKAAQgJAAgIADQgIACgHAEIgFgQQAHgFALgDQALgDAKAAQASABAKAHQALAHAEAMQAEAMAAAOIAAAzIAAARIACAPIgVAAIgCgQIgBAAQgFAIgKAFQgJAGgLAAQgMAAgJgFgAABAAQgKACgIAGQgIAHAAAOQAAAMAGAFQAHAGAIAAQAKAAAHgGQAIgHACgJIABgEIAAgEIAAgWQgLAAgMAAg");
	this.shape_8.setTransform(3.3,-7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABBSQgEgDgFgEQgEgGgCgIQgDgJAAgMIAAhJIgTAAIAAgSIATAAIAAgZIAWgIIAAAhIAgAAIAAASIggAAIAABJQAAAMAEAHQAEAGAJAAIAHgBIAFAAIABASIgIABIgMABQgIABgGgDg");
	this.shape_9.setTransform(-7,-9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBdIAAiFIAVAAIAACFgAgJhDQgEgEAAgGQAAgHAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAHQAAAGgEAEQgDAFgHAAQgFAAgEgFg");
	this.shape_10.setTransform(-14.3,-10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBfQgLgDgHgFIAFgSQAGAEAJADQAJACALABQAQAAAKgLQAMgKAAgYIAAgPIgBAAQgFAJgJAGQgKAGgMAAQgPAAgMgJQgLgJgIgPQgGgMAAgUQAAgXAIgQQAIgQANgIQAMgIAPAAQAHAAAIADQAHADAFAFIAIAKIAAAAIABgTIAVAAIgBARIAAAWIAABMQAAAYgEAOQgFAPgJAIQgIAIgMAEQgMADgLAAQgLAAgLgCgAgXg/QgJANgBAYQABAPAEALQAEAJAIAGQAIAGAJAAQAJAAAIgFQAJgGADgKIACgHIABgGIAAgdIgBgGIgBgFQgDgKgHgHQgIgHgMAAQgOAAgKAOg");
	this.shape_11.setTransform(-24.8,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKBdIAAiFIAVAAIAACFgAgJhDQgEgEAAgGQAAgHAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_12.setTransform(-34.7,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfBbQgMgIgGgPQgHgQgBgVQABgXAHgOQAIgQAMgIQANgJAOAAQAMAAAJAFQAJAGAEAIIABAAIAAhPIAYAAIAACiIAAARIAAARIgUAAIgBgVIgCAAQgEAKgKAGQgLAIgNgBQgPABgMgJgAgQgNQgIAHgFAKQgDALAAAPQAAAOADALQAEAMAIAGQAIAIAKgBQAKAAAJgGQAIgHAEgOIABgFIAAgFIAAgbIAAgGIgBgEQgCgKgJgHQgIgJgMAAQgKAAgHAHg");
	this.shape_13.setTransform(-45.4,-10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdBiIAAhQQAAgLgDgHQgDgIgGgFQgGgFgKAAQgIAAgIAHQgIAGgDAJIgBAFIgBAGIAABTIgXAAIAAjDIAXAAIAABRIABAAIAHgJIAJgHIAKgEQAEgCAHAAQAJAAAKAFQAJAFAHAMQAHAMAAATIAABTg");
	this.shape_14.setTransform(-64.8,-10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AABBSQgEgDgFgEQgEgGgCgIQgDgJAAgMIAAhJIgTAAIAAgSIATAAIAAgZIAWgIIAAAhIAgAAIAAASIggAAIAABJQAAAMAEAHQAEAGAJAAIAHgBIAFAAIABASIgIABIgMABQgIABgGgDg");
	this.shape_15.setTransform(-76.4,-9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKBdIAAiFIAVAAIAACFgAgJhDQgEgEAAgGQAAgHAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_16.setTransform(-83.7,-10.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAeBDIgUhBIgGgTIgEgWIAAAAIgEAXIgGATIgUBAIgVAAIgniFIAYAAIARBCIAFAWIAEAVIABAAIAFgVIAGgWIAUhCIASAAIATBCIAGAVIAFAWIAAAAIAFgVIAFgWIARhCIAYAAIgpCFg");
	this.shape_17.setTransform(-96.3,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkBgQgMgCgIgGIAKgmQAGAEAJAEQAKACAKAAQALAAADgEQAFgEAAgJQABgHgFgGQgEgGgMgIQgQgJgJgHQgJgKgDgJQgDgJAAgJQAAgSAIgOQAIgOAOgIQAPgIARAAQANAAAKACIARAGIgJAnQgGgDgHgCQgGgDgIAAQgKABgEAEQgEAFAAAHQAAAGAEAGQADAFAOAHQAVAMAKANQAJAPAAASQgBATgIAOQgJAOgQAHQgPAHgTAAQgMAAgNgEg");
	this.shape_18.setTransform(146,-46.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvB+QgNgOgHgWQgHgYAAgbQABgiAIgVQAJgWAOgLQAOgLARAAQALAAAIAGQAIAFAEAIIABAAIAAhiIA0AAIAADaIAAAdIACAcIgtAAIgDgVIgBAAQgGAKgKAHQgKAHgNAAQgUAAgOgNgAgLgIQgGAIgCALQgDANAAAQQABAcAGAOQAHAPAJAAQAFAAAFgEQAFgDADgKIABgGIABgGIAAg0IAAgGIgBgGQgBgGgFgHQgFgHgHAAQgIAAgFAIg");
	this.shape_19.setTransform(131.3,-50);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvBjIAAiHIAAgeIgBgdIAtAAIADAdIAAAAQAGgQAKgIQALgIALAAIAGAAIAFABIAAA0IgFgBIgGAAQgJAAgJAGQgJAHgFAPIgBAIIgBAKIAABjg");
	this.shape_20.setTransform(118.6,-46.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BUQgPgRAAgaQAAgaANgPQANgPAVgHQAUgIAVAAIAAgEQAAgMgHgHQgHgHgMgBQgMAAgKADQgJADgJAGIgKgkQAJgFAQgEQAPgFATAAQAdAAAPAMQAPAMAGASQAFATgBAUIAABHIABAXIACAVIgvAAIgCgTIgBAAQgIALgMAGQgIAFgOAAQgWAAgOgQgAAAAFQgIADgHAHQgGAHgBANQABAPAGAGQAGAGAGAAQAFAAAGgEQAGgEADgJIABgEIAAgFIAAgiQgJAAgJADg");
	this.shape_21.setTransform(104.1,-46.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbB3QgWgRgLgeQgLgeAAgnQAAgjAJgbQAKgbAPgRQAQgRATgIQASgIAUAAQANABAKACQAJACAEADIgJAsQgEgDgGgBQgGgCgIAAQgPAAgNAJQgLAKgIAUQgHAUgBAgQABAgAHATQAHAUALAJQANAJAQAAIANgBIAMgDIAFAsQgGADgKACQgLACgOAAQgggBgXgRg");
	this.shape_22.setTransform(89.5,-49.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAB6QgJgDgGgHQgJgHgEgNQgFgNABgXIAAhaIgYAAIAAglIAYAAIAAgpIAygMIAAA1IAnAAIAAAlIgnAAIAABXQAAARAGAGQAGAGAIgBIAHAAIAGgBIABApIgNADIgTABQgLAAgJgDg");
	this.shape_23.setTransform(70.6,-48.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiCLIAAicIgbAAIAAglIAbAAIAAgIQAAgQADgQQAFgOAMgNQAIgJAKgEQANgEAOgBQAJABAJABIANADIgGAoIgHgBIgJAAQgNAAgGAJQgFAKAAANIAAAJIAiAAIAAAlIgiAAIAACcg");
	this.shape_24.setTransform(60.4,-50.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYCJIAAjBIAyAAIAADBgAgShXQgHgJAAgMQAAgOAIgHQAIgIAJAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgIAHgLABQgKgBgIgHg");
	this.shape_25.setTransform(50.5,-50.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOCCQgSgHgNgNQgRgRgJgcQgJgdAAgjQABgiAKgbQAJgaARgRQAQgRAUgIQASgIAWAAQAPABALACQALACAHADIgKAuQgFgDgIgCQgHgBgKAAQgSgBgPAKQgMAJgJAVQgIAUAAAhQAAAgAHAUQAHATALAJQAKAIAMAAIAHAAIAEgBIAAhBIgYAAIAAgpIBIAAIAACOIgPAFIgUADIgVACQgXAAgQgHg");
	this.shape_26.setTransform(37.3,-49.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVBjIAAh5QAAgNgEgJQgEgKgMAAQgEAAgFAFQgFAEgDAJIgCAHIgBALIAAB1Ig0AAIAAiHIAAgfIgBgcIAtAAIACAXIABAAQAHgMAMgHQALgHAPAAQAcABAMATQAMAUAAAhIAAB8g");
	this.shape_27.setTransform(14.7,-46.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAABkQgiAAgTgaQgUgaAAgwQAAghALgWQALgXARgLQARgKASAAQAXAAAQAMQARAMAIAXQAJAWAAAeQAAAdgHAUQgHAUgMALQgLALgNAFQgMAEgKAAIgCAAgAgMgyQgGAJgBAOQgCAOAAANQAAAQACAOQACAOAFAIQAGAIAHAAQAIAAAFgJQAFgJABgOQACgOAAgOQAAgNgCgOQgCgOgEgJQgFgJgJgBQgHABgFAJg");
	this.shape_28.setTransform(-2.1,-46.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkBgQgMgCgIgGIAKgmQAGAEAJAEQAKACAKAAQALAAADgEQAFgEAAgJQABgHgFgGQgEgGgMgIQgQgJgJgHQgJgKgDgJQgDgJAAgJQAAgSAIgOQAIgOAOgIQAPgIARAAQANAAAKACIARAGIgJAnQgGgDgHgCQgGgDgIAAQgKABgEAEQgEAFAAAHQAAAGAEAGQADAFAOAHQAVAMAKANQAJAPAAASQgBATgIAOQgJAOgQAHQgPAHgTAAQgMAAgNgEg");
	this.shape_29.setTransform(-21.6,-46.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAB6QgIgDgIgHQgIgHgEgNQgEgNgBgXIAAhaIgWAAIAAglIAWAAIAAgpIAzgMIAAA1IAmAAIAAAlIgmAAIAABXQAAARAGAGQAGAGAIgBIAHAAIAHgBIAAApIgOADIgSABQgMAAgIgDg");
	this.shape_30.setTransform(-33.3,-48.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAVBjIAAh5QAAgNgEgJQgEgKgLAAQgFAAgFAFQgFAEgDAJIgCAHIgBALIAAB1Ig0AAIAAiHIgBgfIgBgcIAtAAIADAXIABAAQAHgMANgHQAKgHAPAAQAcABAMATQANAUAAAhIAAB8g");
	this.shape_31.setTransform(-47.6,-46.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgYCJIAAjBIAyAAIAADBgAgShXQgHgJAAgMQAAgOAIgHQAIgIAJAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgIAHgLABQgKgBgIgHg");
	this.shape_32.setTransform(-60.3,-50.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAABkQgiAAgTgaQgUgaAAgwQAAghALgWQALgXARgLQARgKASAAQAXAAAQAMQARAMAIAXQAJAWAAAeQAAAdgHAUQgHAUgMALQgLALgNAFQgMAEgKAAIgCAAgAgMgyQgGAJgBAOQgCAOAAANQAAAQACAOQACAOAFAIQAGAIAHAAQAIAAAFgJQAFgJABgOQACgOAAgOQAAgNgCgOQgCgOgEgJQgFgJgJgBQgHABgFAJg");
	this.shape_33.setTransform(-72.3,-46.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhICJIAAjQIgBghIgBgdIAuAAIACAWIABAAQAGgMALgHQAJgGANAAQAWAAANAOQAOANAGAXQAGAXAAAbQAAAjgJAUQgJAXgOALQgPAKgRAAQgLAAgHgGQgIgGgEgHIgBAAIAABdgAgLhYQgFAFgCAHIgCAHIAAAHIAAA1IABAJIACAFQADAJAFADQAEAEAFAAQAHgBAFgIQAGgIACgLQADgNAAgPQAAgcgHgPQgGgOgKAAQgGAAgFAEg");
	this.shape_34.setTransform(-88.6,-42.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYCKIAAkTIAxAAIAAETg");
	this.shape_35.setTransform(-106.7,-50.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgxBLQgWgaAAgtQAAggAKgXQAKgXATgNQARgMAUAAQAgAAARAYQASAXAAAtIgBAPIgBAKIhaAAQAAAWAMALQAJAJASAAQALAAAKgCIARgFIAGAmQgKAEgOACQgOADgQAAQgmgBgUgYgAAYgRQAAgSgFgNQgFgNgMAAQgHAAgFAHQgFAHgDAKQgCAKAAAKIAsAAIAAAAg");
	this.shape_36.setTransform(-118.5,-46.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag7BPQgNgVABgnIAAh1IA0AAIAABvQAAATAFAMQAEALAKAAQAFAAAFgEQAEgEACgFIACgIIABgJIAAh7IA0AAIAACGIABAfIABAdIgtAAIgDgVIgBAAQgHAKgLAHQgKAHgPAAQgcAAgMgUg");
	this.shape_37.setTransform(-135,-46);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgjCLIAAicIgaAAIAAglIAaAAIAAgIQABgQAEgQQAEgOAMgNQAIgJAKgEQANgEAOgBQAJABAJABIANADIgGAoIgHgBIgJAAQgNAAgFAJQgHAKABANIAAAJIAiAAIAAAlIgiAAIAACcg");
	this.shape_38.setTransform(-148.1,-50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,-97.1,324,121.3);


(lib.cards_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Nike_2015_nodenomcopy();
	this.instance.parent = this;
	this.instance.setTransform(482,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ebay
	this.instance_1 = new lib.eBay_nodenom();
	this.instance_1.parent = this;
	this.instance_1.setTransform(669,-249);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lowes
	this.instance_2 = new lib.card_lowes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(669,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bass
	this.instance_3 = new lib.card_bassPro();
	this.instance_3.parent = this;
	this.instance_3.setTransform(481,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.8,-350,1002.8,541);


(lib.car_looping2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(4,29,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,27.6,43.5,43.5);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqoraICUivISSbLIABAAIAAgBIAVAAIAAArIgTAAIAAAAIAoAAIAAAeIh9AAIAAgBIghAAIAAAAIgmAAIAAgBIg2AAIgIACg");
	mask.setTransform(206.9,162.9);

	// Layer 1
	this.instance = new lib.car_looping2();
	this.instance.parent = this;
	this.instance.setTransform(271.6,274.4,1,1,0,0,0,26.3,46);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({x:274,y:271.1},0).to({x:174.6,y:117.7},41).to({_off:true},1).wait(59));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBBDBF").s().p("ALlRoIAOgJIAVAfIgOAKgAK7QpIANgJIAWAfIgOAJgAKQPqIAPgKIAUAgIgNAJgAJnOqIANgJIAVAfIgNAKgAI8NrIAOgKIAWAgIgPAKgAISMrIAOgJIAVAgIgOAJgAHoLsIAOgJIAVAgIgOAJgAG+KtIAOgKIAVAgIgOAKgAGTJtIAPgJIAUAgIgOAJgAFpIuIAOgJIAVAgIgNAJgAFAHvIANgKIAWAgIgPAKgAEVGvIAOgJIAWAgIgPAKgADrFwIAOgJIAVAgIgOAJgADBExIAOgKIAVAgIgOAKgACWDxIAPgJIAVAgIgPAKgABsCyIAPgJIAUAgIgNAJgABDBzIANgKIAWAhIgPAJgAAYA0IAOgKIAWAgIgPAKgAgQgJIAOgKIATAdIgOAKgAg6hJIAOgJIAVAfIgOAJgAhkiIIAOgJIAVAfIgOAJgAiPjHIAPgKIAUAfIgNAKgAi4kHIANgJIAVAfIgNAJgAjjlGIAOgJIAWAfIgPAJgAkNmFIAOgKIAVAfIgOAKgAk3nFIAOgJIAVAfIgOAJgAlhoEIAOgJIAVAfIgOAJgAmMpDIAPgKIAUAfIgOAKgAm2qDIAOgJIAVAfIgNAJgAnfrCIANgJIAWAfIgPAJgAoKsBIAOgKIAWAgIgPAJgAo0tBIAOgKIAVAgIgOAKgApeuAIAOgKIAVAgIgOAJgAqJvAIAPgJIAVAgIgPAJgAqzv/IAPgKIAUAhIgNAJgArcw+IANgKIAWAgIgOAKgAsHx+IAPgJIAVAgIgPAJg");
	this.shape.setTransform(86.4,-11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(221));

	// Layer 3
	this.instance_1 = new lib.ClipGroup_63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(183.7,131.2,1,1,0,0,0,106.1,131.2);

	this.instance_2 = new lib.ClipGroup_29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(203.5,157.3,1,1,0,0,0,5,3.9);

	this.instance_3 = new lib.ClipGroup_49();
	this.instance_3.parent = this;
	this.instance_3.setTransform(196.7,161.8,1,1,0,0,0,2.8,5.9);

	this.instance_4 = new lib.ClipGroup_52();
	this.instance_4.parent = this;
	this.instance_4.setTransform(196.7,161.8,1,1,0,0,0,1.9,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBBDBF").s().p("AL6SHIAOgJIAVAgIgOAKgALQRIIANgJIAWAgIgOAJgAKlQJIAPgKIAUAhIgNAJgAJ8PJIANgIIAVAfIgNAKgAJROKIAOgJIAWAfIgPAKgAInNLIAOgJIAVAfIgOAJgAH9MMIAOgJIAVAfIgOAJgAHTLNIAOgKIAVAfIgOAKgAGoKNIAPgJIAUAfIgOAJgAF+JOIAOgJIAVAfIgNAJgAFVIPIANgKIAWAfIgPAKgAEqHPIAOgJIAWAfIgPAKgAEAGQIAOgJIAVAfIgOAJgADWFRIAOgKIAVAfIgOAKgACrERIAPgJIAVAfIgPAKgACBDSIAPgJIAUAfIgNAJgABYCTIANgKIAWAgIgPAJgAAtBTIAOgJIAWAgIgPAJgAADAUIAOgKIAVAgIgOAJgAglgqIAOgJIAVAgIgOAJgAhPhpIAOgJIAVAgIgOAJgAh6ioIAPgKIAUAgIgNAKgAijjoIANgJIAVAgIgNAJgAjOknIAOgJIAWAgIgPAJgAj4lmIAOgKIAVAgIgOAKgAkimmIAOgJIAVAgIgOAJgAlMnlIAOgJIAVAgIgOAJgAl3okIAPgKIAUAgIgOAKgAmhpkIAOgJIAVAgIgNAJgAnKqjIANgJIAWAgIgPAJgAn1riIAOgKIAWAgIgPAKgAofsiIAOgJIAVAgIgOAKgApJthIAOgJIAVAfIgOAKgAp0ugIAPgJIAVAfIgPAJgAqevfIAPgKIAUAgIgNAJgArHweIANgKIAWAfIgOAKgAryxeIAPgJIAVAfIgPAJgAscydIAOgJIAVAfIgOAJg");
	this.shape_1.setTransform(181,130.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYF+IAAiqIlNAAIAAiuIFUmjICzAAIAAGzIBkAAIAACeIhkAAIAACqgAikA2IDBAAIAAj1IgCAAg");
	this.shape_2.setTransform(170.8,215.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Al1F+IH5r7IDyAAIn5L7g");
	this.shape_3.setTransform(236.1,215.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ALHTiIAAAAIgBAAMgZ+gnDIDyAAMAZ/AnDg");
	this.shape_4.setTransform(179.6,128.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(221));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ALHTiIAAAAIgBAAMgZ+gnDIDyAAMAZ/AnDg");
	this.shape_5.setTransform(92.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-127.2,292.3,389.7);


// stage content:
(lib._0717_GC_4X_mega_kings_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_256 = function() {
		//Mouse interactions  
		  
		canvas.addEventListener("mouseover", over.bind(this));  
		  
		function over()  
		{  
		  this.cta.gotoAndPlay("expand");  
		}  
		  
		canvas.addEventListener("mouseout", out.bind(this));  
		  
		function out()  
		{  
		  this.cta.gotoAndPlay("contract");  
		}  
		
		var target = this.cta;
		var tween = createjs.Tween.get(target, {
			loop: false
		})
			.to({
				y: target.y,
				x: canvas.width - 155
			}, 1500, createjs.Ease.bounceOut)
			;
	}
	this.frame_270 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(256).call(this.frame_256).wait(14).call(this.frame_270).wait(1));

	// cta
	this.cta = new lib.cta_btn();
	this.cta.parent = this;
	this.cta.setTransform(785.3,401.9,1,1,0,0,0,154,23);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(256).to({_off:false},0).wait(15));

	// cards
	this.instance = new lib.cards_new();
	this.instance.parent = this;
	this.instance.setTransform(-446.6,452.9,0.6,0.6,0,0,0,61,38.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).to({x:-226.6},12,cjs.Ease.get(-0.6)).wait(78));

	// copy3
	this.instance_1 = new lib.copy4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-58.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181).to({_off:false},0).to({y:151.9},12,cjs.Ease.get(-0.5)).wait(78));

	// copy
	this.instance_2 = new lib.copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(423.1,351.1,0.01,0.01,0,0,0,5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(138).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1},10,cjs.Ease.get(0.6)).wait(123));

	// copy
	this.instance_3 = new lib.copy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303.2,59.4,0.01,0.01,0,0,0,5,5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(138).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(123));

	// 4x_road
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(158.7,1123,2.4,2.4,0,0,0,106.1,131.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({_off:false},0).to({x:178.7,y:-17},56).wait(157));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("EgujgmvMBdHAAAMAAABNfMhdHAAAg");
	this.shape.setTransform(299,249);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(271));

	// headline
	this.instance_5 = new lib.Tween1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(297,247.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:267.6},6,cjs.Ease.get(1)).wait(52).to({y:242.6,alpha:0},12).to({_off:true},1).wait(200));

	// logos
	this.instance_6 = new lib.logos_all();
	this.instance_6.parent = this;
	this.instance_6.setTransform(70,438.1,0.01,0.01,0,0,0,5,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).to({regX:0,regY:0.1,scaleX:0.5,scaleY:0.5},6).wait(178));

	// disclaimer
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAIQgCgDgBgFQAAgEAEgDQACgDADAAQAEAAADADQACADAAAEQAAAFgCADQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(482.7,483.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAwQgFgCgDgCIADgMIAHAEQAEABAFAAQAFAAADgEQAEgDAAgHQAAgFgDgFQgCgEgGgFQgJgEgFgGQgEgHAAgIQgBgIAEgGQADgGAGgEQAGgDAGAAIAKABIAHAEIgEAMIgGgEIgHgBQgEABgDADQgDAEgBAFQAAAEADAEQACAEAGAEQAIAGAGAFQAFAHAAAKQAAAJgDAHQgFAGgGADQgHADgFAAQgGAAgFgBg");
	this.shape_2.setTransform(477.8,479.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBFIAAiJIANAAIAACJg");
	this.shape_3.setTransform(472.9,477.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBBIAAhfIANAAIAABfgAgFgvQgCgDgBgFQABgEACgDQADgCACAAQAEAAACACQACADABAEQAAAFgDADQgCACgEABQgDgBgCgCg");
	this.shape_4.setTransform(469.2,478);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAqQgHgIAAgMQAAgMAFgIQAGgFAJgEQAIgEALAAIAAgDQAAgKgDgGQgEgGgGAAIgJABIgHAEIgEgLQADgDAHgCIALgCQAOABAHAIQAGAKAAAQIAAAoIAAAMIABAKIgNAAIgBgKIgBAAQgEAGgEADQgFACgFAAQgJAAgGgHgAAFAAQgFAAgCACQgEACgDAEQgDAEgBAJQABAJAEADQADAFAFAAQACgBAFgDQAEgEABgHIAAgDIAAgCIAAgSIgHAAg");
	this.shape_5.setTransform(463.5,479.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJA9IgIgBQgCgBgDgDQgDgEgBgFQgCgGAAgKIAAg2IgLAAIAAgMIALAAIAAgVIAOgEIAAAZIASAAIAAAMIgSAAIAAA4QAAAJADADQADAEAEAAIADAAIADgBIABAMIgFABIgHAAg");
	this.shape_6.setTransform(457.5,478.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_7.setTransform(451.4,479.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWA5QgIgNAAgYQAAgRAEgKQAEgKAHgGQAGgFAIgBQADAAAFADQAFADADAGIAAAAIAAgzIAPAAIAABxIAAAHIABAJIAAAHIgNAAIgBgMIgBAAQgCAGgFAEQgFADgGAAQgMABgIgNgAgIgKQgEAFgBAHQgCAIAAAKQAAAKACAJQACAIADAFQAEAEAEABIAFgBQADgCACgDQADgEABgHIABgDIAAgDIAAgaIAAgDIAAgDQgBgGgEgGQgEgFgGAAQgEAAgEAFg");
	this.shape_8.setTransform(443.6,477.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAxIAAhGIAAgNIgBgMIAOAAIABAPIAAAAQACgHAEgFQAGgEAGgBIACABIACAAIAAAPIgCAAIgCAAQgHAAgFAGQgDAGgBAIIgBAFIAAAEIAAA0g");
	this.shape_9.setTransform(434.6,479.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAsQgHgFgEgLQgEgLAAgRQAAgQAEgLQAFgLAHgFQAIgFAGgBQAJABAHAFQAHAGAEAKQAEAMAAAPQAAASgFALQgEALgIAFQgHAEgHAAQgIAAgHgFgAgHggQgDAEgCAFQgCAGAAAGIgBALIABAMIACAMQACAGAEADQADAFADAAQAFAAADgFQADgDACgGQACgGAAgGIABgMIgBgLQAAgGgCgGQgCgFgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_10.setTransform(427.8,479.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNBFIAAhSIgLAAIAAgMIALAAIAAgGQABgIABgIQACgHAFgGQAEgFADgCQAGgBAEAAIAIAAIAFACIgDAMIgDgBIgGgBQgFAAgDAEQgDADgBAGIgBAMIAAAGIASAAIAAAMIgSAAIAABSg");
	this.shape_11.setTransform(422.3,477.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_12.setTransform(412.7,479.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAxIAAhGIAAgNIgBgMIAOAAIABAPIAAAAQACgHAEgFQAGgEAGgBIACABIACAAIAAAPIgCAAIgCAAQgHAAgFAGQgDAGgBAIIgBAFIAAAEIAAA0g");
	this.shape_13.setTransform(407,479.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAsQgHgFgEgLQgEgLAAgRQAAgQAEgLQAFgLAHgFQAIgFAGgBQAJABAHAFQAHAGAEAKQAEAMAAAPQAAASgFALQgEALgIAFQgHAEgHAAQgIAAgHgFgAgHggQgDAEgCAFQgCAGAAAGIgBALIABAMIACAMQACAGAEADQADAFADAAQAFAAADgFQADgDACgGQACgGAAgGIABgMIgBgLQAAgGgCgGQgCgFgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_14.setTransform(400.3,479.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAJA9IgIgBQgCgBgDgDQgDgEgBgFQgCgGAAgKIAAg2IgLAAIAAgMIALAAIAAgVIAOgEIAAAZIASAAIAAAMIgSAAIAAA4QAAAJADADQADAEAEAAIADAAIADgBIABAMIgFABIgHAAg");
	this.shape_15.setTransform(393.9,478.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAwQgFgCgDgCIADgMIAHAEQAEABAFAAQAEAAAEgEQAEgDAAgHQAAgFgDgFQgCgEgGgFQgJgEgFgGQgEgHgBgIQABgIADgGQAEgGAFgEQAGgDAGAAIAKABIAHAEIgEAMIgGgEIgHgBQgEABgEADQgCAEAAAFQAAAEACAEQADAEAEAEQAJAGAGAFQAGAHgBAKQAAAJgDAHQgFAGgGADQgGADgHAAQgFAAgFgBg");
	this.shape_16.setTransform(388.4,479.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_17.setTransform(378.8,479.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_18.setTransform(371.6,479.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTBDIgKgFIAEgNQADADAGABQAFACAFAAQAJgBAGgFQAFgHABgKQgBgKgEgGQgFgHgGgFIgLgHQgGgFgEgIQgEgHgBgIQAAgLAFgIQAEgIAIgEQAIgFAJAAQAGAAAFABQAFACADACIgEANIgGgDQgFgCgFAAQgGAAgDAEQgEADgCAEQgCAEAAAFQAAAGACAFQACAFAFAEIAJAIQAMAGAFAKQAGAJAAAMQAAALgFAIQgFAJgIAFQgJAEgJAAQgHAAgGgBg");
	this.shape_19.setTransform(364.3,477.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAIQgCgDAAgFQAAgEADgDQACgDADAAQAEAAADADQACADABAEQgBAFgCADQgCADgFAAQgDAAgDgDg");
	this.shape_20.setTransform(355.7,483.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdA4IAHgFIAGgHIAGgIIADgIIABgDIAAgCIAAgCIAAgCIgZhXIARAAIAMA4IACAKIAAAIIABAAIACgIIACgKIALg4IAQAAIgQA+QgFARgFAQQgGAQgGAMQgFAGgFAEIgIAEg");
	this.shape_21.setTransform(350.2,481.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGBFIAAiJIANAAIAACJg");
	this.shape_22.setTransform(344.8,477.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeBEIAAhnIAAgSIAAgMIAOAAIABAMIAAAAQAEgIAFgCQAFgEAEAAQANABAHAMQAIANAAAYQAAARgEAKQgFALgGAFQgHAFgIAAQgFAAgDgEQgFgDgCgEIAAAAIAAAwgAgGgzQgDADgCADQgCAEgBAFIAAADIAAAFIAAAYIAAAEIAAACQACAGADAFQACADADABIAEABQAFAAAEgFQAEgFABgIQACgHAAgKQAAgKgCgJQgCgIgDgEQgFgGgEABQgDAAgDACg");
	this.shape_23.setTransform(339.1,481.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeBEIAAhnIAAgSIAAgMIAOAAIAAAMIABAAQADgIAGgCQAFgEAEAAQANABAIAMQAHANAAAYQAAARgEAKQgFALgGAFQgHAFgIAAQgFAAgDgEQgEgDgDgEIAAAAIAAAwgAgGgzQgDADgCADQgCAEgBAFIAAADIAAAFIAAAYIAAAEIAAACQACAGADAFQACADADABIAEABQAFAAAEgFQAEgFABgIQACgHAAgKQAAgKgCgJQgCgIgDgEQgEgGgFABQgDAAgDACg");
	this.shape_24.setTransform(331.1,481.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAqQgHgIgBgMQABgMAGgIQAFgFAKgEQAHgEALAAIAAgDQAAgKgDgGQgDgGgIAAIgIABIgIAEIgDgLQADgDAHgCIALgCQAOABAHAIQAHAKAAAQIAAAoIAAAMIABAKIgPAAIgBgKIAAAAQgEAGgEADQgFACgEAAQgKAAgGgHgAAFAAQgFAAgCACQgFACgDAEQgCAEAAAJQAAAJADADQAEAFAEAAQAEgBADgDQAFgEABgHIABgDIAAgCIAAgSIgIAAg");
	this.shape_25.setTransform(323.1,479.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAwQgGgCgDgCIAEgMIAHAEQAEABAFAAQAEAAAEgEQAEgDAAgHQAAgFgCgFQgDgEgFgFQgKgEgFgGQgFgHAAgIQAAgIAEgGQAEgGAFgEQAGgDAGAAIAKABIAHAEIgEAMIgGgEIgHgBQgEABgEADQgDAEABAFQAAAEACAEQADAEAEAEQAJAGAGAFQAGAHAAAKQgBAJgEAHQgDAGgHADQgGADgHAAQgFAAgFgBg");
	this.shape_26.setTransform(313.6,479.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAOAxIAAg9IgBgLQgBgFgCgDQgDgEgGAAQgDAAgEAEQgEAEgCAIIAAAEIgBAFIAAA7IgPAAIAAhGIAAgOIgBgLIAOAAIABAMIAAAAQADgGAGgEQAFgDAGgBQAKAAAHAIQAGAIABASIAAA/g");
	this.shape_27.setTransform(306.6,479.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAsQgHgFgEgLQgEgLAAgRQAAgQAEgLQAFgLAHgFQAIgFAGgBQAJABAHAFQAHAGAEAKQAEAMAAAPQAAASgFALQgEALgIAFQgHAEgHAAQgIAAgHgFgAgHggQgDAEgCAFQgCAGAAAGIgBALIABAMIACAMQACAGAEADQADAFADAAQAFAAADgFQADgDACgGQACgGAAgGIABgMIgBgLQAAgGgCgGQgCgFgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_28.setTransform(298.8,479.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGBBIAAhfIANAAIAABfgAgFgvQgCgDgBgFQABgEACgDQADgCACAAQAEAAACACQACADABAEQAAAFgDADQgCACgEABQgDgBgCgCg");
	this.shape_29.setTransform(293.1,478);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAJA9IgIgBQgCgBgDgDQgDgEgBgFQgCgGAAgKIAAg2IgLAAIAAgMIALAAIAAgVIAOgEIAAAZIASAAIAAAMIgSAAIAAA4QAAAJADADQADAEAEAAIADAAIADgBIABAMIgFABIgHAAg");
	this.shape_30.setTransform(288.7,478.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOAlQgLgMAAgZQAAgMAFgLQAFgMAIgGQAHgHAMAAIAIAAIAFADIgCANIgFgCIgGgBQgIAAgEAFQgEAFgDAJQgCAIAAAIQAAARAGAKQAEAKALAAIAFgBIAGgDIACANIgHACIgJABQgOAAgJgMg");
	this.shape_31.setTransform(283.4,479.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGBBIAAhfIANAAIAABfgAgFgvQgCgDgBgFQABgEACgDQADgCACAAQAEAAACACQACADABAEQAAAFgDADQgCACgEABQgDgBgCgCg");
	this.shape_32.setTransform(278.2,478);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAxIAAhGIAAgNIgBgMIAOAAIABAPIAAAAQACgHAEgFQAGgEAGgBIACABIACAAIAAAPIgCAAIgCAAQgHAAgFAGQgDAGgBAIIgBAFIAAAEIAAA0g");
	this.shape_33.setTransform(274.4,479.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAJA9IgIgBQgCgBgDgDQgDgEgBgFQgCgGAAgKIAAg2IgLAAIAAgMIALAAIAAgVIAOgEIAAAZIASAAIAAAMIgSAAIAAA4QAAAJADADQADAEAEAAIADAAIADgBIABAMIgFABIgHAAg");
	this.shape_34.setTransform(268.9,478.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOAwQgGgCgCgCIADgMIAHAEQAEABAFAAQAFAAADgEQAEgDAAgHQAAgFgDgFQgCgEgGgFQgJgEgFgGQgEgHgBgIQABgIADgGQADgGAGgEQAGgDAGAAIAKABIAHAEIgEAMIgGgEIgHgBQgEABgEADQgCAEAAAFQgBAEADAEQADAEAEAEQAJAGAGAFQAGAHgBAKQAAAJgDAHQgEAGgHADQgGADgHAAQgFAAgFgBg");
	this.shape_35.setTransform(263.4,479.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_36.setTransform(257,479.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AARBDIgDgMIgEgVQgCgOgFgGQgEgGgJAAIgGAAIAAA7IgPAAIAAiCIALgDIAKAAQAKAAAGACQAIACAFAFQAFAGACAGQACAHABAIQAAANgGAIQgGAJgKACIAAABQAHACAEAHQAFAIACANIAFAXIACALgAgQg1IAAA0IAGAAQAKgBAGgHQAHgHAAgMQAAgMgGgHQgEgGgLgBIgEAAIgEABg");
	this.shape_37.setTransform(249.6,477.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGAIQgCgDgBgFQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAFgCADQgDADgEAAQgDAAgDgDg");
	this.shape_38.setTransform(240.1,483.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRAxIAAhGIAAgNIgBgMIAOAAIABAPIAAAAQACgHAEgFQAGgEAGgBIACABIACAAIAAAPIgCAAIgCAAQgHAAgFAGQgDAGgBAIIgBAFIAAAEIAAA0g");
	this.shape_39.setTransform(236,479.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_40.setTransform(229.5,479.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNBFIAAhSIgMAAIAAgMIAMAAIAAgGQAAgIACgIQACgHAFgGQAEgFADgCQAGgBAFAAIAGAAIAGACIgDAMIgEgBIgEgBQgGAAgDAEQgDADgBAGIgBAMIAAAGIARAAIAAAMIgRAAIAABSg");
	this.shape_41.setTransform(224.1,477.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgMBFIAAhSIgMAAIAAgMIAMAAIAAgGQgBgIACgIQACgHAFgGQAEgFAEgCQAFgBAEAAIAIAAIAEACIgCAMIgDgBIgGgBQgFAAgDAEQgDADgBAGIgBAMIAAAGIASAAIAAAMIgSAAIAABSg");
	this.shape_42.setTransform(219.6,477.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPAsQgHgFgEgLQgEgLAAgRQAAgQAEgLQAFgLAHgFQAIgFAGgBQAJABAHAFQAHAGAEAKQAEAMAAAPQAAASgFALQgEALgIAFQgHAEgHAAQgIAAgHgFgAgHggQgDAEgCAFQgCAGAAAGIgBALIABAMIACAMQACAGAEADQADAFADAAQAFAAADgFQADgDACgGQACgGAAgGIABgMIgBgLQAAgGgCgGQgCgFgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_43.setTransform(212.9,479.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_44.setTransform(202.4,479.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAkAxIAAg7IgBgMQgBgFgDgEQgDgEgFAAQgFAAgEAEQgEAEgCAHIgBAEIAAAFIAAA8IgMAAIAAg+IgCgKQgBgFgCgDQgDgEgGAAQgFAAgEAEQgEAEgCAIIAAAIIAAA8IgPAAIAAhGIAAgOIgBgLIANAAIABAMIAAAAQADgGAGgEQAFgDAJgBQAGAAAFAEQAEADADAIIAAAAIAEgGIAFgFIAHgDIAHgBQAKAAAGAIQAHAIAAATIAAA+g");
	this.shape_45.setTransform(192.5,479.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGBBIAAhfIANAAIAABfgAgFgvQgCgDgBgFQABgEACgDQADgCACAAQAEAAACACQACADABAEQAAAFgDADQgCACgEABQgDgBgCgCg");
	this.shape_46.setTransform(184.4,478);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAJA9IgIgBQgCgBgDgDQgDgEgBgFQgCgGAAgKIAAg2IgLAAIAAgMIALAAIAAgVIAOgEIAAAZIASAAIAAAMIgSAAIAAA4QAAAJADADQADAEAEAAIADAAIADgBIABAMIgFABIgHAAg");
	this.shape_47.setTransform(180,478.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUAFIAAgKIAqAAIAAAKg");
	this.shape_48.setTransform(174.7,479.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWA5QgIgNAAgYQAAgRAEgKQAEgKAHgGQAGgFAIgBQADAAAFADQAFADADAGIAAAAIAAgzIAPAAIAABxIAAAHIABAJIAAAHIgNAAIgBgMIgBAAQgCAGgFAEQgFADgGAAQgMABgIgNgAgIgKQgEAFgBAHQgCAIAAAKQAAAKACAJQACAIADAFQAEAEAEABIAFgBQADgCACgDQADgEABgHIABgDIAAgDIAAgaIAAgDIAAgDQgBgGgEgGQgEgFgGAAQgEAAgEAFg");
	this.shape_49.setTransform(167.7,477.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgNArQgIgGgEgKQgEgLAAgPQAAgWAJgNQAJgOANAAQAKAAAGAGQAGAGADAKQADAJAAAMIAAAEIgBACIgrAAQABAPADAIQADAIAFACQAEADAFAAIAJgBIAHgDIADAMQgEACgGABIgLABQgKAAgIgGgAAPgIQAAgPgFgGQgEgHgGAAQgDAAgDAEQgDAEgCAHQgCAGAAAHIAcAAIAAAAg");
	this.shape_50.setTransform(160.3,479.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAJA9IgIgBQgCgBgDgDQgDgEgBgFQgCgGAAgKIAAg2IgLAAIAAgMIALAAIAAgVIAOgEIAAAZIASAAIAAAMIgSAAIAAA4QAAAJADADQADAEAEAAIADAAIADgBIABAMIgFABIgHAAg");
	this.shape_51.setTransform(154.1,478.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGBBIAAhfIANAAIAABfgAgFgvQgCgDgBgFQABgEACgDQADgCACAAQAEAAACACQACADABAEQAAAFgDADQgCACgEABQgDgBgCgCg");
	this.shape_52.setTransform(149.7,478);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAkAxIAAg7IgBgMQgBgFgDgEQgDgEgFAAQgFAAgEAEQgEAEgCAHIgBAEIAAAFIAAA8IgMAAIAAg+IgCgKQgBgFgDgDQgCgEgGAAQgFAAgEAEQgEAEgCAIIAAAIIAAA8IgPAAIAAhGIAAgOIgBgLIANAAIABAMIAAAAQADgGAGgEQAFgDAJgBQAGAAAGAEQADADADAIIAAAAIAEgGIAFgFIAHgDIAHgBQAKAAAGAIQAHAIAAATIAAA+g");
	this.shape_53.setTransform(141.6,479.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGBBIAAhfIANAAIAABfgAgFgvQgCgDgBgFQABgEACgDQADgCACAAQAEAAACACQACADABAEQAAAFgDADQgCACgEABQgDgBgCgCg");
	this.shape_54.setTransform(133.6,478);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgZBDIAAiFIAPAAIAAB4IAkAAIAAANg");
	this.shape_55.setTransform(128.7,477.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVAaIARgYIgbADIAAgKIAaAEIABgBIgRgXIAKgGIALAaIAAAAIALgbIALAGIgRAYIAAABIAbgEIAAAKIgbgDIAAABIARAXIgLAGIgLgaIAAAAIgLAbg");
	this.shape_56.setTransform(121.1,474.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},159).wait(112));

	// bg
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00BAF2").s().p("EguyAnOMAAAhObMBdlAAAMAAABObg");
	this.shape_57.setTransform(300,250,1.002,0.996);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(271));

	// cursor
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(300,250,1,0.417,0,0,0,300,600);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,249,601,501);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;