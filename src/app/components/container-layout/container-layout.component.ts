import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './container-layout.component.html',
  styleUrl: './container-layout.component.scss'
})
export class ContainerLayoutComponent {

}
