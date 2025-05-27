import { ReactElement } from 'react';
import cn from 'classnames'
import styles from './CardGrid.module.scss'
import { CardGridProps } from './types';
import { Card } from '../Card/Card';

export const CardGrid = ({
	items,
	className,
	...props
}: CardGridProps): ReactElement => {
	return (
		<ul className={cn(styles.defaults, className)} {...props}>
			{items.map(({ className, ...item }, index) => (
				<Card key={index} {...item} className={cn(styles.item, className)} />
			))}
		</ul>
	)
}