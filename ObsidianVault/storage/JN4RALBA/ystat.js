window['ysa'] = function(sid){
	if (!sid)
		return;
	// 반응형 웹을 위한 처리
	if (typeof(sid) == 'object')
	{
		var uas = navigator.userAgent;
		var rex;
		var nsid;
		for (var n in sid)
		{			
			if (n === '*')	// 기본값
				nsid = sid[n];
			else
			{
				try
				{
					rex = new RegExp(n, 'i');	// 대소문자 구분 없이
					if (rex.test(uas))
					{
						nsid = sid[n];
						break;
					}
				}catch(e)
				{}
			}
		}
		sid = nsid ? nsid : '';	
	}
	// 없으면.... unknown 으로.
	if (!sid)
		sid = 'unknown';
	// host명만 삭제. ex) .yna.co.kr 
	var dom = document.location.hostname.replace(/^[^\.]+/, '');	
	// 쿠키가져오기
	function getCk(name)
	{
		var cook = document.cookie.split(/\s*;\s*/);
		var key = name + '=';
		for (var i=0; i<cook.length; i++)
		{
			if (cook[i].indexOf(key) == 0)
				return cook[i].substring(key.length);
		}
	}
	// 쿠키저장
	function setCk(name,value,expires)
	{
		if (expires && !isNaN(expires))
		{
			var d = new Date();
			d.setDate(d.getDate() + expires);
			document.cookie = name + '=' + value + ';path=/;domain=' + dom + ';expires=' + d.toGMTString()+';';
		}
		else
		{
			document.cookie = name + '=' + value + ';path=/;domain=' + dom + ';';
		}
	}
	// 랜덤 16진수 4자리 가져오기
	function rn()
	{
		return Math.floor((Math.random()*100000)).toString(16).substring(0,4);
	}
	// 아이디 생성 = 현재시간 + 16자리 hex
	function gen()
	{
		return (new Date().getTime()).toString(16) + rn() + rn() + rn() + rn();
	}		
	
	// referrer 가져오기
	function getReferrer()
	{
		var isNaver = document.location.search.indexOf('input=1195p') > 0 ? 'http://gdr.naver.com/1195p' : '';		
		if (document.referrer)
		{
			if (isNaver)
			{
				if (/^(https?:\/\/).*(yna|yonhapnews)\.(co.kr|com|net|kr).*/.test(document.referrer))			
				{
					return isNaver;
				}
				else
				{
					return document.referrer.replace(/\?.*$/, '');
				}
			}
			else
				return document.referrer.replace(/\?.*$/, ''); 
		}
		else
		{
			return isNaver ? isNaver : 'none';
		}
	}
	var r = {};
	var u = getCk('yuid');
	
	if (!u)
	{
		u = gen();
		setCk('yuid', u, 1);
	}
	r['sid'] = sid ? ('' + sid) : '0';
	r['u'] = u;
	//r['r'] = document.referrer ? document.referrer.replace(/\?.*$/, '') : 'none';
	r['r'] = getReferrer();
	
	var ct = new Date().getTime();
	var loc = document.location;
	if (loc)
	{
		if (loc.pathname == '/')
			r['l'] = loc.href.replace(/^(https?:\/\/[^\/]+)\/.*/, '$1/index' + loc.search);
		else
			r['l'] = loc.href;
	}
	var ua = window.navigator;
	if (ua)
	{
		r['a'] = ua.appName;
		r['p'] = ua.platform;
		r['ua'] = ua.userAgent;
	}
	
	var p = 'u=' + u;
	var v;
	for(var n in r)
	{
		if (n == 'u')
			continue;
		v = r[n].replace(/^\s*|\s*$/g, '');
		v = v.replace(/\s/g, '_');
		v = v.replace(/\?/g, '>');
		v = v.replace(/&/g, ';');
		v = v.replace(/=/g, '~');
		if(n == 'l'){
			p += '&' + n + '=' + v;
		}else{
			p += '&' + n + '=' + encodeURIComponent(v);	
		}
	}
	var server = '218.145.26.75';
	var img = new Image();
	img.src = 'http://' + server + '/nsp?' + p;
};

if (window['YNAM']){
	var ystatSend = true;

	if(document.domain.indexOf('cps') != -1 || location.href.indexOf("/kr/portal") != -1){
		ystatSend = false;
	}

	if( ystatSend ) {
		ysa(window['YNAM']);
	}
}

