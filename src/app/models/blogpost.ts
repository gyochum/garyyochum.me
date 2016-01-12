import {Comment} from './comment';

export class BlogPost{

	//properties
	id: string;
    url: string;
	title: string;
    preview: string;
	body: string;
	isActive: boolean;
	createdDate: Date;
	tags: Array<string>;
	comments: Array<Comment>;
	
	//ctor
	constructor(){
		
	}
}