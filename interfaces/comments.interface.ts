export interface CommentModel {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

export interface CommentFormValues {
	name: string;
	body: string
}