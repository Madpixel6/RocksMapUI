import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CountryEnum } from '../../enums/country.enum';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit {

  Countries = CountryEnum;
  faCaretDown = faCaretDown;

  constructor() { }

  ngOnInit(): void {
  }

}
