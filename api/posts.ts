import { API } from '@/app/api';
import { PostModel } from '@/interfaces/posts.interface';

export async function getPosts(): Promise<PostModel[] | null> {
	const res = await fetch(API.posts)
	if (!res.ok) {
		return null;
	}
	return res.json()
}