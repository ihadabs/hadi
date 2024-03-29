import { IMeta } from 'components/core/Meta';
import Page from 'components/shared/Page';
import Accounts from '../components/shared/Accounts';
import List from '../components/shared/List';
import Section from '../components/shared/Section';

const aboutMeta: IMeta = {
	title: 'من هو هادي 😁',
	keywords: [
		'hadi',
		'albinsaad',
		'هادي',
		'سعد',
		'البن',
		'البنسعد',
		'استشارة',
		'تقنية',
	],
	description: 'حقائق ومعلومات عامة عن هادي البن سعد.',
};

const schoolInfo: string[] = [
	'تخرجت في جامعة البترول تخصص هندسة برمجيات عام 2021',
	'درست سمستر في جامعة جورجيا تك في أمريكا عن طريق جامعة البترول',
];

const thingsILove: string[] = [
	'أحب نشر المعرفة عن طريق تعليم الناس أو تدريبهم',
	'أحب أمي وأبوي وأخواني وأختي وأقرابي وربعي وأعضاء اكسندا',
	'أحب اجلس مع ناس تسولف وتفكر',
	'أحب اسوي مشاريع واخليها فنانة 👨🏻‍🎨',
	'أتوقع اني أحب الشاهي أو القهوة أو العصير',
	'ما أحب الكمبيوترات، بس أحب اخليها تسوي كل شيء تقدر تسويه',
];

const thingsIWorkOn: string[] = ['اكسندا', 'مستقبلي الزواجي'];

const thingsIKnow: string[] = [
	'اطلع نظريات (موثقة من معهد هادي للعلوم الحياتية والتقنية المتقدمة)',
	'مرة كويس في Angular بس مؤخرا وقعت في غرام Next.js',
	'اشتغل فلتر ورياكت وسوفت ونود باك اند ومونقو غالبا للداتا بيز (لعبتي الsql بعد) ' +
		'و اعرف اسوي سيرفرات واضبطها ع الخفيف بس الكلاود احسن واريح',
];

const style = {
	display: 'flex',
	alignItems: 'center',
	gridGap: '1rem',
};

export default function About() {
	return (
		<Page
			meta={aboutMeta}
			title="هادي البن سعد 🤾🏻‍♂️"
			subtitle="يقولون لا تعيد اختراع العجلة! طيب يمكن تنتبه لشيء ما انتبه له اللي قبلك."
		>
			<Section
				title="إعلان هام 🥊"
				subtitle="مثل ما حنا عارفين هذه الصفحة كتبتها عشان أحاول أعرف الناس عليّ، ولكن بطبيعة الحال يجب مراعاة وقتكم الثمين ولذلك `بعض النص مفقود`."
			/>

			<Section title="وين درست؟ 🚌">
				<List items={schoolInfo} />
			</Section>

			<Section title="وش تحب؟ 🤓">
				<List items={thingsILove} />
			</Section>

			<Section title="وش تشتغل عليه؟ ⛹️">
				<List items={thingsIWorkOn} />
			</Section>

			<Section title="وش تعرف تسوي؟ 🤾🏻‍♂️">
				<List items={thingsIKnow} />
			</Section>

			<Section
				title="ودك تاخذ لفة على الcv؟ 📜️"
				subtitle="لنكدان فيه كل شيء بس اذا ملزم 👀"
			>
				<div style={style}>
					<Accounts showOnly={['linkedIn']} />
					<a
						href={'/cv.pdf'}
						target="_blank"
						rel="noopener noreferrer"
						className="hoverable"
					>
						حمل الCV من هنا
					</a>
				</div>
			</Section>

			<Section
				title="الخاتمة 💍"
				subtitle="خلاص خلصنا. إذا ودك تسولف ابد طب وتخير:"
			>
				<Accounts />
			</Section>
		</Page>
	);
}
