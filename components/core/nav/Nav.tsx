import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styles from './Nav.module.scss';
import NavItem, { INavItem } from './NavItem';

interface NavItems {
	consulting: INavItem;
	about: INavItem;
}

export const navItemsMap: NavItems = {
	consulting: { title: 'consulting', emoji: '📡', href: '/consulting' },
	about: { title: 'about', emoji: '😁', href: '/about' },
};

const navItems: INavItem[] = Object.values(navItemsMap) as unknown as INavItem[];

export default function Nav() {
	const { t } = useTranslation('common');

	return (
		<div>
			<nav className={styles.nav}>
				<Link href='/' legacyBehavior>
					<a className='hoverable'>
						<h1>{t`brand`}</h1>
					</a>
				</Link>

				<div style={{ flex: 1 }} />

				<div className={styles.navItems}>
					{navItems.map((item, index) => (
						<NavItem key={index} item={item} />
					))}
				</div>
			</nav>
		</div>
	);
}
