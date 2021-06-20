import { PropsWithChildren } from 'react';
import Meta, { IMeta } from '../core/Meta';

export interface IPage {
	meta: IMeta;
	title: string;
	subtitle?: string;
}

export default function Page({ meta, title, subtitle, children }: PropsWithChildren<IPage>) {
	return (
		<div className="pageContainer">
			<Meta title={meta.title} keywords={meta.keywords} description={meta.description}/>

			<div>
				<h2 className="pageTitle">{title}</h2>
				<p>{subtitle}</p>
			</div>

			{children}
		</div>
	);
}
