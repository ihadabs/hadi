import { IMeta } from '../components/core/Meta';
import NavItem from '../components/core/NavItem';
import { navItemsMap } from '../components/core/Nav';
import Accounts from '../components/shared/Accounts';
import Section from '../components/shared/Section';
import Page from '../components/shared/Page';

const homeMeta: IMeta = {
	title: 'هادي | الرئيسة 🏠',
	description: 'الموقع الرسمي لهادي البن سعد.',
	keywords: ['hadi', 'albinsaad', 'هادي', 'البن سعد'],
};
export default function Home() {
	return (
		<Page title="حيا الله من جانا 👋🏼" meta={homeMeta}>

			<Section title="خذ لك بيتين ع السريع">
				<p style={{ display: 'flex', flexWrap: 'wrap', gridGap: '1rem' }}>
					<span className="quote">دواؤك فيك وما تشعرُ</span>
					<span className="quote">وداؤك مِنك وما تُبصرُ</span>
					<span className="quote">وتحسب أنك جرمٌ صغيرٌ</span>
					<span className="quote">وفيك انطوى العالمُ الأكبرُ</span>
				</p>
			</Section>

			<Section title="عندك وظايف؟" subtitle="ابد اختر وسيلة التواصل اللي تناسبك 👇">
				<Accounts/>
			</Section>

			<Section title="ودك بمشورة تقنية وأنا وأخوك؟" subtitle="اضغط على زر استشارة تقنية وخل نشوف كيف نقدر نفيدك.">
				<NavItem item={navItemsMap.consulting}/>
			</Section>

			<Section title="ودك تعرف عني اكثر؟" subtitle="اضغط على زر من أنا، وإذا ودك تعال تويتر عرفنا عليك.">
				<NavItem item={navItemsMap.about}/>
			</Section>
		</Page>
	);
}
