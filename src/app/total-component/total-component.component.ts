import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-total-component',
  templateUrl: './total-component.component.html',
  styleUrls: ['./total-component.component.scss']
})
export class TotalComponentComponent implements OnInit {
  total$: Observable<number>;

  constructor(private store: Store<{ total: number }>) {
    this.total$ = store.select('total');
  }

  ngOnInit(): void {
  }
}
