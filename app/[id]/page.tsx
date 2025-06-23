import { getPost } from '@/api/post';
import { getPosts } from '@/api/posts';
import { Paragraph, Title } from '@/components/ui';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';
import styles from './Page.module.scss'
import { CommentForm, InfoList } from '@/components';
import Image from 'next/image';
import { Comments, PostLike } from './components';
import { getComments } from '@/api/comments';

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

	const comments = await getComments(awaitedParams.id);

	return (
		<div className={styles.wrapper}>
			<Title className={styles.title} size='xl'>{post.title}</Title>
			<InfoList className={styles.info} items={[
				{
					color: 'dark',
					children: 'Front-end'
				},
				{
					children: '1 месяц назад'
				},
				{
					children: '3 минуты'
				},
				{
					likes: true,
					children: '4'
				}
			]} />
			<picture className={styles.picture}>
				<Image className={styles.image} src='/post.jpg' width={638} height={390} alt={post.title} priority={true} />
			</picture>
			<Paragraph className={styles.paragraph} size='lg'>{post.body}</Paragraph>
			<PostLike className={styles.like} postId={post.id} />
			<Title as='h3' size='lg' className={styles['comments-title']}>Комментарии</Title>
			{comments && <Comments comments={comments} />}
			<CommentForm postId={post.id} className={styles.form} />
		</div>
	)
}