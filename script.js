//your JS code here. If required.
function updateWindowSize() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	document.getElementById('windowSize').textContent = `Width: ${width} and Height: ${height}`;
}

updateWindowSize();

window.addEventListener('resize', updateWindowSize);