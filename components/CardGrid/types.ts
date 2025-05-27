import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CardProps } from '../Card/types';

export interface CardGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	items: CardProps[]
}