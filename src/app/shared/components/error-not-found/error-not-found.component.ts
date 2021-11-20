import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
