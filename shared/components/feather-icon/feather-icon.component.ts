import { AfterViewInit, Component, Input } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icon',
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss']
})
export class FeatherIconComponent implements AfterViewInit {
 
  //Get icon name from Parent Component
  @Input('icon') featherIcon:any;

  //In a parent-child relationship -> this will be loaded after child component view has been fully initialized
  ngAfterViewInit(){
    feather.replace();
  }
}
