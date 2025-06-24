'use client'
import { ReactElement } from 'react';
import Image from 'next/image';
import cn from 'classnames'
import styles from './Card.module.scss'
import { CardProps } from './types';
import { CardLink, Info, LikeCounter, Paragraph, Title } from '../ui';
import { InfoList } from '../InfoList/InfoList';
import { motion } from 'motion/react';

export const Card = motion.create(({
	href,
	link,
	title,
	description,
	time,
	date,
	likes,
	image,
	category,
	className,
	...props
}: CardProps): ReactElement => {
	return (
		<li {...props} className={cn(styles.outer, className)} aria-label='Карточка статьи' tabIndex={0}>
			<div className={styles.image_outer}>
				<Image className={styles.image} src={image} alt={title} width={330} height={200} aria-hidden={true} />
			</div>
			<InfoList className={styles.info} items={[
				{
					color: 'dark',
					children: <><span className='visually-hidden'>Категория: </span>{category}</>
				},
				{
					children: <><span className='visually-hidden'>Время публикации: </span>{date}</>
				}
			]} />
			<LikeCounter>{likes}</LikeCounter>
			<Title className={styles.title} size='md'>{title}</Title>
			<Paragraph className={styles.paragraph} size='md' aria-label='Описание статьи'>{description}</Paragraph>

			<div className={styles.bottom}>
				<Info className={styles.time}><span className='visually-hidden'>Время на прочтение:</span>{time}</Info>
				<CardLink href={href} className={styles.link} aria-label='Читать статью'>{link}</CardLink>
			</div>
		</li>
	)
})