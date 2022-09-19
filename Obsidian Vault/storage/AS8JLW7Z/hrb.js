$=jQuery.noConflict();
var hrbtic = {
	loaded:false,
  ratio:"",
  assets:{
    logo:"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144.1 32.2' fill='#8e8f90'><path fill='#6aa509' d='M0 0h32.2v32.2H0z'/><path d='M56.1 20c-.8 0-2-.5-2-1.6 0-.7.4-1.2.8-1.4 0 0 2 2.3 2.4 2.7-.1.1-.6.3-1.2.3m4.8-.4c.4-.7.5-1.7.5-2.4v-1.9h-2.7v1.8L55.8 14c-.3-.3-.5-.6-.5-1 0-.5.4-.8.9-.8.6 0 .9.4.9.8v.6H60v-.8c0-2-1.6-3.2-3.9-3.2-2.4 0-4 1.3-4 3.2 0 .5.2 1.4 1 2.2-1.1.5-2.2 1.6-2.2 3.4 0 2.4 1.9 4.1 5.3 4.1 1.2 0 2.3-.3 3-.8l.5.6h3.4l-2.2-2.7zM69.9 16c.9 0 1.4-.6 1.4-1.5s-.5-1.5-1.4-1.5H68v3h1.9zm-.8 3H68v3.2h-3.9V9.9h6.2c3.1 0 4.8 1.9 4.8 4.6 0 1.8-.8 3.1-2.1 3.9l2.4 3.9H71L69.1 19zM38.2 9.9h3.9v4.4h3.2V9.9h3.8v12.3h-3.8v-4.4h-3.2v4.4h-3.9zM87.8 19.4c.6 0 1-.5 1-1s-.4-1-1-1h-2.6v2.1h2.6zm-.8-4.7c.6 0 .9-.4.9-1 0-.5-.4-.9-.9-.9h-1.8v2H87zm-5.5-4.8h6.4c2.3 0 3.7 1.3 3.7 3.2 0 1.3-.6 2.3-1.6 2.8 1.5.3 2.4 1.3 2.4 2.9 0 2.1-1.5 3.5-4.3 3.5h-6.5V9.9zM93.9 9.9h3.9V19h5v3.2h-8.9zM111.7 17.1v-2c0-1.4-.7-2.2-2-2.2s-2 .8-2 2.2v2c0 1.4.7 2.2 2 2.2s2-.8 2-2.2m-7.9-.2v-1.6c0-3.3 2-5.6 5.9-5.6 3.9 0 5.9 2.3 5.9 5.6v1.6c0 3.4-2 5.6-5.9 5.6-3.9 0-5.9-2.3-5.9-5.6M122.7 19.3c1.4 0 1.9-.9 1.9-1.8h3.6c-.1 2.8-2 5-5.5 5-4 0-5.9-2.3-5.9-5.6v-1.6c0-3.3 1.9-5.6 5.9-5.6 3.5 0 5.4 2.3 5.5 5h-3.6c-.1-.9-.6-1.8-1.9-1.8-1.3 0-2 .9-2 2.2v2c.1 1.3.7 2.2 2 2.2M130.4 9.9h3.9v4.3h.2l2.5-4.3h4.3l-3.2 5.6 3.6 6.7h-4.6l-2.5-5.1h-.3v5.1h-3.9zM143.1 10.6c.1 0 .1 0 .1-.1s0-.1-.1-.1h-.1l.1.2zm0 .2l-.1.2h-.3v-.9h.4c.2 0 .3.1.3.3 0 .1-.1.2-.1.3l.2.3h-.3l-.1-.2zm.8-.1c0-.5-.3-.8-.8-.8s-.8.3-.8.8c0 .4.3.8.8.8s.8-.4.8-.8m-1.8 0c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1-1-.5-1-1'/></svg>",
  },
  homepage:{
    on:false,
  },
  headerSearch:{
    trySearch:function(){
      var currentsearch = $("#top_search_q").val();
      var searchbutton = $("#feature_header a.gosearch");
      if(searchbutton.hasClass("newsroom")){
        window.open(basetcurl+"newsroom-archive/"+encodeURIComponent(currentsearch)+"/", "_self");
      } else if(searchbutton.hasClass("media-library")){
        window.open(basetcurl+"media-library/search/"+encodeURIComponent(currentsearch)+"/", "_self");
      } else {
        window.open(basetcurl+"all-articles/"+encodeURIComponent(currentsearch)+"/", "_self");
      }
    }
  },
  infographic:{
    open:function(target){
      target.parents(".infographicbox").find("i").hide();
      target.parents(".infographicbox").css("height", "auto");
      target.addClass("open");
    },
    close:function(target){
      var thisparent = target.parents(".infographicbox");
      thisparent.find("i").show();
      thisparent.css("height", "380px");
      target.removeClass("open");
      $('html, body').animate({scrollTop: thisparent.offset().top - 120 }, 400);
    }
  },
  allPosts:{
    loaded:false,
    fullResult:[],
    postData:[],
    filterCats:[],
    filterSubCats:[],
    filterSend:[],
    filterQuotes:[],
    filterTypes:[],
    filterAuthors:[],
    filterYears:[],
    sortDirection:'publish_iso8601',
    ratio:'',
    pretopic:'',
    presubtopic:'',
    pretype:'',
    q:'',
    grabCats:function(){
      var thisobj = this;
      var subtarget = '';
      if(this.pretopic !== ''){
        //One time activation of topic based on URL.
        var temppretopic = this.pretopic;
        this.pretopic = '';
        var targetpretopic = $(".all_articles .filterbox.topics").find("[data-topicname='"+temppretopic+"']");
        var catid = targetpretopic.data("topicid");
        
        if(catid > 0){
          //Remove all top filter selections.
          $(".all_articles.ticglobal .filterbox.topics a.filter.topfilter").removeClass("on");
          //Close any previously opened menus and remove selections.
          $(".all_articles.ticglobal .filterbox.topics .sub.on").find("a").removeClass("on");
          $(".all_articles.ticglobal .filterbox.topics .sub.on").stop(true, true).slideUp(400).removeClass("on");
          //Turn this particular item on.
          targetpretopic.addClass("on");
          //Slide down the sub for this item.
          $(".sub_"+catid).stop(true, true).slideDown(400).addClass("on");
          //$(".sub_"+catid).find("a.filter").addClass("on");
          this.pager.page = 1;
        }
        this.grabCats();
        return false;
      }

      if(this.presubtopic !== ''){
        //One time activation of topic based on URL.
        var temppresubtopic = this.presubtopic;
        this.presubtopic = '';
        subtarget = $(".all_articles .filterbox.topics").find("[data-topicname='"+temppresubtopic+"']");
        subtarget.addClass("on");
        var parentid = subtarget.parents('.sub').data('parentid');
        $(".all_articles .filterbox.topics").find("[data-topicid='"+parentid+"']").addClass("on");
        $(".sub_"+parentid).stop(true, true).slideDown(400).addClass("on");
      }
      
      if(this.pretype !== ''){
        //One time activation of newsroom type based on URL.
        var temppretype = this.pretype;
        this.pretype = '';
        subtarget = $(".all_articles .filterbox.types").find("[data-type='"+temppretype+"']");
        if(temppretype === 'Statement'){
          subtarget2 = $(".all_articles .filterbox.types").find("[data-type='Press Release']");
          subtarget2.addClass("on");
        }
        subtarget.addClass("on");
        if($(".all_articles.ticglobal .filterbox.types a.filter.on").length > 0){
          this.filterTypes = [];
          $(".all_articles.ticglobal .filterbox.types a.filter.on").each(function(){
            thisobj.filterTypes.push($(this).data("type"));
          });
        } else {
          this.filterTypes = [];
        }
        this.pager.page = 1;
        this.grabCats();
      }
      
      
      $("#devalert").html("Loading Filtered Articles...").show();
      this.filterCats = [];
      this.filterSubCats = [];
      $(".all_articles .filterbox.topics a.filter").each(function(){
        var catid = $(this).data("topicname");
        if($(this).hasClass("on") && !$(this).hasClass("subfilter")){
          thisobj.filterCats.push(catid);
        }
        if($(this).hasClass("subfilter") && $(this).hasClass("on") && $(this).parents(".sub").hasClass("on")){
          thisobj.filterSubCats.push(catid);
        }
      });
      $("#results_articles a.filtertoggle span").text("Filter Articles");
      this.grabData("adobe");
    },
    grabData:function(type){
      var thisobj = this;
      var allcats_top = thisobj.filterCats.join('|');
      var allcats_sub = thisobj.filterSubCats.join('|');
      //var allcats = thisobj.filterCats.join('|');
      var allyears = thisobj.filterYears.join('|');
      var alltypes = thisobj.filterTypes.join('|');
      var allquotes = thisobj.filterQuotes.join('|');
      var allauthors = thisobj.filterAuthors.join('|');

      var currentpage = this.pager.page;
      var searchquery = this.q;
      var masterpagetype = 'Newsroom|Article';
      if($("body").is(".page-template-page-newsroom-archive")){
        masterpagetype = 'Newsroom';
        //if(alltypes == ''){
          //Override if types is empty.
          //alltypes = 'News Feature|Press Release|Statement'
        //}
      }
      var adobesearchpostdata = {
        'do': 'json',
        'q' : searchquery,
        'page' : currentpage,
        'x1' : 'page_type',
        'q1' : masterpagetype,
        'x2' : 'page_subtype',
        'q2' : alltypes,
        'x3' : 't.topic_name',
        'q3' : allcats_top,
        'x4' : 't.subtopic_name',
        'q4' : allcats_sub,
        'x5' : 'publish_year',
        'q5' : allyears,
        'x6' : 'page_quotable',
        'q6' : allquotes,
        'x7' : 'author_name',
        'q7' : allauthors,
        'sort' : this.sortDirection,
      };
      $.ajax({
          type: 'GET',
          url: "https://sp10050f89.guided.ss-omtrdc.net/",
          dataType: 'json',
          data: adobesearchpostdata,
          success: function (result) {
            thisobj.fullResult = result;
            thisobj.postData = result.resultsets.results;
            thisobj.pager.init();
            thisobj.buildResults();
            //$("#devalert").hide();
            //if(thisobj.postData==''){
              //$('#resultError').show();
            //}else{
              //$('#resultError').hide();
            //}
          },
          error: function () {
            //alert("error");
            $("#devalert").html("Something went wrong. Please try again.").show();
          }
      });

    },
    buildResults:function(){
      var returnhtml = [];
      var returnhtml_fragment = '';
      var preloadimagearray = [];
      for(var i=0;i<this.postData.length;i++){
        var returnhtml_fragment_p = '';
        if(this.postData[i].page_type !== 'Newsroom'){
          preloadimagearray[i] = new Image();
          preloadimagearray[i].src = this.postData[i].article_thumbnail;
        }
        
        if(this.postData[i].desc !== '' && this.postData[i].desc !== undefined){
          returnhtml_fragment_p += this.postData[i].desc;
        }
        if(returnhtml_fragment_p !== ''){
          returnhtml_fragment_p = '<p>'+returnhtml_fragment_p+'</p>';
        }
        
        if(this.postData[i].page_type !== 'Newsroom'){
          returnhtml_fragment = ' \
          <div class="fullrow"> \
            <a href="'+this.postData[i].loc+'" class="title"> \
              <span class="bug '+this.postData[i].page_type+'">Tax Info Center: </span>'+this.postData[i].title+' \
            </a> \
            '+returnhtml_fragment_p+' \
          </div> \
          ';
        } else {
          console.log("location: " + this.postData[i].loc);
          returnhtml_fragment = ' \
          <div class="fullrow news"> \
            <a href="'+this.postData[i].loc+'" class="title cktest"> \
              <span class="fullrow-wrap"> \
                <i style="background-image:url('+this.postData[i].article_thumbnail+')"> \
                  <img src="'+basetcthemeurl+'/img/ratio1-2.2.png" alt="Image: '+this.postData[i].title+'"> \
                </i> \
                <span class="title"> \
                  <span class="date">'+this.timestampToDate(this.postData[i].publish_date)+'</span> \
                  <span class="bug '+this.postData[i].page_type+'">News: </span>'+this.postData[i].title+'</span> \
              </span> \
            </a> \
            '+returnhtml_fragment_p+' \
          </div>';
        }
        returnhtml.push(returnhtml_fragment);
      }
      if(returnhtml.length > 0){
        $(".results").html(returnhtml);
      } else{
        $(".results").html('<div class="noresults">No Results Found.<br><a href="#" class="action_reset brand-line">Show All</a></div>');
        $("#results_articles .pager").css("opacity", 0);
      }
      if(this.q === '*' || this.q === ''){
        if($("body").is(".page-template-page-newsroom-archive")){
          $("#results_articles h1 span.focusedon").text("Newsroom Archive");
        } else {
          $("#results_articles h1 span.focusedon").text("All Articles");
        }
      } else {
        $("#results_articles h1 span.focusedon").html('Showing Results For: <i>'+this.q+'</i><br><a href="#" class="clear_search brand-line">Reset</a>');
      }
			//Disabled Auto scroll when results are loaded due to client feedback
      if(this.loaded){
        $('html, body').stop(true, true).animate({scrollTop: $("section.all_articles").offset().top - 80 }, 400);
      } else {
        this.loaded = true;
      }
    },
    timestampToDate:function(unix){
      var a = new Date(unix * 1000);
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      //var hour = a.getHours();
      //var min = a.getMinutes();
      //var sec = a.getSeconds();
      var time = month + ' ' + date + ', ' + year;
      return time;
    },
    pager:{
      init:function(){
        this.per = parseInt(hrbtic.allPosts.postData.length);
        //if(responder.curZindex < 20){ this.per = 12; }
        this.total = parseInt(hrbtic.allPosts.fullResult.general.page_total);
        this.message = this.page+" of "+this.total;
        $("#devalert").html("loading "+this.message).show();
        $("#results_articles .pager").css("opacity", 1);
        $("#results_articles .pager p").text("page "+this.message);
        if(this.total === 1){
          $("#results_articles .pager .navbar").css("opacity", 0.2);
          $("#devalert").hide();
        } else {
          $("#results_articles .pager .navbar").css("opacity", 1);
          $("#results_articles .pager .navbar .up").css("opacity", 1);
          $("#results_articles .pager .navbar .down").css("opacity", 1);
          if(this.page === 1){
            $("#results_articles .pager .navbar .up").css("opacity", 1);
            $("#results_articles .pager .navbar .down").css("opacity", 0.2);
          } else if(this.page === this.total){
            $("#results_articles .pager .navbar .up").css("opacity", 0.2);
            $("#results_articles .pager .navbar .down").css("opacity", 1);
          }
          $("#devalert").hide();
        }
      },
      message:'',
      rail:null,
      width:130,
      per:10,
      page:1,
      total:1,
      left:function(){
        if(this.page <= 1){
          this.page = 1;
        } else {
          this.page--;
          hrbtic.allPosts.grabCats();
        }
      },
      right:function(){
        if(this.page < this.total){
          this.page++;
          hrbtic.allPosts.grabCats();
        }
      }
    }
  },
  featuredVideos:{
    fullResult:[],
    postData:[],
    year:0,
    q:'',
    buildResults:function(){
      var returnhtml = '';
      var returnhtml2 = '';
      var i = this.pager.page - 1;
      var renderakamai = false;
      switch(this.postData[i].media_type){
        case 'images':
          returnhtml = '<img src="'+this.postData[i].image_file+'">';
          break;
        case 'video':
          switch(this.postData[i].video_file_type){
            case 'YouTube Video':
              returnhtml = '<div class="div_video"> \
                <iframe src="https://www.youtube.com/embed/'+this.postData[i].youtube_video_id+'?autoplay=0&showinfo=1&controls=1" frameborder="0" allowfullscreen ></iframe> \
                </div>';
              break;
            case 'Akamai Video':
              returnhtml = '<div class="div_video"><div id="akamai_video_'+this.postData[i].id+'" class="akamai_video_box"></div></div>';
              renderakamai = true;
              break;
            case 'Native Video':
              returnhtml = ' \
                <video style="background-color: #000;" width="100%" height="100%" poster="'+this.postData[i].thumby+'" controls=""> \
                  <source src="'+this.postData[i].video_file_url+'" type="video/mp4"> \
                  <span class="pp-dn">Your browser does not support HTML5 video.</span> \
                </video>';
              break;
          }
          break;
        case 'audio':
          returnhtml = ' \
              <audio controls> \
                <source src="'+this.postData[i].audio_file+'" type="audio/mpeg"> \
                Your browser does not support the audio element. \
              </audio> \
            ';
          break;
        case 'document':
          returnhtml = '<img src="'+this.postData[i].document_file_url.url+'">';
          break;
        case 'logo':
          returnhtml = '<img src="'+this.postData[i].image_file+'">';
          break;
      }
      returnhtml2 = '<h2>'+this.postData[i].media_type_title+'</h2>';
      if(this.postData[i].source){
        returnhtml2 = returnhtml2+'<p class="title"><a href="'+this.postData[i].sourceurl+'">'+this.postData[i].title+'</a></p>';
      } else {
        returnhtml2 = returnhtml2+'<p class="title">'+this.postData[i].title+'</p>';
      }
      returnhtml2 = returnhtml2+'<p>'+this.postData[i].desc+'</p>';
      
      $(".newsroom-hp-video-data").html(returnhtml);
      $(".newsroom-hp-video-content").html(returnhtml2);
      if(renderakamai){
        hrbtic.amp.createPlayer(this.postData[i].id, "https://"+this.postData[i].akamai_video_url, this.postData[i].download_link, this.postData[i].thumby, this.postData[i].title);
      }
    },
    pager:{
      init:function(){
        this.per = 1;
        this.total = parseInt(hrbtic.featuredVideos.postData.length);
        var arrowbox = $(".newsroom-hp-videos .navbar");

        if(this.total === 1){
          arrowbox.css("opacity", 0.2);
        } else if(this.total > 1) {
          arrowbox.css("opacity", 1);
          arrowbox.find(".up").css("opacity", 1);
          arrowbox.find(".down").css("opacity", 1);
          if(this.page === 1){
            arrowbox.find(".up").css("opacity", 1);
            arrowbox.find(".down").css("opacity", 0.2);
          } else if(this.page === this.total){
            arrowbox.find(".up").css("opacity", 0.2);
            arrowbox.find(".down").css("opacity", 1);
          }
        } else if(this.total === 0){
          arrowbox.css("opacity", 0);
        }
      },
      message:'',
      rail:null,
      width:130,
      per:1,
      page:1,
      total:1,
      left:function(){
        if(this.page <= 1){
          this.page = 1;
        } else {
          this.page--;
          hrbtic.featuredVideos.buildResults();
          hrbtic.featuredVideos.pager.init();
        }
      },
      right:function(){
        if(this.page < this.total){
          this.page++;
          hrbtic.featuredVideos.buildResults();
          hrbtic.featuredVideos.pager.init();
        }
      }
    }
  },
  inTheNews:{
    loaded:false,
    fullResult:[],
    postData:[],
    year:0,
    q:'',
    grabCats:function(){
      var thisobj = this;
      $("#devalert").html("Loading Filtered Articles...").show();

      var totalfilters = 0;
      if(this.year > 0){
        totalfilters = 1;
      }
      $("#results_articles a.filtertoggle span").text("Filter Articles");
      this.grabData();
    },
    grabData:function(){
      var thisobj = this;
      var allyears = thisobj.year;
      $.ajax({
          type: 'POST',
          url: ajaxfullurl,
          data: {
            'action': 'chemistry_get_inthenews',
            'years' : allyears,
            'dir' : thisobj.sortDirection,
            'page' : thisobj.pager.page
          }, success: function (result) {
            thisobj.fullResult = result;
            thisobj.postData = result.posts;
            thisobj.pager.init();
            thisobj.buildResults();
            $("#devalert").hide();
          },
          error: function () {
              alert("error");
              $("#devalert").html("Something went wrong. Please try again.").show();
          }
      });
    },
    buildResults:function(){
      var returnhtml = [];
      for(var i=0;i<this.postData.length;i++){
        returnhtml.push(' \
          <a href="'+this.postData[i].fullurl+'" target="_blank" class="result in-the-news"> \
            <span class="date">'+this.postData[i].date+'</span> \
            <span class="title">'+this.postData[i].title+'</span> \
            <span class="url">'+this.postData[i].urlparts.host+'</span> \
          </a> \
        ');
      }
      if(returnhtml.length > 0){
        $(".results").html(returnhtml.join(''));
      } else {
        $(".results").html('<div class="noresults">No Results Found.<a href="#" class="action_reset">Show All</a></div>');
      }
      if(this.loaded){
        $('html, body').animate({scrollTop: $("section.all_articles").offset().top - 80 }, 400);
      } else {
        this.loaded = true;
      }
    },
    pager:{
      init:function(){
        this.per = parseInt(hrbtic.inTheNews.postData.length);
        //if(responder.curZindex < 20){ this.per = 12; }
        this.total = parseInt(hrbtic.inTheNews.fullResult.maxpages);
        if(this.total > 0){
          this.message = this.page+" of "+this.total;
        } else {
          this.message = '0 of 0';
        }
        $("#devalert").html("Loading "+this.message).show();
        $("#results_articles .pager p").text("Page "+this.message);
        if(this.total === 1){
          $("#results_articles .pager .navbar").css("opacity", 0.2);
        } else if(this.total > 1) {
          $("#results_articles .pager .navbar").css("opacity", 1);
          $("#results_articles .pager .navbar .up").css("opacity", 1);
          $("#results_articles .pager .navbar .down").css("opacity", 1);
          if(this.page === 1){
            $("#results_articles .pager .navbar .up").css("opacity", 1);
            $("#results_articles .pager .navbar .down").css("opacity", 0.2);
          } else if(this.page === this.total){
            $("#results_articles .pager .navbar .up").css("opacity", 0.2);
            $("#results_articles .pager .navbar .down").css("opacity", 1);
          }
        } else if(this.total === 0){
          $("#results_articles .pager .navbar").css("opacity", 0);
        }
      },
      message:'',
      rail:null,
      width:130,
      per:10,
      page:1,
      total:1,
      left:function(){
        if(this.page <= 1){
          this.page = 1;
        } else {
          this.page--;
          hrbtic.inTheNews.grabCats();
        }
      },
      right:function(){
        if(this.page < this.total){
          this.page++;
          hrbtic.inTheNews.grabCats();
        }
      }
    }
  },
  tagTopic:{
    fullResult:[],
    postData:[],
    tagtype:'',
    year:0,
    q:'',
    grabCats:function(){
      $("#devalert").html("Loading Articles...").show();
      var totalfilters = 0;
      if(this.year > 0){
        totalfilters = 1;
      }
      $("#results_articles a.filtertoggle span").text("Filter ("+totalfilters+")");
      this.grabData();
    },
    grabData:function(){
      var thisobj = this;
      var allyears = this.year;
      $.ajax({
          type: 'POST',
          url: ajaxfullurl,
          data: {
            'action': 'chemistry_get_newstag',
            'tagtype' : thisobj.tagtype,
            'years' : allyears,
            'dir' : thisobj.sortDirection,
            'page' : thisobj.pager.page
          }, success: function (result) {
            thisobj.fullResult = result;
            thisobj.postData = result.posts;
            thisobj.pager.init();
            thisobj.buildResults();
            $("#devalert").hide();
          },
          error: function () {
              alert("error");
              $("#devalert").html("Something went wrong. Please try again.").show();
          }
      });
    },
    buildResults:function(){
      var returnhtml = [];
      for(var i=0;i<this.postData.length;i++){
        
        returnhtml.push(' \
          <a href="'+this.postData[i].fullurl+'" target="_blank" class="result in-the-news"> \
            <i style="background-image:url('+this.postData[i].thumb+');"> \
            <img src="'+basetcthemeurl+'/img/ratio1-2.2.png" alt="Image: '+this.postData[i].title+'"> \
            </i> \
            <span class="date">'+this.postData[i].date+'</span> \
            <span class="title">'+this.postData[i].title+'</span> \
            <span class="url"></span> \
          </a> \
        ');
        
      }
      if(returnhtml.length > 0){
        $(".results").html(returnhtml.join(''));
      } else {
        $(".results").html('<div class="noresults">No Results Found.<a href="#" class="action_reset">Show All</a></div>');
      }
      //$('html, body').animate({scrollTop: $("section.all_articles").offset().top - 80 }, 400);
    },
    pager:{
      init:function(){
        this.per = parseInt(hrbtic.tagTopic.postData.length);
        //if(responder.curZindex < 20){ this.per = 12; }
        this.total = parseInt(hrbtic.tagTopic.fullResult.maxpages);
        if(this.total > 0){
          this.message = this.page+" of "+this.total;
        } else {
          this.message = '0 of 0';
        }
        $("#devalert").html("Loading "+this.message).show();
        $("#results_articles .pager p").text("Page "+this.message);
        if(this.total === 1){
          $("#results_articles .pager .navbar").css("opacity", 0.2);
        } else if(this.total > 1) {
          $("#results_articles .pager .navbar").css("opacity", 1);
          $("#results_articles .pager .navbar .up").css("opacity", 1);
          $("#results_articles .pager .navbar .down").css("opacity", 1);
          if(this.page === 1){
            $("#results_articles .pager .navbar .up").css("opacity", 1);
            $("#results_articles .pager .navbar .down").css("opacity", 0.2);
          } else if(this.page === this.total){
            $("#results_articles .pager .navbar .up").css("opacity", 0.2);
            $("#results_articles .pager .navbar .down").css("opacity", 1);
          }
        } else if(this.total === 0){
          $("#results_articles .pager .navbar").css("opacity", 0);
        }
      },
      message:'',
      rail:null,
      width:130,
      per:10,
      page:1,
      total:1,
      left:function(){
        if(this.page <= 1){
          this.page = 1;
        } else {
          this.page--;
          hrbtic.inTheNews.grabCats();
        }
      },
      right:function(){
        if(this.page < this.total){
          this.page++;
          hrbtic.inTheNews.grabCats();
        }
      }
    }
  },
  mediaLibrary:{
    loaded:false,
    fullResult:[],
    postData:[],
    mediaTypes:[],
    mediaTopics:[],
    mediaTopicsOmits:[],
    mediaTopicsSend:[],
    sortDirection:"DESC",
    ratio:'',
    q:'',
    runFilters:function(){
      //$(".media-type").find("a.filter")
      //$(".topics").find("a.filter")
      //$(".date-added").find("a.filter")
    },
    grabCats:function(){
      $("#devalert").html("Loading Media Library Content...").show();
      this.grabData();
    },
    grabData:function(){
      var thisobj = this;
      this.mediaTopicsSend = [];
      var alltypes = this.mediaTypes.join(",");
      for(var i=0; i < thisobj.mediaTopics.length; i++) {
        this.mediaTopicsSend.push(thisobj.mediaTopics[i]);
      }
      for(var ii=0; ii < thisobj.mediaTopicsOmits.length; ii++) {
        this.mediaTopicsSend.push(thisobj.mediaTopicsOmits[ii] * -1);
      }
      var alltopics = this.mediaTopicsSend.join(",");

      $.ajax({
          type: 'POST',
          url: ajaxfullurl,
          data: {
            'action': 'chemistry_get_medialibrary',
            'types' : alltypes,
            'topics' : alltopics,
            'dir' : thisobj.sortDirection,
            'page' : thisobj.pager.page,
            'search' : thisobj.q
          }, success: function (result) {
            thisobj.fullResult = result;
            thisobj.postData = result.posts;
            thisobj.pager.init();
            thisobj.buildResults();
            $("#devalert").hide();
          },
          error: function () {
              alert("error");
              $("#devalert").html("Something went wrong. Please try again.").show();
          }
      });
    },
    buildResults:function(){
      var returnhtml = [];
      var resultmedia = '';
      var resultdownload = '';
      for(var i=0;i<this.postData.length;i++){
        switch(this.postData[i].meta.media_type){
          case "images":
            if(this.postData[i].meta.image_file == ''){
              resultmedia = this.postData[i].thumby;
            } else {
              resultmedia = this.postData[i].meta.image_file;
            }
            returnhtml.push(' \
              <a href="#" class="mlitem" data-mlid="'+this.postData[i].id+'"> \
                <div class="thumb" style="background-image: url('+resultmedia+');"> \
                  <div class="showing"><p>Viewing</p></div> \
                  <img src="'+hrbtic.ratio+'" width="100%"> \
                </div> \
                <div class="pad"> \
                  <h3>'+this.postData[i].title+'</h3> \
                </div> \
              </a> \
            ');
            break;
          case "video":
            returnhtml.push(' \
              <a href="#" class="mlitem" data-mlid="'+this.postData[i].id+'"> \
                <div class="thumb" style="background-image: url('+this.postData[i].thumby+');"> \
                  <div class="showing"><p>Viewing</p></div> \
                  <img src="'+hrbtic.ratio+'" width="100%"> \
                </div> \
                <div class="pad"> \
                  <h3>'+this.postData[i].title+'</h3> \
                </div> \
              </a> \
            ');
            break;
          case "audio":
            returnhtml.push(' \
              <a href="#" class="mlitem" data-mlid="'+this.postData[i].id+'"> \
                <div class="thumb" style="background-image: url('+this.postData[i].thumby+');"> \
                  <div class="showing"><p>Viewing</p></div> \
                  <img src="'+hrbtic.ratio+'" width="100%"> \
                </div> \
                <div class="pad"> \
                  <h3>'+this.postData[i].title+'</h3> \
                </div> \
              </a> \
            ');
            break;
          case "logo":
            if(this.postData[i].meta.image_file == ''){
              resultmedia = this.postData[i].thumby;
            } else {
              resultmedia = this.postData[i].meta.image_file;
            }
            returnhtml.push(' \
              <a href="#" class="mlitem" data-mlid="'+this.postData[i].id+'"> \
                <div class="thumb" style="background-image: url('+resultmedia+');"> \
                  <div class="showing"><p>Viewing</p></div> \
                  <img src="'+hrbtic.ratio+'" width="100%"> \
                </div> \
                <div class="pad"> \
                  <h3>'+this.postData[i].title+'</h3> \
                </div> \
              </a> \
            ');
            break;
          case "document":
            resultmedia = this.postData[i].thumby;
            var classextra = '';
            if(resultmedia === '' || resultmedia === false){
              resultmedia = basetcthemeurl+'/svg/logo.svg';
              classextra = ' svg';
            }
            returnhtml.push(' \
              <a href="#" class="mlitem" data-mlid="'+this.postData[i].id+'"> \
                <div class="thumb'+classextra+'" style="background-image: url('+resultmedia+');"> \
                  <div class="showing"><p>Viewing</p></div> \
                  <img src="'+hrbtic.ratio+'" width="100%"> \
                </div> \
                <div class="pad"> \
                  <h3>'+this.postData[i].title+'</h3> \
                </div> \
              </a> \
            ');
            break;
        }

      }
      if(this.q === '*' || this.q === ''){
        $("#results_articles h1 span.focusedon").html('Media Library');
      } else {
        $("#results_articles h1 span.focusedon").html('Showing Results For: <i>'+this.q+'</i> <a href="#" class="clear_search brand-line">Reset</a>');
      }
      
      if(returnhtml.length > 0){
        $(".results").html(returnhtml.join(''));
      } else {
        $(".results").html('<div class="noresults">No Results Found.<br><a href="#" class="action_reset brand-line">Show All</a></div>');
      }
      if(this.loaded){
        $('html, body').animate({scrollTop: $("section.all_articles").offset().top - 80 }, 400);
      } else {
        this.loaded = true;
      }
    },
    showSingle:function(id, position){
      var thisobj = this;
      var finalpos = parseInt(position);
      var finalindex;
      var i = finalpos;
      var result = '';
      var resultmedia = '';
      var resultdownload = '';

      switch(this.postData[i].meta.media_type){
        case 'images':
          if(this.postData[i].meta.image_file == ''){
            resultmedia = '<img src="'+this.postData[i].thumby+'">';
            resultdownload = this.postData[i].thumby;
          } else {
            resultmedia = '<img src="'+this.postData[i].meta.image_file+'">';
            resultdownload = this.postData[i].meta.image_file;
          }
          break;
        case 'video':
          switch(this.postData[i].meta.video_file_type){
            case 'Native Video':
              var videoposter = this.postData[i].thumby;
              resultmedia = ' \
              <video style="background-color: #000;" width="100%" height="100%" poster="'+videoposter+'" controls=""> \
                <source src="'+this.postData[i].meta.video_file_download+'" type="video/mp4"> \
                <span class="pp-dn">Your browser does not support HTML5 video.</span> \
              </video>';
              resultdownload = this.postData[i].meta.video_file_download;
              break;
            case 'YouTube Video':
              resultmedia = '<div class="div_video"><iframe src="https://www.youtube.com/embed/'+this.postData[i].meta.youtube_video_id+'?autoplay=0&showinfo=1&controls=1" frameborder="0" allowfullscreen ></iframe></div>';
              resultdownload = 'https://www.youtube.com/watch?v='+this.postData[i].meta.youtube_video_id;
              break;
            case 'Viewbix Video':
              resultmedia = '<div style="position:relative;padding:0;"><div style="width:100%;height:0;padding-bottom:56.25%;padding-top:0;"><iframe style="border: none; position:absolute;top:0;left:0;width:100%;height:100%;" width="100%" height="100%" src="'+this.postData[i].meta.viewbix_video_url+'" frameborder="0" scrolling="no" allowTransparency="true" allowfullscreen></iframe></div></div>';
              resultdownload = this.postData[i].meta.download_link;
              break;
            case 'Akamai Video':
              resultmedia = '<div class="div_video"><div id="akamai_video_'+this.postData[i].id+'" class="akamai_video_box"></div></div>';
              resultdownload = this.postData[i].meta.download_link;
              break;
          }
          break;
        case 'audio':
            resultmedia = ' \
              <audio controls> \
                <source src="'+this.postData[i].meta.audio_file+'" type="audio/mpeg"> \
                Your browser does not support the audio element. \
              </audio> \
            ';
            resultdownload = this.postData[i].meta.audio_file;
          break;
        case 'logo':
          if(this.postData[i].meta.image_file == ''){
            resultmedia = ' \
            <img src="'+this.postData[i].thumby+'"> \
            ';
            resultdownload = this.postData[i].thumby;
          } else {
            resultmedia = ' \
            <img src="'+this.postData[i].meta.image_file+'"> \
            ';
            resultdownload = this.postData[i].meta.image_file;
          }
          break;
        case 'document':
          if(this.postData[i].thumby != ''){
            resultmedia = '<img src="'+this.postData[i].thumby+'">';
          } else {
            resultmedia = '<div class="svgbox">'+hrbtic.assets.logo+'</div>';
          }
          
          resultdownload = this.postData[i].meta.document_file.url;
          break;
      }

      var shareurl = encodeURIComponent(resultdownload.replace(/ /g, "%20"));
      //shareurl.replace(/ /g, "%20");
      //shareurl.replace(/%20/g, " ");
      var sourcerow = '';
      if(this.postData[i].meta.sourceurl !== ''){
        sourcerow = '<a href="'+this.postData[i].meta.sourceurl+'" class="source action"><svg xmlns="http://www.w3.org/2000/svg" width="12.2" height="9" viewBox="0 0 12.2 9"><rect width="6.5" height="8.98" style="fill: #111"/><rect x="8.8" y="5.6" width="3.4" height="3.41" style="fill: #111"/><rect x="8.8" width="3.4" height="3.41" style="fill: #111"/></svg>Source</a>';
      }

      var result = ' \
      <div class="fullitem"> \
        <a class="close" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19.9" height="19.9" viewBox="0 0 19.9 19.9"><line x1="18.5" y1="1.4" x2="1.4" y2="18.5"/><line x1="1.4" y1="1.4" x2="18.5" y2="18.5"/></svg></a> \
        <div class="showitem"> \
          '+resultmedia+' \
        </div> \
        <div class="details"> \
          <div class="c1"> \
            <h3>'+this.postData[i].title+'</h3> \
            <p>'+this.postData[i].desc+'</p> \
          </div> \
          <div class="c2"> \
            <a href="'+resultdownload+'" class="download action" target="_blank" download><svg xmlns="http://www.w3.org/2000/svg" width="21.6" height="21.6" viewBox="0 0 21.6 21.6"><polygon points="16.2 9 16.2 0 5.4 0 5.4 9 0 9 10.8 21.6 21.6 9 16.2 9"/></svg>Download</a> \
            '+sourcerow+' \
            <div class="medialibrary-share"> \
              <a style="display:inline-block;" href="https://www.facebook.com/sharer/sharer.php?u='+shareurl+'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
              <rect width="40" height="40" style="fill: #3c5a98"/><path d="M18.2,27.8V20.7H16.3V18.1h1.9V16c0-1.7,1.1-3.3,3.7-3.3h1.8v2.4H22c-.9,0-1.1.4-1.1,1.1v1.9h2.8v2.6H20.9v7.1Z" style="fill: #fff"/></svg></a> \
              <a style="display:inline-block;" href="https://twitter.com/home?status='+shareurl+'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
              <rect width="40" height="40" style="fill: #2aa9e0"/><path d="M27.8,14.8l-1.8.4a3.2,3.2,0,0,0,1.4-1.7,6.3,6.3,0,0,1-2,.7A3.2,3.2,0,0,0,19.9,17a8.9,8.9,0,0,1-6.4-3.5,3.2,3.2,0,0,0,.9,4.2,3.1,3.1,0,0,1-1.4-.4h0a3.2,3.2,0,0,0,2.4,3.2H14a3.2,3.2,0,0,0,2.9,2.3A6.3,6.3,0,0,1,12.9,24h-.7a9,9,0,0,0,14-7.2c0-.1,0-.3,0-.4A6.4,6.4,0,0,0,27.8,14.8Z" style="fill: #fff"/></svg></a> \
              <a style="display:inline-block;" href="https://pinterest.com/pin/create/button/?url='+shareurl+'&description=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
              <rect width="40" height="40" style="fill: #ca2027"/><path d="M20,13.2a6.8,6.8,0,0,0-2.7,13.1,6.1,6.1,0,0,1,.1-1.6l.9-3.7a2.6,2.6,0,0,1-.2-1.1c0-1,.6-1.8,1.3-1.8a.9.9,0,0,1,.9,1,14.7,14.7,0,0,1-.6,2.4,1.1,1.1,0,0,0,1.1,1.3c1.3,0,2.2-1.7,2.2-3.6a2.6,2.6,0,0,0-2.9-2.6,3.2,3.2,0,0,0-3.4,3.3,2,2,0,0,0,.5,1.3.3.3,0,0,1,.1.4v.5a.2.2,0,0,1-.3.2,2.6,2.6,0,0,1-1.4-2.6c0-1.9,1.6-4.3,4.9-4.3a4.1,4.1,0,0,1,4.3,3.9c0,2.7-1.5,4.7-3.7,4.7a2,2,0,0,1-1.7-.9l-.5,1.9a5.7,5.7,0,0,1-.7,1.5l1.9.3a6.8,6.8,0,0,0,0-13.7Z" style="fill: #fff"/></svg></a> \
              <a style="display:inline-block;" href="https://www.linkedin.com/shareArticle?mini=true&url='+shareurl+'&title=&summary=&source=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
              <rect width="40" height="40" style="fill: #069"/><g><rect x="13.8" y="17.1" width="2.9" height="9.42" style="fill: #fff"/><path d="M15.3,15.9a1.5,1.5,0,1,1,0-2.9,1.5,1.5,0,1,1,0,2.9Z" style="fill: #fff"/> \
              <path d="M27.4,26.5H24.5V21.3c0-1.2-.4-2-1.5-2a1.6,1.6,0,0,0-1.5,1.1,2.1,2.1,0,0,0-.1.7v5.4H18.5V20.1c0-1.2,0-2.2-.1-3H21v1.3h.1a3.4,3.4,0,0,1,2.9-1.5c1.9,0,3.4,1.3,3.4,4.1Z" style="fill: #fff"/></g></svg></a> \
            </div> \
          </div> \
          </div></div></div>';

      if(finalpos === 0 || finalpos === 1){
        finalindex = 2;
      } else if(finalpos > 1){
				if(parseInt(position) % 2 === 0){
					finalindex = finalpos + 2;
				} else {
					finalindex = finalpos + 1;
				}
			}
      $(".results .fullitem").remove();
      var totalmlitems = $(".results a.mlitem").length;
      if(totalmlitems == 1){
        $(".results > a.mlitem:nth-of-type(1)").after(result);
      } else if(totalmlitems % 2 === 1 && totalmlitems === (parseInt(position) + 1)){
        $(".results > a.mlitem:nth-of-type("+totalmlitems+")").after(result);
      } else {
        $(".results > a.mlitem:nth-of-type("+finalindex+")").after(result);
      }
      $('html, body').animate({scrollTop: $(".results .fullitem").offset().top - 130 }, 400, function(){
        //Only create amp player if this is an akamai video.
				if(thisobj.postData[i].meta.media_type == 'video' && thisobj.postData[i].meta.video_file_type == 'Akamai Video'){
					hrbtic.amp.createPlayer(id, 'https://'+thisobj.postData[i].meta.akamai_video_url, thisobj.postData[i].meta.download_link, thisobj.postData[i].thumby, thisobj.postData[i].title);
				}
      });
    },
    reset:function(){
      this.pager.page = 1;
      this.mediaTypes = [];
      this.mediaTopics = [];
      this.mediaTopicsOmits = [];
      this.mediaTopicsSend = [];
      hrbtic.amp.destroyPlayer();
      this.q = '';
      //Close any previously opened menus and remove selections.
      $(".all_articles.media-library .filterbox.topics .sub.on").find("a").removeClass("on");
      $(".all_articles.media-library .filterbox.topics .sub.on").stop(true, true).slideUp(400).removeClass("on");
      $(".all_articles.media-library a.filter").removeClass("on");
      $(".all_articles.media-library a.filter.all").addClass("on");
      $("#top_search_q").val('');
      this.grabCats();
    },
    pager:{
      init:function(){
        this.per = parseInt(hrbtic.mediaLibrary.postData.length);
        //if(responder.curZindex < 20){ this.per = 12; }
        this.total = parseInt(hrbtic.mediaLibrary.fullResult.maxpages);
        if(this.total > 0){
          this.message = this.page+" of "+this.total;
        } else {
          this.message = '0 of 0';
        }
        $("#devalert").html("Loading "+this.message).show();
        $("#results_articles .pager p").text("Page "+this.message);
        if(this.total === 1){
          $("#results_articles .pager .navbar").css("opacity", 0.2);
        } else if(this.total > 1) {
          $("#results_articles .pager .navbar").css("opacity", 1);
          $("#results_articles .pager .navbar .up").css("opacity", 1);
          $("#results_articles .pager .navbar .down").css("opacity", 1);
          if(this.page === 1){
            $("#results_articles .pager .navbar .up").css("opacity", 1);
            $("#results_articles .pager .navbar .down").css("opacity", 0.2);
          } else if(this.page === this.total){
            $("#results_articles .pager .navbar .up").css("opacity", 0.2);
            $("#results_articles .pager .navbar .down").css("opacity", 1);
          }
        } else if(this.total === 0){
          $("#results_articles .pager .navbar").css("opacity", 0);
        }
      },
      message:'',
      rail:null,
      width:130,
      per:10,
      page:1,
      total:1,
      left:function(){
        if(this.page <= 1){
          this.page = 1;
        } else {
          this.page--;
          hrbtic.mediaLibrary.grabCats();
        }
      },
      right:function(){
        if(this.page < this.total){
          this.page++;
          hrbtic.mediaLibrary.grabCats();
        }
      }
    }
  },
  imageAssets:{
    pager:{
      init:function(){
        this.rail = $(".theimages .rail");
        this.total = parseInt($(".theimages .imageitem").length);
        switch(responder.curZindex){
          case 1:
            this.limit = this.total - 3;
            this.pagerlimit = 4;
            break;
          case 5:
            this.limit = this.total - 2;
            this.pagerlimit = 3;
            break;
          case 10:
            this.limit = this.total - 1;
            this.pagerlimit = 2;
            break;
          case 20:
            this.limit = this.total - 0;
            this.pagerlimit = 1;
            break;
        }
        var thisnavbar = $(".mediakit-more.featured_media_images .navbar");
        if(this.total < this.pagerlimit){
          thisnavbar.css("opacity", 0.2);
        } else if(this.total > this.pagerlimit){
          thisnavbar.css("opacity", 1);
          thisnavbar.find(".up").css("opacity", 1);
          thisnavbar.find(".down").css("opacity", 1);
          if(this.page === 1){
            thisnavbar.find(".up").css("opacity", 1);
            thisnavbar.find(".down").css("opacity", 0.2);
          } else if(this.page >= this.limit) {
            thisnavbar.find(".up").css("opacity", 0.2);
            thisnavbar.find(".down").css("opacity", 1);
          }
        } else if(this.total === this.pagerlimit){
          thisnavbar.css("opacity", 0);
        }
        
        
      },
      rail:null,
      width:270,
      per:1,
      page:1,
      total:1,
      limit:1,
      pagerlimit:1,
      left:function(){
        if(this.page <= 1){
          this.page = 1;
          this.rail.stop(true, true).animate({"margin-left":"0"}, 200);
        } else {
          this.page--;
          this.rail.stop(true, true).animate({"margin-left":"+=270px"}, 200);
        }
        this.init();
      },
      right:function(){
        if(this.page < this.limit){
          this.page++;
          this.rail.stop(true, true).animate({"margin-left":"-=270px"}, 200);  
        }
        this.init();
      }
    }
  },
  recentPosts:{
    scroll:false,
    init:function(){
      this.pager.page = 1;
      this.pager.total = $(".recentposts_box .post").length;
      $(".recentposts_box .navbar .up").addClass("dim");
      this.processPage();
    },
    processPage:function(){
      $(".recentposts_box .post").stop(true, true).hide();
      var page1 = this.pager.page;
      var timestep = 1;
      var nextpage;
      for(var ii=0;ii < this.pager.per;ii++){
        nextpage = page1+ii;
        $(".recentposts_box .post:nth-of-type("+nextpage+")").delay(timestep).fadeIn(200);
        timestep += 50;
      }
      var parentbox = $(".recentposts_box .navbar");
      parentbox.find(".up").removeClass("dim");
      parentbox.find(".down").removeClass("dim");
      if(this.pager.page === 1){
        parentbox.find(".up").addClass("dim");
      } if(this.pager.page >= this.pager.total - this.pager.per){
        parentbox.find(".down").addClass("dim");
      }
      if(!this.scroll){
        this.scroll = true;
      } else {
        $('html, body').animate({scrollTop: $(".recentposts_box").offset().top - 140 }, 400);
      }
    },
    pager:{
      page:1,
      total:10,
      per:2,
      up:function(){
        this.page -= this.per;
        if(this.page <= 1){
          this.page = 1;
        }
        hrbtic.recentPosts.processPage();
      },
      down:function(){
        this.page += this.per;
        if(this.page >= this.total - 1){
          this.page = this.total - 1;
        }
        hrbtic.recentPosts.processPage();
      }
    }
  },
  postPager:{
    timeout:false,
    timeout2:false,
    per:6,
    init:function(target){
      console.log("int called.")
      var totalitems = parseInt(target.find(".post.pagablesingle").length);
      target.data("total", totalitems);
      if(totalitems <= target.data("per")){
        target.parents(".mediakit-itembox.pagable").find(".navbar").hide();
      }
      target.find(".theposts").data("limit", "pre");
      this.changePage(target, "pre")
    },
    processPage:function(target, runtimeout){
      var parentbox = target.parents(".pagablebox");
      var curlimit = target.data("limit");
      if(runtimeout !== 1){ 
        clearTimeout(this.timeout);
        clearTimeout(this.timeout2);
      }

      target.find(".post").hide().removeClass("shown").removeClass("overline");
      var currentPage = parseInt(target.data("page"));
      var numbertoshow;

      var page1 = currentPage;
      var page2 = currentPage + 1;
      var page3 = currentPage + 2;
      var page4 = currentPage + 3;
      var page5 = currentPage + 4;
      var page6 = currentPage + 5;

      if(responder.curZindex === 20){
        numbertoshow = parseInt(target.data("permobile"));
      } else {
        numbertoshow = parseInt(target.data("per"));
        if(numbertoshow !== 2 && numbertoshow !== 4 && numbertoshow !== 6){
          numbertoshow = 4;
        }
      }
      
      console.log("a", currentPage, numbertoshow);
      
      if(responder.curZindex === 20){
        //Mobile Paging.
        if(numbertoshow === 1){
          target.find(".post:nth-of-type("+page1+")").stop(true, true).fadeIn(400).addClass("shown");
          this.timeout = setTimeout(function(){ target.find(".post:nth-of-type("+page2+")").stop(true, true).fadeIn(400); }, 50);
        } else if(numbertoshow === 2){
          target.find(".post:nth-of-type("+page1+")").stop(true, true).fadeIn(400).addClass("shown");
          this.timeout = setTimeout(function(){ 
            target.find(".post:nth-of-type("+page2+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
          }, 50);
        } else if(numbertoshow === 3){
          target.find(".post:nth-of-type("+page1+")").stop(true, true).fadeIn(400).addClass("shown");
          this.timeout = setTimeout(function(){ 
            target.find(".post:nth-of-type("+page2+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
          }, 50);
          this.timeout = setTimeout(function(){ 
            target.find(".post:nth-of-type("+page3+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
          }, 100);
        }
      } else {
        //Different show animations based on paging. 2/4/6 values possible.
        if(numbertoshow === 2){
          target.find(".post:nth-of-type("+page1+")").stop(true, true).fadeIn(400).addClass("shown");
          this.timeout = setTimeout(function(){ target.find(".post:nth-of-type("+page2+")").stop(true, true).fadeIn(400); }, 50);
        } else if(numbertoshow === 4){
          console.log("hit 4");
          target.find(".post:nth-of-type("+page1+")").stop(true, true).fadeIn(400).addClass("shown");
          target.find(".post:nth-of-type("+page2+")").stop(true, true).fadeIn(400).addClass("shown");
          this.timeout = setTimeout(function(){ 
            target.find(".post:nth-of-type("+page3+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
            target.find(".post:nth-of-type("+page4+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
          }, 50);
        } else if(numbertoshow === 6){
          console.log("hit 6");
          target.find(".post:nth-of-type("+page1+")").stop(true, true).fadeIn(400).addClass("shown");
          target.find(".post:nth-of-type("+page2+")").stop(true, true).fadeIn(400).addClass("shown");
          this.timeout = setTimeout(function(){ 
            target.find(".post:nth-of-type("+page3+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
            target.find(".post:nth-of-type("+page4+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
          }, 50);
          this.timeout2 = setTimeout(function(){ 
            target.find(".post:nth-of-type("+page5+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
            target.find(".post:nth-of-type("+page6+")").stop(true, true).fadeIn(400).addClass("shown").addClass("overline");
          }, 100);
        }
      }

      var validatorper = numbertoshow - 1;
      this.updatePaging(target);
    },
    updatePaging:function(target){
      console.log("updating paging...");
      var parentbox = target.parents(".pagablebox");
      var per;
      //Reset Navbar
      parentbox.find(".navbar").removeClass("off").css("opacity", 1);
      parentbox.find(".navbar .up").removeClass("off").css("opacity", 1);
      parentbox.find(".navbar .down").removeClass("off").css("opacity", 1);
      
      if(responder.curZindex === 20){
        per = parseInt(target.data("permobile"));
      } else {
        per = parseInt(target.data("per"));
      } 
      
      //Check current page position and update paging how needed.
      if(target.data("total") <= per){
        //Shuts off paging if not enough to page.
        parentbox.find(".navbar .up").addClass("off").css("opacity", 0.2);
        parentbox.find(".navbar .down").addClass("off").css("opacity", 0.2);
      } else if(target.data("page")+per >= target.data("total")){
        target.data("limit", "end");
        parentbox.find(".navbar .up").addClass("off").css("opacity", 0.2);
      } else if(target.data("page") === 1){
        target.data("limit", "start");
        parentbox.find(".navbar .down").addClass("off").css("opacity", 0.2);
      } else if(target.data("total") == 1){
        parentbox.find(".navbar .up").addClass("off").css("opacity", 0.2);
        parentbox.find(".navbar .down").addClass("off").css("opacity", 0.2);
      } else {
        target.data("limit", "");
      }
    },
    changePage:function(target, direction){
      var curpage = target.data("page");
      var curtotal = target.data("total");
      var pagelimit = target.data("limit");
      var perpage, offset;
      
      if(responder.curZindex === 20){
        perpage = target.data("permobile");
      } else {
        perpage = target.data("per");
      }

      switch(direction){
        case "pre":
          target.data("page", 1);
          target.data("limit", "");
          this.processPage(target, 1);
          break;
        case "right":
          if(pagelimit !== "end"){
            if(curpage + perpage <= curtotal){
              target.data("page", curpage + perpage);
            } else {
              //Set the current page, per - total items.
              target.data("page", curtotal - perpage);
            }
            this.processPage(target);
          }
          break;
        case "left":
          if(pagelimit !== "start"){
            target.data("page", curpage - perpage);
            if(curpage < 1){
              //Page is less than 1, reset it to 1.
              target.data("page", 1);
            }
            this.processPage(target);
          }
          break;
      }
      
    }
  },
  relatedTopics:{
    data:[],
    loadData:function(){

    },
    pager:{
      init:function(){
        this.page = 1;
        this.rail = $(".article-relatedtopics .rail");
        if(responder.curZindex < 20){
          this.per = 3;
        } else {
          this.per = 2;
        }
        this.total = $(".article-relatedtopics .rail a").length;
        this.movemax = this.total - this.per;
        this.rail.css("width", (this.total * this.width) + 'px');
        $(".article-relatedtopics .navbar a.down").removeClass("dim");
        $(".article-relatedtopics .navbar a.up").removeClass("dim");
        $(".article-relatedtopics .navbar a.down").addClass("dim");
        if(this.total <= this.per){
          $(".article-relatedtopics .navbar a.up").addClass("dim"); //right
        }
      },
      rail:null,
      width:130,
      per:1,
      page:1,
      total:1,
      movemax:1,
      move:function(){
        var marginleft = ((this.page*this.width) - this.width) * -1;
        this.rail.stop(true, true).animate({'margin-left': marginleft+'px'}, 200);
        $(".article-relatedtopics .navbar a.down").removeClass("dim");
        $(".article-relatedtopics .navbar a.up").removeClass("dim");
        if(this.page > this.total - this.per){
          $(".article-relatedtopics .navbar a.up").addClass("dim"); //right
        } else if(this.page == 1){
          $(".article-relatedtopics .navbar a.down").addClass("dim");
        }
      },
      left:function(){
        if(this.page <= 1){
          this.page = 1;
        } else {
          this.page--;
        }
        this.move();
      },
      right:function(){
        if(this.page <= this.movemax){
          this.page++;
        }
        this.move();
      }
    }
  },
  hrbLoadMore:{
    scroll:false,
    init:function(enablePager){
      if(enablePager === undefined) {
        enablePager = false;
      }
      this.pager.enableHistory = enablePager;
      if(enablePager){ 
        this.pager.baseurl = window.location.pathname;
      }
      this.pager.visualpage = 1;
      this.pager.page = 4;
      this.pager.total = $("a.articlebox").length;
      this.processPage();
    },
    processPage:function(){
      $("a.reformlink").stop(true, true);
      var page1 = this.pager.page;
      var timestep = 1;
      var nextpage;
      for(var ii=0;ii < this.pager.per;ii++){
        nextpage = page1+ii;
        $("a.articlebox:nth-of-type("+nextpage+")").delay(timestep).fadeIn(200);
        timestep += 100;
      }
    },
    pager:{
      enableHistory:false,
      visualpage:1,
      page:4,
      total:9,
      per:3,
      baseurl:'',
      more:function(){
        this.page += this.per;
        this.visualpage++;
        if(this.page >= this.total){
          $("a.lm-loadmore").addClass("dim");
        }
        if(this.enableHistory){
          //window.history.pushState("Loaded More", "H&R Block | Tax Center | Category", this.baseurl+"page/"+this.visualpage);
        }
        hrbtic.hrbLoadMore.processPage();
      }
    }
  },
  hrbLoadArticles:{
    scroll:false,
    target:false,
    filters:{
      atn:{ 
        issue:'all_issues',
        type:'how-to-solve'
      }
    },
    data:[],
    grabData:function(){
      //console.log("Scraping data from page...");
      var thisobj = this;
      var type; 
      var issue;
      this.target.find("a.rp.sourceprime").each(function(){
        type = $(this).data("type");
        issue = $(this).data("issue");
        thisobj.data.push(
          {
           htmlitem:$(this).remove().clone(),
           issue:issue,
           type:type
          }
        );
      });
      //console.log("Done scraping data.");
    },
    init:function(enablePager, targetitem){
      //console.log("INIT");
      if(targetitem.length === 0){
        return false;
      }
      
      if(enablePager === undefined) {
        enablePager = false;
      }
      this.pager.enableHistory = enablePager;
      this.target = targetitem;
      if(enablePager){ 
        this.pager.baseurl = window.location.pathname;
      }
      this.pager.visualpage = 1;
      this.pager.page = 0;
      if(this.target.data('pagestart')){
        this.pager.page = this.target.data('pagestart');
      }
      this.pager.total = this.target.find("a.prime").length;
      //If mobile, reduce paging.
      var curz = parseInt($("#responder").css('z-index'));
      if(curz === 20){
        this.pager.per = 3;
      }
      if(this.target.data('total') <= this.pager.per){
        //this.loadNoMore();
      }
      //this.processPage();
      
      if(this.target.data('needsfilter')){
        //console.log("Needs Filter.");
        this.data = []; 
        this.grabData();
        this.refilter();
      } else {
        this.processPage();
      }
      
    },
    refilter:function(){
      console.log("Refiltering...");
      this.loadMoreButton.reset();
      this.target.find("a.sourceprime").remove();
      var passitem;
      var consolelabel = '';
      for(var j=0;j < this.data.length;j++){
        passitem = false;
        if(this.filters.atn.issue === "all_issues" && this.filters.atn.type === "all_types"){
          passitem = true;
        } else if (this.filters.atn.issue === "all_issues" && this.filters.atn.type !== "all_types"){
          if(this.filters.atn.type === this.data[j].type){
             passitem = true;
          }
        } else if (this.filters.atn.issue !== "all_issues" && this.filters.atn.type === "all_types"){
          if(this.filters.atn.issue === this.data[j].issue){
             passitem = true;
          }
        } else if (this.filters.atn.issue !== "all_issues" && this.filters.atn.type !== "all_types"){
          if(this.filters.atn.issue === this.data[j].issue && this.filters.atn.type === this.data[j].type){
             passitem = true;
          }
        }
        if(passitem){
          $(this.data[j].htmlitem).hide().insertBefore("div.load-more.cat");
        }
      }
      
      //Now reset count and run it.
      this.pager.visualpage = 1;
      this.pager.page = 0;
      if(this.target.data('pagestart')){
        this.pager.page = this.target.data('pagestart');
      }
      this.pager.total = this.target.find("a.prime").length;
      var curz = parseInt(responder.curZindex);
      if(curz === 20){
        this.pager.per = 3;
      }
      if(this.target.data('total') <= this.pager.per){
        this.loadMoreButton.promote();
      }
      this.processPage();
    },
    processPage:function(){
      //$("a.reformlink").stop(true, true);
      var page1 = this.pager.page;
      var timestep = 1;
      var nextpage;
      
      //console.log("Processing Recent Posts...", this.target.find("a.prime").length + " posts.");
      for(var ii=0;ii < this.pager.per;ii++){
        nextpage = page1+ii;
        console.log(nextpage);
        this.target.find("a.prime:eq("+nextpage+")").delay(timestep).fadeIn(200);
        timestep += 100;
        
      }
      if((this.pager.page + this.pager.per) >= this.pager.total){
        this.loadMoreButton.promote(this);
      }
    },
    loadMoreButton:{
      reset:function(){
        console.log("RESET");
        var newhref = "#";
        $("a.do-load-more").removeClass("dim").removeClass("lights-out").text("Load more").attr("href", newhref);
        $(".load-more").removeClass("lights-out");
      },
      promote:function(targetObj){
        console.log("PROMOTE");
        var newhref = $("a.do-load-more").data("allhref");
        $("a.do-load-more").addClass("dim").text("View all").attr("href", newhref);
        
        if($("a.do-load-more").data('needsfilter')){
          var newhref = "#";
          $("a.do-load-more").addClass("lights-out").text("View all").attr("href", newhref);
          $("a.do-load-more").parents(".load-more").addClass("lights-out");
        }
        
      }
    },
		showMedia:function(thumbObj, position){
      //Stop this for now.
			//return true;
			var thisobj = this;
      var finalpos = parseInt(position);
      var finalindex;
      var i = finalpos;
			var media = [];
			
			media["mlid"] = thumbObj.data("mlid");
			media["videotype"] = decodeURIComponent(thumbObj.data("videotype"));
			media["thumbnail"] = decodeURIComponent(thumbObj.data("thumbnail"));
			media["youtube"] = decodeURIComponent(thumbObj.data("youtube"));
			media["akamai"] = decodeURIComponent(thumbObj.data("akamai"));
			media["title"] = decodeURIComponent(thumbObj.data("title"));
			media["desc"] = decodeURIComponent(thumbObj.data("desc"));
			media["download"] = decodeURIComponent(thumbObj.data("download"));
			media["downloadlink"] = decodeURIComponent(thumbObj.data("downloadlink"));
			media["source"] = decodeURIComponent(thumbObj.data("source"));
			
			console.log(media);
			
      var result = '';
      var resultmedia = '';
      var resultdownload = '';

			switch(media["videotype"]){
				case 'Native Video':
					var videoposter = media["thumbnail"];
					resultmedia = ' \
					<video style="background-color: #000;" width="100%" height="100%" poster="'+media["thumbnail"]+'" controls=""> \
						<source src="'+media["download"]+'" type="video/mp4"> \
						<span class="pp-dn">Your browser does not support HTML5 video.</span> \
					</video>';
					resultdownload = media["download"];
					break;
				case 'YouTube Video':
					resultmedia = '<div class="div_video"><iframe src="https://www.youtube.com/embed/'+media["youtube"]+'?autoplay=0&showinfo=1&controls=1" frameborder="0" allowfullscreen ></iframe></div>';
					resultdownload = 'https://www.youtube.com/watch?v='+media["youtube"];
					break;
				case 'Akamai Video':
					resultmedia = '<div class="div_video"><div id="akamai_video_'+media["mlid"]+'" class="akamai_video_box"></div></div>';
					resultdownload = media["downloadlink"];
					break;
			}

      
      var sourcerow = '';
      if(media["source"] !== ''){
        sourcerow = '<a href="'+media["source"]+'" class="source"><svg xmlns="http://www.w3.org/2000/svg" width="12.2" height="9" viewBox="0 0 12.2 9"><rect width="6.5" height="8.98" style="fill: #111"/><rect x="8.8" y="5.6" width="3.4" height="3.41" style="fill: #111"/><rect x="8.8" width="3.4" height="3.41" style="fill: #111"/></svg>Source</a>';
      }

      var result = ' \
      <b class="fullitem nr"> \
        <div class="line"></div> \
				<a class="close" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19.9" height="19.9" viewBox="0 0 19.9 19.9"><line x1="18.5" y1="1.4" x2="1.4" y2="18.5"/><line x1="1.4" y1="1.4" x2="18.5" y2="18.5"/></svg></a> \
        <div class="showitem"> \
          '+resultmedia+' \
        </div> \
        <div class="details"> \
          <div class="c1"> \
            <h3>'+media["title"]+'</h3> \
            <p>'+media["desc"]+'</p> \
          </div> \
          <div class="c2"> \
            <a href="'+resultdownload+'" class="download" target="_blank" download><svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="13.1" viewBox="0 0 10.5 13.1"><polygon points="0 6.4 5.2 13.1 10.5 6.4 7.5 6.4 7.5 0 2.9 0 2.9 6.4 0 6.4" style="fill: #111"/></svg>Download</a> \
            '+sourcerow+' \
          </div> \
          <div class="medialibrary-share"> \
            <a href="https://www.facebook.com/sharer/sharer.php?u='+resultdownload+'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
            <rect width="40" height="40" style="fill: #3c5a98"/><path d="M18.2,27.8V20.7H16.3V18.1h1.9V16c0-1.7,1.1-3.3,3.7-3.3h1.8v2.4H22c-.9,0-1.1.4-1.1,1.1v1.9h2.8v2.6H20.9v7.1Z" style="fill: #fff"/></svg></a> \
            <a href="https://twitter.com/home?status='+resultdownload+'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
            <rect width="40" height="40" style="fill: #2aa9e0"/><path d="M27.8,14.8l-1.8.4a3.2,3.2,0,0,0,1.4-1.7,6.3,6.3,0,0,1-2,.7A3.2,3.2,0,0,0,19.9,17a8.9,8.9,0,0,1-6.4-3.5,3.2,3.2,0,0,0,.9,4.2,3.1,3.1,0,0,1-1.4-.4h0a3.2,3.2,0,0,0,2.4,3.2H14a3.2,3.2,0,0,0,2.9,2.3A6.3,6.3,0,0,1,12.9,24h-.7a9,9,0,0,0,14-7.2c0-.1,0-.3,0-.4A6.4,6.4,0,0,0,27.8,14.8Z" style="fill: #fff"/></svg></a> \
            <a href="https://pinterest.com/pin/create/button/?url='+resultdownload+'&description=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
            <rect width="40" height="40" style="fill: #ca2027"/><path d="M20,13.2a6.8,6.8,0,0,0-2.7,13.1,6.1,6.1,0,0,1,.1-1.6l.9-3.7a2.6,2.6,0,0,1-.2-1.1c0-1,.6-1.8,1.3-1.8a.9.9,0,0,1,.9,1,14.7,14.7,0,0,1-.6,2.4,1.1,1.1,0,0,0,1.1,1.3c1.3,0,2.2-1.7,2.2-3.6a2.6,2.6,0,0,0-2.9-2.6,3.2,3.2,0,0,0-3.4,3.3,2,2,0,0,0,.5,1.3.3.3,0,0,1,.1.4v.5a.2.2,0,0,1-.3.2,2.6,2.6,0,0,1-1.4-2.6c0-1.9,1.6-4.3,4.9-4.3a4.1,4.1,0,0,1,4.3,3.9c0,2.7-1.5,4.7-3.7,4.7a2,2,0,0,1-1.7-.9l-.5,1.9a5.7,5.7,0,0,1-.7,1.5l1.9.3a6.8,6.8,0,0,0,0-13.7Z" style="fill: #fff"/></svg></a> \
            <a href="https://www.linkedin.com/shareArticle?mini=true&url='+resultdownload+'&title=&summary=&source=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> \
            <rect width="40" height="40" style="fill: #069"/><g><rect x="13.8" y="17.1" width="2.9" height="9.42" style="fill: #fff"/><path d="M15.3,15.9a1.5,1.5,0,1,1,0-2.9,1.5,1.5,0,1,1,0,2.9Z" style="fill: #fff"/> \
            <path d="M27.4,26.5H24.5V21.3c0-1.2-.4-2-1.5-2a1.6,1.6,0,0,0-1.5,1.1,2.1,2.1,0,0,0-.1.7v5.4H18.5V20.1c0-1.2,0-2.2-.1-3H21v1.3h.1a3.4,3.4,0,0,1,2.9-1.5c1.9,0,3.4,1.3,3.4,4.1Z" style="fill: #fff"/></g></svg></a> \
          </div></div></div></b>';
			

			
			//Remove any old fullitem divs from the list.
      $(".all-posts .fullitem").remove();
      var totalmlitems = $(".all-posts a.rp").length;

			
			//console.log('ZI', responder.curZindex, 'finalposbeforeadd', finalpos);
			
			finalpos++;
			
			var moveitpos;
			var totavailableitems = $("a.rp.prime").length;
      
			switch(responder.curZindex){
				case 1:
				case 5:
				case 10:
					if(finalpos === 1){
						moveitpos = 3;
					} else if(finalpos === 2){
						moveitpos = 3;
					} else if(finalpos === 3){
						moveitpos = 3;
					} else {
						if(finalpos % 3 == 0){
							moveitpos = finalpos;
						} else if(finalpos % 3 == 2){
							moveitpos = finalpos+1;		
						} else {
							moveitpos = finalpos+2;
						}
					}
          if(moveitpos > totavailableitems){
            moveitpos = totavailableitems;
          }
          $(".all-posts > a.rp:nth-of-type("+moveitpos+")").after(result);
					break;
				case 20:
					//thumbObj.after(result);
					$(".all-posts > a.rp:nth-of-type("+finalpos+")").after(result);
					break;
			}
			
			console.log("moveitpos", moveitpos, 'finalpos', finalpos);

			
      $('html, body').animate({scrollTop: $(".all-posts .fullitem").offset().top - 100 }, 400, function(){
        if(media["videotype"] == 'Akamai Video'){
					hrbtic.amp.createPlayer(media["mlid"], 'https://'+media["akamai"], media["downloadlink"], media["thumbnail"], media["title"]);
				}
      });
    },
    pager:{
      enableHistory:false,
      visualpage:1,
      page:1,
      total:24,
      per:6,
      baseurl:'',
      more:function(){
        this.page += this.per;
        this.visualpage++;
        if(this.enableHistory){
          //window.history.pushState("Loaded More", "H&R Block | Tax Center | Category", this.baseurl+"page/"+this.visualpage);
        }
        hrbtic.hrbLoadArticles.processPage();
      }
    }
  },
  hrbLoadSupport:{
    scroll:false,
    target:false,
    data:[],
    init:function(enablePager, targetitem){
      //console.log("INIT");
      if(enablePager === undefined) {
        enablePager = false;
      }
      this.pager.enableHistory = enablePager;
      this.target = targetitem;
      if(enablePager){ 
        this.pager.baseurl = window.location.pathname;
      }
      this.pager.visualpage = 1;
      this.pager.page = 0;
      if(this.target.data('pagestart')){
        this.pager.page = this.target.data('pagestart');
      }
      this.pager.total = this.target.find("i.support-article").length;
      //If mobile, reduce paging.
      var curz = parseInt($("#responder").css('z-index'));
      if(curz === 20){
        this.pager.per = 3;
      }
      //if(this.target.data('total') <= this.pager.per){
        //this.loadNoMore();
      //}

      this.processPage();
      
    },
    processPage:function(){
      //$("a.reformlink").stop(true, true);
      var page1 = this.pager.page;
      var timestep = 1;
      var nextpage;
      var fadedelay = 200;
      var fadeadd = 100;
      
      if(page1 == 0){
        fadedelay = 0;
        fadeadd = 0;
      }
      
      console.log("Processing Support Posts...", this.target.find("i.support-article").length + " posts.");
      for(var ii=0;ii < this.pager.per;ii++){
        nextpage = page1+ii;
        console.log(nextpage);
        this.target.find("i.support-article:eq("+nextpage+")").delay(timestep).fadeIn(fadedelay);
        timestep += fadeadd;
        
      }
      if((this.pager.page + this.pager.per) >= this.pager.total){
        this.loadMoreButton.done(this);
      }
    },
    loadMoreButton:{
      done:function(){
        console.log("DONE");
        $("a.button-show-more-questions").removeClass("loading").addClass("all-done");
        setTimeout(function(){
          $(".support-show-more").slideUp(400);
        }, 600);
      }
    },
    pager:{
      enableHistory:false,
      visualpage:1,
      page:1,
      total:24,
      per:6,
      baseurl:'',
      more:function(){
        this.page += this.per;
        this.visualpage++;
        if(this.enableHistory){
          //window.history.pushState("Loaded More", "H&R Block | Tax Center | Category", this.baseurl+"page/"+this.visualpage);
        }
        hrbtic.hrbLoadSupport.processPage();
      }
    }
  },
  amp:{
    player:null,
    config : {
      autoplay:false,
      paths:{
        player:'',
        resources:'',
        plugins:''
      },
      media : {
        autoplay : false,
        title : '',
        poster : '',
        source : []
      },
      plugins: {
        downloader:{
          data:{
            type:"video/mp4",
          },
          resources: []
        }
      }
    },
    destroyPlayer:function(){
      if (this.player != null){
        this.player.destroy();
        this.player = null;
      }
    },
    createPlayer:function(id, source, sourcemp4, poster, videotitle){
      this.destroyPlayer();
      if(source !== '' && poster !== ''){
        this.config.media.autoplay = false;
        this.config.media.title = videotitle;
        this.config.media.poster = poster;
        this.config.media.source = [];
        this.config.media.source.push({
          src : source,
          type : 'application/x-mpegURL'
        });
        this.config.media.source.push({
          src : sourcemp4,
          type : 'video/mp4'
        });
        this.player = akamai.amp.AMP.create("akamai_video_"+id, this.config);
      }
    },
    createPlayerAuto:function(id, source, sourcemp4, poster, videotitle){
      this.destroyPlayer();
      if(source !== '' && poster !== ''){
        this.config.media.autoplay = true;
        this.config.media.title = videotitle;
        this.config.media.poster = poster;
        this.config.media.source = [];
        this.config.media.source.push({
          src : source,
          type : 'application/x-mpegURL'
        });
        this.config.media.source.push({
          src : sourcemp4,
          type : 'video/mp4'
        });
        this.player = akamai.amp.AMP.create("akamai_video_"+id, this.config);
      }
    }
  },
  sticky:{
    socialIcons:function(){

    }
  },
  throttle:function(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    };
  }
};


var responder = {
	isopen:false,
	curZindex:1,
	init:function(){
    $(window).resize(function(){ responder.resized(); });
    window.onorientationchange = function (event){ responder.resized(); }
  },
  resizeCallbacks:[function(){ responder.setFrameWidths(); }],
	resized:function(){
		var thisobj = this;
		if(thisobj.resizeCallbacks.length > 0){
			for(var i=0; i < thisobj.resizeCallbacks.length; i++){
				try {
					responder.resizeCallbacks[i]();
				}
				catch(err){
					console.log('Function does not exist');
				}
			}
		}
	},
	setFrameWidths:function(){
		var curzindex = parseInt($("#responder").css('z-index'));
		this.curZindex = curzindex;
	},
};

jQuery(window).resize(function(){ responder.resized(); });
window.onorientationchange = function (event){ responder.resized(); }
jQuery(window).scroll(function (event) {
	if($('.article-share').length>0){
    var winScroll = $(window).scrollTop();
		var articleHeight = $('.article-body .inner').height();
		if(winScroll+160>=articleHeight){
			$('.article-share').addClass('fixed_share');
		}else{
			$('.article-share').removeClass('fixed_share');
		}
	}
});
jQuery(document)
.ready(function(){
	responder.init();
  responder.setFrameWidths();
	setTimeout(function(){ responder.setFrameWidths(); }, 1000);
  $("body").addClass("section-general");
  hrbtic.loaded = true;
  
  // form-checker
  $(".wpcf7-form").each(function() {
    // remove tax-center in dev environments
    var browser_url = window.location.href.toLowerCase();
    var url=$(this).attr("action");
    var searchString = "//www.hrblock.com/tax-center/";
    if (browser_url.indexOf(searchString) == -1){
      $(this).attr("action", url.replace("/tax-center", ""));
    }
  });

  if($('main').is('.cat') || $('body').is('.post-type-archive-newsroom') || $('body').is('.category')){
    hrbtic.hrbLoadArticles.init(true, $(".all-posts"));
  }
  if($('body').is('.page-id-6')){
		hrbtic.hrbLoadArticles.init(true, $(".all-posts"));
  }
  if($('body').is('.post-type-archive-newsroom') || $('body').is('.post-type-archive')){
    hrbtic.hrbLoadArticles.init(true, $(".all-posts"));
  }
  if($('body').is('.post-type-archive-support') || $('body').is('.tax-topic')){
    hrbtic.hrbLoadSupport.init(true, $(".support-articles_container"));
  }
  
  if($('body').is('.post-template-default')){
    hrbtic.relatedTopics.pager.init();
    responder.resizeCallbacks.push(function(){ hrbtic.relatedTopics.pager.init(); });
  }
  if($('body').is('.page-alltopics')){
    $(".parentcat .c2").find("a.catbox:nth-of-type(odd)").not("a.catbox:nth-of-type(1)").before("<span></span>");
  }
  if($('body').is('.page-template-page-all-articles') || $('body').is('.page-template-page-newsroom-archive')){
    $("#devalert").html("Loading All Articles...").show();
    hrbtic.allPosts.grabCats();
  }

  if($('body').is('.page-template-page-all-in-the-news-php')){
    $("#devalert").html("Loading All In The News Items...").show();
    hrbtic.inTheNews.grabCats();
  }
  if($('body').is('.tag')){
    $("#devalert").html("Loading Resources...").show();
    hrbtic.tagTopic.grabCats();
  }
  
  if($('body').is('.post-type-archive-media-library')){
    $("#devalert").html("Loading Media Library...").show();
    hrbtic.mediaLibrary.grabCats();
  }
  if($('body').is('.post-type-archive-newsroom')){
    //hrbtic.featuredVideos.pager.init();
  }
  if($('body').is('.single-media-kit')){
    //hrbtic.featuredVideos.pager.init();
    //hrbtic.imageAssets.pager.init();
    hrbtic.hrbLoadArticles.init(true, $(".all-posts"));
    $(".theposts.pagable").each(function(){
      hrbtic.postPager.init($(this));
    });
    responder.resizeCallbacks.push(function(){
      $(".theposts.pagable").each(function(){
        hrbtic.postPager.init($(this));
      });
    });
  }
  if($('body').is('.page-template-page-tax-reform')){
    hrbtic.hrbLoadMore.init();
    setTimeout(function(){ hrbtic.hrbLoadMore.pager.per = 6; }, 400);
  }
  if($('body').is(".page-template-page-newsroom-board")){
    $(".people-b").addClass("on");
  }
  if($('body').is(".page-template-page-newsroom-executives")){
    $(".people-e").addClass("on");
  }
  if($('body').is(".page-template-page-newsroom-founders")){
    $(".people-f").addClass("on");
  }
  if($('body').is('.page-template-page-newsroom-contact')){
    /*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
    */
    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
    $(".required_phone").mask("(999) 999-9999");
  }
})
.on("submit", "#taxcenter_header_search", function(e){
  e.preventDefault();
  hrbtic.headerSearch.trySearch();
})
.on("click", "#taxcenter_header_search a.gosearch", function(e){
  e.preventDefault();
  hrbtic.headerSearch.trySearch();
})
.on("click", ".recentposts_box .navbar a", function(e){
  e.preventDefault();
  if(!$(this).hasClass("dim")){
    switch($(this).data("direction")){
      case "up":
        hrbtic.recentPosts.pager.up();
        break;
      case "down":
        hrbtic.recentPosts.pager.down();
        break;
    }
  }
})
.on("click", ".all_articles.media-library .filterbox.media-type a.filter", function(e){
  e.preventDefault();
  $(this).toggleClass("on");
  if($(this).is(".all")){
    $(".all_articles.media-library .filterbox.media-type a.filter.second").removeClass("on");
    hrbtic.mediaLibrary.mediaTypes = ["video", "images", "audio", "logo", "document"];
  } else if ($(this).is(".second")){
    $(".all_articles.media-library .filterbox.media-type a.filter.all").removeClass("on");
    hrbtic.mediaLibrary.mediaTypes = [];
    $(".all_articles.media-library .filterbox.media-type a.filter.second.on").each(function(){
      hrbtic.mediaLibrary.mediaTypes.push($(this).data("mtype"));
    });
  }
  hrbtic.mediaLibrary.pager.page = 1;
  hrbtic.mediaLibrary.grabCats();
})
.on("click", ".all_articles.media-library .filterbox.topics a.filter", function(e){
  e.preventDefault();
  var catid = $(this).data("topicid");
  $(this).toggleClass("on");
  if(catid > 0){
    if($(this).hasClass("topfilter")){
      if($(this).hasClass("on")){
        //Remove all top filter selections.
        $(".all_articles.media-library .filterbox.topics a.filter.topfilter").removeClass("on");
        //Close any previously opened menus and remove selections.
        $(".all_articles.media-library .filterbox.topics .sub.on").find("a").removeClass("on");
        $(".all_articles.media-library .filterbox.topics .sub.on").stop(true, true).slideUp(400).removeClass("on");
        //Turn this particular item on.
        $(this).addClass("on");
        //Slide down the sub for this item.
        $(".sub_"+catid).stop(true, true).slideDown(400).addClass("on");
        $(".sub_"+catid).find("a.filter").addClass("on");
      } else {
        $(".sub_"+catid).stop(true, true).slideUp(400).removeClass("on");
        $(".sub_"+catid).find("a").removeClass("on");
      }
    } else if($(this).hasClass("subfilter")){
    }
    hrbtic.mediaLibrary.pager.page = 1;
  }


  hrbtic.mediaLibrary.mediaTopics = [];
  hrbtic.mediaLibrary.mediaTopicsOmits = [];
  $(".filterbox.topics a.filter").each(function(){
    var catid = parseInt($(this).data("topicid"));
    if($(this).hasClass("on")){
      hrbtic.mediaLibrary.mediaTopics.push(catid);
    }
    if($(this).hasClass("subfilter") && !$(this).hasClass("on") && $(this).parents(".sub").hasClass("on")){
      hrbtic.mediaLibrary.mediaTopicsOmits.push(catid);
    }
  });
  $("#results_articles a.filtertoggle span").text("Filter ("+hrbtic.mediaLibrary.mediaTopics.length+")");
  hrbtic.mediaLibrary.grabCats();
})
.on("click", ".all_articles.media-library a.filtertoggle", function(e){
  e.preventDefault();
  $(".all_articles").toggleClass("showfilters");
})
.on("click", ".all_articles.media-library .filterbox.date-added a.filter", function(e){
  e.preventDefault();
  $(".all_articles.media-library .filterbox.date-added a.filter").removeClass("on");
  $(this).addClass("on");
  hrbtic.mediaLibrary.pager.page = 1;
  hrbtic.mediaLibrary.sortDirection = $(this).data("dir");
  hrbtic.mediaLibrary.grabCats();
})
.on("click", ".all_articles.media-library .navbar a", function(e){
  e.preventDefault();
  switch($(this).data("direction")){
    case "left":
      hrbtic.mediaLibrary.pager.left();
      break;
    case "right":
      hrbtic.mediaLibrary.pager.right();
      break;
  }
})
.on("click", ".all_articles.media-library a.action_reset", function(e){
  e.preventDefault();
  hrbtic.mediaLibrary.reset();
})
.on("click", ".all_articles.media-library a.clear_search", function(e){
  e.preventDefault();
  hrbtic.mediaLibrary.reset();
})
.on("click", "a.mlitem", function(e){
  e.preventDefault();
  if($(this).hasClass("on")){
    $("a.mlitem").removeClass("on");
    $(".results .fullitem").remove();
  } else {
    $("a.mlitem").removeClass("on");
    $(this).addClass("on");
    var thisMediaID = $(this).data("mlid");
    hrbtic.mediaLibrary.showSingle(thisMediaID, $(this).index("a.mlitem"));
  }
})
.on("click", ".fullitem a.share", function(e){
  e.preventDefault();
  $(".medialibrary-share").addClass("show");
})
.on("click", ".fullitem a.close", function(e){
  e.preventDefault();
  $("a.mlitem").removeClass("on");
  $(".results .fullitem").remove();
})
.on("click", "a.video-for-view", function(e){
  e.preventDefault();
	//alert("This will display a modal for display of video.");
  $("a.video-for-view").removeClass("on");
  $(this).addClass("on");
  //var thisMediaID = $(this).data("mlid");
	console.log($(this).data("mlid"), $(this).index("a.rp"));
  hrbtic.hrbLoadArticles.showMedia($(this), $(this).index("a.rp"));
})
.on("click", ".fullitem.nr a.close", function(e){
  e.preventDefault();
  $("a.rp").removeClass("on");
  $(".fullitem.nr").remove();
})
.on("click", ".nr-m-drop", function(e){
	e.preventDefault();
	$(this).parents(".nr-collapse").toggleClass("open");
	var thisparent = $(this).parents(".nr-collapse");
	$('html, body').animate({scrollTop: thisparent.offset().top - 80 }, 200);
})
.on("click", ".all_articles.in-the-news a.filter", function(e){
  e.preventDefault();
  hrbtic.inTheNews.pager.page = 1;
  if($(this).is(".on")){
    $(".all_articles.in-the-news a.filter").removeClass("on");
    hrbtic.inTheNews.filterYears = 0;
    hrbtic.inTheNews.year = 0;
  } else {
    $(".all_articles.in-the-news a.filter").removeClass("on");
    $(this).addClass("on");
     hrbtic.inTheNews.year = parseInt($(this).data("year"));
  }
  hrbtic.inTheNews.grabCats();
})
.on("click", ".all_articles.in-the-news a.filtertoggle", function(e){
  e.preventDefault();
  $(".all_articles").toggleClass("showfilters");
})
.on("click", ".all_articles.in-the-news a.action_reset", function(e){
  e.preventDefault();
  hrbtic.inTheNews.year = 0;
  $(".all_articles.in-the-news a.filter").removeClass("on");
  hrbtic.inTheNews.grabCats();
})
.on("click", ".all_articles.trending-topic a.filter", function(e){
  e.preventDefault();
  hrbtic.tagTopic.pager.page = 1;
  if($(this).is(".on")){
    $(".all_articles.trending-topic a.filter").removeClass("on");
    hrbtic.tagTopic.filterYears = 0;
    hrbtic.tagTopic.year = 0;
  } else {
    $(".all_articles.trending-topic a.filter").removeClass("on");
    $(this).addClass("on");
    hrbtic.tagTopic.year = parseInt($(this).data("year"));
  }
  hrbtic.tagTopic.grabCats();
})
.on("click", ".all_articles.trending-topic a.filtertoggle", function(e){
  e.preventDefault();
  $(".all_articles").toggleClass("showfilters");
})
.on("click", ".all_articles.trending-topic a.action_reset", function(e){
  e.preventDefault();
  hrbtic.tagTopic.year = 0;
  $(".all_articles.trending-topic a.filter").removeClass("on");
  hrbtic.tagTopic.grabCats();
})
.on("click", ".all_articles.ticglobal .filterbox.topics a.filter", function(e){
  e.preventDefault();
  var catid = $(this).data("topicid");
  $(this).toggleClass("on");
  if(catid > 0){
    if($(this).hasClass("topfilter")){
      if($(this).hasClass("on")){
        //Remove all top filter selections.
        $(".all_articles.ticglobal .filterbox.topics a.filter.topfilter").removeClass("on");
        //Close any previously opened menus and remove selections.
        $(".all_articles.ticglobal .filterbox.topics .sub.on").find("a").removeClass("on");
        $(".all_articles.ticglobal .filterbox.topics .sub.on").stop(true, true).slideUp(400).removeClass("on");
        //Turn this particular item on.
        $(this).addClass("on");
        //Slide down the sub for this item.
        $(".sub_"+catid).stop(true, true).slideDown(400).addClass("on");
        //$(".sub_"+catid).find("a.filter").addClass("on");
      } else {
        $(".sub_"+catid).stop(true, true).slideUp(400).removeClass("on");
        $(".sub_"+catid).find("a").removeClass("on");
      }
    } else if($(this).hasClass("subfilter")){
    }
    hrbtic.allPosts.pager.page = 1;
  }
  hrbtic.allPosts.grabCats();
})
.on("click", ".all_articles.ticglobal a.filtertoggle", function(e){
  e.preventDefault();
  $(".all_articles").toggleClass("showfilters");
})
.on("click", ".all_articles.ticglobal .filterbox.years a.filter", function(e){
  e.preventDefault();
  $(this).toggleClass("on");
  if($(".all_articles.ticglobal .filterbox.years a.filter.on").length > 0){
    hrbtic.allPosts.filterYears = [];
    $(".all_articles.ticglobal .filterbox.years a.filter.on").each(function(){
      hrbtic.allPosts.filterYears.push($(this).data("year"));
    });
  } else {
    hrbtic.allPosts.filterYears = [];
    $(".all_articles.ticglobal .filterbox.years a.filter").each(function(){
      hrbtic.allPosts.filterYears.push($(this).data("year"));
    });
  }
  hrbtic.allPosts.pager.page = 1;
  hrbtic.allPosts.grabCats();
})
.on("click", ".all_articles.ticglobal .filterbox.quotes a.filter", function(e){
  e.preventDefault();
  $(this).toggleClass("on");
  if($(".all_articles.ticglobal .filterbox.quotes a.filter.on").length > 0){
    hrbtic.allPosts.filterQuotes = [];
    $(".all_articles.ticglobal .filterbox.quotes a.filter.on").each(function(){
      hrbtic.allPosts.filterQuotes.push($(this).data("quote"));
    });
  } else {
    hrbtic.allPosts.filterQuotes = [];
  }
  hrbtic.allPosts.pager.page = 1;
  hrbtic.allPosts.grabCats();
})
.on("click", ".all_articles.ticglobal .filterbox.types a.filter", function(e){
  e.preventDefault();
  $(this).toggleClass("on");
  if($(".all_articles.ticglobal .filterbox.types a.filter.on").length > 0){
    hrbtic.allPosts.filterTypes = [];
    $(".all_articles.ticglobal .filterbox.types a.filter.on").each(function(){
      hrbtic.allPosts.filterTypes.push($(this).data("type"));
    });
  } else {
    hrbtic.allPosts.filterTypes = [];
  }
  hrbtic.allPosts.pager.page = 1;
  hrbtic.allPosts.grabCats();
})
.on("click", ".all_articles.ticglobal .filterbox.authors a.filter", function(e){
  e.preventDefault();
  $(this).toggleClass("on");
  if($(".all_articles.ticglobal .filterbox.authors a.filter.on").length > 0){
    hrbtic.allPosts.filterAuthors = [];
    $(".all_articles.ticglobal .filterbox.authors a.filter.on").each(function(){
      hrbtic.allPosts.filterAuthors.push($(this).data("author"));
    });
  } else {
    hrbtic.allPosts.filterAuthors = [];
  }
  hrbtic.allPosts.pager.page = 1;
  hrbtic.allPosts.grabCats();
})
.on("click", ".all_articles.ticglobal .filterbox.date-added a.filter", function(e){
  e.preventDefault();
  $(".all_articles.ticglobal .filterbox.date-added a.filter").removeClass("on");
  $(this).addClass("on");
  hrbtic.allPosts.sortDirection = $(this).data("dir");
  hrbtic.allPosts.grabCats();
})
.on("click", ".all_articles.ticglobal  a.action_reset", function(e){
  e.preventDefault();
  $(".all_articles.ticglobal a.filter").removeClass("on");
  $(".all_articles.ticglobal .filterbox.topics .sub.on").find("a").removeClass("on");
  $(".all_articles.ticglobal .filterbox.topics .sub.on").stop(true, true).slideUp(400).removeClass("on");
  if($("body").is(".page-template-page-newsroom-archive")){
    hrbtic.allPosts.filterYears = [];
    $(".all_articles.ticglobal .filterbox.years a.filter").each(function(){
      hrbtic.allPosts.filterYears.push($(this).data("year"));
    });
    hrbtic.allPosts.filterAuthors = [];
    hrbtic.allPosts.filterTypes = [];
    hrbtic.allPosts.filterQuotes = [];
  }
  hrbtic.allPosts.grabCats();
})
.on("click", ".all_articles.ticglobal a.clear_search", function(e){
  e.preventDefault();
  $("#top_search_q").val('');
  hrbtic.allPosts.q = '*';
  hrbtic.allPosts.grabCats();
})
.on("click", ".action-filterbox-toggle", function(e){
  e.preventDefault();
  $(this).parents(".filterbox").toggleClass("closed").find(".filterbox-selections").stop(true, true).slideToggle();
})
.on("click", ".article-openmedia", function(e){
  e.preventDefault();
  hrbtic.infographic.open($(this));
})
.on("click", ".article-openmedia.open", function(e){
  e.preventDefault();
  hrbtic.infographic.close($(this));
})
.on("click", ".newsroom-hp-videos .navbar a", function(e){
  e.preventDefault();
  switch($(this).data("direction")){
    case "left":
      hrbtic.featuredVideos.pager.left();
      break;
    case "right":
      hrbtic.featuredVideos.pager.right();
      break;
  }
})
.on("click", ".article-relatedtopics .navbar a", function(e){
  e.preventDefault();
  if(!$(this).hasClass("dim")){
    switch($(this).data("direction")){
      case "left":
        hrbtic.relatedTopics.pager.left();
        break;
      case "right":
        hrbtic.relatedTopics.pager.right();
        break;
    }
  }
})
.on("click", ".all_articles.ticglobal .navbar a", function(e){
  e.preventDefault();
  switch($(this).data("direction")){
    case "left":
      hrbtic.allPosts.pager.left();
      break;
    case "right":
      hrbtic.allPosts.pager.right();
      break;
  }
})
.on("click", ".all_articles.in-the-news .navbar a", function(e){
  e.preventDefault();
  switch($(this).data("direction")){
    case "left":
      hrbtic.inTheNews.pager.left();
      break;
    case "right":
      hrbtic.inTheNews.pager.right();
      break;
  }
})
.on("click", ".all_articles.trending-topic .navbar a", function(e){
  e.preventDefault();
  switch($(this).data("direction")){
    case "left":
      hrbtic.inTheNews.pager.left();
      break;
    case "right":
      hrbtic.inTheNews.pager.right();
      break;
  }
})
.on("click", ".mediakit-more.featured_media_images .navbar a", function(e){
  e.preventDefault();
  console.log("mk", "mediaimages", $(this).data("direction"))
  switch($(this).data("direction")){
    case "up":
      hrbtic.imageAssets.pager.left();
      break;
    case "down":
      hrbtic.imageAssets.pager.right();
      break;
  }
})
.on("click", ".mediakit-itembox.pagablebox .navbar a", function(e){
  e.preventDefault();
  //console.log("mk", "navclick", $(this).data("direction"))
  var targetitems = $(this).parents(".mediakit-itembox.pagablebox").find(".theposts.pagable");
  var direction = $(this).data("direction");
  
  if(!$(this).hasClass("off")){
    hrbtic.postPager.changePage(targetitems, direction);
  }
  
  //hrbtic.postPager.up(targetitems);
  
  /*
  switch($(this).data("direction")){
    case "right":
      //hrbtic.postPager.up(targetitems);
      break;
    case "left":
      //hrbtic.postPager.down(targetitems);
      break;
  }
  */
})
.on("click", ".alltopic-jump", function(e){
  e.preventDefault();
  var jumpid = $(this).data("jumpid");
  $('html, body').animate({scrollTop: $("#parentcat_"+jumpid).offset().top - 80 }, 400);
})
.on("click", ".downloadable-assets h2", function(e){
  $(".downloadable-assets").toggleClass("open");
})
.on("click", ".team_member a.expand", function(e){
  e.preventDefault();
  $(this).toggleClass("open");
  var oldswap = $(this).text();
  $(this).text($(this).data("swap"));
  $(this).data("swap", oldswap);
  $(this).parents(".team_member").find(".ellipse").toggleClass("open");
})
.on("click", ".team_member a.founder_learnmore", function(e){
  e.preventDefault();
  if($(this).parents(".team_member").hasClass("hidef")){
    $(".team_member").addClass("hidef");
    $(this).parents(".team_member").removeClass("hidef");
  } else {
    $(".team_member").addClass("hidef");
  }
  $('html, body').animate({scrollTop: $(this).parents(".team_member").offset().top - 100 }, 400);
})
.on("click", ".team_member a.founder_learnless", function(e){
  e.preventDefault();
  $(".team_member").addClass("hidef");
  //$(this).parents(".team_member").removeClass("hidef");
  $('html, body').animate({scrollTop: $(".newsroom-hp-main.founders").offset().top - 100 }, 400);
})
.on("click", ".executives-links.jumps a.link", function(e){
  e.preventDefault();
  $(".founder_profile").hide();
  $("#founder_"+$(this).data("founderid")).show();
})
.on("click", "a.tr-showvideo", function(e){
  e.preventDefault();
  //console.log('hi');
  var videourl = $(this).find(".akamai_video_box").data("akamized");
  var videocaption = $(this).find(".akamai_video_box").data("videocaption");
  var videothumb = $(this).find(".akamai_video_box").data("thumb");
  if(videourl != ''){
    hrbtic.amp.createPlayerAuto(724845, videourl, '', videothumb, videocaption);
    $(this).removeClass("tr-showvideo");
  }
})
.on("click", "a.lm-loadmore", function(e){
  e.preventDefault();
  if(!$(this).hasClass("dim")){
    hrbtic.hrbLoadMore.pager.more();
  }
})
.on("click", "a.do-load-more", function(e){
  if(!$(this).hasClass("dim")){
    e.preventDefault();
    hrbtic.hrbLoadArticles.pager.more();
  }
})
.on("click", "aside .subsnav a", function(e){
  e.stopPropagation();
})
.on("click", ".atn-filters .subsnav a", function(e){
  e.stopPropagation();
})
.on("click", "aside .subsnav h4", function(e){
  e.preventDefault();
  $(this).parents(".subsnav").toggleClass("open");
})
.on("mouseleave", "aside .subsnav", function(e){
  $(this).removeClass("open");
})
.on("click", ".atn-filters .subsnav h4", function(e){
  e.preventDefault();
  $(this).parents(".subsnav").toggleClass("open");
})
.on("mouseleave", ".atn-filters .subsnav", function(e){
  $(this).removeClass("open");
})
.on("click", ".atn-filter-issue", function(e){
  e.preventDefault();
  console.log("Issue Filter", $(this).data("filter"));
  hrbtic.hrbLoadArticles.filters.atn.issue = $(this).data("filter");
  hrbtic.hrbLoadArticles.refilter();
  $(this).parents(".subsnav").removeClass("open");
  $(this).parents(".subsnav").find("h4 span").text("IRS issue: "+$(this).text());
})
.on("click", ".atn-filter-type", function(e){
  e.preventDefault();
  console.log("Type Filter", $(this).data("filter"));
  hrbtic.hrbLoadArticles.filters.atn.type = $(this).data("filter");
  hrbtic.hrbLoadArticles.refilter();
  $(this).parents(".subsnav").removeClass("open");
  $(this).parents(".subsnav").find("h4 span").text("Post type: "+$(this).text());
})
.on("click", ".button-show-more-questions", function(e){
  e.preventDefault();
  if(!$(this).hasClass("all-done")){
    $(this).addClass("loading");
    var thisbutton = $(this);
    setTimeout(
      function(){
        thisbutton.removeClass("loading");
        hrbtic.hrbLoadSupport.pager.more();
    }, 1000);
  }
})
.on("keypress", "#fileonline_zipcodeinput", function(e){
  if ((e.which >= 48 && e.which <= 57) || e.which === 8) {
    //Backspace or 0-9
  } else {
    e.preventDefault();
  }
})
.on("click", ".action_findanoffice", function(e){
  e.preventDefault();
  if($("#fileonline_zipcodeinput").val().length != 5){
    alert("Please enter only 5 digits for a zip code.")
  } else {
    window.open("https://www.hrblock.com/tax-offices/local-offices/#!/en/office-list/"+$("input[name=homepagezip]").val(), "_self");
  }
})
.on("click", ".cta_newsroom", function(e){
  $('html, body').animate({scrollTop: $(".footer_newsroomdigest").offset().top - 100 }, 400);
})
.on("blur", ".required_name", function(e){
  var arr = [8,9,16,17,20,35,36,37,38,39,40,45,46];
  for(var i = 65; i <= 90; i++){
    arr.push(i);
  }
  if(jQuery.inArray(e.which, arr) === -1){
    e.preventDefault();
  }
})
.on("input", ".required_name", function(e){
  var regexp = /[^a-zA-Z]/g;
  if($(this).val().match(regexp)){
    $(this).val($(this).val().replace(regexp,'') );
  }
})
.on("click", ".action_salesinfo", function(e){
  e.preventDefault();
  $("#salesinfo_more").slideToggle("400", function(){
    $('html, body').animate({scrollTop: $("#salesinfo_more").offset().top - 120 }, 400);
  });
})
.on("wpcf7submit", "#wpcf7-f21425-o1", function(){
  _satellite.track('newsroom_lead_submission');
  alert('Thank you for filling out our contact form.')
})
.on("wpcf7submit", "#wpcf7-f21603-o1", function(){
  //Footer form.
  _satellite.track('newsroom_opt_in');
})
;
