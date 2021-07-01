import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.scss']
})
export class RunningComponent implements AfterViewInit, OnDestroy {

  unityInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/runninggirl/runninggirl.json");
  }

  ngOnDestroy(): void {
    this.unityInstance.Quit( () => { console.log('done') } );
  }

}
