import Meta from './Meta';
import { Props } from 'next/script';
import Nav from './Nav';
import styles from '../../styles/Home.module.css';

export default function Layout({ children }: Props) {
	return <div>
		<Meta/>

		<header>
			<Nav/>
		</header>

		<main className={styles.main}>
			{children}
		</main>

		<footer className={styles.footer}>
			Hello
		</footer>
	</div>;
}
