import { API } from '@/app/api';
import { PostModel } from '@/interfaces/posts.interface';

export async function getPost(id: string): Promise<PostModel | null> {
	const res = await fetch(API.post + id, {
		next: {
			revalidate: 10
		}
	})
	if (!res.ok) {
		return null;
	}
	return res.json()
}