import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LikeProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isLiked: boolean,
	setLiked: (liked: boolean) => void
}