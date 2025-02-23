export interface Machine {
  machine_id: number;
  name: string;
  state: boolean;
  timeOn: Date;
  dataset: number[];
}
