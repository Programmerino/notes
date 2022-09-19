var saved = {
	init : function() {
		if(!localStorage) { return; }

		var row = JSON.parse(localStorage.getItem("book_mark"));
		var processedData = {"bookmark_list" : []};
		var dataArray = [];
		var json_data = "";
		String.prototype.P2 = function() {
			return this.toString().replace('_T.','_P2.').replace('_P4.','_P2.').replace('_P1.','_P2.');
		};
		String.prototype.P1 = function() {
			return this.toString().replace('_T.','_P1.').replace('_P4.','_P1.').replace('_P2.','_P1.');
		};
		
		if( row ){
			/* 북마크된 데이터를 가공한다.
			 * 1. 잘못된 cid 제거
			 * 2. 예전에 북마크된 리스트('data'가 없는 리스트) 제거 */
			$.each(row['bookmark_list'], function(idx, list){
				if( list['Content_ID'] != '' && typeof list['data'] != 'undefined' ){
					processedData['bookmark_list'].push(list);
				}
			});
			
			if( processedData['bookmark_list'].length < 1 ){
				localStorage.removeItem("book_mark");
				saved_bookmark.save_count();
				return;
			}
			
			$.ajax({
				url : encodeURI(SAVED_DEL_LIST),
				success : function(data){
					if( data == null || data.DATA == '' ){ return; }
					var obj = data.DATA;
					$.each(obj, function(idx, remove){
						$.each(processedData['bookmark_list'], function(i, list){
							if( list['Content_ID'] == remove['CID'] ){
								processedData['bookmark_list'].splice(i, 1);
								return false;
							}
						});
					});
					/* 북마크 개수 변경 */
					localStorage.setItem("book_mark", JSON.stringify(processedData));
				},
				complete : function(){
					saved_bookmark.save_count();
					/* 북마크 리스트의 길이에 따라 다르게 처리 */
					var listCnt = processedData['bookmark_list'].length;
					if( listCnt != 0 ){
						localStorage.setItem("book_mark", JSON.stringify(processedData));
						$(".saved-zone .saved-list-zone .smain-list-type01 ul li").show();
						$(".no-saved").hide();
					}else{
						localStorage.removeItem("book_mark");
						$(".saved-zone .saved-list-zone .smain-list-type01 ul li").hide();
						$(".no-saved").show();
					}
					/* 북마크 수 입력 */
					if( LANG_TYPE === "en" ){
						$("#savedTotal").html(listCnt);
					}else{
						$(".num-info span").html(listCnt);
					}
					
					/* 데이터 렌더링, 이벤트 연결 */
					$.each(processedData['bookmark_list'], function(idx, list){
						var cid = list['Content_ID'];
						var obj = {cid : list['data']};
						dataArray.push(obj);
					});
					saved.loop(processedData['bookmark_list']);
					click_event.delete_loop(dataArray);
					imgCrop();
				}
			});
		}else{
			localStorage.removeItem("book_mark");
			saved_bookmark.save_count();
		}
	},
	loop : function(json_data, sort) {
		var json_list = "";
		if( typeof sort != 'undefined' ){ json_data = saved.Arrange(json_data, sort); }
		var orgin = window.YNA_SERVICE['YNA_UI'].getUrlQuery()['urlData']['origin'];
		if( origin.match('cb') ){ origin = 'https://cb.yna.co.kr/gate/big5/cn.yna.co.kr'; }
		$(".arrange").remove();
		$("body").append("<input class='arrange' type='hidden' value='" + sort + "'>");
		
		$.each(json_data, function(key, value) {
			var saveCid = value['Content_ID'];
			var saveData = value['data'];
			if( typeof saveData == 'string' ) { saveData = JSON.parse(saveData); }
			var sectionCode = value['Section_Code'];
			if( typeof saveData.URL == 'undefined' ) { saveData.URL = '/view/'+saveData.CID; }
			
			var _url = origin + saveData.URL + (typeof sectionCode!='undefined' && sectionCode!='' && sectionCode!='null' ? '?section='+sectionCode:'');
			var _title = saveData.TITLE;
			var _cid = saveData.CID;
			/* 화보가 아니면 DATETIME, 화보이면 REGIST_DATETIME */
			var _date = !_cid.match('IPT') ? saveData.DATETIME : saveData.REGIST_DATETIME;
			/* 언어별 date 포맷 변경 */
			if( saveData.SECTION != null && typeof saveData.SECTION != 'undefined' && saveData.SECTION.indexOf(';') >= 0 ) {
				var sectionName = saveData.SECTION.split(';')[1];
				var time = '<span class="date"><a href="'+_url+'">'+sectionName+'</a>'+window.changeDateFormat.setArticleFormat(_date, LANG_TYPE)+'</span>\n';
			} else {
				var time = '<span class="date">'+window.changeDateFormat.setArticleFormat(_date, LANG_TYPE)+'</span>\n';
			}
			/* 키워드 체크 */
			var _keyword = '';
			if( saveData.KEYWORD != "" && saveData.KEYWORD != null ) {
				var getKeyword = "";
				
				if( /\;/g.test(saveData.KEYWORD) ) { getKeyword = saveData.KEYWORD.split(";")[0]; }
				else { getKeyword = saveData.KEYWORD; }
				
				_keyword += "<span class='tag'>";
				_keyword += "	<a href='" + SERVICE + "/search/index?query=" + getKeyword + "&lang=" + LANG_TYPE.toUpperCase() + "'>#" + getKeyword + "</a>";
				_keyword += "</span>\n";
			}
			var _icon = '', text = '';
			
			if( _cid === saveCid ) {
				if( !_cid.match('IPT') ) {
					if( saveData.IMG != null && saveData.IMG != '' ) {
						if( _cid.match("MYH") ) {
							// _icon += "<img src='" + IMG_DOMAIN + data.IMG.replace(img[7], imageUrl) + "' alt='" + saveData.TITLE + "'>" +
							if( saveData.IMG.indexOf("_") !== -1 ) {
								var imgChange = saveData.IMG.P1();
							} else {
								var imgChange = saveData.IMG.replace(".jpg", "_P1.jpg");
							}

							_icon += "<figure class='img-cover'>";
							_icon += "	<a href='" + _url + "'>";
							_icon += "		<img src='" + IMG_DOMAIN + imgChange + "' alt='" + saveData.TITLE + "' style='height:100%;'>";
							_icon += "		<span class='btn-play-s'></span>";
							_icon += "		<span class='runtime'></span>";
							_icon += "	</a>";
							_icon += "</figure>";
						} else if( _cid.match("PYH") || _cid.match("GYH") ) {
							// _icon += "<img src='" + IMG_DOMAIN + saveData.IMG.replace(img[7], imageUrl) + "' alt='" + saveData.TITLE + "'>" +
							_icon += '<figure class="img-cover">';
							_icon += '	<a href="' + _url + '">';
							_icon += "		<img src='" + IMG_DOMAIN + saveData.IMG.P2() + "' alt='" + _title + "' style='height:100%;'>";
							_icon += "		<span class='ico-img'></span>";
							_icon += "	</a>";
							_icon += "</figure>";
						} else {
							// _icon += "<img src='" + IMG_DOMAIN + saveData.IMG.replace(img[7], imageUrl) + "' alt='" + data.TITLE + "'>";
							_icon += '<figure class="img-cover">';
							_icon += '	<a href="' + _url + '">';
							_icon += "		<img src='" + IMG_DOMAIN + saveData.IMG.P2() + "' alt='" + saveData.TITLE + "' style='height:100%;'>";
							_icon += " </a>";
							_icon += "</figure>";
						}
					}
					
					/* 텍스트 치환 */
					text = "<span class='lead'>" + saveData.BODY + "</span>\n";
					text = $(text).text();

					/* 기사가 사진인지 영상인지 텍스트(?)인지 체크 */
					/*현업에서 제거 요청이 있어서 일단 주석처리를 함
					if(saveData.CID.match("MYH"))
		                icons2 += "<span class='ico-img02'>related video</span>";
		            if(saveData.CID.match("PYH") || saveData.CID.match("GYH"))
		                icons2 += "<span class='ico-img03'>related photo</span>";
		            if(saveData.CID.match("A" + LANG_TYPE.toUpperCase()))
		                icons2 += "<span class='ico-img04'>related article</span>";*/
				}
				else {
					/* 화보 */
					if( saveData.LINK_PHOTO_PATH != null  && saveData.LINK_PHOTO_PATH != '' ) {
						_icon += '<figure class="img-cover">';
						_icon += '	<a href="' + _url + '">';
						_icon += "		<img src='" + IMG_DOMAIN + saveData.LINK_PHOTO_PATH.P2() + "' alt='" + saveData.TITLE + "' style='height:100%;'>";
						_icon += "	</a>";
						_icon += "</figure>";
					}
				}
				
				/* list html */
				json_list += '<li data-cid="' + _cid + '">';
				json_list += '	<div class="check-area">';
				json_list += '		<span class="check-box">';
				json_list += '			<input type="checkbox" name="saved" id="saved01" class="inp-check" value="' + _cid + '">';
				json_list += '			<label for="saved01" class="inp-label">checking</label>';
				json_list += '		</span>';
				json_list += '	</div>';
				json_list += '	<article>';
				json_list += 		_icon;
				json_list += '		<div class="txt-con">';
				json_list += 			_keyword;
				json_list += '			<h2 class="tit"><a href="' + _url + '">' + _title + '</a></h2>';
				json_list += '			<span class="lead">' + saved.ellipsis(text) + '</span>';
				json_list +=			time;
				json_list += '		</div>';
				json_list += '	</article>';
				json_list += '	<div class="share-item">';
				json_list += '		<div class="btn-box social-btns social-type02">';
				json_list += '			<button type="button" class="btn-i-share" value="' + _cid + '"><span>share</span></button>';
				json_list += '			<div class="sns-share" style="display: none;">' + saved.snsBox(saveData, origin) + '</div>';
				json_list += '			<div class="share-copy dis-none">' + SAVED_URLCOPY + '</div>';
				json_list += '			<button type="button" class="btn-i-remove" value="' + _cid + '"><span>remove</span></button>';
				json_list += '		</div>';
				json_list += '	</div>';
				json_list += '</li>';
			}
		});

		if( window.location.pathname.match("/saved/index") ) {
			saved.look(json_list);
		}
	},
	snsBox : function(saveData, origin){
		var _copy = URS_DOMAIN + saveData.CID + (origin.indexOf('cb') < 0 ? '':'&');
		var _sns = URS_DOMAIN + saveData.CID + (origin.indexOf('cb') < 0 ? '?':'&');
		var _title = saveData.TITLE;
		var html = '';
		
		switch(LANG_TYPE) {
			case "en" :
				html += '<button type="button" class="share-btn fb" data-snslink="' + _sns + 'input=fb" data-title="' + _title + '"><span>Facebook</span></button>';
				html += '<button type="button" class="share-btn tw" data-snslink="' + _sns + 'input=tw" data-title="' + _title + '"><span>Twitter</span></button>';
				html += '<button type="button" class="share-btn pin" data-snslink="' + _sns + 'input=pin" data-title="' + _title + '"><span>Pinterest</span></button>';
				html += '<button type="button" class="share-btn lin" data-snslink="' + _sns + 'input=lin" data-title="' + _title + '"><span>Linked in</span></button>';
				html += '<button type="button" class="share-btn tum" data-snslink="' + _sns + 'input=tum" data-title="' + _title + '"><span>Tumblr</span></button>';
				html += '<button type="button" class="share-btn red" data-snslink="' + _sns + 'input=red" data-title="' + _title + '"><span>Reddit</span></button>';
				html += '<button type="button" class="share-btn fbm" data-snslink="' + _sns + 'input=fbm" data-title="' + _title + '"><span>Facebook Messenger</span></button>';
				html += '<button type="button" class="share-btn copy" data-snslink="' + _copy + '"><span>Copy URL</span></button>';
				break;
			case "ck" :
				html += '<button type="button" class="share-btn wei" data-snslink="' + _sns + 'input=wei" data-title="' + _title + '"><span>Weibo</span></button>';
				html += '<button type="button" class="share-btn qq" data-snslink="' + _sns + 'input=qq" data-title="' + _title + '"><span>QQ空?</span></button>';
				html += '<button type="button" class="share-btn wec" data-snslink="' + _sns + 'input=wec" data-title="' + _title + '"><span>Wechat</span></button>';
				html += '<button type="button" class="share-btn ren" data-snslink="' + _sns + 'input=ren" data-title="' + _title + '"><span>Renren</span></button>';
				html += '<button type="button" class="share-btn fb" data-snslink="' + _sns + 'input=fb" data-title="' + _title + '"><span>Facebook</span></button>';
				html += '<button type="button" class="share-btn tw" data-snslink="' + _sns + 'input=tw" data-title="' + _title + '"><span>Twitter</span></button>';
				html += '<button type="button" class="share-btn copy" data-snslink="' + _copy + '"><span>Copy URL</span></button>';
				break;
			case "jp" :
				html += '<button type="button" class="share-btn fb" data-snslink="' + _sns + 'input=fb" data-title="' + _title + '"><span>Facebook</span></button>';
				html += '<button type="button" class="share-btn tw" data-snslink="' + _sns + 'input=tw" data-title="' + _title + '"><span>Twitter</span></button>';
				html += '<button type="button" class="share-btn hb" data-snslink="' + _sns + 'input=hb" data-title="' + _title + '"><span>Hatena</span></button>';
				html += '<button type="button" class="share-btn fbm" data-snslink="' + _sns + 'input=fbm" data-title="' + _title + '"><span>Facebook Messenger</span></button>';
				html += '<button type="button" class="share-btn copy" data-snslink="' + _copy + '"><span>Copy URL</span></button>';
				break;
			case "ar" :
				html += '<button type="button" class="share-btn fb" data-snslink="' + _sns + 'input=fb" data-title="' + _title + '"><span>Facebook</span></button>';
				html += '<button type="button" class="share-btn tw" data-snslink="' + _sns + 'input=tw" data-title="' + _title + '"><span>Twitter</span></button>';
				html += '<button type="button" class="share-btn fbm" data-snslink="' + _sns + 'input=fbm" data-title="' + _title + '"><span>Facebook Messenger</span></button>';
				html += '<button type="button" class="share-btn copy" data-snslink="' + _copy + '"><span>Copy URL</span></button>';
				break;
			case "sp" :
			case "fr" :
				html += '<button type="button" class="share-btn fb" data-snslink="' + _sns + 'input=fb" data-title="' + _title + '"><span>Facebook</span></button>';
				html += '<button type="button" class="share-btn tw" data-snslink="' + _sns + 'input=tw" data-title="' + _title + '"><span>Twitter</span></button>';
				html += '<button type="button" class="share-btn pin" data-snslink="' + _sns + 'input=pin" data-title="' + _title + '"><span>Pinterest</span></button>';
				html += '<button type="button" class="share-btn lin" data-snslink="' + _sns + 'input=lin" data-title="' + _title + '"><span>Linked in</span></button>';
				html += '<button type="button" class="share-btn tum" data-snslink="' + _sns + 'input=tum" data-title="' + _title + '"><span>Tumblr</span></button>';
				html += '<button type="button" class="share-btn red" data-snslink="' + _sns + 'input=red" data-title="' + _title + '"><span>Reddit</span></button>';
				html += '<button type="button" class="share-btn fbm" data-snslink="' + _sns + 'input=fbm" data-title="' + _title + '"><span>Facebook Messenger</span></button>';
				html += '<button type="button" class="share-btn copy" data-snslink="' + _copy + '" ><span>Copy URL</span></button>';
				break;
		}
		return html;
	},
	/** ellipsis(150) */
	ellipsis : function(txt, len, lastTxt) {
		len = 150;
		lastTxt = "...";

		if(txt.length > len) {
			txt = txt.substr(0, len) + lastTxt;
		}

		return txt;
	},
	look : function(json_list) {
		var iptSection = JSON.parse(localStorage.getItem("book_mark"))["bookmark_list"];

		$(".saved-zone .saved-list-zone .smain-list-type01 ul").html(json_list);

		// 화보를 스크랩 했을 때 SECTION_NAME은 따로 처리
		for(var i = 0; i < iptSection.length; i++) {
			var sectionGallery = iptSection[i];
			var galleryID = sectionGallery["Content_ID"];

			$(".smain-list-type01 li").each(function() {
				var self = $(this);

				if(self.attr("data-cid").match("IPT")) {
					if(self.attr("data-cid") === galleryID) {
						self.find("article .date a").text(sectionGallery["Site_Name"]);
						self.find("figure a").append('<span class="pictorial" style="display: block;"><em>' + sectionGallery["PCount"] + '</em></span>');
					}
				}
			});
		}
	},
	Arrange : function(json_data, sort) {
		var sectionName = JSON.parse(localStorage.getItem("book_mark"))["bookmark_list"];
		
		switch(sort) {
		case 'upload_time' :
			sectionName.sort(function (a, b) {
				//return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
				var dataA = 0;
				if(json_data[a.Content_ID]) {
					dataA = json_data[a.Content_ID].DATA[0].DATETIME.replace(/(-)|(:)|(\s)(\S)/g, '');
				}
				var dataB = 0;
				if(json_data[b.Content_ID]) {
					dataB = json_data[b.Content_ID].DATA[0].DATETIME.replace(/(-)|(:)|(\s)(\S)/g, '');
				}

				return dataB - dataA;
			});
			break;
		case 'saved_time' :
		default :
			sectionName.sort(function (a, b) {
				//return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
				var dataA = new Date(a.Upload_Time).getTime();
				var dataB = new Date(b.Upload_Time).getTime();

				return dataB - dataA;
			});
		}
		
		return sectionName;
	}
};

var click_event = {
	delete_loop : function(json_data) {
		// 전체 체크박스 클릭
		$("input[name = all-checking]").on("click", function() {
			if(($(this).prop("checked"))) {
				$("input[name = saved]").prop("checked", true);
			} else {
				$("input[name = saved]").prop("checked", false);
			}
		});

		// 각 체크박스를 클릭했을 때
		$(".smain-list-type01").on("change", "li input[name = saved]", function() {
			var parent = $(".check-area .check-box");
			var checkItem = parent.find("input[name = saved]");
			var isChecked = true;

			$.each(checkItem, function(){
				var item = $(this);
				if(item.prop('checked') === false){
					isChecked = false;
				}
			});

			if(!isChecked){
				$("input[name = all-checking]").prop("checked", false);
			}
		});

		// remove 버튼을 클릭하였을 때 삭제
		$(".saved-list-zone").on("click", "button[class = btn-i-remove]", function() {
			var local_data = JSON.parse(localStorage.getItem("book_mark"));
			var data = {"bookmark_list": []};

			for(var idx = 0; idx < local_data.bookmark_list.length; idx++) {
				var cur = local_data.bookmark_list[idx];

				if(cur.Content_ID != $(this).attr("value")) {
					data.bookmark_list.push(cur);
				}
			}

			if(data.bookmark_list.length == 0) localStorage.removeItem("book_mark");
			else localStorage.setItem("book_mark", JSON.stringify(data));

			location.reload(true);
		});

		// 선택 된 체크박스를 구하고 삭제버튼을 클릭 했을 때
		$("button[class = btn-remove]").on("click", function() {
			var checkbox = document.getElementsByName("saved");
			var arrageLocalData = "";
			var data = {"bookmark_list": []};

			if($(".arrange").val() !== "") {
				arrageLocalData = saved.Arrange(json_data, $(".arrange").val());
			}
			
			$("input[name = saved]").each(function(index) {
				var cur = arrageLocalData[index];
				
				if($(this).prop("checked") == false) {
					console.log(cur);
					var cids = {"Content_ID" : checkbox[index].value, "Upload_Time" :  cur.Upload_Time, "Section_Code" : cur["Section_Code"], "Site_Name" : cur["Site_Name"], "PCount" : cur["PCount"], "data" : cur["data"]};

					data.bookmark_list.push(cids);
				}

				data.bookmark_list.sort(function(a, b) {
					return a.Content_ID < b.Content_ID ? -1 : a.Content_ID > b.Content_ID ? 1 : 0;
				});
			});

			if(data.bookmark_list.length == 0) {
				localStorage.removeItem("book_mark");
			} else {
				localStorage.setItem("book_mark", JSON.stringify(data));
			}

			// 체크를 하나라도 할 경우 페이지가 리로드 될 수 있도록
			if($("input[name = saved]:checked").length >= 1) {
				location.reload(true);
			} else {
				// 추후 체크를 하나라도 안할 경우 메세지 필요
			}
		});

		// 업로드 타입 버튼을 눌렀을 때(DATETIME 기준)
		$("button[name = upload_time]").on("click", function() {
			/*
        var obj_data = {"obj_data": []};
        var data = JSON.parse(localStorage.getItem("book_mark"));
        var count = 0;

        //데이터 정렬
        $.each(json_data, function(i, e) {
            if(typeof e == "string") {
                e = JSON.parse(e);
            }

            var cur = data.bookmark_list[count];

            $.each(e.DATA, function(index, data) {
                var year = data.DATETIME.substring(0, 4);
                var month = data.DATETIME.substring(4, 6);
                var day = data.DATETIME.substring(6, 8);
                var hours = data.DATETIME.substring(8, 10);
                var minutes = data.DATETIME.substring(10, 12);
                var seconds = data.DATETIME.substring(12, 14);
                var date = new Date(year, month, day, hours, minutes, seconds);

                obj_data.obj_data.push({"key" : cur.Content_ID, "value" : date});
            });

            count++;
        });

        obj_data.obj_data.sort(function(a, b) {
            //return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
            var dataA = new Date(a.value).getTime();
            var dataB = new Date(b.value).getTime();

            return dataB - dataA;
        });

        //데이터 가져오기
        var key = "", rows = {};

        $.each(obj_data.obj_data, function(idx, data){
            key = data.key;

            if(typeof json_data[key] == "string") {
                json_data[key] = JSON.parse(json_data[key]);
            }

            rows[key] = json_data[key];
        });
			 */
			// 가져온 데이터를 화면에 뿌려주기
			saved.loop(json_data, this.name);

			imgCrop();
		});

		// 세이브 타임 버튼을 눌렀을 때(스크랩 Upload_Time 기준)
		$("button[name = saved_time]").on("click", function() {
			/*
        var saved_time = {"saved_data": []};
        var local_data = JSON.parse(localStorage.getItem("book_mark"));
        var count = 0;

        //데이터 정렬
        $.each(json_data, function (index, data) {
            if (typeof data == "string") {
                JSON.parse(data);
            }

            var cur = local_data.bookmark_list[count];

            saved_time.saved_data.push({"key": cur.Content_ID, "value": cur.Upload_Time});

            count++;
        });

        saved_time.saved_data.sort(function (a, b) {
            //return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
            var dataA = new Date(a.value).getTime();
            var dataB = new Date(b.value).getTime();

            return dataB - dataA;
        });

        //데이터 가져오기
        var key = "", saved_rows = {};

        $.each(saved_time.saved_data, function (idx, data) {
            key = data.key;

            if(typeof json_data[key] == "string") {
                json_data[key] = JSON.parse(json_data[key]);
            }

            saved_rows[key] = json_data[key];
        });
			 */
			// 가져온 데이터를 화면에 뿌려주기
			saved.loop(json_data, this.name);

			imgCrop();
		});

		click_event.copyUrl();
		click_event.share_btn();
	},
	copyUrl : function() {
		$(".share-btn.copy").on("click", function(e) {
			e.preventDefault();

			if(window.location.pathname.match("/saved/index")) {
				var inputUrlCopy = document.createElement("input");
				inputUrlCopy.setAttribute("value", $(this).attr("data-snslink"));
				document.body.appendChild(inputUrlCopy);
				inputUrlCopy.select();
				document.execCommand("copy");

				$(this).parent().hide();
				$(this).parents(".social-btns").find(".share-copy").show().delay(2000).fadeOut(500);
			}
		});
	},
	share_btn : function() {
		$(".saved-list-zone").on("click", "button[class = btn-i-share]", function() {
			var local_data = JSON.parse(localStorage.getItem("book_mark"));

			for(var idx = 0; idx < local_data.bookmark_list.length; idx++) {
				var cur = local_data.bookmark_list[idx];

				if(cur.Content_ID == $(this).attr("value")) {
					$(this).parent().find('.sns-share').show();
				}
			}
		});

		click_event.hide_snspop();
	},
	hide_snspop : function() {
		// sns-share을 제외한 다른 영억을 클릭했을 때
		$(document).mouseup(function(e) {
			var sns_popup = $(".saved-list-zone .sns-share");

			if(sns_popup.has(e.target).length == 0) {
				sns_popup.hide();
			}
		});
	}
};

$(document).ready(function() {
	if( $('body').hasClass('page-saved') ) {
		saved.init();
	}
});