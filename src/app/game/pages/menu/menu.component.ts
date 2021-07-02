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
        'A copy of the classic PacMan made with the Unity\'s 2D engine.',
        'Physics systems are not used because the result is not suitable for this type of game.',
        'An array is used as a grid, each position of the characters takes one of these positions per movement, in turn, cells with walls are not accessible.',
        'In short, this game has been made in the most traditional way possible using Unity to obtain the best result.',
        'Menu Music: Brute Force - Daniel Deluxe',
        'Game Music: Nightcrawler - Patrick Cowley'
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
        'A WallBreaker clone made with the Unity\'s 2D engine.',
        'In this game the unity physics system is used, being very useful for the movement of the ball and the collisions with the bricks.',
        'It only consists of one level, just for demonstrative purposes.',
        'Game Music: Divide - Magna'
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
        'Another classic clone made with the Unity\'s 2D engine, MineSweeper.',
        'It uses a painting system similar to the color fill used in programs such as photoshop, or also called the FloodFill algorithm.',
        'It consists of 5 levels, easy, normal, hard, very hard and inferno, but the last two are so complicated that they are practically unplayable.',
        'Menu Music: Butterfly - Gostes',
        'Game Music: Arcane - Shah'
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
        'A classic clone made with the Unity\'s 2D engine, it\'s tetris time.',
        'We return to the grid system using two-dimensional arrays, for this type of classic games it is what works best.',
        'A single endless level, the only thing that counts is the score you get.',
        'A timeless classic.',
        'Menu Music: Stone in Focus - Aphex Twin',
        'Game Music: Oneiric - Lazerhawk'
      ],
      link: '/game/tetris'
    },
    {
      avatar_img: '/assets/images/logos/unity.png',
      title: 'Running Girl',
      subtitle: 'Unity 2019',
      image: '/assets/images/games/running.png',
      image_alt_text: 'Running Girl ingame image',
      description: [
        'An unfinished little game using Unity\'s 2D engine.',
        'I wanted to test the parallax effect in the backgrounds, animate a character created by myself and the random generation of the path the protagonist moves on.',
        'It is not a big deal and there is a lot to fix, it is one of those projects that are left half but I put it here since I do not think I will ever take it up again.',
        'Menu Music: Super Mario Main Theme - Koji Kondo',
        'Game Music: Territory - Daniel Deluxe'
      ],
      link: '/game/running'
    },
  ];

  constructor() { }

}
