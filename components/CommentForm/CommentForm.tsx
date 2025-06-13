'use client'
import { FC, ReactElement, useState } from 'react';
import cn from 'classnames'
import styles from './CommentForm.module.scss'
import { CommentFormProps } from './types';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '../ui';
import { CommentFormValues } from '@/interfaces/comments.interface';
import { sendComment } from '@/api/comments';

export const CommentForm: FC<CommentFormProps> = ({
	postId,
	className,
	...props
}): ReactElement => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<CommentFormValues>();
	const [isSending, setSending] = useState<boolean>(false);

	const onSubmit = async (formData: CommentFormValues) => {
		setSending(true);

		try {
			await sendComment(postId, formData)

			alert('Комментарий отправлен!');
			reset();
			setSending(false);
		} catch (e) {
			setSending(false);
			alert('Произошла ошибка: ' + (e as Error).message);
		}
	}
	return (
		<form className={cn(styles.form, className, {
			[styles.sending]: isSending
		})} {...props} onSubmit={handleSubmit(onSubmit)}>
			<Input
				className={styles.name}
				{...register('name', {
					required: {
						value: true,
						message: 'Заполните имя'
					}
				})}
				type='text'
				placeholder='Имя'
				error={errors.name}
			/>
			<Textarea
				className={styles.name}
				{...register('body', {
					required: {
						value: true,
						message: 'Заполните комментарий'
					}
				})}
				placeholder='Комментарий'
				error={errors.body}
			/>
			<Button
				className={styles.button}
				type='submit'
				disabled={isSending}
			>Отправить</Button>
		</form>
	)
}