import { FC, ReactElement } from 'react';
import cn from 'classnames'
import styles from './Comments.module.scss'
import { CommentsProps } from './types';
import { Paragraph } from '@/components/ui';
import { InfoList } from '@/components';

export const Comments: FC<CommentsProps> = ({
	comments,
	className,
	...props
}): ReactElement => {
	return (
		<ul {...props} className={cn(styles.comments, className)} aria-label='Комментарии' tabIndex={0}>
			{comments.map(({ id, body, name, email }) => {
				return (
					<li key={id} className={styles.comment} aria-label='Комментарий'>
						<InfoList className={styles['comment-info']} items={[
							{
								color: 'dark',
								weight: 'bold',
								children: <><span className='visually-hidden'>Имя автора: </span>{name}</>
							},
							{
								children: <><span className='visually-hidden'>Email автора: </span>{email}</>
							}
						]} />
						<Paragraph
							className={styles['comment-body']}
							size='lg'
							aria-label='Текст комментария'
						>
							{body}
						</Paragraph>
					</li>
				)
			})}
		</ul>
	)
}