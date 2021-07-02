import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-pacman',
  templateUrl: './pacman.component.html',
  styleUrls: ['./pacman.component.scss']
})
export class PacmanComponent  {
  
  unityInstance: any;

  constructor() { }
  
  // ngAfterViewInit(): void {
  //   this.unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/pacman/pacman.json");
  // }

  // ngOnDestroy(): void {
  //   this.unityInstance.Quit( () => { console.log('done') } );
  // }

}
