import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  standalone: true,
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit,OnDestroy{
  targetDate: Date = new Date('2025-12-31T23:59:59'); // Date cible
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  interval: any;

  ngOnInit() {
    this.updateCountdown();
    this.interval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

}
