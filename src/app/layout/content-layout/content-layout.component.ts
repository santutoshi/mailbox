import { Component } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  template: `
    <div class="page">
      <app-nav></app-nav>
      <main class="content__layout-container">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class ContentLayoutComponent {}
