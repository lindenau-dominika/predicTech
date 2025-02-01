export interface Machine {
  machineId: number;
  name: string;
  state: boolean;
  timeOn: Date;
  dataset: number[];
}
