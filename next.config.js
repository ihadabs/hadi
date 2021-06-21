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
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'Cache-Control',
						value: 's-maxage=1, stale-while-revalidate=2592000'
					}
				],
			},
		];
	},
});

