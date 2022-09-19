function toggleelexbox() {

	var elexboxRevealer = document.getElementById('elexboxunveil');

	var displaySetting = elexboxRevealer.style.height;

	var elexboxButton = document.getElementById('elexboxButton');

	if (displaySetting == '100%') {
		elexboxRevealer.style.height = '0px';
		elexboxRevealer.style.opacity = '0';
		elexboxRevealer.style.transition = 'height .25s ease-in-out, opacity .5s ease-in-out';
		elexboxButton.innerHTML = 'Show more<span class="arrowdown"></span>';
	}
	else {
		elexboxRevealer.style.height = '100%';
		elexboxRevealer.style.opacity = '1';
		elexboxRevealer.style.transition = 'height .25s ease-in-out, opacity .5s ease-in-out';
		elexboxButton.innerHTML = 'Close<span class="arrowup"></span>';
	}
}