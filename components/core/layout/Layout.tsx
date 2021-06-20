import Meta from '../Meta';
import { Props } from 'next/script';
import Nav from '../nav/Nav';
import styles from './Layout.module.scss';
import Footer from '../footer/Footer';

export default function Layout({ children }: Props) {
	return <div className={styles.layout}>
		<Meta/>

		<Nav/>

		<main className={styles.main}>
			{children}
		</main>

		<Footer/>
	</div>;
}
