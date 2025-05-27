import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	href: string,
	title: string,
	description: string,
	time: string,
	date: string,
	likes: string,
	image: string,
	category: string,
	link: string
}