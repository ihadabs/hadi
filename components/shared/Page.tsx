import { PropsWithChildren } from 'react';
import Meta, { IMeta } from '../core/Meta';

export interface IPage {
	meta: IMeta;
	title: string;
}

export default function Page({ meta, title, children }: PropsWithChildren<IPage>) {
	return (
		<div className="pageContainer">
			<Meta title={meta.title} keywords={meta.keywords} description={meta.description}/>

			<h2 className="pageTitle">{title}</h2>
			
			{children}
		</div>
	);
}
