import { Component } from '@angular/core';
// Interfaces
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public cards: CardInfo[] = [
    {
      avatar_img: '/assets/images/logos/unity.png',
      title: 'PacMan',
      subtitle: 'Unity 2019',
      image: '/assets/images/games/pacman.png',
      image_alt_text: 'Pac-Man ingame image',
      description: [
        'A copy of the classic PacMan made with the unity 2D engine.',
        'Physics systems are not used because the result is not suitable for this type of game.',
        'An array is used as a grid, each position of the characters takes one of these positions per movement, in turn, cells with walls are not accessible.',
        'In short, this game has been made in the most traditional way possible using Unity to obtain the best result.'
      ],
      link: '/game/pacman'
    },
    {
      avatar_img: '/assets/images/logos/unity.png',
      title: 'Wall Breaker',
      subtitle: 'Unity 2019',
      image: '/assets/images/games/wallbreaker.png',
      image_alt_text: 'Wall Breaker ingame image',
      description: [
        'A WallBreaker clone made with the unity 2D engine.',
        'In this game the unity physics system is used, being very useful for the movement of the ball and the collisions with the bricks.',
        'It only consists of one level, just for demonstrative purposes.'
      ],
      link: '/game/wallbreaker'
    },
    {
      avatar_img: '/assets/images/logos/unity.png',
      title: 'Mine Sweeper',
      subtitle: 'Unity 2019',
      image: '/assets/images/games/minesweeper.png',
      image_alt_text: 'Mine Sweeper ingame image',
      description: [
        'Another classic clone made with the unity 2D engine, MineSweeper.',
        'It uses a painting system similar to the color fill used in programs such as photoshop, or also called the FloodFill algorithm.',
        'It consists of 5 levels, easy, normal, hard, very hard and inferno, but the last two are so complicated that they are practically unplayable.'
      ],
      link: '/game/minesweeper'
    },
    {
      avatar_img: '/assets/images/logos/unity.png',
      title: 'Tetris',
      subtitle: 'Unity 2019',
      image: '/assets/images/games/tetris.png',
      image_alt_text: 'Tetris ingame image',
      description: [
        'A classic clone made with the unity 2D engine, its tetris time.',
        'We return to the grid system using two-dimensional arrays, for this type of classic games it is what works best.',
        'A single endless level, the only thing that counts is the score you get.',
        'A timeless classic.'
      ],
      link: '/game/tetris'
    },
  ];

  constructor() { }

}
