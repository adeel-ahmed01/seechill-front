import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import {MatButtonModule} from '@angular/material/button';

const materialElements = [
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialElements
  ],
  exports: [
    materialElements
  ]
})
export class MaterialModule { }
