import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface CommentFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	postId: number
};