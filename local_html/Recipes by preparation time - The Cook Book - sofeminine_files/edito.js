// appelé par /edito/live.asp
var af_liveNewsSlide=new Object();

af_liveNewsSlide.start=function(direction) {
	if (!af_liveNewsSlide.obj) {
		af_liveNewsSlide.target=0;
		af_liveNewsSlide.pos=0;
		af_liveNewsSlide.obj=document.getElementById('af_liveNewsTable');
		af_liveNewsSlide.panelHeight=af_liveNewsSlide.obj.parentNode.offsetHeight;
		af_liveNewsSlide.maxPos=Math.ceil(af_liveNewsSlide.obj.offsetHeight/af_liveNewsSlide.panelHeight)-1;
		af_liveNewsSlide.buttonUp=document.getElementById('af_liveNewsUp');
		af_liveNewsSlide.buttonDown=document.getElementById('af_liveNewsDown');
	}
	
	if (direction!=af_liveNewsSlide.direction) {
		if (direction<0 && af_liveNewsSlide.pos>0) af_liveNewsSlide.target=(Math.ceil(af_liveNewsSlide.pos)-1);
		else if(direction>0 && af_liveNewsSlide.pos<af_liveNewsSlide.maxPos) af_liveNewsSlide.target=(Math.floor(af_liveNewsSlide.pos)+1);
			
		af_liveNewsSlide.startPos=af_liveNewsSlide.pos;
		af_liveNewsSlide.startTime=(new Date()).getTime();
		af_liveNewsSlide.direction=direction;
		af_liveNewsSlide.move();
	}
}
af_liveNewsSlide.move=function() {
	var t=Math.min(((new Date()).getTime()-af_liveNewsSlide.startTime)/1000,1);
	af_liveNewsSlide.pos=af_liveNewsSlide.startPos+(af_liveNewsSlide.target-af_liveNewsSlide.startPos)*Math.pow(t,.5);
	af_liveNewsSlide.obj.style.marginTop=-af_liveNewsSlide.pos*af_liveNewsSlide.panelHeight+'px';
	if (t<1) {
		setTimeout(af_liveNewsSlide.move,50);
	} else {
		af_liveNewsSlide.buttonUp.className=(af_liveNewsSlide.pos==0 ? 'af_liveNewsButtonOff' : 'af_liveNewsButtonOn');
		af_liveNewsSlide.buttonDown.className=(af_liveNewsSlide.pos==af_liveNewsSlide.maxPos ? 'af_liveNewsButtonOff' : 'af_liveNewsButtonOn');
		af_liveNewsSlide.direction=0;
	}
}


// appelé par /home4/aujourdhui.asp et /edito/aujourdhui.asp
var af_accFond, af_accTitleDiv;

function af_initAcc() {
	if (!af_accFond) {
		af_accFond=document.getElementById('af_accGrande');
		af_accFond.style.filter+='progid:DXImageTransform.Microsoft.Fade(duration=1)'; 
		af_accFond.accN=0;
		af_accFond.linkTag=document.getElementById('af_accGrandeLink');
		af_accTitleDiv=document.getElementById('accGrandeTitle');
		af_HomeAcc=document.getElementById('af_HomeAcc');
	}
}
function af_accChange(n,noclear) {
	try {
		af_initAcc();
		if (n>=0) {
			if (!noclear) af_accChange_clear();
			// if autochange activated, show the current photo on mouseover on main acc
			if (n==0 && af_accChange_auto.t) n=af_accChange_auto.curr;
			if (n!=af_accFond.accN){
				if (typeof(af_showytplayer)!='undefined' && af_showytplayer) {
					if (!af_ytplayer) af_ytplayer=document.getElementById("af_ytplayer");
					if (n==0) { 
						if(af_accIsYTClicked) af_YTP.style.display = 'block';
						else af_hideYT.style.display = 'block';
						af_HomeAcc.style.display='none';
					} else {
						if(af_accIsYTClicked) af_YTP.style.display = 'none';
						else af_hideYT.style.display = 'none';
						af_YTP.style.display = 'none';
						af_HomeAcc.style.display='block';
					}
					if(!true && n!=0) af_ytplaypause(2);
				}
				af_accFond.src=af_accFondURLs[n].src;
				af_accFond.accN=n;
				af_accFond.linkTag.href=af_accLinkURLs[n];
				af_accTitleDiv.innerHTML=af_accTitles[n];
			}
		} else {
			af_accChange_auto.curr=0; // restart autochange on first photo
			af_accChange(af_accChange_auto.curr);
			if (af_accChange_auto.t) af_accChange_auto(af_accChange_auto.t);
		}
	} catch (e) {
		afAdScripts.log(200,e.message);
	}
}
function af_gotoCurrent() {
	try {
		af_initAcc();
	
		var url = af_accLinkURLs[af_accFond.accN];
		var domain = document.domain;
		if (url.indexOf(domain) > 0) {
			location.href = url; // internal link: open in the same window
		} else {
			window.open(url, "_blank"); // external link: open in _blank
		}
	} catch(e) {
		afAdScripts.log(201,e.message);
	}
}
function af_accChange_auto(t) {
	var f = af_accChange_auto;
	if (!f.curr) f.curr=0;
	if (!f.t) f.t=t;
	af_accChange_clear();
	f.timeout = window.setTimeout(function() {
		f.curr = (f.curr < af_accFondURLs.length-1 ? f.curr+1 : 0);
		af_accChange(f.curr,true);
		f(t);
	}, t*1000);
}
function af_accChange_clear() {
	if (af_accChange_auto.timeout) window.clearTimeout(af_accChange_auto.timeout);
}

// acc slideshow
var af_accSlide=new Object();
af_accSlide.all=new Array();
af_accSlide.start=function(direction,id,noclear) {
	if (!id) id='accSlide';
	if (!noclear) af_accSlide.clear();
	if (!af_accSlide.all[id]) {
		af_accSlide.all[id]=new Object();
		af_accSlide.all[id].pos=0;
		af_accSlide.all[id].obj=document.getElementById(id);
		af_accSlide.all[id].panelWidth=af_accSlide.all[id].obj.parentNode.offsetWidth;
		af_accSlide.all[id].maxPos=Math.ceil(af_accSlide.all[id].obj.offsetWidth/af_accSlide.all[id].panelWidth)-1;
	}

	if (direction!=af_accSlide.all[id].direction) {
		if (direction<0) {
			if (af_accSlide.all[id].pos<=0) af_accSlide.all[id].pos = af_accSlide.all[id].maxPos;
			af_accSlide.all[id].target=Math.ceil(af_accSlide.all[id].pos)-1;
		} else {
			if (af_accSlide.all[id].pos>=af_accSlide.all[id].maxPos) af_accSlide.all[id].pos = 0;
			af_accSlide.all[id].target=Math.floor(af_accSlide.all[id].pos)+1;
		}
		af_accSlide.all[id].startPos=af_accSlide.all[id].pos;
		af_accSlide.all[id].startTime=(new Date()).getTime();
		af_accSlide.all[id].direction=direction;
		af_accSlide.move(id);
	}	
};
af_accSlide.move=function(id) {
	var t=Math.min(((new Date()).getTime()-af_accSlide.all[id].startTime)/1000,1);
	af_accSlide.all[id].pos=af_accSlide.all[id].startPos+(af_accSlide.all[id].target-af_accSlide.all[id].startPos)*(Math.sin((2*t-1)*Math.PI/2)+1)/2;
	af_accSlide.all[id].obj.style.marginLeft=-af_accSlide.all[id].pos*af_accSlide.all[id].panelWidth+'px';
	if (t<1)
		setTimeout(function(){ af_accSlide.move(id); },50);
	else
		af_accSlide.all[id].direction=0;
};
af_accSlide.autoslide=function(t) {
	af_accSlide.clear();
	af_accSlide.timeout=window.setTimeout(function(){ af_accSlide.start(+1,'accSlide',true); af_accSlide.autoslide(t); }, t*1000);
};
af_accSlide.clear=function() {
	if (af_accSlide.timeout) window.clearTimeout(af_accSlide.timeout);
};

// appelé par /home4/community.asp
var af_communityBox=function(limit, communityblocId, communityblocAjaxUrl) {
	af_communityBox.loaded=false;
	var wos=window.onscroll;
	window.onscroll = function (e) {
		if (wos) wos(e);
		var threshold=((document.documentElement.scrollTop != 0) ? document.documentElement.scrollTop : document.body.scrollTop);
		if (threshold > limit && !af_communityBox.loaded){
			af_requestGet(communityblocAjaxUrl,'',function (data) {
				var elem = document.getElementById(communityblocId);
				if (elem){elem.innerHTML = data;}
			},false);
			af_communityBox.loaded=true;
		}
	};
};

/* include album */
function af_inc_album(params){
	var e = document.getElementById(params.id) || false;	
	if(e === false) return;
	var toMove = '';
	var autoMode = !params.btns ? true : (params.auto || false);
	var autoMove = "";
	var animate = function(v){
		var timePassed = new Date - v.start;
		var progress = timePassed / v.duration;
		if(progress > 1) progress = 1;
		var delta = v.delta(progress);
		v.step(delta);
		if(progress == 1){
			if(autoMode) autoMove = setTimeout(function(){move(1);}, 3000);
		}
		else setTimeout(function(){animate(v);}, 10);
	};
	var pos = 1;
	var poss = [];		
	var move = function(d){				
		pos = (d>0 && pos == poss.length) ? 1 : (d<0 && pos == 1) ? poss.length : pos;
		var nextPos = d>0 ? pos+1 : pos-1;
		var from = poss[pos-1];
		var to = poss[nextPos-1];
		pos = nextPos;
		animate({
			start: new Date,
			duration: 200,
			delta: function(p){return 1 - Math.sin(Math.acos(p));},
			step: function(delta){
				var vStep = Math.round(from-(((from)-(to))*delta));
				toMove.style.marginLeft = vStep+"px";
			}
		});
	};
	var getXhr = function(){
		var xhr=null;
		if(window.XMLHttpRequest||window.ActiveXObject){
			if(window.ActiveXObject){
				try{xhr=new ActiveXObject("Msxml2.XMLHTTP")}
				catch(e){xhr=new ActiveXObject("Microsoft.XMLHTTP")}
			}
			else xhr=new XMLHttpRequest()
		}
		else return null;
		return xhr;
	};
	var xhr = getXhr();
	var groupWidth = 0;
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&(xhr.status==200||xhr.status==0)){
			if(xhr.status==0){
			e.innerHTML = "<span style='color:#fff;'>Erreur de chargement</span>";
			xhr = null;
			return;
		}
		var xml = xhr.responseXML;
		xhr = null;	
		var includeLink = xml.getElementsByTagName('url')[0].childNodes[0].nodeValue || '/';
		var bgSrc = xml.getElementsByTagName('bg')[0].childNodes[0].nodeValue || '/shim.gif';
		e.style.background = 'url('+bgSrc+') 0 0 no-repeat';	
		e.onclick = function(event){
			event = event || window.event;	
			if(event.target.id == e.id){		
				if(includeLink.slice(0, 7) == 'http://'){
					location.href = includeLink;
				}
				else{
					location.pathname = includeLink;
				}
			}
		}
		var xmlGroups = xml.getElementsByTagName('group');
			if(xmlGroups.length >= 1){
				e.innerHTML = '';
				var c = document.createElement('div');
				c.className = 'af_inc_album_slider';	
				e.appendChild(c);		
				if(params.btns && xmlGroups.length > 1){
					var ctrl1 = document.createElement('span');
					ctrl1.className = "control controlLeft";
					c.appendChild(ctrl1);
				}
				var html  = '';
				    html += '<div class="af_inc_album_overflow">';
					html += 	'<div class="af_inc_album_move">';
				for(var i=0; i<xmlGroups.length; i++){
					html += 		'<div class="af_album_group">';
					var itemsInGroup = xmlGroups[i].getElementsByTagName('thumb');
					for(var j=0; j<itemsInGroup.length; j++){
						html += 		'<a href="'+itemsInGroup[j].getElementsByTagName('url')[0].childNodes[0].nodeValue+'">';
						html += 			'<img src="'+itemsInGroup[j].getElementsByTagName('img')[0].childNodes[0].nodeValue+'" alt="" />';
						html += 		'</a>';
					}
					html += 		'</div>';
				}
					html += 	'</div>';
					html += '</div>';
				c.innerHTML += html;
				var divs = e.getElementsByTagName('div');
				for(var i=0; i<divs.length; i++){
					if(divs[i].className == 'af_album_group'){
						groupWidth = parseInt(divs[i].offsetWidth);
						var totalWidth = groupWidth*(itemsInGroup.length+1);
						divs[i].parentNode.style.width = totalWidth+"px";
						var extra = document.createElement('div');
						extra.className = 'af_album_group';
						extra.innerHTML = divs[i].innerHTML;
						break;
					}
				}	
				if(params.btns && xmlGroups.length > 1){
					var ctrl2 = document.createElement('span');
					ctrl2.className = "control controlRight";
					c.appendChild(ctrl2);
				}
				html = '<div style="clear:both;"></div>';
				c.innerHTML += html;		
				if(params.btns){
					var controls = e.getElementsByTagName('span');
					controls[0].onclick = function(){
						if(autoMode){
							clearTimeout(autoMove);
							autoMode = false;
						}
						move(-1);
					}
					controls[1].onclick = function(){
						if(autoMode){
							clearTimeout(autoMove);
							autoMode = false;
						}
						move(1);
					}
				}
				for(var i=0; i<divs.length; i++){
					if(divs[i].className == "af_inc_album_move"){
						toMove = divs[i];
						if(extra){
							divs[i].appendChild(extra);
							divs[i].innerHTML += "<div style='clear:both'></div>";
						}
						break;
					}
				}
				for(var i=0; i<=xmlGroups.length; i++){poss[i] = "-"+groupWidth*i;}
				if(autoMode) autoMove = setTimeout(function(){move(1);}, 3000);
			}				
		}
		else e.innerHTML = "<span style='color:#fff;'>Chargement ...</span>";
	}
	if(params.xmlUrl.length < 1000){
		xhr.open("GET", params.xmlUrl, false);
		xhr.setRequestHeader('Content-Type','text/xml');
		xhr.send(null);
	}
}

// COOKIE ALERT READ
// var COOKIE_ALERT = {
// 	'init' : function() {
// 		if (document.cookie.indexOf('aufCA') == -1){
// 			COOKIE_ALERT.cookie_alert_rendering();
// 		}		
// 	},	
	
// 	// RENDU TOOLBAR ALERT COOKIES
// 	'cookie_alert_rendering' : function(extType){
		
// 		this.HTMLrender	=	'<style>';
// 		this.HTMLrender	+=		'div.af_cookie_popup { background:#ffffff; border:1px solid #dea95b; width:218px; position:absolute; text-align:left; z-index:2147483647; right:1%; top:0; }';
// 		this.HTMLrender	+=		'div.af_cookie_popup div { padding:10px; color:#777777; font-family:Arial,Verdana,Sans-serif; font-size:12px; }';
// 		this.HTMLrender	+=		'div.af_cookie_popup a { color:#dea95b; text-decoration:none; }';
// 		this.HTMLrender	+=		'div.af_cookie_popup a:hover { text-decoration:underline; }';
// 		this.HTMLrender	+=		'div.af_cookie_popup a.af_cookie_popup_bouton { display:block; width:80px; margin:10px auto 0 auto; border:1px solid #dea95b; text-align:center; padding:3px 0; }';
// 		this.HTMLrender	+=		'div.af_cookie_popup a.af_cookie_popup_bouton:hover { text-decoration:none; background:#dea95b; color:#ffffff; }';
// 		this.HTMLrender	+=	'</style>';
// 		this.HTMLrender	+=	'<div class="af_cookie_popup">';
// 		this.HTMLrender	+=		'<div>';
// 		this.HTMLrender	+=			'Sofeminine.co.uk uses cookies to ensure you get the best experience on our website. To find out more about these cookies, see our <a href="http://www.sofeminine.co.uk/money/sofeminine-s-privacy-policy-n76184.html" target="_blank">cookies policy</a>.';
// 		this.HTMLrender	+=		'	<a href="#" class="af_cookie_popup_bouton" id="af_cookies-bar-btn">Accept</a>';
// 		this.HTMLrender	+=		'</div>';
// 		this.HTMLrender	+=	'</div>';
	
// 		this.DIVrendering = document.createElement('div');
// 		this.DIVrendering.id = "af_cookies-bar";
// 		this.DIVrendering.innerHTML = this.HTMLrender;
// 		document.body.appendChild(this.DIVrendering);
// 		document.body.insertBefore(document.getElementById('af_cookies-bar'), document.body.firstChild);
		
// 		document.getElementById('af_cookies-bar-btn').onclick = function(){
// 			COOKIE_ALERT.setCookieAlert("aufCA", "read");
// 			document.getElementById('af_cookies-bar').style.display = "none";
// 			return false;
// 		}

// 	},
	
// 	// COOKIE CLOSE
// 	'setCookieAlert' : function(sName,sValue) {
// 		this.sValue = sValue;
// 		this.sName = sName;
// 		this.today = new Date(), expires = new Date();
// 		expires.setTime(this.today.getTime() + (365*24*60*60*1000));
// 		document.cookie = this.sName + "=" + encodeURIComponent(this.sValue) + ";path=/;expires=" + expires.toGMTString();
// 	}


// }

// if (typeof(detectCookieAlert) !== 'undefined') {
// 	COOKIE_ALERT.init();
// }