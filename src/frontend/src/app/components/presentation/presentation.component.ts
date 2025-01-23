import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {AnimatedTextComponent} from '../animated-text/animated-text.component';

@Component({
  selector: 'app-presentation',
  imports: [
    MatToolbar,
    AnimatedTextComponent
  ],
  templateUrl: './presentation.component.html',
  standalone: true,
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

}
