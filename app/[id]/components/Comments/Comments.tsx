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
		<ul {...props} className={cn(styles.comments, className)}>
			{comments.map(({ id, body, name, email }) => {
				return (
					<li key={id} className={styles.comment}>
						<InfoList className={styles['comment-info']} items={[
							{
								color: 'dark',
								weight: 'bold',
								children: name
							},
							{
								children: email
							}
						]} />
						<Paragraph className={styles['comment-body']} size='lg'>{body}</Paragraph>
					</li>
				)
			})}
		</ul>
	)
}