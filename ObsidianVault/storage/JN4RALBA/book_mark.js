var saved_bookmark = {
    init : function() {
        var key = $("body").children("#cid").val();
        var sectionCode = $("#requestSection").val();
        var siteName = $("input[name = siteName]").val();
        var pConnt = $("input[name = galleryPCount]").val();

        if(key != undefined) {
            $(".btn-save").off().on("click", function() {
                var data = JSON.parse(localStorage.getItem("book_mark"));
                var viewData = JSON.parse(localStorage.getItem("bookMarkData"));
                var upload_time = saved_bookmark.getTime();
                var cids = {"Content_ID" : key, "Upload_Time" : upload_time, "Section_Code" : sectionCode, "Site_Name" : siteName, "PCount" : pConnt, "data" : viewData};
                var bookmark_list = {"bookmark_list" : [cids]};
                var json = key.indexOf(data);

                // 콘텐츠ID를 로컬 스토리지에 저장
                if(data) {
                    if(json == -1) {
                        var json2 = JSON.stringify(data);

                        json = json2.indexOf(key);

                        if(json == -1) {
                            data.bookmark_list.push(cids);
                            data.bookmark_list.sort(function(a, b) {
                                return a.Content_ID < b.Content_ID ? -1 : a.Content_ID > b.Content_ID ? 1 : 0;
                            });

                            localStorage.setItem("book_mark", JSON.stringify(data));
                            
                            //saved_bookmark.bookMarkDataCheck(viewData);
                        } else {
                            saved_bookmark.clearData();
                        }
                    }
                } else {
                    localStorage.setItem("book_mark", JSON.stringify(bookmark_list));
                    
                    //saved_bookmark.bookMarkDataCheck(viewData);
                }

                saved_bookmark.save_count();
            });
        }

        saved_bookmark.ID_load();
    },
    bookMarkDataCheck : function(data) {
    	if(data) {
         	localStorage.removeItem("bookMarkData");
    	}
    },
    // 북마크를 했을 때 눌렀을 때 카운트 개수 표시
    save_count : function() {
        var count = 0;
        var img_save = JSON.parse(localStorage.getItem("book_mark"));
        var num =  $("#history-num");

        if (img_save) {
            for (var i = 0; i < img_save.bookmark_list.length; i++) {
                count++;
            }
        } else {
            localStorage.removeItem("book_mark");
        }

        setTimeout(function() {
            if(count == 0) num.hide();
            else {
                num.show();
                num.html(count);
            }
        }, 200);
    },
    // 로컬 스토리지 저장 키값 불러오기
    ID_load : function() {
        if(!localStorage) {
            return;
        }

        var count = 0;
        var img_save = JSON.parse(localStorage.getItem("book_mark"));
        var num =  $("#history-num");

        if (img_save) {
            for (var i = 0; i < img_save.bookmark_list.length; i++) {
                var idx = img_save.bookmark_list[i];

                $("input[value='" + idx.Content_ID + "']").each(function () {
                    $('.btn-save').toggleClass("on");
                });

                count++;
            }

            num.html(count);
        } else {
            localStorage.removeItem("book_mark");
        }

        if(count == 0) num.hide();
        else num.show();

        saved_bookmark.mypage_btn();
    },
    // 북마크 된 기사키 삭제
    clearData : function() {
        var local_data = JSON.parse(localStorage.getItem("book_mark"));
        var value = $("body").children("#cid").val();
        var data = {"bookmark_list": []};
        var json = value.indexOf(local_data);

        if (json == -1) {
            var json2 = JSON.stringify(local_data);

            json = json2.indexOf(value);

            for(var i = 0; i < local_data.bookmark_list.length; i++) {
                var cur = local_data.bookmark_list[i];

                if(json > -1 && cur.Content_ID != value) {
                    data.bookmark_list.push(cur);
                    data.bookmark_list.sort(function(a, b) {
                        return a.Content_ID < b.Content_ID ? -1 : a.Content_ID > b.Content_ID ? 1 : 0;
                    });
                }
            }
            if(data.bookmark_list.length == 0) {
                localStorage.removeItem("book_mark");
            } else {
                localStorage.setItem("book_mark", JSON.stringify(data));
            }
        }
    },
    // MyPage 버튼
    mypage_btn : function() {
        $(".btn-history").on("click", function() {
            location.href = MYPAGE;
        });
    },
    // 현재 시간 구하기
    getTime : function() {
        var time = new Date();
        var times =
            saved_bookmark.time_load(time.getFullYear(), 4) + "-" +            // 년
            saved_bookmark.time_load(time.getMonth() + 1, 2) + "-" +           // 월
            saved_bookmark.time_load(time.getDate(), 2) + " " +                // 일

            saved_bookmark.time_load(time.getHours(), 2) + ":" +               // 시
            saved_bookmark.time_load(time.getMinutes(), 2) + ":" +             // 분
            saved_bookmark.time_load(time.getSeconds(), 2);                    // 초

        return times;
    },
    time_load : function(n, digits) {
        var zero = "";

        n = n.toString();

        if(n.length < digits) {
            for(var i = 0; i < digits - n.length; i++) {
                zero += "0";
            }
        }

        return zero + n;
    }
};

var like = {
    init : function() {
        like.setEvent();
        like.likeLoad();
    },
    // btn-like 버튼 이벤트 설정
    setEvent : function(){
        $('.btn-like').off().on('click', function(){
            var cid = $(this).attr('data-likeid');
            var target = $('.btn-like[data-likeid="'+cid+'"]');
            $.each(target, function(idx, t){
                $(this).toggleClass('btnlike-on');
            });
            like.likeSave(cid);
        });
    },
    likeSave : function(likeCid) {
    	var valueCid = likeCid;
        var addCid = {"like" : []};
        var cidGet = JSON.parse(localStorage.getItem("like"));

        if(cidGet) {
            if(cidGet["like"].indexOf(valueCid) !== -1) {
                // 로컬 스토리지에 같은 기사키가 있을 경우 삭제
                for(var j = 0; j < cidGet["like"].length; j++) {
                    var cidList01 = cidGet["like"][j];

                    if(cidGet["like"].indexOf(valueCid) > -1 && cidList01 !== valueCid) addCid["like"].push(cidList01);
                }

                if(cidGet["like"].length === 1) localStorage.removeItem("like");
                else localStorage.setItem("like", JSON.stringify(addCid));
            } else {
                // 로컬 스토리지에 같은 기사키가 없을 경우 추가
                for(var i = 0; i < cidGet["like"].length; i++) {
                    var cidList02 = cidGet["like"][i];

                    addCid["like"].push(cidList02);
                }

                addCid["like"].push(valueCid);

                localStorage.setItem("like", JSON.stringify(addCid));
            }
        } else {
            addCid["like"].push(valueCid);

            localStorage.setItem("like", JSON.stringify(addCid));
        }
    },
    // 로컬 스토리지에 있는 기사키 로드
    likeLoad : function() {
        var cidLoad = JSON.parse(localStorage.getItem("like"));

        if( cidLoad ) {
            $('.btn-like').each(function(idx, btn){
                $.each(cidLoad['like'], function(idx, cid){
                    if( $(btn).attr('data-likeid') === cid ) $(btn).toggleClass('btnlike-on');
                });
            });
        }
    },
    // 키가 cidLoad에 포함되어 있으면 true 리턴(기사 1개)
    check : function(cid) {
        var cidLoad = JSON.parse(localStorage.getItem("like"));
        var check = false;

        if( cidLoad ){
            $.each(cidLoad['like'], function(idx, c){
                if( cid == c ){
                    check = true;
                    return false;
                }
            });
        }

        return check;
    }
};

$(document).ready(function() {
    // 북마크
    saved_bookmark.init();

    // 좋아요
    like.init();
});