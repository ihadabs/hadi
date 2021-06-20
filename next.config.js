const path = require('path');
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
	reactStrictMode: true,
	sassOptions: {
		includePaths: [
			path.join(__dirname, 'styles'),
			path.join(__dirname, 'components')
		],
	},
});

