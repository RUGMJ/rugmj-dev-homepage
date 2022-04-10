const main = document.querySelector('main');
for (let i = 0; i < main.children.length; i++) {
	const child = main.children[i];
	const colour = randomColor({
		luminosity: 'dark',
		hue: 'random',
	});
	console.log(colour);
	child.style.backgroundColor = colour;
}
