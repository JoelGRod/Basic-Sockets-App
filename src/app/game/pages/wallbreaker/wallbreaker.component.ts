import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-wallbreaker',
  templateUrl: './wallbreaker.component.html',
  styleUrls: ['./wallbreaker.component.scss']
})
export class WallbreakerComponent implements AfterViewInit, OnDestroy {

  unityInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/wallbreaker/wallbreaker.json");
  }

  ngOnDestroy(): void {
    this.unityInstance.Quit( () => { console.log('done') } );
  }

}
