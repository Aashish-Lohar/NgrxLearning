import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent{
  counter!:number;
  counter$!:Observable<{counter:number}>;
  constructor(private store:Store<{counter:CounterState}>){}

  ngOnInit(){
    // this.store.select('counter').subscribe((data)=>{
    //   this.counter = data.counter;
    // })
    this.counter$ = this.store.select('counter');
  }
}