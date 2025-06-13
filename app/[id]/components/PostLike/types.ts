import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostLikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	postId: number
};