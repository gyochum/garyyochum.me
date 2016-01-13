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
	public comments: Array<Comment>;
	
	//ctor
	constructor(){
		
	}
    
    commentCount(){
        if (this.comments && this.comments.length > 0)
            return this.comments.length;
        else
            return 0;    
    }
}