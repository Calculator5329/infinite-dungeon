import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

export function PhaserGame() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 640,   // 20 tiles * 32 px
      height: 480,  // 15 tiles * 32 px
      parent: mountRef.current,
      backgroundColor: '#242424',
      scene: [DungeonScene],
      physics: {
        default: 'arcade',
        arcade: { debug: false },
      },
    };

    const game = new Phaser.Game(config);

    return () => game.destroy(true);
  }, []);

  return <div ref={mountRef} />;
}

/* ---------- DungeonScene ---------- */
class DungeonScene extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private player!: Phaser.Physics.Arcade.Sprite;
  private map!: Phaser.Tilemaps.TilemapType<{ type: string }>;

  constructor() {
    super({ key: 'DungeonScene' });
  }

  preload() {
    // simple 32x32 tiles
    this.load.image('floor', '/assets/floor.png');
    this.load.image('wall', '/assets/wall.png');
    this.load.image('player', '/assets/player.png');
  }

  create() {
    // build a 10x10 grid of floor tiles
    const tileSize = 32;
    const width = 20;
    const height = 15;

    const map = this.make.tilemap({
      tileWidth: tileSize,
      tileHeight: tileSize,
      width,
      height,
    });

    const tiles = map.addTilesetImage('floor');

    // simple floor layer
    const layer = map.createBlankLayer('layer1', tiles);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // all floor except borders -> walls
        const type = x === 0 || y === 0 || x === width - 1 || y === height - 1
          ? 'wall'
          : 'floor';
        const tile = map.putTileAtWorldXY(0, x * tileSize, y * tileSize, layer);
        tile.setSpriteName(type);
      }
    }

    // Render the sprites for walls vs floor
    layer.eachTile((tile) => {
      const spriteName = tile.getSpriteName();
      const spriteTexture = spriteName === 'wall' ? 'wall' : 'floor';
      const tileX = tile.getCenterX();
      const tileY = tile.getCenterY();
      this.add.sprite(tileX, tileY, spriteTexture).setOrigin(0.5);
    });

    // Add player
    this.player = this.physics.add.sprite(width * tileSize / 2, height * tileSize / 2, 'player')
      .setDepth(10);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (!this.cursors) return;

    const speed = 200;
    const body = this.player.body as Phaser.Physics.Arcade.Body;
    body.setVelocity(0);

    if (this.cursors.left.isDown) {
      body.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      body.setVelocityX(speed);
    }
    if (this.cursors.up.isDown) {
      body.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      body.setVelocityY(speed);
    }
  }
}
