'use client'
import { FC, ReactElement } from 'react';
import cn from 'classnames'
import styles from './Like.module.scss'
import { LikeProps } from './types';
import { LikeIcon } from '../ui';

export const Like: FC<LikeProps> = ({
	isLiked = false,
	setLiked,
	className,
	...props
}): ReactElement => {
	return (
		<button
			className={cn(styles.button, {
				[styles.liked]: isLiked
			}, className)}
			onClick={() => setLiked(!isLiked)}
			{...props}>
			<LikeIcon viewBox='0 0 16 16' width={23} height={23} />
		</button>
	)
}