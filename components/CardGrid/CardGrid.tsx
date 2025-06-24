'use client'
import { FC, ReactElement } from 'react';
import cn from 'classnames'
import styles from './CardGrid.module.scss'
import { CardGridProps } from './types';
import { Card } from '../Card/Card';
import { motion, useReducedMotion } from 'motion/react';

export const CardGrid: FC<CardGridProps> = ({
	posts,
	className,
	...props
}): ReactElement => {
	const shouldReduceMotion = useReducedMotion();
	return (
		<motion.ul
			layout
			variants={{
				hidden: {
					opacity: shouldReduceMotion ? 1 : 0
				},
				visible: {
					opacity: 1,
					transition: shouldReduceMotion ? {} : {
						staggerChildren: 0.1
					}
				}
			}}
			initial='hidden'
			animate='visible'
			className={cn(styles.defaults, className)}
			aria-label='Статьи'
			tabIndex={0}
			{...props}
		>
			{posts.map(({ id, title, body }) => (
				<Card
					variants={{
						visible: {
							opacity: 1
						},
						hidden: {
							opacity: shouldReduceMotion ? 1 : 0
						}
					}}
					key={id}
					title={title}
					description={body}
					category='Front-end'
					link='Читать'
					time='3 минуты'
					date='1 месяц назад'
					likes='4'
					image='/card-small.jpg'
					href={`/${id}`}
				/>
			))}
		</motion.ul>
	)
}