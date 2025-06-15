import { getPosts } from '@/api/posts';
import { CardGrid } from '@/components/CardGrid/CardGrid';
import { ReactElement } from 'react';
import { Metadata } from 'next';
import { Title } from '@/components/ui';

export const metadata: Metadata = {
	title: "My blog"
}

export default async function Home(): Promise<ReactElement> {
	const posts = await getPosts();

	if (!posts) {
		return <div>Posts not found</div>
	}

	return (
		<>
			<Title as='h1' className='visually-hidden'>Блог статей</Title>
			<CardGrid posts={posts} />
		</>
	);
}