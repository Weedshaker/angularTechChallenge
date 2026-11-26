import {
  AfterContentInit,
  Component,
  ContentChildren,
  input,
  booleanAttribute,
  OnDestroy,
  QueryList
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LibExpandablePanel } from '../expandable-panel/expandable-panel.component';

@Component({
  selector: 'lib-expandable-panel-group',
  template: `<ng-content />`
})
export class LibExpandablePanelGroup implements AfterContentInit, OnDestroy {

  public closeOthers = input(false, {
    transform: booleanAttribute
  });

  @ContentChildren(LibExpandablePanel)
  private panels!: QueryList<LibExpandablePanel>;

  private subscriptions = new Subscription();
  private panelSubscriptions = new Subscription();

  ngAfterContentInit() {
    this.watchPanels();

    this.subscriptions.add(
      this.panels.changes.subscribe(() => this.watchPanels())
    );
  }

  private watchPanels() {
    this.panelSubscriptions.unsubscribe();
    this.panelSubscriptions = new Subscription();
    this.panels.forEach(panel => {
      this.panelSubscriptions.add(
        panel.open.subscribe(isOpen => {
          if (isOpen && this.closeOthers()) {
            this.panels.forEach(otherPanel => {
              if (otherPanel !== panel) {
                otherPanel.open.set(false);
              }
            });
          }
        })
      );
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.panelSubscriptions.unsubscribe();
  }
}
