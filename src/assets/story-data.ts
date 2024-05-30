import { StoryNode } from "../app/interfaces/StoryNode.interface";

export const STORY_NODES: StoryNode[] = [
  {
    id: 0,
    message: "Te despiertas en una habitación oscura con una única puerta.",
    options: [
      { text: "Abrir la puerta", nextId: 1 },
      { text: "Quedarte en la habitación", nextId: 2 }
    ]
  },
  {
    id: 1,
    message: "La puerta conduce a un pasillo iluminado.",
    options: [
      { text: "Caminar por el pasillo", nextId: 3 },
      { text: "Regresar a la habitación", nextId: 2 }
    ]
  },
  {
    id: 2,
    message: "Te quedas en la habitación y eventualmente te duermes.",
    options: [
      { text: "Despertar nuevamente", nextId: 1 }
    ]
  },
  {
    id: 3,
    message: "Encuentras una salida al final del pasillo. ¡Felicidades, has escapado!",
    options: [
      { text: "Volver a empezar", nextId: 0 },
      { text: "Salir al menú", nextId: 4 }
    ]
  }
];
