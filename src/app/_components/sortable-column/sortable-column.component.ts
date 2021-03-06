import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';

import { SortService } from '../../_services/sort.service';
@Component({
  selector: 'app-sortable-column',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.css']
})
export class SortableColumnComponent implements OnInit, OnDestroy {

  constructor(private sortService: SortService) { }
  @Input('app-sortable-column') sortableColumn: string;
  @Input('sort-direction') sortDirection: string;
  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.sortService.columnSorted({ sortColumn: this.sortableColumn, sortDirection: this.sortDirection });
  }
  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      // reset this column's sort direction to hide the sort icons
      if (this.sortableColumn !== event.sortColumn) {
          this.sortDirection = '';
      }
  });
  }
  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
}

}
