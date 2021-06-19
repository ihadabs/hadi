import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

export interface ISection {
	title: string;
	subtitle?: string | ReactNode;
}

const titleStyle: CSSProperties = {
	fontSize: '1.5rem',
	lineHeight: '1.5'
};

export default function Section({ title, subtitle, children }: PropsWithChildren<ISection>) {
	return (
		<div>
			<h3 style={titleStyle}>{title}</h3>
			<p>{subtitle}</p>
			<div style={{ height: '0.5rem', }}/>
			{children}
		</div>
	);
}
