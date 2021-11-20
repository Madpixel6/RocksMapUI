import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { View } from 'ol';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CountryEnum } from 'src/app/shared/enums/country.enum';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapContainerComponent implements OnInit, OnDestroy {

  map: Map | undefined;
  selectedCountry: CountryEnum = CountryEnum.All;

  private isDestroyed$ = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
    .pipe(takeUntil(this.isDestroyed$))
    .subscribe(params => {
      this.selectedCountry = params['country'];
    });
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ]
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
