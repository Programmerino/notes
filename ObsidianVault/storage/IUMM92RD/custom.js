jQuery(document).ready(function($) {
	if(window.location.hash && window.location.hash == '#about') {
	} else {
	jQuery("#menu-main").find(".current-menu-item").removeClass('current-menu-item');
	}
	var splitterArr = new Array();
	$splitterList = $('ul.splitter');

	//Create array of all splitter in lists
	$splitterList.find('li').each(function(){
		splitterArr.push($(this).html());
	})

	//Split the array at this point. The original array is altered.
	var firstList = splitterArr.splice(0, Math.round(splitterArr.length / 2)),
	secondList = splitterArr;
	ListHTML = '';

	function createHTML(list){
		ListHTML = '';
		for (var i = 0; i < list.length; i++) {
			ListHTML += '<li>' + list[i] + '</li>'
		};
	}

	//Generate HTML for first list
	createHTML(firstList);
	$splitterList.html(ListHTML);

	//Generate HTML for second list
	createHTML(secondList);
	//Create new list after original one
	$splitterList.after('<ul class="splitter"></ul>').next().html(ListHTML);

	function scrollToAnchor(aid){
		var aTag = jQuery("#"+ aid);
		jQuery('html,body').animate({scrollTop: aTag.offset().top-100},'slow');
	}
	if (jQuery('.home').length){
		setTimeout(function(){ 
		//	scrollToAnchor('about');
		}, 1800);
	}
});