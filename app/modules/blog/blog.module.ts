import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogsComponent } from './blogs.component';
import { BlogCreateComponent } from './blogpost.create.component';
import {BlogDetailComponent } from './blog-detail.component';
import { BlogPostService } from './blog.service';
import { BlogRouting } from './blog.routes';
import {OrderByPipe} from '../shared/orderBy.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, BlogRouting],
    declarations: [BlogsComponent, BlogCreateComponent, BlogDetailComponent, OrderByPipe],
    exports: [BlogsComponent],
    providers: [BlogPostService]
})

export class BlogModule{}