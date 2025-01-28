import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {AnimatedTextComponent} from '../animated-text/animated-text.component';
import {NotificationService} from '../../service/notification.service';
import {NotificationComponent} from '../notification/notification.component';
import {MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-presentation',
  imports: [
    AnimatedTextComponent
  ],
  templateUrl: './presentation.component.html',
  standalone: true,
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit, OnDestroy {

  private intervalId: any;

  constructor(private readonly notificationService: NotificationService) {
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.notificationService.showNotification("Une nouvelle personne viens de souscrire a un service");
    }, 60000);
  }
}
