import { StoryNode } from "../app/interfaces/StoryNode.interface";

export const MENU_NODES: StoryNode[] = [
  {
    id: 0,
    message: "¡Bienvenido al terminal de novelas interactivas!",
    options: [
      { text: "Nueva Partida", nextId: 1 },
      { text: "Continuar", nextId: 2 },
      { text: "Cargar", nextId: 3 }
    ]
  },
  {
    id: 2,
    message: "Seleccionar la partida:",
    options: []
  },
  {
    id: 3,
    message: "Estamos trabajando en esta funcionalidad.",
    options: []
  },
];
