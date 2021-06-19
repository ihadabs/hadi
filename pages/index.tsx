import Meta from '../components/core/Meta';
import NavItem from '../components/core/NavItem';
import { navItems } from '../components/core/Nav';
import Accounts from '../components/shared/Accounts';
import styles from '../styles/Home.module.css';
import Section from '../components/shared/Section';

export default function Home() {
	return (
		<div className="container">
			<Meta title="Hadi" keywords={['hadi', 'albinsaad', 'هادي', 'البن سعد']} description=""/>

			
			<h2 className={styles.title}>حيا الله من جانا 👋🏼</h2>

			<Section title="خذ لك بيتين ع السريع">
				<div style={{ height: '0.5rem', }}/>
				<p style={{ display: 'flex', flexWrap: 'wrap', gridGap: '1rem' }}>
				<span className={styles.quote}>
					دواؤك فيك وما تشعرُ
				</span>
					<span className={styles.quote}>
					وداؤك مِنك وما تُبصرُ
				</span>
					<span className={styles.quote}>
					وتحسب أنك جرمٌ صغيرٌ
				</span>
					<span className={styles.quote}>
					وفيك انطوى العالمُ الأكبرُ
				</span>
				</p>
			</Section>

			<Section title="عندك وظايف؟" subtitle="ابد اختر وسيلة التواصل اللي تناسبك 👇">
				<Accounts/>
			</Section>

			<Section title="ودك بمشورة تقنية وأنا وأخوك؟" subtitle="اضغط على زر استشارة تقنية وخل نشوف كيف نقدر نفيدك.">
				<NavItem item={navItems[1]}/>
			</Section>

			<Section title="ودك تعرف عني اكثر؟" subtitle="اضغط على زر من أنا، وإذا ودك تعال تويتر عرفنا عليك.">
				<NavItem item={navItems[0]}/>
			</Section>
		</div>
	);
}
