import { Component, signal } from '@angular/core';
import { InvestmentResult } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);

  
}
