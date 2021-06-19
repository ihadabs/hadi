import { IMeta } from '../components/core/Meta';
import Page from '../components/shared/Page';

const consultingMeta: IMeta = {
	title: 'هادي | استشارة تقنية  📡',
	description: '',
	keywords: ['Hadi', 'هادي', 'Tech', 'Consulting', 'استشارة', 'تقنية']

};
export default function Consulting() {
	return (
		<Page meta={consultingMeta} title="استشارة تقنية 📡">
			عندك مشروع مو عارف تبداه؟
			<br/>
			انت مو تقني وودك تبدأ في التقنية؟
			<br/>
			انت تقني وودك تطور نفسك؟
			<br/>
			تبي نصيحة في اي شيء له دخل في بناء المشاريع التقنية؟
			<br/>
			<br/>
			ب٢٠٠ ريال اعطيك احسن استشارة تقنية ✅
		</Page>
	);
}
