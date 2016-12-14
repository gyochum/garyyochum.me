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
                    '<span (click)="edit()">edit</span> ' +
                    '<span (click)="delete(comment)">delete</span>' +
                '</span>' +
            '</header>' +
            '<div *ngIf="!inEditMode">{{comment.body}}</div>' + 
			'<div *ngIf="inEditMode">' + 
			'<input type="text" [(ngModel)]="comment.body"  />' + 
			'<button (click)="update(comment)">update</button>' + 
			'<button (click)="cancel()">cancel</button>' + 
			'</div>'
})

export class BlogCommentComponent{
	
	@Input()
	comment: Comment;
	
	inEditMode:boolean = false;
	
	constructor(private service:BlogPostService){}
	
	edit(){
		this.inEditMode = true;
	}
	
	cancel(){
		this.inEditMode = false;
	}
	
	update(comment: Comment){
		console.log(comment);
	}
	
	delete(comment: Comment){
		console.log('delete!!!!');
	}
}