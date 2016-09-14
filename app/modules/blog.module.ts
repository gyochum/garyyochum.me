import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogsComponent } from '../components/blogs.component';
import { BlogCreateComponent } from '../components/blogpost.create.component';
import { BlogPostService } from '../services/blog.service';
import { BlogRouting } from '../routes/blog.routes';

@NgModule({
    imports: [CommonModule, FormsModule, BlogRouting],
    declarations: [BlogsComponent, BlogCreateComponent],
    exports: [BlogsComponent],
    providers: [BlogPostService]
})

export class BlogModule{}