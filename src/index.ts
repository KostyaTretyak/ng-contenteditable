import { NgModule } from '@angular/core';

import { ContenteditableDirective } from './contenteditable.directive';
export * from './contenteditable.directive';

@NgModule({
  declarations: [
    ContenteditableDirective
  ],
  exports: [
    ContenteditableDirective
  ]
})
export class ContenteditableModule { }
