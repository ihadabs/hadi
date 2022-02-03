const path = require('path');
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
	reactStrictMode: true,
  	swcMinify: true,
	experimental: { optimizeCss: true },
	future: { strictPostcssConfiguration: true },
	webpack: (config, { dev, isServer }) => {
		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
		  Object.assign(config.resolve.alias, {
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat",
		  });
		}
	
		return config;
	  },
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
						value: 'public, s-maxage=1, stale-while-revalidate=2592000'
					}
				],
			},
		];
	},
});

