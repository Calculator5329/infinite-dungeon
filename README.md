# Infinite Dungeon

A Phaser 3 dungeon game built with React and TypeScript featuring procedural dungeon generation and AI-powered monster encounters.

## What It Is

An interactive dungeon crawler game that combines Phaser 3 for game logic with React for UI management. Players navigate through procedurally generated dungeons, encounter monsters, and engage in real-time combat. The game integrates with an AI backend to generate unique monsters with dynamic attributes.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Game Engine**: Phaser 3
- **Build**: Vite + Turbopack
- **UI Icons**: Phosphor Icons
- **Development**: ESLint, Prettier

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
cd infinite-dungeon
npm install
```

### Development

```bash
npm run dev
```

The game will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Game Features

- **Dungeon Navigation**: Move your character through grid-based dungeon rooms with arrow keys
- **Monster Generation**: Generate AI-powered monsters with randomized stats (name, HP, damage)
- **Tile-based Graphics**: Simple yet effective 32x32 pixel tile-based rendering
- **Player Movement**: Smooth character movement with collision detection

## Project Structure

```
infinite-dungeon/
├── src/
│   ├── App.tsx           # Main React component with game UI
│   ├── PhaserGame.tsx    # Phaser game integration
│   ├── services/         # API service for monster generation
│   └── assets/           # Game sprites and images
├── public/               # Static assets
├── index.html           # Entry point
└── package.json         # Dependencies and scripts
```

## Controls

- **Arrow Keys**: Move character up, down, left, right
- **Generate Monster Button**: Create a new AI-powered monster encounter

## Development Notes

- Uses Vite for fast HMR and development experience
- TypeScript provides type safety across the codebase
- Phaser Game instance is properly destroyed on component unmount
- Monster generation uses API calls to backend service
