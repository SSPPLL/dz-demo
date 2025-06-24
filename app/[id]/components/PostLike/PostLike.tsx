'use client'
import { Like } from '@/components';
import { FC, useEffect, useState } from 'react';
import styles from './PostLike.module.scss'
import { PostLikeProps } from './types';
import cn from 'classnames';

export const PostLike: FC<PostLikeProps> = ({ postId, className, ...props }) => {
	const [isLiked, setLiked] = useState<boolean | null>(null);
	const [alert, setAlert] = useState<undefined | 'pressed' | 'unpressed'>();

	useEffect(() => {
		setLiked(localStorage.getItem(`post-${postId}-liked`) === '1');
	}, [postId]);

	useEffect(() => {
		if (isLiked === null) {
			return;
		}

		setAlert(isLiked ? 'pressed' : 'unpressed');

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
		<>
			{alert && <span
				className='visually-hidden'
				role='log'
			>
				{alert === 'pressed' ? 'Лайк поставлен' : 'Лайк убран'}
			</span>}
			<div className={cn(styles['like-wrapper'], className)} {...props}>
				<span>Понравилось? Жми</span>
				<Like
					className={styles.like}
					isLiked={isLiked}
					setLiked={setLiked}
					aria-label={isLiked ? 'Убрать лайк из поста' : 'Поставить лайк посту'}
				/>
			</div>
		</>
	)
}