//호스트명
var HOSTNAME = window.location.hostname;
/*
 * 영문 상수
 */
var DOMAIN_INFO_ID = "1201"; 
var LANG_TYPE = 'en';
// 이미지 도메인
var IMG_DOMAIN = "//img.yna.co.kr";
var RD_DOMAIN = "//rd.yna.co.kr/";
var DOMAIN = "//"+HOSTNAME;
var APS_DOMAIN = "//ars.yna.co.kr/api/v2/";
var SID = HOSTNAME;
var URS_DOMAIN = 'http://yna.kr/';
var UAS_DOMAIN = "//uas.yna.co.kr";
//현지 위치 정보를 셋팅한다.
var CURRENT_LOCATION = "";
(function(){
    var thisFirst = '';
    if( HOSTNAME.indexOf('qa') !== -1 || HOSTNAME.indexOf('qa-') !== -1){
        thisFirst = "qa-";
    }else if( HOSTNAME.indexOf('dev') !== -1 || HOSTNAME.indexOf('dev-') !== -1){
        thisFirst = "dev-";
    }

    RD_DOMAIN =  "//"+ thisFirst +"rd.yna.co.kr/";
    //IMG_DOMAIN = "//"+ thisFirst +"img.yna.co.kr";
    APS_DOMAIN = "//"+ thisFirst +"ars.yna.co.kr/api/v2/";
    UAS_DOMAIN = "//" + thisFirst + "uas.yna.co.kr";
}());

// 서비스 페이지 pc
var SERVICE = window.location.protocol + DOMAIN;

// API 주소
var APS = window.location.protocol + APS_DOMAIN;

//receiveEmail 주소
var EMAILURL = UAS_DOMAIN + "/member/api/";
var RECEIVE_API = EMAILURL + "sendMail";


// 속보
var LIST_COUNT = "15";
var LATESTNEWS = APS + 'sokbo?lang=' + LANG_TYPE.toUpperCase() + '&count=' + LIST_COUNT + '&minute=800';

// 화보(이슈) 목록 조회
var ISSUE_API = APS + 'issue.contents?id=';

// 화보(이슈)목록 및 이슈컨텐츠링크목록을 조회한다
var ISSUEEX_API = APS + 'issueex?ctype=PT&lang=';

// 날씨
var WEATHER_NOW = APS + "weather.now";
var WEATHER_WEEK = APS + "weather.week";

// URGENT(긴급) 관련 JSON 받는 API 주소
var URGENT_LANG_ID = "622";		//긴급기사
var URGENT_TOTAL = "N";
var URGENTNEWS = APS + "edit?id=" + URGENT_LANG_ID + "&total=" + URGENT_TOTAL;

// FEEDBACK(피드백) 관련 JSON 보내는 API 주소(수정필요)
var BBS_ID = "";
var FEEDBACK_API = APS + "" + BBS_ID + "";

// index 하단에 섹션별로 기사를 조회하는 API
var BOTTOMSECTION_COUNT = "25";
var BOTTOMSECTION_BODY = "N";
var BOTTOMSECTIONNEWS = APS + "articlelink.section?count=" + BOTTOMSECTION_COUNT + "&body=" + BOTTOMSECTION_BODY;

// host 값에 따른 도메인 정보 받아오기
var DOMAININFO = APS + "svc.domain.info?host=";

// 코스피(KOSPI), 코스닥(KOSDAQ) 관련 정보 받아오는 API
var KOSPI_API = APS + 'svc.stock';

// 환율 관련 정보 받아오는 API
var COUNTRY_NAME = 'USD,JPY,EUR,CNY';
var EXCHANGERATE_API = APS + 'svc.exchange?names=' + COUNTRY_NAME;

// 키워드(keyword) API
var KEYWORD_COUNT = '5';
var KEYWORD_TIME = '24';
var KEYWORD_ARTICLE = 'Y';
var KEYWORD_API = APS + 'svc.keyword?lang=' + LANG_TYPE.toUpperCase() + '&count=' + KEYWORD_COUNT + '&before=' + KEYWORD_TIME + '&article=' + KEYWORD_ARTICLE;

//다국어PC/MOBILE Header SEARCH INPUT 키워드 API
var SEARCH_KEYWORD_COUNT = '5';
var SEARCH_KEYWORD_ARTICLE = 'N';
var SEARCH_KEYWORD_API = APS + 'svc.keyword?lang=' + LANG_TYPE.toUpperCase() + '&count=' + SEARCH_KEYWORD_COUNT + '&article=' + SEARCH_KEYWORD_ARTICLE;

//삭제기사목록 API
var SAVED_DEL_LIST_BEFORE = "356";
var DEL_LIST_ROUTE = 'C';
var SAVED_DEL_LIST = APS + "del.list?lang=" + LANG_TYPE.toUpperCase() + "&before=" + SAVED_DEL_LIST_BEFORE + '&route=' + DEL_LIST_ROUTE;

// MYPAGE url
var MYPAGE = SERVICE + "/saved/index";

// 최신영상(K-Wave)
var LATESTVIDEOID = '53';

// 리스트형 데이터셋 API
var LIST_TYPE_DATASET = APS + 'articlelink';

var LISTFIXED = APS + 'list.fixed';

// 통통영상-bts 기사리스트
var WSS = '9001098';
var KW = '0714001';
var MUSE = '0708001';
var TONGTONG_ARTICLE_BTS = LISTFIXED + '?cattr=A&before=100&div1='+WSS+'&div2='+KW+'&lang=EN&count=';
var TONGTONG_PHOTO_BTS = LISTFIXED + '?cattr=P&before=100&div1='+WSS+','+MUSE+'&div2='+KW+'&lang=EN&count=';

/* 편집형 데이터셋 히스토리 조회 */
// 핫뉴스
var TOPNEWS_ID = "4";
var HISTORY_TOPNEWS = APS + "hedit.date?id=" + TOPNEWS_ID + "&body=N&total=Y";

/*
 * 출력 메세지
 */
// FEEDBACK 내용이 공백이거나 json 보내기 실패 혹은 에러난 경우 출력 메세지 (재검토 필요)
var FEEDBACK_FAIL = "Please fill in the blanks and try again or try again later.";
var FEEDBACK_SUCCESS = 'Thank you for your feedback.';

// 언어별 dateFormat 관련 상수(재검토 필요)
var EN_UNDER_1M = "Just now";
var EN_EQUAL_1M = "1 minute ago";
var EN_UNDER_1H = " minutes ago";
var EN_EQUAL_1H = "1 hour ago";
var EN_UNDER_12H = " hours ago";
var EN_EQUAL_1D = "1 day ago";
var EN_OVER_1D = " days ago";

//언어 별 weather 관련 상수 (번역 검토 필요)
var FORECAST = "Forecast";
var PRECIP = "Precip";
var WINDS = "Wind";
var HUMIDITY = "Humidity";
var MORDERATE = "Morderate";
var CAI_MORE = "Comprehensive Air-quality Index";
var PM_MORE = "Particulate Matter Less than 10㎛";
var PM25_MORE = "Particulate Matter Less than 2.5㎛";
var DSS_MORE = "Dust and Sandstorm";
var O3_MORE = "Ozone";

// RSS COPY 완료시 출력 텍스트
var COPY_COMPLETE = 'URL has been copied.';

// 스크랩 url 복사를 했을 때 출력 텍스트
var SAVED_URLCOPY = "URL is copied.";

//검색 공백
var SEARCH_NULL = "Input Keyword";

//검색어 길이 초과
var SEARCH_LENGTH_TEXT = "There is a 40-character limit, including spaces, when using the search function.";

//receiveEmail 메세지
var MSG_RECEIVE_SUCCESS = "You've signed up as \n";
var MSG_RECEIVE_FAIL = "Connection Failed \n";