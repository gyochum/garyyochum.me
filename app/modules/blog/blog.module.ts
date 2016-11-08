import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogsComponent } from './blogs.component';
import { BlogCreateComponent } from './blogpost.create.component';
import { BlogPostService } from './blog.service';
import { BlogRouting } from './blog.routes';

@NgModule({
    imports: [CommonModule, FormsModule, BlogRouting],
    declarations: [BlogsComponent, BlogCreateComponent],
    exports: [BlogsComponent],
    providers: [BlogPostService]
})

export class BlogModule{}