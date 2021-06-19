import Link from 'next/link';
import styles from '../../styles/core/Nav.module.scss';
import useTranslation from 'next-translate/useTranslation';
import NavItem, { INavItem } from './NavItem';

interface NavItems {
	about: INavItem;
	consulting: INavItem;
}

export const navItemsMap: NavItems = {
	about: { title: 'about', emoji: '😁', href: '/about' },
	consulting: { title: 'consulting', emoji: '📡', href: '/consulting' },
};

const navItems: INavItem[] = Object.values(navItemsMap) as unknown as INavItem[];

export default function Nav() {
	const { t } = useTranslation('common');

	return <div>
		<nav className={styles.nav}>
			<Link href="/">
				<a className="hoverable"><h1>{t`brand`}</h1></a>
			</Link>

			<div style={{ flex: 1 }}/>

			<div className={styles.navItems}>
				{navItems.map((item, index) => <NavItem key={index} item={item}/>)}
			</div>
		</nav>
	</div>;
}
