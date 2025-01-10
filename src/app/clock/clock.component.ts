import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, repeat } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  timeInSeconds: number = 0;
  formattedTime: string = '00:00';
  isRunning: boolean = true;
  private subscription: any;

  constructor() {
    this.startClock();
  }

  startClock(): void {
    this.subscription = interval(1000) // นับวินาทีทุกๆ 1 วินาที
      .pipe(
        map(() => this.timeInSeconds++), // เพิ่มเวลาทุกๆ 1 วินาที
        map((timeInSeconds) => {
          if (timeInSeconds >= 60) {
            this.timeInSeconds = 0;
          }
          return this.formatTime(timeInSeconds); // แปลงเวลาเป็น MM:SS
        }),
        repeat() // นับวนซ้ำไปเรื่อยๆ
      )
      .subscribe((formattedTime) => {
        this.formattedTime = formattedTime; // อัปเดตเวลาแสดงผล
      });
  }

  toggleClock(): void {
    if (this.isRunning) {
      this.subscription.unsubscribe(); // หยุดนาฬิกา
    } else {
      this.startClock(); // เริ่มนาฬิกา
    }
    this.isRunning = !this.isRunning;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${this.pad(minutes)}:${this.pad(secs)}`;
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
