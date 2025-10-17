import type { IRelationshipType } from '~/types/relationship-type';

export default interface IRelationship {
	id: number;
	tree_id: number;
	relationship_type: IRelationshipType;
	person_id: number;
	relative_id: number;
}
