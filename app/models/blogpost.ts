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
	constructor(data:any){
		if(data){
			if(data.id) this.id = data.id;
			if(data.url) this.url = data.url;
			if(data.title) this.title = data.title;
			if(data.preview) this.preview = data.preview;
			if(data.body) this.body = data.body;
			if(data.isActive) this.isActive = data.isActive;
			this.createdDate = data.createdDate;
			
			if(data.tags){
				this.tags = data.tags as Array<string>;
			}
			
			if(data.comments){
				
			}	
		}		
	}
    
    commentCount(){
        if (this.comments && this.comments.length > 0)
            return this.comments.length;
        else
            return 0;    
    }
}