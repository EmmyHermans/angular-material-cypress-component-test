import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = 0;

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }
}
