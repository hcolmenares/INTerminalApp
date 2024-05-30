import { StoryNode } from "../app/interfaces/StoryNode.interface";

export const NEWGAME_NODES: StoryNode[] = [
  {
    id: 0,
    message: "Ingresa tu nombre...",
    options: []
  },
  {
    id: 1,
    message: "¿Estás seguro que quieres usar este nombre?",
    options: [
      { text: "Si", nextId: 2 },
      { text: "No", nextId: 0 },
    ]
  },
  {
    id: 2,
    message: "Estamos trabajando en esta sección...",
    options: []
  },
];
