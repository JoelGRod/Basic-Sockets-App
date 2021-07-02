import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-game-loader',
  templateUrl: './game-loader.component.html',
  styleUrls: ['./game-loader.component.scss']
})
export class GameLoaderComponent implements AfterViewInit, OnDestroy {

  @ViewChild('unityContainer') unityContainer!: ElementRef<HTMLElement>;
  // @Input() game_route: string = '';

  public unityInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.unityInstance = UnityLoader.instantiate(this.unityContainer.nativeElement, "assets/games/pacman/pacman.json");
  }

  ngOnDestroy(): void {
    this.unityInstance.Quit( () => { console.log('done') } );
  }

}
