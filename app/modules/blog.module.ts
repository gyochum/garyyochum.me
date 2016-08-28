import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogsComponent } from '../components/blogs.component';
import { BlogPostService } from '../services/blog.service';
import { blogRouting } from '../routes/blog.routes';

@NgModule({
    imports: [CommonModule, FormsModule, blogRouting],
    declarations: [BlogsComponent],
    exports: [BlogsComponent],
    providers: [BlogPostService]
})

export class BlogModule{}