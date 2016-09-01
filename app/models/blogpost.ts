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
	constructor(id?:string, url?:string, title?:string, preview?:string, body?:string, isActive?:boolean, createdDate:Date = new Date()){
		if(id) this.id = id;
		if(url) this.url = url;
		if(title) this.title = title;
		if(preview) this.preview = preview;
		if(body) this.body = body;
		if(isActive) this.isActive = isActive;
		this.createdDate = createdDate;
	}
    
    commentCount(){
        if (this.comments && this.comments.length > 0)
            return this.comments.length;
        else
            return 0;    
    }
}