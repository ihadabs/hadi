import { useEffect } from 'react';

// export default function Calendly() {
// 	return (
// 		<div style={{ height: '800px', width: '100%' }}>
// 			<iframe className="calendly-inline-widget"
// 					data-url="https://calendly.com/hadialbinsaad/consulting?hide_landing_page_details=1&hide_gdpr_banner=1"
// 					width="100%"
// 					height="100%"
// 					frameBorder="0"/>
// 		</div>
// 	);
// }

const Calendly = () => {
	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute(
			'src',
			'https://assets.calendly.com/assets/external/widget.js'
		);
		head?.appendChild(script);
	}, []);

	return (
		<div
			className="calendly-inline-widget"
			data-url="https://calendly.com/hadialbinsaad/consulting?hide_landing_page_details=1&hide_gdpr_banner=1"
			style={{ minWidth: '300px', width: '100%', maxWidth: '800px', height: '900px' }}
		/>
	);
};

export default Calendly;
