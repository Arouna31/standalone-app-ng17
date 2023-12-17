import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  domainName = "www.aprendetypescript.com";
  price = 100;
}
