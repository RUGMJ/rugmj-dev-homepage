const main = document.querySelector('main');
for (let i = 0; i < main.children.length; i++) {
	const child = main.children[i];
	const colour = randomColor({
		luminosity: 'random',
		hue: 'random',
	});
	child.style.color = contrast(colour);
	console.log(contrast(colour));
	child.style.backgroundColor = colour;
}

function rgbToYIQ({ r, g, b }) {
	return (r * 299 + g * 587 + b * 114) / 1000;
}

function hexToRgb(hex) {
	if (!hex || hex === undefined || hex === '') {
		return undefined;
	}

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: undefined;
}

function contrast(colorHex, threshold = 128) {
	if (colorHex === undefined) {
		return '#000';
	}

	const rgb = hexToRgb(colorHex);

	if (rgb === undefined) {
		return '#000';
	}

	return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}
