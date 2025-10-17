import type ITree from '~/types/tree';

export default class Tree implements ITree {
	id: number;
	user_id: number;
	tree_name: string;
	tree_password: string;
	slug: string;
	created_at: string;
	last_updated_at: string;

	constructor(
		id: number,
		user_id: number,
		tree_name: string,
		tree_password: string,
		slug: string,
		created_at: string,
		last_updated_at: string
	) {
		this.id = id;
		this.user_id = user_id;
		this.tree_name = tree_name;
		this.tree_password = tree_password;
		this.slug = slug;
		this.created_at = created_at;
		this.last_updated_at = last_updated_at;
	}

	createNewGeneration() {}
}
