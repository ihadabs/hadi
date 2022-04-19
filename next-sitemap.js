module.exports = {
	siteUrl: process.env.SITE_URL || 'https://hadi.gg',
	generateRobotsTxt: true,
	exclude: ['/ar*', '/en*', '/500*', '/404*'],
	alternateRefs: [
		{
			href: 'https://hadi.gg/ar',
			hreflang: 'ar',
		},
		{
			href: 'https://hadi.gg/en',
			hreflang: 'en',
		},
	],
};
