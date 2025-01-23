import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {AnimatedTextComponent} from '../animated-text/animated-text.component';
import {NotificationService} from '../../service/notification.service';
import {MatDialogContent} from '@angular/material/dialog';
import {NotificationComponent} from '../notification/notification.component';

@Component({
  selector: 'app-presentation',
  imports: [
    MatToolbar,
    AnimatedTextComponent,
    MatDialogContent,
    NotificationComponent
  ],
  templateUrl: './presentation.component.html',
  standalone: true,
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  constructor(private readonly notificationService: NotificationService) {
  }

  onUserJoined() {
    console.log("cliquable");
    this.notificationService.showNotification("Une nouvelle personne a integré la formation");
  }
}
