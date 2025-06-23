import { API } from '@/app/api';
import { CommentFormValues, CommentModel } from '@/interfaces/comments.interface';

export async function getComments(id: string): Promise<CommentModel[] | null> {
	const res = await fetch(API.comments + id, {
		next: {
			revalidate: 10
		}
	})
	if (!res.ok) {
		return null;
	}
	return res.json()
}

export async function sendComment(postId: number, formData: CommentFormValues): Promise<boolean> {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	console.log({
		...formData,
		postId
	});

	return true;
}