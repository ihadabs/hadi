import { IMeta } from '../components/core/Meta';
import Page from '../components/shared/Page';
import Section from '../components/shared/Section';

const consultingMeta: IMeta = {
	title: 'هادي | استشارة تقنية  📡',
	description: 'ودك تبدأ مشروع تقني ومو عارف وش تسوي؟ خذ لك استشارة تقنية من هادي 🚀! ',
	keywords: ['Hadi', 'هادي', 'Tech', 'Consulting', 'استشارة', 'تقنية']
};

const subtitle = 'شغال على مشروع وفيه جانب تقني ودك تمسكه صح؟ عندك فكرة تطبيق او موقع وودك تبدأ فيها؟ طالب وودك تطور نفسك تقنيا؟ وصلت خير 😁. ببنجلس وبنناقش الوضع وإن شاء الله نطلع بحلول فعّالة لحالتك 🤝. ';
export default function Consulting() {
	return (
		<Page meta={consultingMeta} title="استشارة تقنية 📡" subtitle={subtitle}>
			<Section title="المتوقع من الاستشارة">
			</Section>

			<Section title="ملاحظات هامة">
			</Section>

			<Section title="معلومات الاستشارة">
			</Section>

			<Section title="للحجز 📅" subtitle="اختر اليوم والوقت اللي يناسبك وبإذن الله برد عليك في اقرب وقت 🤝.">

				<div className="calendly-inline-widget" data-url="https://calendly.com/hadialbinsaad?hide_gdpr_banner=1"
					 style={{ minWidth: '320px', height: '630px' }}/>
				<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async/>
			</Section>
		</Page>
	);
}
