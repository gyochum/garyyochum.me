import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import {BlogDetailComponent} from './blog-detail.component';
import { BlogCreateComponent } from './blogpost.create.component';

const blogRoutes: Routes  = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogsComponent },
  { path: 'blog/detail/:url', component: BlogDetailComponent },
  { path: 'blog/create', component: BlogCreateComponent }
];

export const BlogRouting:ModuleWithProviders = RouterModule.forChild(blogRoutes);