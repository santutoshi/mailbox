import { Component } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  template: `
    <div class="row">
      <app-nav></app-nav>

      <div class="col-10">
        <main class="content__layout-container">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class ContentLayoutComponent {}
