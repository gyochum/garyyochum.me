export class Comment{
	
    id: string;
    blogPostId: string;
	name: string;
	email: string;
	createdDate: Date;
	body: string;

	constructor(data){
		if(data){
			this.id = data._id ? data._id : null;
			this.blogPostId = data.blogPostId ? data.blogPostId : null;
			this.name = data.name ? data.name : null;
			this.email = data.email ? data.email : null;
			this.body = data.body ? data.body : null;
			this.createdDate = data.created ? data.created : new Date();	
		}		
	}	
}