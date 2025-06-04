'use client';
import { CardGrid } from '@/components/CardGrid/CardGrid';
import { Like } from '@/components/Like/Like';
import { JSX, useEffect, useRef, useState } from 'react';

export default function Home(): JSX.Element {
	const isFirstRender = useRef(true);
	const [liked, setLiked] = useState<boolean>(false);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		// const controller = new AbortController();
		// const signal = controller.signal;

		// fetch('/api/post/:id', {
		// 	signal,
		// 	method: 'PATCH',
		// 	body: JSON.stringify({ liked })
		// })
		// 	.then(res => res.json())
		// 	.then(data => console.log(data))

		// return () => {
		// 	controller.abort();
		// }
	}, [liked])

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

			<Like isLiked={liked} setLiked={setLiked} />
		</>
	);
}
