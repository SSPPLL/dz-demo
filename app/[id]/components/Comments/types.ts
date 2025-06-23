import { CommentModel } from '@/interfaces/comments.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CommentsProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	comments: CommentModel[]
}