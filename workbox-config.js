module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpeg,html,png,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};