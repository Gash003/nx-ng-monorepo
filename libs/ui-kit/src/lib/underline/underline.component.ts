import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-underline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './underline.component.html',
  styleUrl: './underline.component.scss',
})
export class UnderlineComponent {
  constructor() {
    console.log( "Hello");
  }
}
