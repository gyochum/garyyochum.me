import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from '../components/blogs.component';

const blogRoutes: Routes  = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogsComponent }
];

export const blogRouting:ModuleWithProviders = RouterModule.forChild(blogRoutes);