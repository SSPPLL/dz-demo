'use client'
import { ReactElement, useEffect, useState } from 'react';
import cn from 'classnames'
import styles from './Like.module.scss'
import { LikeProps } from './types';
import { LikeIcon } from '../ui';

export const Like = ({
	isLiked = false,
	setLiked,
	className,
	...props
}: LikeProps): ReactElement => {
	const [liked, setLocalLiked] = useState<boolean>(isLiked);

	useEffect(() => {
		if (setLiked) {
			setLiked(liked)
		}
	}, [liked])

	return (
		<button
			className={cn(styles.button, {
				[styles.liked]: liked
			}, className)}
			onClick={() => setLocalLiked(!liked)}
			{...props}>
			<LikeIcon viewBox='0 0 16 16' width={23} height={23} />
		</button>
	)
}