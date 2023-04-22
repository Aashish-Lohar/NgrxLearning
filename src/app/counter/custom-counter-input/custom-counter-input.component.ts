import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeProjectName, customIncrement } from '../state/counter.action';
import { getProjectName } from '../state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  customValue!:number;
  projectName$!:Observable<string>;
  constructor(private store:Store<{counter:CounterState}>){}
  ngOnInit(){
    // this.store.select(getProjectName).subscribe(data=>{
    //   console.log('changeProjectName observable called');
      
    //   this.projectName = data
    // })
    this.projectName$ = this.store.select(getProjectName);
  }
  onAdd(){
    this.store.dispatch(customIncrement({count:this.customValue}))
  }
  onChangeProjectName(){
    this.store.dispatch(changeProjectName());
  }
}
