import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { untilDestroy } from '@ngrx-utils/store';
import { map } from 'rxjs/operators';

import * as fromBooks from '../reducers';
import * as book from '../actions/book';

/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
@Component({
  selector: 'bc-view-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-selected-book-page></bc-selected-book-page>
  `
})
export class ViewBookPageComponent implements OnDestroy {
  constructor(store: Store<fromBooks.State>, route: ActivatedRoute) {
    route.params
      .pipe(map(params => new book.Select(params.id)), untilDestroy(this))
      .subscribe(store);
  }

  ngOnDestroy() {}
}
