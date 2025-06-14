import { PostModel } from '@/interfaces/posts.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardGridProps extends Omit<
	DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
	'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
> {
	posts: PostModel[]
}