import { API } from '@/app/api';
import { CommentModel } from '@/interfaces/comments.interface';

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