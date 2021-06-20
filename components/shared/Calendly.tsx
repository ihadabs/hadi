import { useEffect } from 'react';

export default function CalendlyButton() {
	useEffect(() => {
		const head = document.querySelector('head');

		const link = document.createElement('link');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', 'https://assets.calendly.com/assets/external/widget.css');
		head?.appendChild(link);

		const script = document.createElement('script');
		script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
		head?.appendChild(script);
	}, []);

	function openCalendly() {
		// @ts-ignore
		Calendly.initPopupWidget({ url: 'https://calendly.com/hadialbinsaad/consulting?hide_landing_page_details=1&hide_gdpr_banner=1' });
	}

	return (
		<div className="hoverable clickable" onClick={openCalendly}>احجز الآن ⏳</div>
	);
};

// {/*<div*/
// }
// {/*	className="calendly-inline-widget"*/
// }
// {/*	data-url="https://calendly.com/hadialbinsaad/consulting?hide_landing_page_details=1&hide_gdpr_banner=1"*/
// }
// {/*	style={{ minWidth: '300px', width: '100%', maxWidth: '800px', height: '900px' }}*/
// }
// {/*/>*/
// }
