import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LikeCounterProps extends DetailedHTMLProps<
	HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
> {
	children: ReactNode;
};