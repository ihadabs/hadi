import Page from '../components/shared/Page';
import Accounts from '../components/shared/Accounts';
import Section from '../components/shared/Section';

export default function Custom500() {
	return (<Page meta={{ title: 'Hadi | Page Not Found' }}
				  title="حدث خطأ أثناء جلب الصفحة 🪢">

		<Section title="الرجاء تحديث الصفحة 🔁" subtitle="إذا استمرت المشكلة فضلا تواصل معي على أيّ من الوسائل التالية 👇">
			<Accounts/>
		</Section>
	</Page>);
}
