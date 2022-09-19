 var ESP_isVoting61481=false;(function ESP_Poll61481(){var SSV_POLLRAND61481=false;
var SSV_id61481=61481;
var SSV_pt61481=0;
var SSV_po61481=0;
var SSV_s61481=4940;
var SSV_b61481=3;
var SSV_server61481='//polls.esurveyspro.com';
var SSV_html61481='<div class="ESP-question">\n\t\t<div class="ESP-question-outer">\n\t\t\t\t\t<div class="ESP-question-inner">\n\t\t\t\t\t<div class="ESP-question-top">\n\t\t\t\t\t\t<span>Given the Covid-19 pandemic, Tulane U will suspend or expel students who host parties/gatherings of more than 15 people in the fall. Is this policy:</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
var AA61481=new Array();
AA61481[0]='<input type="radio" class="ESP-radiobutton" name="SN_answer61481" id="ESP_answer_61481_0" value="4389" /><label for="ESP_answer_61481_0" class="ESP-answer-label-1" >warranted</label><br />\n';
AA61481[1]='<input type="radio" class="ESP-radiobutton" name="SN_answer61481" id="ESP_answer_61481_1" value="4390" /><label for="ESP_answer_61481_1" class="ESP-answer-label-1" >unwarranted</label><br />\n';
AA61481[2]='<input type="radio" class="ESP-radiobutton" name="SN_answer61481" id="ESP_answer_61481_2" value="4391" /><label for="ESP_answer_61481_2" class="ESP-answer-label-1" >not sure</label><br />\n';
AA61481[3]='<input type="radio" class="ESP-radiobutton" name="SN_answer61481" id="ESP_answer_61481_3" value="4392" /><label for="ESP_answer_61481_3" class="ESP-answer-label-1" >no opinion</label><br />\n';

 var headEl=null;
 if(document.getElementsByTagName('HEAD').length==0){
     headEl=document.createElement('HEAD');
     document.appendChild(headEl);
 }
 headEl=document.getElementsByTagName('HEAD')[0];
 var styleEl=document.createElement('STYLE');
 styleEl.id='ESP_poll_style_61481'
 headEl.appendChild(styleEl);
 var styleText='#ESP_container61481 .radio, input[type="radio"] {    padding-left: 0;    margin-right: -5px !important;    margin-top: 5px!important;}#ESP_container61481 .ESP-radiobutton  {float: right;line-height: 110%;margin-left: -35px;}#ESP_container61481 .ESP-box{background:#ffffff;border:0px solid #C0C0C0;margin:10px 10px 10px 10px;padding:0px 0px 0px 0px;width:270px;height:auto;}#ESP_container61481 .ESP-question-top{font:normal normal bold 11px/24px Verdana;color:#333333;text-decoration:none;background:none;border:0px none #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;}#ESP_container61481 .ESP-answer{width: 150px;font:normal normal bold 11px/12px Verdana;color:#555555;text-decoration:none;background:none;border:0px none #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;}#ESP_container61481 .ESP-textfield{font:normal normal normal 12px/24px Verdana;color:#333333;text-decoration:none;background:none;border:1px solid #999999;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;width:150px;height:auto;}#ESP_container61481 .ESP-answer-feedback{background:#F0F0F0;border:0px solid #999999;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}#ESP_container61481 .ESP-answer-feedback-bar{background:#909090;border:0px solid #999999;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}#ESP_container61481 .ESP-totalvotes-inner{font:normal normal normal 12px/20px Verdana;color:#333333;text-decoration:none;background:#F0F0F0;border:0px solid #F0F0F0;padding:0px 0px 0px 0px;margin:0px 10px 0px 10px;}#ESP_container61481 .ESP-votebutton{font:normal normal normal 12px/20px Verdana;color:#333333;text-decoration:none;background:#F0F0F0;border:1px solid #333333;margin:20px 10px 10px 10px;width:100px;height:20px;padding:0px 0px 0px 0px;float:right;cursor:pointer;}#ESP_container61481 .ESP-votebutton-text{display:inline;}#ESP_container61481 .ESP-viewResult{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:none;background:#FFFFFF;border:0px solid #000000;margin:5px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;}#ESP_container61481 .ESP-viewResult:hover{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:underline;background:#FFFFFF;border:0px solid #000000;margin:5px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;}#ESP_container61481 .ESP-viewResult:visited{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:underline;background:#FFFFFF;border:0px solid #000000;margin:5px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;}#ESP_container61481 .ESP-pollComments{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:none;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-pollComments:hover{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:underline;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-pollComments:visited{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:none;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-returnToPoll{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:none;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-returnToPoll:hover{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:underline;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-returnToPoll:visited{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:none;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-esurveyPro{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:none;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-esurveyPro:hover{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:underline;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 .ESP-esurveyPro:visited{font:normal normal normal 12px/20px Verdana;color:#333333;width:120px;height:auto;text-decoration:none;background:#FFFFFF;border:0px solid #000000;margin:0px 10px 0px 10px;padding:0px 0px 0px 0px;display:inline-block;float:left;clear:left;}#ESP_container61481 ';
 var styleDefination=document.createTextNode(styleText);
 if(styleEl.styleSheet)
    styleEl.styleSheet.cssText=styleText;
 else
     styleEl.appendChild(styleDefination);
y61481='';
for(j=0;j<AA61481.length;j++){y61481+=AA61481[j];}
document.write("<div id='ESP_container61481'>\n");
document.write("  <div id='pollResult61481'style='display:none;'></div>\n");
document.write("  <div id='pollBody61481' class='ESP-box'>\n");
document.write("      <div class='ESP-box-outer'>\n");
document.write("          <div class='ESP-box-inner'>\n");
document.write("              <div class='ESP-box-top'>\n");
document.write("                  "+SSV_html61481+"\n");document.write("                  <div class='ESP-answer' >\n");document.write("                      <div class='ESP-answer61481' >"+y61481+"<br /></div>\n");
document.write("                  </div>\n");
document.write("                  <div class='ESP-vote' >\n");
document.write("                      <div class='ESP-votebutton-outer' style='clear:both;'>\n");
document.write("                          <div id='loader61481' style='display:none;border:1px solid #000;background:#fff;width:208px;padding:15px;position:absolute;z-index:2;'><img src='https://www.esurveyspro.com/images/wait.gif' alt='Loading...' /></div>");
document.write("                          <button class='ESP-votebutton'  type='button' id='ESP_vote61481_button'>\n");
document.write("                              <span class='ESP-votebutton-text'>Vote</span>\n");
document.write("                          </button>\n");
document.write("                          <a href='javascript:;' class='ESP-viewResult' id='ESP_viewResult61481'>View Results</a>\n");
document.write("                      <br style='clear:both;' /></div>\n");
document.write("                  </div>\n");
document.write("              </div>\n");
document.write("          </div>\n");
document.write("      </div>\n");
document.write("   </div>\n");
document.write("</div>\n");
function ESP_IsAnswerChecked61481() {
     for(i=0;i<AA61481.length;i++) {
         if(document.getElementById('ESP_answer_61481_'+i).checked) {return true;}
     }
     return false;
}
function ESP_vote61481(a){
  var oA='';
  if (ESP_IsAnswerChecked61481() || a==false){
      var cookie=ESPsubcookiejar.fetch ('eSurveysProVoted_Cookie_61481', 'closeDate')||'';
      if(cookie !='') cookie ='&cookie='+cookie;
      var r;
      if(SSV_pt61481==1){SSV_a61481='';
          for(i=0;i<AA61481.length;i++) {
              r = document.getElementById('ESP_answer_61481_'+i);
              if(r.type=='checkbox' && r.checked) {
                  SSV_a61481+=r.value+',';
              } 
          } 
       }else{SSV_a61481='';
          for(i=0;i<AA61481.length;i++){
              r=document.getElementById('ESP_answer_61481_'+i);
              if(r.checked) { SSV_a61481+=r.value+',';}
          }
       }
       SSV_a61481=SSV_a61481.substring(0,SSV_a61481.length-1);
       var s61481 = document.createElement('SCRIPT');
       ESP_isVoting61481=true;
       document.getElementById('loader61481').style.display='block';
       if(a==false)
       {
           s61481.src ='https://www.esurveyspro.com/App/Polls/pollVote.aspx?PollId=61481&'+(new Date());
           ESP_isVoting61481=false;
       }
       else
           s61481.src ='https://www.esurveyspro.com/App/Polls/pollVote.aspx?PollId=61481&ansId='+SSV_a61481+'&oA='+oA+cookie+'&'+(new Date());
       var h = document.getElementsByTagName('head').item(0);
       if(a==false)
       {
          window.setTimeout(function(){h.appendChild(s61481);},900);
       }
       else
       {
          h.appendChild(s61481);
       }
   }
   else{alert('Please choose an answer first!');}
}
document.getElementById('ESP_vote61481_button').onclick=function(){ESP_vote61481();}
if(document.getElementById('ESP_viewResult61481'))
     document.getElementById('ESP_viewResult61481').onclick=function(){ESP_vote61481(false);}
})();
                if(!ESPcookiejar)
                {
                    var ESPcookiejar = {
            	        /* set a cookie */
            	        bake: function(cookieName,cookieValue,days,path){
            		        var expires='';
            		        if (days)
            		        {
            			        var date = new Date();
            			        date.setTime(date.getTime()+(days*24*60*60*1000));
            			        expires = "; expires="+date.toGMTString();
            		        }
            		        var thePath = '; path=/';
            		        if (path) 
                                thePath = '; path='+path;
            		        document.cookie = cookieName+'='+escape(cookieValue)+expires+thePath;
            	        },
            	        /* get a cookie value */
            	        fetch: function(cookieName){
            		        var nameEQ = cookieName + '=';
            		        var ca = document.cookie.split(';');
            		        for (var i=0; i<ca.length; i++)
            		        {
            			        var c = ca[i];
            			        while (c.charAt(0)==' ') c = c.substring(1,c.length);
            			        if (c.indexOf(nameEQ)==0) return unescape(c.substring(nameEQ.length,c.length));
            		        }
            		        return null;
            	        },
            	        /* delete a cookie */
            	        crumble: function(cookieName){
            		        cookiejar.bake(cookieName,'',-1);
            	        }
                    };
            
                    /* circumventing browser restrictions on the number of cookies one can use */
                    var ESPsubcookiejar = {
            	        nameValueSeparator: '$$:$$',
            	        subcookieSeparator: '$$/$$',
            	        /* set a cookie. subcookieObj is a collection of cookies to be. Every member of subcookieObj is the name of the cookie, its value
            	         * the cookie value
            	         */
            	        bake: function(cookieName,subcookieObj,days,path){
            		        var cookieValue = '';
            		        for (var i in subcookieObj)
            		        {
            			        cookieValue += i + ESPsubcookiejar.nameValueSeparator;
            			        cookieValue += subcookieObj[i];
            			        cookieValue += ESPsubcookiejar.subcookieSeparator;
            		        }
            		        /* remove trailing subcookieSeparator */
            		        cookieValue = cookieValue.substring(0,cookieValue.length-ESPsubcookiejar.subcookieSeparator.length);

            		        ESPcookiejar.bake(cookieName,cookieValue,days,path);
            	        },
            	        /* get a subcookie */
            	        fetch: function(cookieName,subcookieName){
            		        var cookieValue = ESPcookiejar.fetch(cookieName);
                            if(cookieValue)
                            {
            		            var subcookies = cookieValue.split(ESPsubcookiejar.subcookieSeparator);
            		            for (var i=0; i<subcookies.length; i++)
            		            {
            			            var sc = subcookies[i].split(ESPsubcookiejar.nameValueSeparator);
            			            if (sc[0]==subcookieName) return sc[1];
            		            }
                            }
            		        return null;
            	        },
            	        /* delete a subcookie */
            	        crumble: function(cookieName,subcookieName,days,path)
            	        {
            		        var cookieValue = cookiejar.fetch(cookieName);
            		        var newCookieObj = {};
            		        var subcookies = cookieValue.split(ESPsubcookiejar.subcookieSeparator);
            		        for (var i=0; i<subcookies.length; i++)
            		        {
            			        var sc = subcookies[i].split(ESPsubcookiejar.nameValueSeparator);
            			        if (sc[0]!=subcookieName) newCookieObj[sc[0]] = sc[1];
            		        }
            		        ESPsubcookiejar.bake(cookieName,newCookieObj,days,path);
            	        }
                    };
                }//end if
var MONTH_NAMES=new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
var DAY_NAMES=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');

function LZ(x) {return(x<0||x>9?"":"0")+x}
function formatDate(date,format) {
	format=format+"";
	var result="";
	var i_format=0;
	var c="";
	var token="";
	var y=date.getYear()+"";
	var M=date.getMonth()+1;
	var d=date.getDate();
	var E=date.getDay();
	var H=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var yyyy,yy,MMM,MM,dd,hh,h,mm,ss,ampm,HH,H,KK,K,kk,k;
	// Convert real date parts into formatted versions
	var value=new Object();
	if (y.length < 4) {y=""+(y-0+1900);}
	value["y"]=""+y;
	value["yyyy"]=y;
	value["yy"]=y.substring(2,4);
	value["M"]=M;
	value["MM"]=LZ(M);
	value["MMM"]=MONTH_NAMES[M-1];
	value["NNN"]=MONTH_NAMES[M+11];
	value["d"]=d;
	value["dd"]=LZ(d);
	value["E"]=DAY_NAMES[E+7];
	value["EE"]=DAY_NAMES[E];
	value["H"]=H;
	value["HH"]=LZ(H);
	if (H==0){value["h"]=12;}
	else if (H>12){value["h"]=H-12;}
	else {value["h"]=H;}
	value["hh"]=LZ(value["h"]);
	if (H>11){value["K"]=H-12;} else {value["K"]=H;}
	value["k"]=H+1;
	value["KK"]=LZ(value["K"]);
	value["kk"]=LZ(value["k"]);
	if (H > 11) { value["a"]="PM"; }
	else { value["a"]="AM"; }
	value["m"]=m;
	value["mm"]=LZ(m);
	value["s"]=s;
	value["ss"]=LZ(s);
	while (i_format < format.length) {
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		if (value[token] != null) { result=result + value[token]; }
		else { result=result + token; }
		}
	return result;
	}

            