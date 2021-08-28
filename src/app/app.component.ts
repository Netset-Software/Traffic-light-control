import { Component, OnInit } from '@angular/core';
import { LightModel } from './traffic-light.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'traffic-light';
  timer1 = 30;
  timer2 = 60;
  timer3 = 90;
  timer4 = 120;
  timer = 0;
  lights: LightModel[] = [
    {
      red: true,
      white: false,
      green: false,
      yellow: false,
    },
    {
      red: true,
      white: false,
      green: false,
      yellow: false,
    },
    {
      red: true,
      white: false,
      green: false,
      yellow: false,
    },
    {
      red: true,
      white: false,
      green: false,
      yellow: false,
    },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.timer = this.timer + 1;
      this.timer1 = this.timer1 - 1;
      this.timer2 = this.timer2 - 1;
      this.timer3 = this.timer3 - 1;
      this.timer4 = this.timer4 - 1;
      if (this.timer1 < 0) {
        this.timer1 = 120;
      }
      if (this.timer2 < 0) {
        this.timer2 = 120;
      }
      if (this.timer3 < 0) {
        this.timer3 = 120;
      }
      if (this.timer4 < 0) {
        this.timer4 = 120;
      }
      if (this.timer > 0 && this.timer < 30) {
        if (this.timer1 < 5) {
          this.lights[0] = {
            red: false,
            white: false,
            green: false,
            yellow: true,
          };
        } else {
          this.lights[0] = {
            red: false,
            white: false,
            green: true,
            yellow: false,
          };
        }
      } else {
        this.lights[0] = {
          red: true,
          white: false,
          green: false,
          yellow: false,
        };
      }
      if (this.timer > 30 && this.timer < 60) {
        if (this.timer2 < 5) {
          this.lights[1] = {
            red: false,
            white: false,
            green: false,
            yellow: true,
          };
        } else {
          this.lights[1] = {
            red: false,
            white: false,
            green: true,
            yellow: false,
          };
        }
      } else {
        this.lights[1] = {
          red: true,
          white: false,
          green: false,
          yellow: false,
        };
      }
      if (this.timer > 60 && this.timer < 90) {
        if (this.timer3 < 5) {
          this.lights[2] = {
            red: false,
            white: false,
            green: false,
            yellow: true,
          };
        } else {
          this.lights[2] = {
            red: false,
            white: false,
            green: true,
            yellow: false,
          };
        }
      } else {
        this.lights[2] = {
          red: true,
          white: false,
          green: false,
          yellow: false,
        };
      }

      if (this.timer > 90 && this.timer < 120) {
        if (this.timer4 < 5) {
          this.lights[3] = {
            red: false,
            white: false,
            green: false,
            yellow: true,
          };
        } else {
          this.lights[3] = {
            red: false,
            white: false,
            green: true,
            yellow: false,
          };
        }
      } else {
        this.lights[3] = {
          red: true,
          white: false,
          green: false,
          yellow: false,
        };
      }
      if (this.timer > 120) {
        this.timer = 0;
      }
    }, 1000);
  }
}
