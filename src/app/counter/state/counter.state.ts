export interface CounterState{
    counter:number;
    projectName:string;
}
export const initialState:CounterState = {
    counter: 7,
    projectName: "Angular Learning"
}