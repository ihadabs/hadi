const locales = ['ar', 'en'];
/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.SITE_URL || 'https://hadi.gg',
	generateRobotsTxt: true,
	exclude: ['*/500*', '*/404*'],
	additionalPaths: async (config) => {
		const result = [];

		result.push({
			loc: '/cv.pdf',
			changefreq: 'daily',
			priority: 0.7,
			lastmod: new Date().toISOString(),
		});
		result.push({
			loc: '/avatar.png',
			changefreq: 'daily',
			priority: 0.7,
			lastmod: new Date().toISOString(),
		});

		return result;
	},
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
	transform: async (config, path) => {
		return {
			loc: path,
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs:
				config.alternateRefs.map((alternate) => {
					let url = (alternate.href + path).replace('ar/en', 'ar').replace('en/en', 'en');

					// remove trailing slash
					if (url.endsWith('/')) {
						url = url.slice(0, -1);
					}
					//  Only fix alternateRefs if path has a locale
					return {
						...alternate,
						// Note: concat original alternate with  '/en-US/my-page' => my-page
						href: url,
						hrefIsAbsolute: true,
					};
				}) ?? [],
		};
	},
};
