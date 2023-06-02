import { Component } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  template: `
    <div class="row">
      <div class="col-3">
        <app-nav></app-nav>
      </div>
      <div class="col-9">
        <main class="content__layout-container">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class ContentLayoutComponent {}
