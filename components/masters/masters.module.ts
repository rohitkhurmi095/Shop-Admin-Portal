import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { TagComponent } from './tag/tag.component';
import { ColorComponent } from './color/color.component';
import { SizeComponent } from './size/size.component';
import { CategoryComponent } from './category/category.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { UserTypeComponent } from './user-type/user-type.component';


@NgModule({
  declarations: [
    TagComponent,
    ColorComponent,
    SizeComponent,
    CategoryComponent,
    BrandLogoComponent,
    UserTypeComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }
