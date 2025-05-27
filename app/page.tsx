import { CardGrid } from '@/components/CardGrid/CardGrid';
import { JSX } from 'react';

export default function Home(): JSX.Element {
	return (
		<>
			<CardGrid items={Array(3).fill({
				href: '#',
				link: 'Читать',
				title: 'Как работать с CSS Grid',
				description: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
				category: 'Front-end',
				time: '3 минуты',
				date: '1 месяц назад',
				likes: '4',
				image: '/card-small.jpg',
			})} />
		</>
	);
}
