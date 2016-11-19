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
			this.id = data._id ? data._id : null;
			this.url = data.url ? data.url : null;
			this.title = data.title ? data.title : null;
			this.preview = data.preview ? data.preview : null;
			this.body = data.body ? data.body : null;
			this.isActive = data.active ? data.active : false;
			this.createdDate = data.createdDate ? data.createdDate : new Date();
			
			if(data.tags){
				this.tags = data.tags as Array<string>;
			}
			
			if(data.comments){
				this.comments = this._map(data.comments);
			}	
		}		
	}
    
    commentCount(){
        if (this.comments && this.comments.length > 0)
            return this.comments.length;
        else
            return 0;    
    }
	
	private _map(comments:any):Array<Comment>{
		let results:Array<Comment> = new Array<Comment>();
		
		results = comments.map((comment:Comment) => {
			return new Comment(comment);
		});
		
		return results;
	}
}