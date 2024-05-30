export interface NPC {
  name: string;
  status: Status;
  libid: number;
  temper: number;
  progress: number;
}

export enum Status {
  'Normal', 'Aroused', 'Excited', 'Corrupted', 'Annoyed', 'Angry'
}
