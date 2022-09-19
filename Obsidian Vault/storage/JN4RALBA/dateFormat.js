function jsonpGet() {
	console.log('i received a jsonp successfully');
}

// Name : Date.prototype.Format
// Date : 2013-07-16
// Modified by : woong
// Comment : Date객체 확장
Date.prototype.Format2 = function( str, lang ){ 
    var date = this;
    if(!lang) { lang = "en"; }
    var defaults = {
        ko : {
            MMMM : ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            MMM : ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dddd : ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
            ddd : ["일","월","화","수","목","금","토"]
        },
        en : {
            MMMM : ["January","February","March","April","May","June","July","August","September","October","November","December"],
            MMM : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            dddd : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            ddd : ["SUN","MON","TUE","WED","THU","FRI","SAT"]
        },
        jp : {
            MMMM : ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
            MMM : ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dddd : ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
            ddd : ["日","月","火","水","木","金","土"]
        },
        ck : {
            MMMM : ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
            MMM : ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dddd : ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
            ddd : ["日","月","火","水","木","金","土"]
        },
        ar : {
            MMMM : [ "يناير", "فبراير", "مارس ", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            MMM : [ "يناير", "فبراير", "مارس ", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            dddd : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            ddd : ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
        },
        sp : {
            MMMM : ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre" , "noviembre", "diciembre"],
            MMM : ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."],
            dddd : ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            ddd : ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
        },
        fr : {
            MMMM: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            MMM: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            dddd: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            ddd: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"]
        }
    };
    var language = $.extend({},defaults[lang]);
    return str.replace(/(yyyy|yy|MMMM|MMM|MM|dddd|ddd|dd|d1|HH|hh|mm|ss)/g, function( word ){
        switch( word ){ 
            case "yyyy": return String(date.getFullYear()); break; 
            case "yy": return String(date.getFullYear()).substring(2,5); break; 
            case "MMMM": return language.MMMM[date.getMonth()]; break;
            case "MMM": return language.MMM[date.getMonth()]; break;
            case "MM" : return (date.getMonth() < 9 ? "0" : "" )+(date.getMonth()+1); break; 
            case "dddd": return language.dddd[date.getDay()]; break;
            case "ddd": return language.ddd[date.getDay()]; break;
            case "dd": return (date.getDate() < 10 ? "0" : "" )+date.getDate(); break;
			case "d1": return date.getDate(); break;
            case "HH" : return (date.getHours() < 10 ? "0" : "" )+date.getHours(); break;
            case "hh" : return( (date.getHours() % 12 ) < 10 ? "0" : "" ) + ( date.getHours() % 12 ); break;
            case "mm" : return (date.getMinutes() < 10 ? "0" : "" )+date.getMinutes(); break; 
            case "ss" : return (date.getSeconds() < 10 ? "0" : "" )+date.getSeconds(); break;
            default : return word; 
        } 
    });
};
// 언어 별로 날짜 형식 바꾸는 동작
var changeDateFormat = {
	init : function() {
		var now = changeDateFormat.getNowTime();
		Window.NOW_TIME = now;
		changeDateFormat.setToday(Window.NOW_TIME);
		changeDateFormat.changeLastestNewsLayer(Window.NOW_TIME);
		changeDateFormat.change(Window.NOW_TIME);
	},
	getNowTime : function() {
		// 시간 지정 (기본 : 로컬시간)
		var now = new Date();
		/*
		// 파라미터 받아와서 비교 후 서버시간으로 바꾸기(추후 개발)
		var timeP = "";
		if (timeP == '') {
			// 서버시간 가져오기
			var xmlHttp;
			if (window.XMLHttpRequest) {
				xmlHttp = new XMLHttpRequest(); // IE 7.0 이상, 크롬, 파이어폭스 등
			} else if (window.ActiveXObject){
				xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
			}
			xmlHttp.open('HEAD', window.location.href.toString(), false);
			xmlHttp.setRequestHeader("Content-Type", "text/html");
			xmlHttp.send('');
			var serverDate = xmlHttp.getResponseHeader("Date");
			now = new Date(serverDate);
		}
		*/
		return now;
	},
	setToday : function(now) {
		/**
		* 헤더의 날짜 형식을 바꿔주는 function
		* now : 현재시간(로컬or서버)
		*/
		var lang = LANG_TYPE;
		var txt;

		if (lang == 'en'){ // 영문버전
			txt = now.Format2('ddd. MMMM d1, yyyy', lang);
		} else if (lang == 'ck'){ // 중문버전
			txt = now.Format2('yyyy年 MM月 dd日 (dddd)', lang);
		} else if (lang == 'jp'){ // 일문버전
			txt = now.Format2('yyyy年 MM月 dd日(ddd)', lang);
		} else if (lang == 'ar'){ // 아랍어버전
			txt = now.Format2('dddd d1 MMMM yyyy', lang);
		} else if (lang == 'sp'){ // 스페인어버전
			txt = now.Format2('d1 de MMMM de yyyy', lang);
		} else if (lang == 'fr'){ // 프랑스어버전
			txt = now.Format2('d1 MMMM yyyy', lang);
		}
		$('strong[class=date]').text(txt);
	},
	changeLastestNewsLayer : function(now) {
		var lang = LANG_TYPE;
		// 상단에서 롤링하는 기사 리스트의 형식을 바꿔주는 function
		var tmp = $('span').filter('.datefm-short-' + lang + '01');
		tmp.each(function(idx){
			changeDateFormat.setDateShortFormat('datefm-short-' + lang + '01:eq(' + idx + ')', lang, now);
		});
		tmp = $('span').filter('.datefm-mini-' + lang + '01');
		tmp.each(function(idx){
			changeDateFormat.setDateMiniFormat('datefm-mini-' + lang + '01:eq(' + idx + ')', lang, now);
		});
	},
	change : function(now) {
		var lang = LANG_TYPE;
		// 탑, 주요 기사 날짜 형식을 바꿔주는 function
		var tmp = $('span').filter('.datefm-' + lang + '01');
		tmp.each(function(idx){
			if( !$(this).hasClass('changed') ){
				changeDateFormat.setDateFormat('datefm-' + lang + '01:eq(' + idx + ')', lang, now);
				$(this).addClass('changed');
			}
		});
	},
	setDateFormat : function(loc, lang, now) {
		/**
		* 길게 출력하는 형식(탑, 주요뉴스)
		* loc : 날짜포맷이 바껴야 하는 위치, lang : 언어 타입, now : 현재시간(로컬or서버)
		*/

		var tmp = $('.'+loc+'').text();
		var old = changeDateFormat.stringToDate(tmp);
		if (old != 'Invalid Date') {
			// 시간 차이 계산
			var gap = new Date(now.getTime() - old.getTime());
			// 시간 차이를 diffMin : 분으로 표시, diffHour : 시간으로 표시
			var diffMin = Math.ceil(gap / (1000 * 60));
			var diffHour = Math.ceil(gap / (1000 * 3600));
			var txt = '';

			if (lang == 'en') { // 영문버전
				if (diffMin < 1) {
					txt = EN_UNDER_1M;
				} else if (diffMin == 1 ){
					txt = diffMin + EN_EQUAL_1M;
				} else if (diffMin < 60) {
                    txt = diffMin + EN_UNDER_1H;
				} else if (diffHour == 1) {
                    txt = EN_EQUAL_1H;
				} else if (diffHour < 12) {
                    txt = diffHour + EN_UNDER_12H;
				} else {
					txt = old.Format2('HH:mm MMM. dd', lang);
				}
			} else if (lang == 'ck') { // 중문버전
				if (diffMin < 1) {
					txt = CK_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + CK_UNDER_1H;
				} else if (diffHour < 12) {
					txt = diffHour + CK_UNDER_12H;
				} else {
					txt = old.Format2('MM月dd日 HH:mm', lang);
				}
			} else if (lang == 'jp') { // 일문버전
				if (diffMin < 1) {
					txt = JP_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + JP_UNDER_1H;
				} else if (diffHour < 12) {
					txt = diffHour + JP_UNDER_12H;
				} else {
					txt = old.Format2('MM.dd HH:mm', lang);
				}
			} else if (lang == 'ar') { // 아랍어버전(순서 우->좌)
				if (diffMin < 1) {
					txt = AR_UNDER_1M;
				} else if (diffMin < 60) {
					txt = AR_PRE+' ('+diffMin+') '+AR_UNDER_1H;
				} else if (diffHour < 12) {
					txt = AR_PRE+' ('+diffHour+') '+AR_UNDER_12H;
				} else {
					txt = old.Format2('MM.dd HH:mm', lang);
				}
			} else if (lang == 'sp') { // 스페인어버전
				if (diffMin < 1) {
					txt = SP_UNDER_1M;
				} else if (diffMin == 1 ){
					!$('body').hasClass('page-main') ? txt = SP_PRE + SP_EQUAL_1M : txt = '1 min';
				} else if (diffMin < 60) {
					!$('body').hasClass('page-main') ? txt = SP_PRE + diffMin + SP_UNDER_1H : txt = diffMin + ' min';
				} else if (diffHour == 1) {
					!$('body').hasClass('page-main') ? txt = SP_PRE + SP_EQUAL_1H : txt = '1 h';
				} else if (diffHour < 12) {
					!$('body').hasClass('page-main') ? txt = SP_PRE + diffHour + SP_UNDER_12H : txt = diffHour + ' h';
				} else {
					txt = old.Format2('d1 MMM HH:mm', lang).toLowerCase();
				}
			} else if (lang == 'fr') { // 프랑스어버전
				if (diffMin < 1) {
					txt  = FR_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + 'min';
				} else if (diffHour < 12) {
					txt = diffHour + 'h';
				} else {
					txt = old.Format2('dd.MM à HHhmm', lang);
				}
			}
			$('span').filter('.' + loc + '').text(txt);
		}
	},
	setDateShortFormat : function(loc, lang, now) {
		/**
		* 짧게 출력하는 형식(티커 열었을 때 기사 리스트)
		* loc : 날짜포맷이 바껴야 하는 위치, lang : 언어 타입, now : 현재시간(로컬or서버)
		*/

		var tmp = $('.'+loc+'').text();
		var old = changeDateFormat.stringToDate(tmp);
		if (old != 'Invalid Date') {
			// 시간 차이 계산
			var gap = new Date(now.getTime() - old.getTime());
			// 시간 차이를 diffMin : 분으로 표시, diffHour : 시간으로 표시, diffDay : 1일로 표시
			var diffMin = Math.ceil(gap / (1000 * 60));
			var diffHour = Math.ceil(gap / (1000 * 3600));
            var diffDay = Math.ceil(gap / (1000 * 3600 * 24));
			var txt;
			
			if (lang == 'en') { // 영문버전
				if (diffMin < 1) {
					txt = 'now';
				} else if (diffMin < 60) {
					txt = diffMin + 'm';
				} else {
					txt = diffHour + 'h';
				}
			} else if (lang == 'ck') { // 중문버전
				if (diffMin < 1) {
					txt = CK_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + CK_UNDER_1H;
				} else {
					txt = diffHour + CK_UNDER_12H;
				}
			} else if (lang == 'jp') { // 일문버전
				if (diffMin < 1) {
					txt = JP_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + JP_UNDER_1H;
				} else {
					txt = diffHour + JP_UNDER_12H;
				}
			} else if (lang == 'ar') { // 아랍어버전(순서 우->좌)
				if (diffMin < 1) {
					txt = AR_UNDER_1M;
				} else if (diffMin < 60) {
					txt = AR_PRE+' ('+diffMin+') '+AR_UNDER_1H;
				} else {
					txt = AR_PRE+' ('+diffHour+') '+AR_UNDER_12H;
				}
			} else if (lang == 'sp') { // 스페인어버전
				if (diffMin < 1) {
					txt = SP_UNDER_12H;
				} else if (diffMin  < 60 ) {
					txt = diffMin + ' min';
				} else if (diffHour < 24) {
					txt = diffHour + ' h';
				} else {
					txt = diffDay + ' día';
				}
			} else if (lang == 'fr') { // 프랑스어버전
				if (diffMin < 1) {
					txt  = FR_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + 'min';
				} else if (diffHour < 24) {
					txt = diffHour + 'h';
				} else {
					txt = diffDay + 'j';
				}
			}
			$('span').filter('.' + loc + '').text(txt);
		}
	},
	setDateMiniFormat : function(loc, lang, now) {
		/**
		* 가장 짧게 출력하는 형식(티커 상단의 롤링되는 기사 1건)
		* loc : 날짜포맷이 바껴야 하는 위치, lang : 언어 타입, now : 현재시간(로컬or서버)
		*/
		var tmp = $('.'+loc+'').text();
		var old = changeDateFormat.stringToDate(tmp);
		if (old != 'Invalid Date') {
			// 시간 차이 계산
			var gap = new Date(now.getTime() - old.getTime());
			// 시간 차이를 diffMin : 분으로 표시, diffHour : 시간으로 표시
            var diffMin = Math.ceil(gap / (1000 * 60));
			var diffHour = Math.ceil(gap / (1000 * 3600));
			var diffDay = Math.ceil(gap / (1000 * 3600 * 24));
			var txt;
			
			if (lang == 'en') { // 영문버전
				if (diffMin < 1) {
					txt = 'now';
				} else if (diffMin < 60) {
					txt = diffMin + 'm';
				} else {
					txt = diffHour + 'h';
				}
			} else if (lang == 'ck') { // 중문버전
				if (diffMin < 1) {
					txt = CK_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + CK_UNDER_1H;
				} else {
					txt = diffHour + CK_UNDER_12H;
				}
			} else if (lang == 'jp') { // 일문버전
				if (diffMin < 1) {
					txt = JP_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + JP_UNDER_1H;
				} else {
					txt = diffHour + JP_UNDER_12H;
				}
			} else if (lang == 'ar') { // 아랍어버전(순서 우->좌)
				if (diffMin < 1) {
					txt = AR_UNDER_1M;
				} else if (diffMin < 60) {
					txt = AR_PRE+' ('+diffMin+') '+AR_UNDER_1H;
				} else {
					txt = AR_PRE+' ('+diffHour+') '+AR_UNDER_12H;
				}
			} else if (lang == 'sp') { // 스페인어버전
				if (diffMin < 1) {
					txt = SP_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + ' min';
				} else if (diffHour < 24) {
					txt = diffHour + ' h';
				} else {
					txt = diffDay + ' día';
				}
			} else if (lang == 'fr') { // 프랑스어버전
				if (diffMin < 1) {
					txt  = FR_UNDER_1M;
				} else if (diffMin < 60) {
					txt = diffMin + 'min';
				} else if (diffHour < 24) {
					txt = diffHour + 'h';
				} else {
					txt = diffDay + 'j';
				}
			}
			$('span').filter('.' + loc + '').text(txt);
		}
	},
	setArticleFormat : function(date, lang){
		var old = changeDateFormat.stringToDate(date);
		var txt = '';
		var date = old.Format2('dd');
		if( date.length == 1 ) date = '0'+date;
		var hour = old.Format2('HH');
		if( hour.length == 1 ) hour = '0'+hour;

		if( old != 'Invalid Date' ){
			if( lang == 'en' ){
				txt = hour+':'+old.Format2('mm')+' '+old.Format2('MMM', lang)+'. '+date;
			}else if( lang == 'ck' ){
				txt = old.Format2('MMMM', lang)+date+'日 '+hour+':'+old.Format2('mm');
			}else if( lang == 'jp' ){
				txt = old.Format2('MM')+'.'+date+' '+hour+':'+old.Format2('mm');
			}else if( lang == 'ar' ){
				txt = old.Format2('MM')+'.'+date+' '+hour+':'+old.Format2('mm');
			}else if( lang == 'sp' ){
				txt = date.replace(/(^0)(.*)/,'$2')+' '+old.Format2('MMM',lang).toLowerCase()+' '+hour+':'+old.Format2('mm');
			}else if( lang == 'fr' ){
				txt = date+'.'+old.Format2('MM')+' à '+hour+'h'+old.Format2('mm');
			}
		}
		return txt;
	},
	setTopnewsFormat : function(date, lang){
		var old = changeDateFormat.stringToDate(date);
		var txt = '';
		var date = old.Format2('dd');
		if( date.length == 1 ) date = '0'+date;
		var hour = old.Format2('HH');
		if( hour.length == 1 ) hour = '0'+hour;

		if( old != 'Invalid Date' ){
			if( lang == 'en' ){
				txt = old.Format2('HH')+':'+old.Format2('mm')+' '+old.Format2('MMM', lang)+'. '+date;
			}else if( lang == 'ck' ){
				txt = old.Format2('MMMM', lang)+date+'日 '+hour+':'+old.Format2('mm');
			}else if( lang == 'jp' ){
				txt = old.Format2('MM')+'.'+date+' '+hour+':'+old.Format2('mm');
			}else if( lang == 'ar' ){
				txt = old.Format2('MM')+'.'+date+' '+hour+':'+old.Format2('mm');
			}else if( lang == 'sp' ){
				txt = date.replace(/(^0)(.*)/,'$2')+' de '+old.Format2('MMM',lang).toLowerCase()+' '+hour+':'+old.Format2('mm');
			}else if( lang == 'fr' ){
				txt = date+'.'+old.Format2('MM')+' à '+hour+'h'+old.Format2('mm');
			}
		}
		return txt;
	},
	setKospiTime : function(date, lang){
		var tmpHour = date.substring(8, 12);
		var text = changeDateFormat.setArticleFormat(date, lang);
		var closing = '';

		switch(lang){
			case 'en' : closing = 'Closing'; break;
			case 'ck' : closing = '收盘'; break;
			case 'jp' : closing = '終値'; break;
			case 'ar' : closing = 'الإغلاق'; break;
			case 'sp' : closing = 'Cierre'; break;
			case 'fr' : closing = 'Clôture'; break;
		}

		if (tmpHour >= 8888) return closing;
		else return text;
	},
	setExchangeFormat : function(before, lang){
		/**
		 * 환율 날짜 형식 변환
		 */
		var tmp = changeDateFormat.stringToDate(before);
		var text = '';
		var date = tmp.Format2('dd');
		if( date.length == 1 ) date = '0'+date;
		var hour = tmp.Format2('HH');
		if( hour.length == 1 ) hour = '0'+hour;

		switch(lang){
			case 'en' : text = tmp.Format2('MM') + '/' + date + ' ' + hour + ':' + tmp.Format2('mm'); break;
			case 'ck' : text = tmp.Format2('MM') + '/' + date + ' ' + hour + ':' + tmp.Format2('mm'); break;
			case 'jp' : text = tmp.Format2('MM') + '/' + date + ' ' + hour + ':' + tmp.Format2('mm'); break;
			case 'ar' : text = tmp.Format2('MM') + '/' + date + ' ' + hour + ':' + tmp.Format2('mm'); break;
			case 'sp' : text = tmp.Format2('MM') + '/' + date + ' ' + hour + ':' + tmp.Format2('mm'); break;
			case 'fr' : text = tmp.Format2('MM') + '/' + date + ' ' + hour + ':' + tmp.Format2('mm'); break;
		}

		return text;
	},
	stringToDate : function(str){
		str = str.replace(/\/|-|\s|:/gi, '');
		if( str.length > 13 ) {
			var old = new Date(str.slice(0,4), Number(str.slice(4,6))-1, str.slice(6,8), str.slice(8,10), str.slice(10,12), str.slice(12,14));
		} else if( str.length > 8 ) {
			var old = new Date(str.slice(0,4), Number(str.slice(4,6))-1, str.slice(6,8), str.slice(8,10), str.slice(10,12));
		} else {
			var old = new Date(Number(str.slice(0,4)), str.slice(4,6)-1, str.slice(6,8));
		}
		return old;
	}
};

$(document).ready(function() {
    // 언어 별로 날짜 포맷 바꿈
	changeDateFormat.init();
});