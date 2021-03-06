import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogsComponent } from './blogs.component';
import { BlogSaveComponent } from './blog-save.component';
import {BlogDetailComponent } from './blog-detail.component';
import {BlogCommentComponent} from './blog-comment.component';
import { BlogPostService } from './blog.service';
import { BlogRouting } from './blog.routes';
import {OrderByPipe} from '../shared/orderBy.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, BlogRouting],
    declarations: [BlogsComponent, BlogSaveComponent, BlogDetailComponent, BlogCommentComponent, OrderByPipe],
    exports: [BlogsComponent],
    providers: [BlogPostService]
})

export class BlogModule{}