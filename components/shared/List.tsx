import { CSSProperties } from 'react';

const listStyle: CSSProperties = {
	listStylePosition: 'inside',
};

const listItemStyle: CSSProperties = {
	padding: '4px 1em',
	listStyleType: 'disc',
	listStylePosition: 'inside',
	textIndent: '-1em',
};

export default function List({ items }: { items: string[] }) {
	return (
		<ul style={listStyle}>
			{items.map((item, index) => <li key={index} style={listItemStyle} dangerouslySetInnerHTML={{ __html: item }}/>)}
		</ul>
	);
}
