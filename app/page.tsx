import { getPosts } from '@/api/posts';
import { CardGrid } from '@/components/CardGrid/CardGrid';
import { Card } from '@/components';
import { JSX } from 'react';

export default async function Home(): Promise<JSX.Element> {
	const posts = await getPosts();

	if (!posts) {
		return <div>Posts not found</div>
	}

	return (
		<>
			<CardGrid>
				{posts.map(({ id, title, body }) => (
					<Card key={id}
						title={title}
						description={body}
						category='Front-end'
						link='Читать'
						time='3 минуты'
						date='1 месяц назад'
						likes='4'
						image='/card-small.jpg'
						href={`/posts/${id}`}
					/>
				))}
			</CardGrid>
		</>
	);
}