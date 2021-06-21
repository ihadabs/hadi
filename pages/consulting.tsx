import { IMeta } from 'components/core/Meta';
import Page from 'components/shared/Page';
import Section from 'components/shared/Section';
import Calendly from 'components/shared/Calendly';
import List from 'components/shared/List';

const consultingMeta: IMeta = {
	title: 'هادي | استشارة تقنية  📡',
	description: 'ودك تبدأ مشروع تقني ومو عارف وش تسوي؟ خذ لك استشارة تقنية من هادي 🚀! ',
	keywords: ['Hadi', 'هادي', 'Tech', 'Consulting', 'استشارة', 'تقنية', 'البن', 'سعد', 'Albinsaad']
};

const consultingQuestions: string[] = [
	'كيف أقدر اطور مشروعي مع شركة/شريك تقني؟',
	'كيف أتعلم الأساسيات عشان ابدأ مشروعي بنفسي؟',
	'كيف ابدأ تطوير مشروع من الصفر؟',
	'أنا طالب، حاسب/برمجيات وش أقدر اسوي وأنا ادرس في الجامعة؟',
];

const consultingInfo: string[] = [
	'<b>السعر:</b> 330 ريال سعودي أو 130 ريال سعودي للطلبة.',
	'<b>المكان:</b> عن بعد أو شخصيا في الحسا.',
	'<b>الدفع:</b> عن طريق stc pay.',
];

const subtitle = 'شغال على مشروع وفيه جانب تقني ودك تمسكه صح؟ عندك فكرة تطبيق او موقع وودك تبدأ فيها؟ طالب وودك تطور نفسك تقنيا؟ وصلت خير 😁. ببنجلس وبنناقش الوضع وإن شاء الله نطلع بحلول فعّالة لحالتك 🤝. ';

export default function Consulting() {
	return (
		<Page meta={consultingMeta} title="استشارة تقنية 📡" subtitle={subtitle}>
			<Section title="المتوقع من الاستشارة 📦" subtitle="بإذن الله رح أجاوب على تساؤلاتك، مثل:">
				<List items={consultingQuestions}/>
			</Section>

			<Section title="معلومات الاستشارة 🎛">
				<List items={consultingInfo}/>
			</Section>

			<Section title="للحجز 📅" subtitle="اضغط زر احجز الآن ثم اختر الوقت اللي يناسبك وبإذن الله يوصلك الرد خلال يوم أو أقل 🤝.">
				<Calendly/>
			</Section>
		</Page>
	);
}
