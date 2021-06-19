import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export interface INavItem {
	emoji: string;
	title: string;
	href: string;
}

export default function NavItem({ item: { emoji, title, href } }: { item: INavItem }) {
	const { t } = useTranslation('common');

	return (
		<Link href={href}>
			<a className="hoverable noWrap">{t(title)}&ensp;{emoji}</a>
		</Link>
	);
}
