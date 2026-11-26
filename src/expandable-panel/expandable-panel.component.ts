import { Component, model } from '@angular/core';

@Component({
  selector: 'lib-expandable-panel',
  templateUrl: './expandable-panel.component.html',
  styleUrls: ['./expandable-panel.component.scss'],
})
export class LibExpandablePanel {
  public open = model(false);
}
