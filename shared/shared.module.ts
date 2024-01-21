import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Error404Component } from './components/error404/error404.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SidebarComponent,
    LayoutComponent,
    Error404Component,
    FeatherIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule //used for routerlinks
  ],
  //export components that can be used in any other modules
  exports:[FeatherIconComponent] 
})
export class SharedModule { }
