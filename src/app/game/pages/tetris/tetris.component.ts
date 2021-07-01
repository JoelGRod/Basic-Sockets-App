import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})
export class TetrisComponent implements AfterViewInit, OnDestroy {

  unityInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/tetris/tetris.json");
  }

  ngOnDestroy(): void {
    this.unityInstance.Quit( () => { console.log('done') } );
  }

}
