import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from '../components/blogs.component';
import { BlogCreateComponent } from '../components/blogpost.create.component';

const blogRoutes: Routes  = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogsComponent },
  { path: 'blog/create', component: BlogCreateComponent }
];

export const BlogRouting:ModuleWithProviders = RouterModule.forChild(blogRoutes);