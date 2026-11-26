import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LibExpandablePanel } from './expandable-panel/expandable-panel.component';
import { LibExpandablePanelGroup } from './expandable-panel-group/expandable-panel-group.component';

@Component({
  selector: 'app-root',
  imports: [
    LibExpandablePanel,
    LibExpandablePanelGroup
  ],
  template: /* html */`
  <h1>Tech challenge</h1>
  <h2>do not close others</h2>
  <section class=global>
    <lib-expandable-panel-group>
      <lib-expandable-panel>
        <h3>Choose your plan</h3>
        <p>Choose your plan - content</p>
      </lib-expandable-panel>
      <lib-expandable-panel [open]="true">
        <h3>Add team members</h3>
        <p>Invite collaborators by email and assign their workspace roles before launch.</p>
      </lib-expandable-panel>
      <lib-expandable-panel>
        <h3>Set payment details</h3>
        <p>Set payment details - content</p>
      </lib-expandable-panel>
      <lib-expandable-panel>
        <h3>Review and confirm <span class=italic>(title can be a node)</span></h3>
        <p>Review and confirm <span class=italic>(title can be a node)</span> - content</p>
      </lib-expandable-panel>
    </lib-expandable-panel-group>
  </section>
  <hr>
  <h2>close others</h2>
  <section class=global>
    <lib-expandable-panel-group closeOthers>
      <lib-expandable-panel>
        <h3>Choose your plan</h3>
        <p>Choose your plan - content</p>
      </lib-expandable-panel>
      <lib-expandable-panel [open]="true">
        <h3>Add team members</h3>
        <p>Invite collaborators by email and assign their workspace roles before launch.</p>
      </lib-expandable-panel>
      <lib-expandable-panel>
        <h3>Set payment details</h3>
        <p>Set payment details - content</p>
      </lib-expandable-panel>
      <lib-expandable-panel>
        <h3>Review and confirm <span class=italic>(title can be a node)</span></h3>
        <p>Review and confirm <span class=italic>(title can be a node)</span> - content</p>
      </lib-expandable-panel>
    </lib-expandable-panel-group>
  </section>
  `,
})
export class App {
  
}

bootstrapApplication(App);
