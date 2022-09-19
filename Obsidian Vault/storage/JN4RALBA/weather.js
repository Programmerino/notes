(function ($) {
	$.weatherNowData = { 
			areaData:'',
			today:'',
			jrolling:'',
			getJrolling : function(){
				return this.jrolling;
			},
			setJrolling : function(data){
				this.jrolling=data;
			},
			getAreaData : function(){
				return this.areaData;
			},
			setAreaData: function(data){
				this.areaData=data;
			},
			
			getToday : function(){
				return this.today;
			},
			
			setToday : function(data){
				this.today=data;
			}
	}
	$.bindEvent = {
			rollWeather :function(rollNode){
				var mainDataWeek=null;
				rollNode.find("article").on("mouseover",function() {
			        var thisNode= $(this);
					var nodeIndex = thisNode.index()-1;
					//가공된 날씨정보
					var weatherJsonData={};
					if(mainDataWeek==null){
					$.weatherUtil.requestWeather(WEATHER_WEEK,"GET","json",function(data){
						mainDataWeek=data;
						var weatherData = $.weatherNowData.getAreaData()[nodeIndex];
						weatherJsonData.data = weatherData;
						$.each(data.body.region,function(idx,item){
							if(item.id==weatherData.info.id){
								$.each(item.weather,function(subIdx,subItem){
									if(subItem.aplYmd==$.weatherNowData.getToday()){
										weatherJsonData.tempMinMax = subItem;
									}
								})
							}
						});
						var weatherTemplate= $.weatherUtil.createWeatherTemplate(weatherJsonData);
						 $(".weather-layer").html(weatherTemplate);
						 $(".weather-layer").show();
						 $(".weather-layer").find(".weather-advice").on("click",function(){
							 $("#weather-Advice-auto").show();
						 });
					});
					
					}else{
						var weatherData = $.weatherNowData.getAreaData()[nodeIndex];
						weatherJsonData.data = weatherData;
						$.each(mainDataWeek.body.region,function(idx,item){
							if(typeof weatherData.info.id != "undefined"){
								if(item.id==weatherData.info.id){
									$.each(item.weather,function(subIdx,subItem){
										if(subItem.aplYmd==$.weatherNowData.getToday()){
											weatherJsonData.tempMinMax = subItem;
										}
									});
								}
							}
						});
						var weatherTemplate= $.weatherUtil.createWeatherTemplate(weatherJsonData);
						 $(".weather-layer").html(weatherTemplate);
						 $(".weather-layer").show();
						 $(".weather-layer").find(".weather-advice").on("click",function(){
							 $("#weather-Advice-auto").show();
						 });
					}
				});
				
				$("#tickerWeather").mouseleave(function() {
				     $(".weather-layer").hide();
			    });

				$("#con-wrap").mouseleave(function() {
				     $("#weather-Advice-auto").hide();
			    });
				
				$("#weatherlayerClose").on("click",function(){
					$("#weather-Advice-auto").hide();
				});
			}
	},

	$.weatherUtil = {
			createWeatherTemplate:function(weather){
					var weather_layer = "", layerWind = "";
					var countryStr =window.location.host.split('.')[0];
					var cityName= $.weatherUtil.convertAreaName(weather.data,countryStr);
					var skyCode = $.weatherConfigData.getSkyValue(weather.data.weather.sky_code);
		            var air = $.weatherConfigData.getAirValue('pm10', weather.data.weather.pm10);
		            var pm25 = $.weatherConfigData.getAirValue('pm25', weather.data.weather.pm25);
		            var uv = $.weatherConfigData.getAirValue('uv', weather.data.weather.uv);
		            var O3 = $.weatherConfigData.getAirValue('o3', weather.data.weather.o3);
		            var CAI = $.weatherConfigData.getAirValue('total', weather.data.weather.cai);
		            var stringLang = 'string_' + countryStr;
		            var caiName = $.weatherConfigData.getCaiName(countryStr);
		            
		            var pmName		= $.weatherConfigData.getMp10Name(countryStr);
					var pm25Name	= $.weatherConfigData.getMp25Name(countryStr);
					
					var windName= $.weatherConfigData.getWindValue(weather["data"]['weather'].winddir);
					var URL_LANG= LANG_TYPE;
					if(countryStr=="cb"){
						URL_LANG="cb";
					}

					if(LANG_TYPE === "en" || LANG_TYPE === "ck" || LANG_TYPE === "jp") {
						layerWind = "<div class='con wind'>" +
										"<em class='tit'>" + WINDS + "</em>" + windName[URL_LANG] + ' &nbsp;'+weather.data.weather.windspd + "&nbsp;m/s" +
									"</div>";
					}

		            weather_layer += "<div class='weather-layer02'>" +
                    "<div id='con-wrap01' class='con-wrap'>" +
                        "<div class='tit-wrap'>" +
                            "<strong class='tit'>" + cityName + "</strong>" +
                            "<span class='btn'>" + "<a href='" + DOMAIN + "/weather/index" + "'>" + FORECAST + "</a>" + "</span>" +
                        "</div>" +
                        "<span class='ico ico-b" + skyCode['codeString'] +"'>" + "</span>" +
                        "<div class='temp-wrap'>" +
                            "<span class='txt'>" + skyCode[stringLang] + "</span>" +
                            "<span class='temp'>" + $.weatherConfigData.getTempConvertValue(Math.round(weather.data.weather.temp)) + "<span>" + "℃" + "</span>" + "</span>" +
                            "<span class='min-max'>" +
                            	"<span class='max'>" + $.weatherConfigData.getTempConvertValue(weather.tempMinMax.max_temp) + "℃</span>" + "/" +
                                "<span class='min'>" + $.weatherConfigData.getTempConvertValue(weather.tempMinMax.min_temp) + "℃</span>" + 
                            "</span>" +
                        "</div>" +

                        "<div class='temp-wrap02'>" +
                            "<div class='con'>" +
                                "<em class='tit'>" + PRECIP + "</em>" + weather.data.weather.rain + "&nbsp;mm" +
                            "</div>" +
							layerWind +
                            "<div class='con'>" +
                                "<em class='tit'>" + HUMIDITY + "</em>" + weather.data.weather.humidity + "&nbsp;%" +
                            "</div>" +
                        "</div>" +
                        "<div class='bot-wrap'>" +
                            "<div class='tit-wrap'>" +
                                "<span class='tit more02'>"+caiName+"</span> <span class='weather-advice' id='weatherAdvice'></span>" +
                                "<span class='txt'>" + "<span class='"+CAI.string_calssName+"'>" + CAI[stringLang] + "</span>" + " " + weather.data.weather.cai + "</span>" +
                            "</div>" +
                            "<dl>" +
                                "<dt>" + pmName + "</dt>" +
                                "<dd><span class='"+air.string_calssName+"'>" + air[stringLang]+' '+air['value'] + "</span></dd>" +
                                "<dt>" + "UV" + "</dt>" +
                                "<dd> <span class='"+uv.string_calssName+"'>" + uv[stringLang] +' '+uv['value'] +  "</span></dd>" +
                                "<dt>" + pm25Name + "</dt>" +
                                "<dd> <span class='"+pm25.string_calssName+"'>" + pm25[stringLang] +' '+pm25['value'] +"</span></dd>" +
                                "<dt>" + "O₃" + "</dt>" +
                                "<dd> <span class='"+O3.string_calssName+"'>" + O3[stringLang] +' '+$.weatherConfigData.getTempConvertValue(O3['value'])+"</span></dd>" +
                            "</dl>" +
                        "</div>" +
                    "</div>" +
                    "<div id='con-wrap02' class='con-wrap'>" +
                        "<div class='tit-wrap'>" +
                            "<span class='btn02'>" + "<button type='button' class='btn-close'>" + "<span>" + "Pervious" + "</span>" + "</button>" + "</span>" +
                        "</div>" +
                        "<dl>" +
                            "<dt>" + "CAI" + "</dt>" +
                            "<dd>" + CAI_MORE + "</dd>" +
                            "<dt>" + "PM" + "</dt>" +
                            "<dd>" + PM_MORE + "</dd>" +
                            "<dt>" + "PM2.5" + "</dt>" +
                            "<dd>" + PM25_MORE + "</dd>" +
                            "<dt>" + "DSS" + "</dt>" +
                            "<dd>" + DSS_MORE + "</dd>" +
                            "<dt>" + "O₃" + "</dt>" +
                            "<dd>" + O3_MORE + "</dd>" +
                        "</dl>" +
                    "</div>" +
                 "</div>";
		       return weather_layer;
			},
	
			requestWeather : function(url,method,type,calback){
				$.ajax({
			        url: url,
			        type: method,
			        dataType: type,
			        success:function(data){
			         if(calback){
			        	 calback(data);
			         }
			        },
			        //에러 메세지 출력
			        error:function(jqXHR, textStatus, errorThrown){
			          console.log(textStatus + ":" + errorThrown);
			        }
			    });
			},
			//허용된 지역의 날씨 정보만 간추린다.
			confirmArea:function(areaCode){
				var resultAreaFlag=false;
				switch(areaCode) {
				  case "1111000000" :
				  case "2611000000" :
				  case "2711000000" :
				  case "2811000000" :
				  case "2911000000" :
				  case "3011000000" :
				  case "3111000000" :
				  case "5011000000" :
					  resultAreaFlag=true;
				  break;  
				}
				return resultAreaFlag;
			},
			//접속 정보에따라   국가어로  해당되는 지역명을 해당 국가명으로 반환한다.
			convertAreaName:function(data,countryStr){
					var cityName="";
				
					var areaName={
							 kr : {
								 	1111000000:"서울",
								 	2611000000 : "부산",
						            2711000000 : "대구",
						            2811000000 : "인천",
						            2911000000 : "광주",
						            3011000000 : "대전",
						            3111000000 : "울산",
						            5011000000 : "제주"
								}, 
							  en : {
								 	1111000000:"Seoul",
								 	2611000000 : "Busan",
						            2711000000 : "Daegu",
						            2811000000 : "Incheon",
						            2911000000 : "Gwangju",
						            3011000000 : "Daejeon",
						            3111000000 : "Ulsan",
						            5011000000 : "Jeju"
								},
							 cn : {
								    1111000000 : "首尔",
				                    2611000000 : "釜山",
				                    2711000000 : "大邱",
				                    2811000000 : "仁川",
				                    2911000000 : "光州",
				                    3011000000 : "大田",
				                    3111000000 : "蔚山",
				                    5011000000 : "济州"
								},
							 cb : {		
								    1111000000 : "首爾",
				                    2611000000 : "釜山",
				                    2711000000 : "大邱",
				                    2811000000 : "仁川",
				                    2911000000 : "光州",
				                    3011000000 : "大田",
				                    3111000000 : "蔚山",
				                    5011000000 : "济州"
							 	},
							jp : {		
									1111000000 :"ソウル",
									2611000000 :"釜山",
									2711000000 :"大邱",
									2811000000 :"仁川",
									2911000000 :"光州",
									3011000000 :"大田",
									3111000000 :"蔚山",
									5011000000 :"濟州道"
							},
							 ar : {		
									1111000000 :"سيئول",
									2611000000 :"بوسان",
									2711000000 :"ديغو",
									2811000000 :"إنتشون",
									2911000000 :"كوانغجو",
									3011000000 :"ديجون",
									3111000000 :"أوسان",
									5011000000 :"جيجو"
							 },
							 sp : {		
									1111000000 :"Seúl",
									2611000000 :"Busan",
									2711000000 :"Daegu",
									2811000000 :"Incheon",
									2911000000 :"Gwangju",
									3011000000 :"Daejeon",
									3111000000 :"Ulsan",
									5011000000 :"Jeju"
							 },
							 fr : {		
									1111000000 :"Séoul",
									2611000000 :"Busan",
									2711000000 :"Daegu",
									2811000000 :"Incheon",
									2911000000 :"Gwangju",
									3011000000 :"Daejeon",
									3111000000 :"Ulsan",
									5011000000 :"Jeju"
							 }
						}

					if(countryStr.indexOf("qa-") >= 0){
						countryStr = countryStr.replace("qa-","");
					}
					cityName = areaName[countryStr][data.info.id];
				return cityName;
			},
			convertDataState:function(){
				
			}

	}
	
	
	$.weatherConfigData = {

		   //국가별 온도 출력 양식을 반환한다.
			getTempConvertValue : function(temp){
				var resultTemp="";
				switch(LANG_TYPE){
					case 'fr':
					case 'sp':
						if(temp.toString().indexOf(".")>0){
							resultTemp = temp.toString().replace('.',',');
							
						}else{
							resultTemp=temp;
						}
					break;
					default:
						resultTemp=temp;
					break;
				}
				return resultTemp;
			},


			getSkyValue : function(code){
	            var codeString = '00'+code;
	            var result = { code : code, codeString : '01', string : '맑음', string_en : 'Sunny' };
	            switch(parseInt(code)){
	                case 1  :
	                    result.string = '맑음';
	                    result.string_kr = '맑음';
	                    result.string_en = 'Sunny';
	                    result.string_cn = '晴';
	                    result.string_cb = '晴';
	                    result.string_jp = '晴れ';
	                    result.string_ar = 'مشمس';
	                    result.string_sp = 'Soleado';
	                    result.string_fr = 'Ensoleillé';
	                    break;
	                case 2  :
	                    result.string = '구름조금';
	                    result.string_kr = '구름조금';
	                    result.string_en = 'Partly cloudy';
	                    result.string_cn = '少云';
	                    result.string_cb = '少雲';
	                    result.string_jp = '薄曇り';
	                    result.string_ar = 'غائم جزئيا';
	                    result.string_sp = 'Parcialmente nublado';
	                    result.string_fr = 'Partiellement nuageux';
	                    break;
	                case 3  :
	                    result.string = '흐림';
	                    result.string_kr = '흐림';
	                    result.string_en = 'Cloudy';
	                    result.string_cn = '阴';
	                    result.string_cb = '陰';
	                    result.string_jp = '曇り';
	                    result.string_ar = 'غائم';
	                    result.string_sp = 'Nublado';
	                    result.string_fr = 'Nuageux';
	                    break;
	                case 4  :
	                    result.string = '비';
	                    result.string_kr = '비';
	                    result.string_en = 'Rain';
	                    result.string_cn = '雨';
	                    result.string_cb = '雨';
	                    result.string_jp = '雨';
	                    result.string_ar = 'تمطر';
	                    result.string_sp = 'Lluvia';
	                    result.string_fr = 'Pluie';
	                    break;
	                case 5  :
	                    result.string = '눈';
	                    result.string_kr = '눈';
	                    result.string_en = 'Snow';
	                    result.string_cn = '雪';
	                    result.string_cb = '雪';
	                    result.string_jp = '雪';
	                    result.string_ar = 'جليد';
	                    result.string_sp = 'Nieve';
	                    result.string_fr = 'Neige';
	                    break;
	                case 6  :
	                    result.string = '눈비';
	                    result.string_kr = '눈비';
	                    result.string_en = 'Sleet';
	                    result.string_cn = '雨夹雪';
	                    result.string_cb = '雨夾雪';
	                    result.string_jp = 'みぞれ';
	                    result.string_ar = 'أمطار ثلجية';
	                    result.string_sp = 'Aguanieve';
	                    result.string_fr = 'Neige fondue';
	                    break;
	                case 7  :
	                    result.string = '소나기';
	                    result.string_kr = '소나기';
	                    result.string_en = 'Rain showers';
	                    result.string_cn = '阵雨';
	                    result.string_cb = '陣雨';
	                    result.string_jp = 'にわか雨';
	                    result.string_ar = 'مطر غزير';
	                    result.string_sp = 'Chubascos';
	                    result.string_fr = 'Averses';
	                    break;
	                case 8  :
	                    result.string = '소낙눈';
	                    result.string_kr = '소낙눈';
	                    result.string_en = 'heavy snow';
	                    result.string_cn = '阵雪';
	                    result.string_cb = '陣雪';
	                    result.string_jp = 'にわか雪';
	                    result.string_ar = 'ثلوج كثيفة';
	                    result.string_sp = 'Lluvias de nieve intensas';
	                    result.string_fr = 'Averses de neige';
	                    break;
	                case 9  :
	                    result.string = '안개';
	                    result.string_kr = '안개';
	                    result.string_en = 'Mist';
	                    result.string_cn = '雾';
	                    result.string_cb = '霧';
	                    result.string_jp = '霧';
	                    result.string_ar = 'ضباب';
	                    result.string_sp = 'Niebla';
	                    result.string_fr = 'Brouillard';
	                    break;
	                case 10 :
	                    result.string = '뇌우';
	                    result.string_kr = '뇌우';
	                    result.string_en = 'Thunderstorm';
	                    result.string_cn = '雷雨';
	                    result.string_cb = '雷雨';
	                    result.string_jp = '雷雨';
	                    result.string_ar = 'عاصفة رعدية';
	                    result.string_sp = 'Tormenta';
	                    result.string_fr = 'Orage';
	                    break;
	              case 11 :
	                    result.string = '차차 흐려짐';
	                    result.string_kr = '차차 흐려짐';
	                    result.string_en = 'Cloudy';
	                    result.string_cn = '晴转阴';
	                    result.string_cb = '晴轉陰';
	                    result.string_jp = '次第に曇り';
	                    result.string_ar = 'غائم تدريجيا';
	                    result.string_sp = 'Nubosidad en aumento';
	                    result.string_fr = 'Ennuagement';
	                    break;
	                case 12 :
	                    result.string = '흐려져 뇌우';
	                    result.string_kr = '흐려져 뇌우';
	                    result.string_en = 'Cloudy / thunderstorm';
	                    result.string_cn = '阴转雷雨';
	                    result.string_cb = '陰轉雷雨';
	                    result.string_jp = '曇りのち雷雨';
	                    result.string_ar = 'تغائم مع عاصفة رعدية';
	                    result.string_sp = 'Nubosidad en aumento </br> con tormentas';
	                    result.string_fr = 'Ennuagement</br> et orages';
	                    break;
	                case 13 :
	                    result.string = '흐려져 비';
	                    result.string_kr = '흐려져 비';
	                    result.string_en = 'Cloudy / rain';
	                    result.string_cn = '阴转雨';
	                    result.string_cb = '陰轉雨';
	                    result.string_jp = '曇りのち雨';
	                    result.string_ar = 'تغائم وممطر';
	                    result.string_sp = 'Nubosidad en aumento </br> con lluvias';
	                    result.string_fr = 'Ennuagement </br>et pluie';
	                    break;
	                case 14 :
	                    result.string = '흐려져 눈';
	                    result.string_kr = '흐려져 눈';
	                    result.string_en = 'Cloudy / snow';
	                    result.string_cn = '阴转雪';
	                    result.string_cb = '陰轉雪';
	                    result.string_jp = '曇りのち雪';
	                    result.string_ar = 'تغائم مع الثلوج';
	                    result.string_sp = 'Nubosidad en aumento</br> con nieve';
	                    result.string_fr = 'Ennuagement </br>et neige';
	                    break;
	                case 15 :
	                    result.string = '흐려져 눈비';
	                    result.string_kr = '흐려져 눈비';
	                    result.string_en = 'Cloudy / sleet';
	                    result.string_cn = '阴转雨夹雪';
	                    result.string_cb = '陰轉雨夾雪';
	                    result.string_jp = '曇りのちみぞれ';
	                    result.string_ar = 'غائم مع الصقيع';
	                    result.string_sp = 'Se pondrá nublado </br>con aguanieve';
	                    result.string_fr = 'Ennuagement </br>et neige fondue';
	                    break;
	                case 16 :
	                    result.string = '흐린 후 갬';
	                    result.string_kr = '흐린 후 갬';
	                    result.string_en = 'Cloudy / sunny';
	                    result.string_cn = '阴转晴';
	                    result.string_cb = '陰轉晴';
	                    result.string_jp = '曇りのち晴れ';
	                    result.string_ar = 'مشرق بعد الغيوم';
	                    result.string_sp = 'Nubes y claros';
	                    result.string_fr = 'Ensoleillement </br>après nuages';
	                    break;
	                case 17 :
	                    result.string = '뇌우 후 갬';
	                    result.string_kr = '뇌우 후 갬';
	                    result.string_en = 'Thunderstorm / bright';
	                    result.string_cn = '雷雨转晴';
	                    result.string_cb = '雷雨轉晴';
	                    result.string_jp = '雷雨のち晴れ';
	                    result.string_ar = 'مشرق بعد عاصفة رعدية';
	                    result.string_sp = 'Despejado tras</br>tormentas';
	                    result.string_fr = 'Ensoleillement </br>après orages';
	                    break;
	                case 18 :
	                    result.string = '비 후 갬';
	                    result.string_kr = '비 후 갬';
	                    result.string_en = 'Rain / sunny';
	                    result.string_cn = '雨转晴';
	                    result.string_cb = '雨轉晴';
	                    result.string_jp = '雨のち晴れ';
	                    result.string_ar = 'مشرق بعد المطر';
	                    result.string_sp = 'Despejado tras </br>lluvias';
	                    result.string_fr = 'Ensoleillement </br>après pluie';
	                    break;
	                case 19 :
	                    result.string = '눈 후 갬';
	                    result.string_kr = '눈 후 갬';
	                    result.string_en = 'Snow / sunny';
	                    result.string_cn = '雪转晴';
	                    result.string_cb = '雪轉晴';
	                    result.string_jp = '雪のち晴れ';
	                    result.string_ar = 'مشرق بعد الثلوج';
	                    result.string_sp = 'Despejado tras</br> nieve';
	                    result.string_fr = 'Ensoleillement </br>après neige';
	                    break;
	                case 20 :
	                    result.string = '눈비 후 갬';
	                    result.string_kr = '눈비 후 갬';
	                    result.string_en = 'Sleet / sunny';
	                    result.string_cn = '雨夹雪转晴';
	                    result.string_cb = '雨夾雪轉晴';
	                    result.string_jp = 'みぞれのち晴れ';
	                    result.string_ar = 'مشرق بعد الصقيع';
	                    result.string_sp = 'Despejado tras</br>aguanieve';
	                    result.string_fr = 'Ensoleillement </br>après neige fondue';
	                    break;
	                case 21 :
	                    result.string = '구름많음';
	                    result.string_kr = '구름많음';
	                    result.string_en = 'Cloudy';
	                    result.string_cn = '多云';
	                    result.string_cb = '多雲';
	                    result.string_jp = 'おおむね曇り';
	                    result.string_ar = 'غائم في الغالب';
	                    result.string_sp = 'Principalmente nublado';
	                    result.string_fr = 'Plutôt nuageux';
	                    break;
	                case 22 :
	                    result.string = '황사';
	                    result.string_kr = '황사';
	                    result.string_en = 'Yellow dust';
	                    result.string_cn = '沙尘暴';
	                    result.string_cb = '沙塵暴';
	                    result.string_jp = '黄砂';
	                    result.string_ar = 'الغبار الأصفر';
	                    result.string_sp = 'Polvo amarillo';
	                    result.string_fr = 'Poussière jaune';
	                    break;
	            }
	            result.codeString = codeString.substr(codeString.length-2, 2);
	            return result;
	        },
	        getAirValue : function(type, value){
	            if(!value || value === null || value === 'null' ){value = 0;}
	            var result = {
	                level : 0,
	                string : '좋음',
	                string_en : 'Good',
	                value : value
	            };
	            switch (type){
	                case 'total' :
	                    result.level = 1;
	                    result.string = '좋음';
	                    result.string_en = 'Good';
	                    if( 0 <= value && 50 >= value ){
	                        result.level = 1;
	                        result.string = '좋음';
	                        result.string_kr = '좋음';
	                        result.string_en = 'Good';
	                        result.string_cn = '好';
	                        result.string_cb = '好';
	                        result.string_jp = '良い';
	                        result.string_ar = 'جيد';
	                        result.string_sp = 'Bueno';
	                        result.string_fr = 'Bon';
							result.string_calssName = 'air-lv-txt01';
	                    }
	                    if( 50 < value && 100 >= value ){
	                        result.level = 2;
	                        result.string = '보통';
	                        result.string_kr = '보통';
	                        result.string_en = 'Moderate';
	                        result.string_cn = '一般';
	                        result.string_cb = '一般';
	                        result.string_jp = '中程度';
	                        result.string_ar = 'عادي';
	                        result.string_sp = 'Moderado';
	                        result.string_fr = 'Moyen';
							result.string_calssName = 'air-lv-txt02';
	                    }
	                    if( 100 < value && 250 >= value ){
	                        result.level = 3;
	                        result.string = '나쁨';
	                        result.string_kr = '나쁨';
	                        result.string_en = 'Bad';
	                        result.string_cn = '重度';
	                        result.string_cb = '重度';
	                        result.string_jp = '高い';
	                        result.string_ar = 'كثيف';
	                        result.string_sp = 'Malo';
	                        result.string_fr = 'Mauvais';
							result.string_calssName = 'air-lv-txt03';
	                    }
	                    if( 250 < value ){
	                        result.level = 4;
	                        result.string = '매우나쁨';
	                        result.string_kr = '매우나쁨';
	                        result.string_en = 'Very bad';
	                        result.string_cn = '严重';
	                        result.string_cb = '嚴重';
	                        result.string_jp = '非常に高い';
	                        result.string_ar = 'كثيف جدا';
	                        result.string_sp = 'Muy malo';
	                        result.string_fr = 'Très mauvais';
							result.string_calssName = 'air-lv-txt04';
	                    }
	                    break;
	                case 'pm10' :
	                    result.level = 1;
	                    result.string = '좋음';
	                    if( 0 <= value && 30 >= value ){
	                        result.level = 1;
	                        result.string = '좋음';
	                        result.string_kr = '좋음';
	                        result.string_en = 'Good';
	                        result.string_cn = '好';
	                        result.string_cb = '好';
	                        result.string_jp = '良い';
	                        result.string_ar = 'جيد';
	                        result.string_sp = 'Bueno';
	                        result.string_fr = 'Bon';
							result.string_calssName = 'air-lv-txt01';
	                    }
	                    if( 30 < value && 80 >= value ){
	                        result.level = 2;
	                        result.string = '보통';
	                        result.string_kr = '보통';
	                        result.string_en = 'Moderate';
	                        result.string_cn = '一般';
	                        result.string_cb = '一般';
	                        result.string_jp = '中程度';
	                        result.string_ar = 'عادي';
	                        result.string_sp = 'Moderado';
	                        result.string_fr = 'Moyen';
							result.string_calssName = 'air-lv-txt02';
	                    }
	                    if( 80 < value && 150 >= value ){
	                        result.level = 3;
	                        result.string = '나쁨';
	                        result.string_kr = '나쁨';
	                        result.string_en = 'Bad';
	                        result.string_cn = '重度';
	                        result.string_cb = '重度';
	                        result.string_jp = '高い';
	                        result.string_ar = 'كثيف';
	                        result.string_sp = 'Malo';
	                        result.string_fr = 'Mauvais';
							result.string_calssName = 'air-lv-txt03';
	                    }
	                    if( 150 < value ){
	                        result.level = 4;
	                        result.string = '매우나쁨';
	                        result.string_kr = '매우나쁨';
	                        result.string_en = 'Very bad';
	                        result.string_cn = '严重';
	                        result.string_cb = '嚴重';
	                        result.string_jp = '非常に高い';
	                        result.string_ar = 'كثيف جدا';
	                        result.string_sp = 'Muy malo';
	                        result.string_fr = 'Très mauvais';
							result.string_calssName = 'air-lv-txt04';
	                    }
	                    break;
	                case 'pm25' :
	                    result.level = 1;
	                    result.string = '좋음';
	                    if( 0 <= value && 15 >= value ){
	                        result.level = 1;
	                        result.string = '좋음';
	                        result.string_kr = '좋음';
	                        result.string_en = 'Good';
	                        result.string_cn = '好';
	                        result.string_cb = '好';
	                        result.string_jp = '良い';
	                        result.string_ar = 'جيد';
	                        result.string_sp = 'Bueno';
	                        result.string_fr = 'Bon';
							result.string_calssName = 'air-lv-txt01';
	                    }
	                    if( 15 < value && 50 >= value ){
	                        result.level = 2;
	                        result.string = '보통';
	                        result.string_kr = '보통';
	                        result.string_en = 'Moderate';
	                        result.string_cn = '一般';
	                        result.string_cb = '一般';
	                        result.string_jp = '中程度';
	                        result.string_ar = 'عادي';
	                        result.string_sp = 'Moderado';
	                        result.string_fr = 'Moyen';
							result.string_calssName = 'air-lv-txt02';
	                    }
	                    if( 50 < value && 100 >= value ){
	                        result.level = 3;
	                        result.string = '나쁨';
	                        result.string_kr = '나쁨';
	                        result.string_en = 'Bad';
	                        result.string_cn = '重度';
	                        result.string_cb = '重度';
	                        result.string_jp = '高い';
	                        result.string_ar = 'كثيف';
	                        result.string_sp = 'Malo';
	                        result.string_fr = 'Mauvais';
							result.string_calssName = 'air-lv-txt03';
	                    }
	                    if( 100 < value ){
	                        result.level = 4;
	                        result.string = '매우나쁨';
	                        result.string_kr = '매우나쁨';
	                        result.string_en = 'Very bad';
	                        result.string_cn = '严重';
	                        result.string_cb = '嚴重';
	                        result.string_jp = '非常に高い';
	                        result.string_ar = 'كثيف جدا';
	                        result.string_sp = 'Muy malo';
	                        result.string_fr = 'Très mauvais';
							result.string_calssName = 'air-lv-txt04';
	                    }
	                    break;
	                case 'o3' :
	                    result.level = 1;
	                    result.string = '좋음';
	                    if( 0 <= value && 0.03 >= value ){
	                        result.level = 1;
	                        result.string = '좋음';
	                        result.string_kr = '좋음';
	                        result.string_en = 'Good';
	                        result.string_cn = '好';
	                        result.string_cb = '好';
	                        result.string_jp = '良い';
	                        result.string_ar = 'جيد';
	                        result.string_sp = 'Bueno';
	                        result.string_fr = 'Bon';
							result.string_calssName = 'air-lv-txt01';
	                    }
	                    if( 0.03 < value && 0.09 >= value ){
	                        result.level = 2;
	                        result.string = '보통';
	                        result.string_kr = '보통';
	                        result.string_en = 'Moderate';
	                        result.string_cn = '一般';
	                        result.string_cb = '一般';
	                        result.string_jp = '中程度';
	                        result.string_ar = 'عادي';
	                        result.string_sp = 'Moderado';
	                        result.string_fr = 'Moyen';
							result.string_calssName = 'air-lv-txt02';
	                    }
	                    if( 0.09 < value && 0.15 >= value ){
	                        result.level = 3;
	                        result.string = '나쁨';
	                        result.string_kr = '나쁨';
	                        result.string_en = 'Bad';
	                        result.string_cn = '重度';
	                        result.string_cb = '重度';
	                        result.string_jp = '高い';
	                        result.string_ar = 'كثيف';
	                        result.string_sp = 'Malo';
	                        result.string_fr = 'Mauvais';
							result.string_calssName = 'air-lv-txt03';
	                    }
	                    if( 0.15 < value ){
	                        result.level = 4;
	                        result.string = '매우나쁨';
	                        result.string_kr = '매우나쁨';
	                        result.string_en = 'Very bad';
	                        result.string_cn = '严重';
	                        result.string_cb = '嚴重';
	                        result.string_jp = '非常に高い';
	                        result.string_ar = 'كثيف جدا';
	                        result.string_sp = 'Muy malo';
	                        result.string_fr = 'Très mauvais';
							result.string_calssName = 'air-lv-txt04';
	                    }
	                    break;
	                case 'uv' :
	                    result.level = 1;
	                    result.string = '낮음';
	                    if( 0 <= value && 2 >= value ){
	                        result.level = 1;
	                        result.string = '낮음';
	                        result.string_kr = '낮음';
	                        result.string_en = 'Low';
	                        result.string_cn = '较弱';
	                        result.string_cb = '較弱';
	                        result.string_jp = '弱い';
	                        result.string_ar = 'منخفض';
	                        result.string_sp = 'Bajo';
	                        result.string_fr = 'Faible';
							result.string_calssName = 'air-lv-txt01';
	                    }
	                    if( 2 < value && 5.0 >= value ){
	                        result.level = 2;
	                        result.string = '보통';
	                        result.string_kr = '보통';
	                        result.string_en = 'Moderate';
	                        result.string_cn = '一般';
	                        result.string_cb = '一般';
	                        result.string_jp = '中程度';
	                        result.string_ar = 'عادي';
	                        result.string_sp = 'Moderado';
	                        result.string_fr = 'Moyen';
							result.string_calssName = 'air-lv-txt02';
	                    }
	                    if( 5 < value && 7.0 >= value ){
	                        result.level = 3;
	                        result.string = '높음';
	                        result.string_kr = '높음';
	                        result.string_en = 'High';
	                        result.string_cn = '较强';
	                        result.string_cb = '較強';
	                        result.string_jp = '強い';
	                        result.string_ar = 'مرتفع';
	                        result.string_sp = 'Alto';
	                        result.string_fr = 'Elevé';
							result.string_calssName = 'air-lv-txt03';
	                    }
	                    if( 7 < value && 10 >= value ){
	                        result.level = 4;
	                        result.string = '매우높음';
	                        result.string_kr = '매우높음';
	                        result.string_en = 'Very high';
	                        result.string_cn = '很强';
	                        result.string_cb = '很強';
	                        result.string_jp = '非常に強い';
	                        result.string_ar = 'مرتفع جدا';
	                        result.string_sp = 'Muy alto';
	                        result.string_fr = 'Très élevé';
							result.string_calssName = 'air-lv-txt04';
	                    }
	                    if( 10 < value ){
	                        result.level = 5;
	                        result.string = '위험';
	                        result.string_kr = '위험';
	                        result.string_en = 'extreme';
	                        result.string_cn = '特强';
	                        result.string_cb = '特強';
	                        result.string_jp = '危険';
	                        result.string_ar = 'خطر';
	                        result.string_sp = 'Extremadamente alto';
	                        result.string_fr = 'Danger';
							result.string_calssName = 'air-lv-txt04';
	                    }
	                    break;
	                case 'yDust' :
	                    result.level = 1;
	                    result.string = '보통';
	                    if( 0 <= value && 199 >= value ){
	                        result.level = 1;
	                        result.string = '보통';
	                        result.string_kr = '보통';
	                        result.string_en = 'Moderate';
	                        result.string_cn = '一般';
	                        result.string_cb = '一般';
	                        result.string_jp = '中程度';
	                        result.string_ar = 'عادي';
	                        result.string_sp = 'Moderado';
	                        result.string_fr = 'Moyen';
							result.string_calssName = 'air-lv-txt01';
	                    }
	                    if( 199 < value && 399 >= value ){
	                        result.level = 2;
	                        result.string = '약간나쁨';
	                        result.string_kr = '약간나쁨';
	                        result.string_en = 'slightly bad';
	                        result.string_cn = '轻度';
	                        result.string_cb = '輕度';
	                        result.string_jp = 'やや高い';
	                        result.string_ar = 'قليل الكثافة';
	                        result.string_sp = 'poco malo';
	                        result.string_fr = 'Plutôt mauvais';
							result.string_calssName = 'air-lv-txt02';
	                    }
	                    if( 299 < value && 799 >= value ){
	                        result.level = 3;
	                        result.string = '나쁨';
	                        result.string_kr = '나쁨';
	                        result.string_en = 'Bad';
	                        result.string_cn = '重度';
	                        result.string_cb = '重度';
	                        result.string_jp = '高い';
	                        result.string_ar = 'كثيف';
	                        result.string_sp = 'Malo';
	                        result.string_fr = 'Mauvais';
							result.string_calssName = 'air-lv-txt03';
	                    }
	                    if( 799 < value ){
	                        result.level = 4;
	                        result.string = '매우나쁨';
	                        result.string_kr = '매우나쁨';
	                        result.string_en = 'Very bad';
	                        result.string_cn = '严重';
	                        result.string_cb = '嚴重';
	                        result.string_jp = '非常に高い';
	                        result.string_ar = 'كثيف جدا';
	                        result.string_sp = 'Muy malo';
	                        result.string_fr = 'Très mauvais'
							result.string_calssName = 'air-lv-txt04';
	                    }
	                    break;
	            }
	            return result;
	        },
	        
	        getCaiName:function(op){
	        	var resultStr ="CAI"
	        	switch(op){
                case 'en' :
				case 'cn' :
				case 'cb' :
				case 'jp' :
				case 'ar' :
                    resultStr = 'CAI';
                break;
                case 'sp' :
               		resultStr = 'ICA';
				break;
                case 'fr' :  
					resultStr = 'IQA';
				 break;
                default:
                	 resultStr = 'CAI';
					break;
            	}
	        	
	        	return resultStr;
	        },

			getMp10Name:function(op){
	        	var resultStr ="MP10"
	        	switch(op){
                case 'en' :
				case 'cn' :
				case 'cb' :
				case 'jp' :
				case 'ar' :
				case 'fr' :
                    resultStr = 'PM10';
                break;
                case 'sp' :
               		resultStr = 'MP10';
				break;
                default:
                	 resultStr = 'PM10';
					break;
            	}
	        	
	        	return resultStr;
	        },
			getMp25Name:function(op){
	        	var resultStr ="PM2.5"
	        	switch(op){
                case 'en' :
				case 'cn' :
				case 'cb' :
				case 'jp' :
				case 'ar' :
					resultStr = 'PM2.5';
					break;
				case 'fr' :
                    resultStr = 'PM2,5';
                break;
                case 'sp' :
               		resultStr = 'MP2,5';
				break;
                default:
                	 resultStr = 'PM2.5';
					break;
            	}
	        	
	        	return resultStr;
	        },
	        getWindValue : function(dir){
	                 var result = {};
            switch(dir){
                case 'N' :
                    result.kr = '북';
                    result.en = 'N';
                    result.cn = '北风';
					result.ck = '北风';
                    result.cb = '東風';
                    result.jp = '北風';
                    result.ar = 'رياح شمالي';
                    result.sp = 'Viento del Norte';
                    result.fr = 'Vent de nord';
                    result.classString = 'north';
                    break;
                case 'E' :
                    result.kr = '동';
                    result.en = 'E';
                    result.cn = '东风';
					result.ck = '东风';
                    result.cb = '東風';
                    result.jp = '東風';
                    result.ar = 'رياح شرقي';
                    result.sp = 'Viento del Este ';
                    result.fr = 'Vent d’est';
                    result.classString = 'east';
                    break;
                case 'S' :
                    result.kr = '남';
                    result.en = 'S';
                    result.cn = '南风';
					result.ck = '南风';
                    result.cb = '南風';
                    result.jp = '南風 ';
                    result.ar = 'رياح جنوبي';
                    result.sp = 'Viento del Sur';
                    result.fr = 'Vent de sud';
                    result.classString = 'south';
                    break;
                case 'W' :
                    result.kr = '서';
                    result.en = 'W';
                    result.cn = '西风';
					result.ck = '西风';
                    result.cb = '西風';
                    result.jp = '西風';
                    result.ar = 'رياح غربي';
                    result.sp = 'Viento del Oeste';
                    result.fr = 'Vent d’ouest';
                    result.classString = 'west';
                    break;
                case 'NE' :
                    result.kr = '북동';
                    result.en = 'EW';
                    result.cn = '东北风';
					result.ck = '东北风';
                    result.cb = '東北風';
                    result.jp = '北東';
                    result.ar = 'رياح جنوب شرقي';
                    result.sp = 'Viento del Noreste';
                    result.fr = 'Vent de nord-est';
                    result.classString = 'ne';
                    break;
                case 'NW' :
                    result.kr = '북서';
                    result.en = 'NW';
                    result.cn = '西北风';
					result.ck = '西北风';
                    result.cb = '西北風';
                    result.jp = '北西風';
                    result.ar = 'رياح شمال غربي';
                    result.sp = 'Viento del Noroeste';
                    result.fr = 'Vent de nord-ouest';
                    result.classString = 'nw';
                    break;
                case 'SE' :
                    result.kr = '남동';
                    result.en = 'SE';
                    result.cn = '东南风';
					result.ck = '东南风';
                    result.cb = '東南風';
                    result.jp = '南東風';
                    result.ar = 'رياح جنوب شرقي';
                    result.sp = 'Viento del Sureste';
                    result.fr = 'Vent de sud-est';
                    result.classString = 'se';
                    break;
                case 'SW' :
                    result.kr = '남서';
                    result.en = 'SW';
                    result.cn = '西南风';
					result.ck = '西南风';
                    result.cb = '西南風';
                    result.jp = '南西風';
                    result.ar = 'رياح جنوب غربي';
                    result.sp = 'Viento del Suroeste ';
                    result.fr = 'Vent de sud-ouest';
                    result.classString = 'sw';
                    break;
				}
				return result;
	        }
	}
	

})(jQuery);

$(document).ready(function(){
	
	if($("#tickerWeather").length > 0){
		var countryStr =window.location.host.split('.')[0];
		if(countryStr.indexOf("qa-") >= 0){
						countryStr = countryStr.replace("qa-","");
		}
		var skyCode="";
		var air = "";
		var weather_slide = "";
		var stringLang = "";
		var cityName="";
		var weatherNode = $(".weather-slide");
		var weatherArrayItem=[];
		var cai="";
		
		//오늘날짜 세팅
		 var date = new Date();
		 var year = date.getFullYear();
		 var month = date.getMonth()+1
		 var day = date.getDate();
		    if(month < 10){
		        month = "0"+month;
		    }
		    if(day < 10){
		        day = "0"+day;
		    }
		    var today = year+""+month+""+day;
		    $.weatherNowData.setToday(today);
		
		$.weatherUtil.requestWeather(WEATHER_NOW,"GET","json",function(data){
			$.each(data.region,function(index,weatherItem){
				
			if($.weatherUtil.confirmArea(weatherItem.info.id)){
					cityName= $.weatherUtil.convertAreaName(weatherItem,countryStr);
					skyCode = $.weatherConfigData.getSkyValue(weatherItem.weather.sky_code);
		            air = $.weatherConfigData.getAirValue('pm10', weatherItem.weather.pm10);
					cai = $.weatherConfigData.getAirValue('total', weatherItem.weather.cai);
		            weatherArrayItem.push(weatherItem);
		            stringLang = 'string_' + countryStr;
		            weather_slide += "<article  data-infoid='" + weatherItem.info.id + "'>" +
		               "<a href='" + DOMAIN + "/weather/index" + "'>" +
			                   "<i class='ico ico" + skyCode['codeString'] +"'>" +  "</i>" +
			                   "<strong class='location'>" + " " + cityName + "</strong>" +
			                   "<span class='temp'>" + " " + $.weatherConfigData.getTempConvertValue(Math.round(weatherItem.weather.temp)) + " ℃" + "</span>" +
			                   "<span class='air'>" + $.weatherConfigData.getCaiName(countryStr) + "&nbsp;<em class='"+cai.string_calssName+"'>" + cai[stringLang] + '&nbsp'+cai['value'] + "</em>" + "</span>" +
			               "</a>" +
			            "</article>";
				}
			});
			$.weatherNowData.setAreaData(weatherArrayItem);
			weatherNode.html(weather_slide);
			$.bindEvent.rollWeather(weatherNode);

			//날씨 티커 slick 기능
			var weatherSlider = $('.weather-slide');

			weatherSlider.slick({
				autoplay: true,
				adaptiveHeight:true,
				vertical: true,
				arrows: false,
				infinite: true,
				slide: 'article',
				slickPause: true
			});
			weatherSlider.slick("pause");
		});
	}
});


