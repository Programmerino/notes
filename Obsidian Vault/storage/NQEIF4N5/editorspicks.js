/*	CarouFredSel: an infinite, circular jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.frebsite.nl
*/
$(window).load(function() {

$("#editorspickitems").carouFredSel({
	width: 900,
	height: "auto",
	items: {
		width: "variable",
		height: 170,
	},
	align: "center",
	scroll: 2000,
	auto: false,
	prev: "#prev_btn",
	next: "#next_btn"
});
});