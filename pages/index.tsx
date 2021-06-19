import Meta from '../components/core/Meta';
import NavItem from '../components/core/NavItem';
import { navItems } from '../components/core/Nav';
import Accounts from '../components/shared/Accounts';

export default function Home() {
	return (
		<div className="container">
			<Meta title="Hadi" keywords={[]} description=""/>
			<h2>حيا الله من يانا</h2>
			<p>نسعى عسى أن نصل، ما كان الوصول غاية وما هو عدمه.</p>

			<br/><br/><br/>
			عندك وظايف؟ كلمني من وسائل التواصل اللي تحت 👇وله اقولك اصبر اقربها لك
			<Accounts/>

			<br/><br/><br/>
			ودك بمشورة وانا واخوك؟ اضغط على زر استشارة تقنية وخل نشوف كيف نقدر نفيدك.
			<NavItem item={navItems[1]}/>

			<br/><br/><br/>
			ودك تعرف عني اكثر؟ روح أقرأ من أنا.
			<NavItem item={navItems[0]}/>
		</div>
	);
}
