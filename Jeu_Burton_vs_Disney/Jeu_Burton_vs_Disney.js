(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Jeu_Burton_vs_Disney_atlas_1", frames: [[0,0,1500,2000]]},
		{name:"Jeu_Burton_vs_Disney_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"Jeu_Burton_vs_Disney_atlas_3", frames: [[0,0,1646,1140]]},
		{name:"Jeu_Burton_vs_Disney_atlas_4", frames: [[1002,1082,768,512],[1002,0,788,1080],[0,1249,714,713],[0,0,1000,1247]]},
		{name:"Jeu_Burton_vs_Disney_atlas_5", frames: [[499,0,419,620],[0,0,497,640],[1422,0,314,372],[920,0,500,500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.affichefrancaiselareinedesneiges02 = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bravedisney = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Braveburton = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.burtonspiral = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Disneycastlebleu = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dumboDisney = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dumbo_burton = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Frozenburton = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.La_Petite_Sirène_The_Little_Mermaid_Disney_1989_affiche_poster = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.spiral = function() {
	this.initialize(ss["Jeu_Burton_vs_Disney_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Ursulaburton = function() {
	this.initialize(img.Ursulaburton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2401,3000);


(lib.Symbole1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Disneycastlebleu();
	this.instance.setTransform(-316,25,0.4845,0.457);

	this.instance_1 = new lib.burtonspiral();
	this.instance_1.setTransform(100.4,-217.05,1.0892,1.1344,14.9987);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(-337.95,-285.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.9,-285.9,823,570);


(lib.Bouton_FrDi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.affichefrancaiselareinedesneiges02();
	this.instance.setTransform(-146,-213,0.1934,0.211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Bouton_PeDi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.La_Petite_Sirène_The_Little_Mermaid_Disney_1989_affiche_poster();
	this.instance.setTransform(-125,-159,0.2501,0.2558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-159,250.1,319);


(lib.Bouton_PeBu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Ursulaburton();
	this.instance.setTransform(-138,-186,0.1146,0.1234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-186,275.2,370.3);


(lib.Bouton_FrBu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Frozenburton();
	this.instance.setTransform(-143,-138,0.568,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-138,284,268);


(lib.Bouton_DuDi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.dumboDisney();
	this.instance.setTransform(-144,-165,0.3604,0.3018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-165,284,326);


(lib.Bouton_DuBu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.dumbo_burton();
	this.instance.setTransform(-151,-155,0.4202,0.4278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-155,300,305);


(lib.Bouton_BrDi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.bravedisney();
	this.instance.setTransform(-147,-211,0.7088,0.6742);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-211,297,418);


(lib.Bouton_BrBu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Braveburton();
	this.instance.setTransform(-99,-132,0.3923,0.4031);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-132,195,258);


// stage content:
(lib.Jeu_Burton_vs_Disney = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		/* Cliquer pour afficher un champ de texte
		Cliquez sur l’occurrence de symbole spécifiée pour créer et afficher un champ de texte aux coordonnées x et y que vous avez indiquées.
		
		Instructions :
		1. Remplacez la valeur 200 par la coordonnée x sur laquelle vous souhaitez positionner le champ de texte.
		2. Remplacez la valeur 100 par la coordonnée y sur laquelle vous souhaitez positionner le champ de texte.
		3. Remplacez la valeur de la chaîne "Lorem ipsum dolor sit amet" par le texte que vous souhaitez afficher dans le champ de texte qui apparaît. Maintenez les guillemets.
		*/
		
		this.button_1.addEventListener("click", fl_ClickToPosition.bind(this));
		
		var fl_TF = new createjs.Text();
		var fl_TextToDisplay = "2012";
		
		function fl_ClickToPosition()
		{
		
			fl_TF.x = 50;
			fl_TF.y = 150;
			fl_TF.color = "#FFFFFF";
			fl_TF.font = "30px Ravie";
			fl_TF.text = fl_TextToDisplay;
			this.addChild(fl_TF);
		}
		
		
		/* Cliquer pour afficher un champ de texte
		Cliquez sur l’occurrence de symbole spécifiée pour créer et afficher un champ de texte aux coordonnées x et y que vous avez indiquées.
		
		Instructions :
		1. Remplacez la valeur 200 par la coordonnée x sur laquelle vous souhaitez positionner le champ de texte.
		2. Remplacez la valeur 100 par la coordonnée y sur laquelle vous souhaitez positionner le champ de texte.
		3. Remplacez la valeur de la chaîne "Lorem ipsum dolor sit amet" par le texte que vous souhaitez afficher dans le champ de texte qui apparaît. Maintenez les guillemets.
		*/
		
		this.button_4.addEventListener("click", fl_ClickToPosition_4.bind(this));
		
		var fl_TF_4 = new createjs.Text();
		var fl_TextToDisplay_4 = "1947";
		
		function fl_ClickToPosition_4()
		{
		
			fl_TF_4.x = 490;
			fl_TF_4.y = 155;
			fl_TF_4.color = "#FFFFFF";
			fl_TF_4.font = "30px Ravie";
			fl_TF_4.text = fl_TextToDisplay_4;
			this.addChild(fl_TF_4);
		}
		
		/* Cliquer pour afficher un champ de texte
		Cliquez sur l’occurrence de symbole spécifiée pour créer et afficher un champ de texte aux coordonnées x et y que vous avez indiquées.
		
		Instructions :
		1. Remplacez la valeur 200 par la coordonnée x sur laquelle vous souhaitez positionner le champ de texte.
		2. Remplacez la valeur 100 par la coordonnée y sur laquelle vous souhaitez positionner le champ de texte.
		3. Remplacez la valeur de la chaîne "Lorem ipsum dolor sit amet" par le texte que vous souhaitez afficher dans le champ de texte qui apparaît. Maintenez les guillemets.
		*/
		
		this.button_5.addEventListener("click", fl_ClickToPosition_5.bind(this));
		
		var fl_TF_5 = new createjs.Text();
		var fl_TextToDisplay_5 = "1990";
		
		function fl_ClickToPosition_5()
		{
		
			fl_TF_5.x = 400;
			fl_TF_5.y = 330;
			fl_TF_5.color = "#FFFFFF";
			fl_TF_5.font = "30px Ravie";
			fl_TF_5.text = fl_TextToDisplay_5;
			this.addChild(fl_TF_5);
		}
		
		/* Cliquer pour afficher un champ de texte
		Cliquez sur l’occurrence de symbole spécifiée pour créer et afficher un champ de texte aux coordonnées x et y que vous avez indiquées.
		
		Instructions :
		1. Remplacez la valeur 200 par la coordonnée x sur laquelle vous souhaitez positionner le champ de texte.
		2. Remplacez la valeur 100 par la coordonnée y sur laquelle vous souhaitez positionner le champ de texte.
		3. Remplacez la valeur de la chaîne "Lorem ipsum dolor sit amet" par le texte que vous souhaitez afficher dans le champ de texte qui apparaît. Maintenez les guillemets.
		*/
		
		this.button_6.addEventListener("click", fl_ClickToPosition_6.bind(this));
		
		var fl_TF_6 = new createjs.Text();
		var fl_TextToDisplay_6 = "2013";
		
		function fl_ClickToPosition_6()
		{
		
			fl_TF_6.x = 200;
			fl_TF_6.y = 270;
			fl_TF_6.color = "#FFFFFF";
			fl_TF_6.font = "30px Ravie";
			fl_TF_6.text = fl_TextToDisplay_6;
			this.addChild(fl_TF_6);
		}
		
		/* Cliquer pour masquer un objet
		Cliquez sur l’occurrence de symbole spécifiée pour la masquer.
		
		Instructions :
		1. Utilisez ce code pour les objets actuellement visibles.
		*/
		this.button_7.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
			this.button_7.visible = false;
		}
		
		/* Cliquer pour masquer un objet
		Cliquez sur l’occurrence de symbole spécifiée pour la masquer.
		
		Instructions :
		1. Utilisez ce code pour les objets actuellement visibles.
		*/
		this.button_8.addEventListener("click", fl_ClickToHide_2.bind(this));
		
		function fl_ClickToHide_2()
		{
			this.button_8.visible = false;
		}
		
		/* Cliquer pour masquer un objet
		Cliquez sur l’occurrence de symbole spécifiée pour la masquer.
		
		Instructions :
		1. Utilisez ce code pour les objets actuellement visibles.
		*/
		this.button_9.addEventListener("click", fl_ClickToHide_3.bind(this));
		
		function fl_ClickToHide_3()
		{
			this.button_9.visible = false;
		}
		
		/* Cliquer pour masquer un objet
		Cliquez sur l’occurrence de symbole spécifiée pour la masquer.
		
		Instructions :
		1. Utilisez ce code pour les objets actuellement visibles.
		*/
		this.button_10.addEventListener("click", fl_ClickToHide_4.bind(this));
		
		function fl_ClickToHide_4()
		{
			this.button_10.visible = false;
		}
		
		/* Cliquer pour masquer un objet
		Cliquez sur l’occurrence de symbole spécifiée pour la masquer.
		
		Instructions :
		1. Utilisez ce code pour les objets actuellement visibles.
		*/
		this.button_11.addEventListener("click", fl_ClickToHide_5.bind(this));
		
		function fl_ClickToHide_5()
		{
			this.button_11.visible = false;
		}
		playSound("intro_jeu");
	}
	this.frame_1 = function() {
		playSound("intro_jeu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Calque_5
	this.button_11 = new lib.Symbole1();
	this.button_11.name = "button_11";
	this.button_11.setTransform(261.1,203.05,0.7789,0.7269,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.button_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_11).wait(2));

	// Calque_4
	this.button_9 = new lib.Bouton_PeBu();
	this.button_9.name = "button_9";
	this.button_9.setTransform(409.4,297.5,0.6602,0.5878,-14.9988);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.button_8 = new lib.Bouton_DuBu();
	this.button_8.name = "button_8";
	this.button_8.setTransform(516.75,109.95,0.6852,0.7685,21.4567,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_8, 0, 1, 1);

	this.button_7 = new lib.Bouton_BrBu();
	this.button_7.name = "button_7";
	this.button_7.setTransform(99.9,119.35,0.8726,0.9252,-14.9984);
	new cjs.ButtonHelper(this.button_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_7},{t:this.button_8},{t:this.button_9}]}).wait(2));

	// Calque_2
	this.button_10 = new lib.Bouton_FrBu();
	this.button_10.name = "button_10";
	this.button_10.setTransform(211.25,302.6,0.6197,0.905,21.4656);
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.button_6 = new lib.Bouton_FrDi();
	this.button_6.name = "button_6";
	this.button_6.setTransform(210.05,291.2,0.5357,0.545,20.7121);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.button_5 = new lib.Bouton_PeDi();
	this.button_5.name = "button_5";
	this.button_5.setTransform(412.85,293.8,0.6688,0.674,-17.9841);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.button_4 = new lib.Bouton_DuDi();
	this.button_4.name = "button_4";
	this.button_4.setTransform(517.65,109.5,0.6571,0.6736,19.2595);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.button_1 = new lib.Bouton_BrDi();
	this.button_1.name = "button_1";
	this.button_1.setTransform(97.6,119.3,0.5474,0.5692,-14.9985);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1},{t:this.button_4},{t:this.button_5},{t:this.button_6},{t:this.button_10}]}).wait(2));

	// Background
	this.text = new cjs.Text("Quels sont ces Disney?", "30px 'Ravie'", "#72A4CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 190;
	this.text.parent = this;
	this.text.setTransform(307.7,29.2,1,1.0121,0,8.8696,0);

	this.instance = new lib.spiral();
	this.instance.setTransform(1,-2,0.3136,0.3737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(284.9,161.2,370.5,282.90000000000003);
// library properties:
lib.properties = {
	id: '4E69E9D3E37663428812EC44FF8B1A81',
	width: 600,
	height: 400,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/Ursulaburton.jpg", id:"Ursulaburton"},
		{src:"images/Jeu_Burton_vs_Disney_atlas_1.png", id:"Jeu_Burton_vs_Disney_atlas_1"},
		{src:"images/Jeu_Burton_vs_Disney_atlas_2.png", id:"Jeu_Burton_vs_Disney_atlas_2"},
		{src:"images/Jeu_Burton_vs_Disney_atlas_3.png", id:"Jeu_Burton_vs_Disney_atlas_3"},
		{src:"images/Jeu_Burton_vs_Disney_atlas_4.png", id:"Jeu_Burton_vs_Disney_atlas_4"},
		{src:"images/Jeu_Burton_vs_Disney_atlas_5.png", id:"Jeu_Burton_vs_Disney_atlas_5"},
		{src:"sounds/intro_jeu.mp3", id:"intro_jeu"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4E69E9D3E37663428812EC44FF8B1A81'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;