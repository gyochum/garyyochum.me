import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {BlogPost} from '../../models/blogpost';
import {Comment} from '../../models/comment';
import {BlogPostService} from './blog.service';

@Component({
	selector: 'comment',
	template: '<header><img src="http://placecage.com/56/56" class="avatar" />' +
                '<span>{{comment.name}} says</span>' +
               '<span>{{comment.createdDate | date: "yMMMMd"}}</span>' +
                '<span class="operations">' +
                    '<span (click)="update(comment)">edit</span>' +
                    '<span (click)="delete(comment)">delete</span>' +
                '</span>' +
            '</header>' +
            '<div>{{comment.body}}</div>'
})

export class BlogCommentComponent{
	
	@Input()
	comment: Comment;
	
	inEditMode:boolean = false;
	
	constructor(private service:BlogPostService){}
	
	update(comment: Comment){
		console.log('edit!!!!');
	}
	
	delete(comment: Comment){
		console.log('delete!!!!');
	}
}