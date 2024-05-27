export interface StoryNode {
  id: number;
  message: string;
  options: Option[];
}

export interface Option {
  text: string;
  nextId: number;
}
