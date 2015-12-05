import {Comment} from './comment';

export class BlogPost{

	//properties
	id: number;
	title: string;
	body: string;
	isActive: boolean;
	createdDate: Date;
	tags: Array<string>;
	comments: Array<Comment>;
	
	//ctor
	constructor(){
		
	}
}