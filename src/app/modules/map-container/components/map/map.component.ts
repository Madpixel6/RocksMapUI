import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import Map from 'ol/Map'

@Component({
  selector: 'app-map',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {

  @Input()
  map: Map | undefined;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    if(this.map != undefined){
      this.map.setTarget(this.elementRef.nativeElement);
    }
  }

}
