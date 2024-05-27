import { StoryNode } from "../app/interfaces/StoryNode.interface";

export const STORY_NODES: StoryNode[] = [
  {
    id: 0,
    message: "¡Bienvenido al terminal de novelas interactivas!",
    options: [
      { text: "Nueva Partida", nextId: 2 },
      { text: "Continuar", nextId: 0 },
      { text: "Cargar", nextId: 0 }
    ]
  },
  {
    id: 1,
    message: "Seleccionar la partida:",
    options: []
  },
  {
    id: 2,
    message: "Te despiertas en una habitación oscura con una única puerta.",
    options: [
      { text: "Abrir la puerta", nextId: 2 },
      { text: "Quedarte en la habitación", nextId: 3 }
    ]
  },
  {
    id: 3,
    message: "La puerta conduce a un pasillo iluminado.",
    options: [
      { text: "Caminar por el pasillo", nextId: 4 },
      { text: "Regresar a la habitación", nextId: 1 }
    ]
  },
  {
    id: 4,
    message: "Te quedas en la habitación y eventualmente te duermes.",
    options: [
      { text: "Despertar nuevamente", nextId: 1 }
    ]
  },
  {
    id: 5,
    message: "Encuentras una salida al final del pasillo. ¡Felicidades, has escapado!",
    options: [
      { text: "Volver a empezar", nextId: 1 }
    ]
  }
];
