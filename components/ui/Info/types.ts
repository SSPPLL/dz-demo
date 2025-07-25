import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface InfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	color?: 'light' | 'dark';
	weight?: 'normal' | 'bold';
	children: ReactNode;
};