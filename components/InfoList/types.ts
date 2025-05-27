import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { InfoProps } from '../ui/Info/types';

export interface InfoListItem extends InfoProps {
	likes?: boolean
}

export interface InfoListProps extends DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	items: InfoListItem[]
};