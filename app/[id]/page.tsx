import { getPost } from '@/api/post';
import { getPosts } from '@/api/posts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

interface PageParams {
	id: string
}

export const generateMetadata = async ({ params }: {
	params: Promise<PageParams>
}): Promise<Metadata> => {
	const awaitedParams = await params;

	if (!awaitedParams.id) {
		return {
			title: 'Not found'
		}
	}

	const post = await getPost(awaitedParams.id);

	if (!post) {
		return {
			title: 'Not found'
		}
	}

	return {
		title: post.title
	}
}

export async function generateStaticParams() {
	const posts = await getPosts();

	if (!posts) {
		return [];
	}

	return posts.map(({ id }) => ({
		id: id.toString()
	}))
}

export default async function Post({ params }: {
	params: Promise<PageParams>
}): Promise<ReactElement> {
	const awaitedParams = await params;

	if (!awaitedParams.id) {
		notFound();
	}

	const post = await getPost(awaitedParams.id);

	if (!post) {
		notFound();
	}

	return (<h1>{post.title}</h1>)
}