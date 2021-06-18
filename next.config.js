const path = require('path');

module.exports = {
	i18n: {
		locales: ['en', 'ar'],
		defaultLocale: 'ar',
		localeDetection: false,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
