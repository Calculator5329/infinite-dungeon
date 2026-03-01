// src/services/api.ts
export async function generateMonster(seed: string) {
    // In the MVP we just return a static monster
    return {
      name: 'Goblin',
      hp: 20,
      damage: 5,
      sprite: '/assets/goblin.png',
    };
  }
  