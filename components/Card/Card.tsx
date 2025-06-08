import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames'
import styles from './Card.module.scss'
import { CardProps } from './types';
import { CardLink, Info, LikeCounter, Paragraph, Title } from '../ui';
import { InfoList } from '../InfoList/InfoList';

export const Card = ({
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
		<li {...props} className={cn(styles.outer, className)}>
			<Link className={styles.image_outer} href={href}>
				<Image className={styles.image} src={image} alt={title} width={330} height={200} />
			</Link>
			<InfoList className={styles.info} items={[
				{
					color: 'dark',
					children: category
				},
				{
					children: date
				}
			]} />
			<LikeCounter>{likes}</LikeCounter>
			<Title className={styles.title} size='md'>{title}</Title>
			<Paragraph className={styles.paragraph} size='md'>{description}</Paragraph>

			<div className={styles.bottom}>
				<Info className={styles.time}>{time}</Info>
				<CardLink href={href} className={styles.link}>{link}</CardLink>
			</div>
		</li>
	)
}