import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss']
})
export class MinesweeperComponent implements AfterViewInit, OnDestroy {

  unityInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/minesweeper/minesweeper.json");
  }

  ngOnDestroy(): void {
    this.unityInstance.Quit( () => { console.log('done') } );
  }

}
