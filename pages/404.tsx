import Page from '../components/shared/Page';

export default function Custom404() {
	return (<Page meta={{ title: 'Hadi | Page Not Found' }}
				  title="لا يوجد صفحة للرابط المدخل 🚧">
		يمكنك الضغط على الازرار بالأعلى للذهاب لصفحة اخرى.
	</Page>);
}
