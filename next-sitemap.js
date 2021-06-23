module.exports = {
	siteUrl: process.env.SITE_URL || 'https://hadialbinsaad.com',
	generateRobotsTxt: true,
	exclude: ['/ar*', '/en*'],
	alternateRefs: [
		{
			href: 'https://hadialbinsaad.com/ar',
			hreflang: 'ar',
		},
		{
			href: 'https://hadialbinsaad.com/en',
			hreflang: 'en',
		},
	]
};
