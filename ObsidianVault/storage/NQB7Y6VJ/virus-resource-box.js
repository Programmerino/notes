function togglevirusbox() {

	var virusboxRevealer = document.getElementById('virusboxunveil');

	var displaySetting = virusboxRevealer.style.height;

	var virusboxButton = document.getElementById('virusboxButton');

	if (displaySetting == '100%') {
		virusboxRevealer.style.height = '0px';
		virusboxRevealer.style.opacity = '0';
		virusboxRevealer.style.transition = 'height .25s ease-in-out, opacity .5s ease-in-out';
		virusboxButton.innerHTML = 'Show more<span class="arrowdown"></span>';
	}
	else {
		virusboxRevealer.style.height = '100%';
		virusboxRevealer.style.opacity = '1';
		virusboxRevealer.style.transition = 'height .25s ease-in-out, opacity .5s ease-in-out';
		virusboxButton.innerHTML = 'Close<span class="arrowup"></span>';
	}
}