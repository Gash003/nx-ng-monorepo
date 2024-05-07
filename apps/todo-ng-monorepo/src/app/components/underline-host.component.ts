import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderlineComponent } from '@todo-ng-monorepo/ui-kit';


@Component({
  standalone: true,
  imports: [CommonModule, UnderlineComponent],
  template: `<div>
    <lib-underline>underline-host works</lib-underline>  
    </div>`,
})
export class UnderlineHostComponent {}
