
var NSPStat = {
	URL : 'http://218.145.26.75/area?',
	Event : {},
	List: [],
	OnLoad: false,
	OnLoaded: false,
	OnMouseDown: false,
	Param: {},
	Init : function(mousedown)
	{
		if (NSPStat.OnLoad && !NSPStat.OnLoaded)
		{
			NSPStat.OnLoaded = true;
			NSPStat.Request2();
		}
		NSPStat.Param = NSPStat.Query();
		NSPStat.OnMouseDown = mousedown;
		var list = $('[data-stat-code]');	
		for (var i=0; i<list.length; i++)
		{
			NSPStat.Bind(list.eq(i).get(0));
		}		
	},
	Query: function()
	{
		var s = document.location.search.replace(/^\?/, '');
		//console.log(document.location.search);
	    var list = s.split(/&+/);
	    var param = {};
	    for (var n = 0; n < list.length; n++) {
	        var m = list[n].split(/=/);
	        try {
	            if (m && m.length == 2)
	                param[m[0]] = decodeURIComponent(m[1]);
	        } catch (e)
	        { }
	    }
	    return param;
	},
	// 직접 명령어로 등록할 때 사용
	Regist: function(ele, code, extra)
	{
		if (typeof(ele) == 'string')
			ele = $(ele);
			
		for (var i=0; i<ele.length; i++)
		{
			ele.eq(i).attr('data-stat-code', code);
			if (extra)
			{
				for (var name in extra)
				{
					ele.eq(i).attr('data-stat-' + name, extra[name]);
				}
			}
		}
		for (var i=0; i<ele.length; i++)
		{
			NSPStat.Bind(ele.eq(i).get(0));
		}
	},
	Bind: function (ele) {
        if (!ele) {
            return;
        }
        //console.log('statOnMouseDown : ' + $(ele).attr('statOnMouseDown'));
        if (NSPStat.OnMouseDown || $(ele).attr('statOnMouseDown') == 'true')
        {
        	$(ele).unbind('mousedown').bind('mousedown', function (e) {
	        	NSPStat.Request(ele);
	        });
        }
        else
        {
	        $(ele).unbind('mousedown').bind('mousedown', function (e) {
	        	NSPStat.Event[ele] = e;
	        	
	        }).unbind('mouseup').bind('mouseup', function (e2) {
	        	var e = NSPStat.Event[ele];
	        	if (!e)
	        		return;
	        	delete NSPStat.Event[ele];
	        	if (Math.abs(e.screenX - e2.screenX) < 10
	        		&& Math.abs(e.screenY - e2.screenY) < 10)
	        	{
	        		NSPStat.Request(ele);
	        	}
	        });
	    }
        NSPStat.AddParameter(ele);
        NSPStat.List.push(ele);
    },
    AddParameter: function(ele) {
    	if (!ele)
    		return;
    	ele = $(ele);
    	var stat = ele.attr('data-stat-code');
    	if (stat)
    	{	
    		var param = 'site=' + stat;
    		var updateUrl = function(a)
    		{
    			var url = a.attr('href');
    			var selfStat = a.attr('data-stat-code');
    			if (selfStat)
    				stat = selfStat;
    			if (url && url.indexOf('javascript') < 0 && url.indexOf('#') != 0 && !/.*[\?&]site=/.test(url))
    			{	
    				var hash = url.replace(/^[^#]+/, '');
    				if (hash)
    				{
    					url = url.replace(/#.*$/, '');
    					param += hash;
    				}
    				if (url.indexOf('?') < 0)
    					url = url+='?' + param;
    				else
    					url = url+='&' + param;
    				//console.log('before:' + a.attr('href'));
    				//console.log('after :' + url);
    				a.attr('href', url);
    			}
    		};
    		if (ele.get(0).tagName == 'A')
    		{    			
    			updateUrl(ele);
    		}
    		// 우선은 A만 붙이는 걸로
//    		else
//    		{
//	    		var list = ele.find('a');
//	    		var a;
//	    		for (var i=0; i<list.length; i++)
//	    		{
//	    			a = list.eq(i);
//	    			updateUrl(a);
//	    		}
//    		}
    	}
    },
	Request: function(ele)
	{
		var attr = NSPStat.Attr(ele);
		NSPStat.Request2(attr);
	},
	Request2: function(attr)
	{
		if (!attr)
		{
			attr = {};
			attr['url'] = document.location.href;
		}	
		var param = $.param(attr) + '&' + new Date().getTime();
		var img = document.createElement('IMG');
        img.style.display = 'none';
        img.src = NSPStat.URL + param;
        document.body.insertBefore(img, null);
	},
	Attr: function(ele)
	{
		var attr = {};
		if (!ele || !ele.attributes)
			return attr;
			
		var name;
		var val;
		
		for (var j=0; j<ele.attributes.length; j++)
		{
			if (/^(data-)?stat-/.test(ele.attributes[j].name))
			{
				name = ele.attributes[j].name.replace(/^(data-)?stat-/, '');
				val =  ele.attributes[j].value;
				if (name != 'code' && !val)
					val = NSPStat.Param[name];
				attr[name] = val;
			}
		}
		// 서비스 구분
		if (!attr['sid'])
			attr['sid'] = window.YNAM ? window.YNAM : document.location.hostname;
		var p = document.location.pathname;
		var ln = p.lastIndexOf('/');
		var path = '';
		var name = '';
		if (ln < 0)
		{
			path = '/';
			name = 'index';
		}
		else if (ln == 0)
		{
			path = '/';
			name = p.substring(1);
		}
		else 
		{
			path = p.substring(0,ln);
			name = p.substring(ln+1);
		}
		if (!isNaN(name))
		{
			ln = path.lastIndexOf('/');
			
		}
		if (path == '/view')
		{
			attr['cid'] = name;
		}
		
		if (!attr['path'])
			attr['path'] = document.location.pathname.replace(/\//g, '_');
		if (!attr['page'])
		{
			name = document.location.pathname.replace(/^.*\/([^\/]+)$/, '$1')
			if (name == '/')
				name = 'index';
			attr['page'] = name;
		}
		// 섹션
		if (!attr['section'])
		{
			var section = NSPStat.Param['section'];
			if (!section)
			{
				if (attr['path'] == '_')
				{
					section = attr['page'];
				}
				else
				{
					section = attr['path'];
					if (!section)
						section = 'news';
					section = section.replace(/^[\/_]+/,'');
					if (!section)
						section = 'news';
				}
			}
			attr['section'] = section.replace(/\//g, '_');
		}
		//console.log(attr);
		return attr;
	}
};
NSPStat.Init();