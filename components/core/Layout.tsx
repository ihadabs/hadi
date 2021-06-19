import Meta from './Meta';
import { Props } from 'next/script';
import Nav from './Nav';
import styles from '../../styles/core/Layout.module.scss';
import Footer from './Footer';

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
