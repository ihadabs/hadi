import Meta from '../components/core/Meta';
import NavItem from '../components/core/NavItem';
import { navItems } from '../components/core/Nav';
import Accounts from '../components/shared/Accounts';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className="container">
			<Meta title="Hadi" keywords={[]} description=""/>

			<div style={{ height: '1rem', }}/>
			<h2 className={styles.title}>حيا الله من جانا 👋🏼</h2>
			<div style={{ height: '3rem', }}/>

			<h3 className={styles.description}>خذ لك بيتين ع السريع</h3>
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

			<div style={{ height: '3rem', }}/>
			<h3 className={styles.description}>عندك وظايف؟</h3>
			<p> ابد اختر وسيلة التواصل اللي تناسبك 👇</p>
			<div style={{ height: '0.5rem', }}/>
			<Accounts/>


			<div style={{ height: '3rem', }}/>
			<h3 className={styles.description}>ودك بمشورة تقنية وأنا وأخوك؟</h3>
			<p>اضغط على زر استشارة تقنية وخل نشوف كيف نقدر نفيدك.</p>
			<div style={{ height: '0.5rem', }}/>
			<NavItem item={navItems[1]}/>


			<div style={{ height: '3rem', }}/>
			<h3 className={styles.description}>ودك تعرف عني اكثر؟</h3>
			<p>اضغط على زر من أنا، وإذا ودك تعال تويتر عرفنا عليك.</p>
			<div style={{ height: '0.5rem', }}/>
			<NavItem item={navItems[0]}/>

			<div style={{ height: '3rem', }}/>
		</div>
	);
}
