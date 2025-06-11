import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	children?: ReactNode
}