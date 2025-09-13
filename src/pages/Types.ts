export interface navItem = { 
  label:string,to:string
};
export type sortingStep = number[];
export type ReplayType = {
  Replay:boolean;
  triggerReplay: ()=>void;
};