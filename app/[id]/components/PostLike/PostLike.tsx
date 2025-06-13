'use client'
import { Like } from '@/components';
import { FC, useEffect, useState } from 'react';
import styles from './PostLike.module.scss'
import { PostLikeProps } from './types';
import cn from 'classnames';

export const PostLike: FC<PostLikeProps> = ({ postId, className, ...props }) => {
	const [isLiked, setLiked] = useState<boolean | null>(null);

	useEffect(() => {
		setLiked(localStorage.getItem(`post-${postId}-liked`) === '1');
	}, [postId]);

	useEffect(() => {
		if (isLiked === null) {
			return;
		}

		if (isLiked) {
			localStorage.setItem(`post-${postId}-liked`, '1');

			return;
		}

		localStorage.removeItem(`post-${postId}-liked`);
	}, [isLiked]);

	if (isLiked === null) {
		return <></>;
	}

	return (
		<div className={cn(styles['like-wrapper'], className)} {...props}>
			<span>Понравилось? Жми</span>
			<Like className={styles.like} isLiked={isLiked} setLiked={setLiked} />
		</div>
	)
}