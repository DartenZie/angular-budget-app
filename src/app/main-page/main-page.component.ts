import {Component, OnInit} from '@angular/core';
import {BudgetItem} from '../../shared/models/budget-item.model';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';
import {Store} from '@ngrx/store';

import {increment, decrement} from '../state/total.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor(private store: Store<{ total: number }>) {
  }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem): void {
    this.budgetItems.push(newItem);
    this.store.dispatch(increment({ amount: newItem.amount }));
  }

  deleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.store.dispatch(decrement({ amount: item.amount }));
  }

  updateItem(updateEvent: UpdateEvent): void {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    // update the total budget
    this.store.dispatch(decrement({ amount: updateEvent.old.amount }));
    this.store.dispatch(increment({ amount: updateEvent.new.amount }));
  }
}
