import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-game-loader',
  templateUrl: './game-loader.component.html',
  styleUrls: ['./game-loader.component.scss']
})
export class GameLoaderComponent implements AfterViewInit, OnDestroy {

  @ViewChild('unityContainer') unityContainer!: ElementRef<HTMLElement>;
  @Input() game_route: string = '';
  @Input() title: string = 'Game';

  public unityInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.unityInstance = UnityLoader.instantiate(this.unityContainer.nativeElement, this.game_route);
  }

  ngOnDestroy(): void {
    this.unityInstance.Quit( () => { console.log('Game Over') } );
  }

}
