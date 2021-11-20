import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CountryEnum } from '../../enums/country.enum';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit {

  Countries = CountryEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
