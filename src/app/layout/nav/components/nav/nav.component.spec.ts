import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalculationService } from 'src/app/worker/calculation.service';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [SharedModule],
      providers: [CalculationService],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1 with text Folders', () => {
    fixture.detectChanges();
    let heading = fixture.debugElement.nativeElement.querySelector('h1');
    expect(heading.textContent).toContain('Folders');
  });

  it('should have button with text compose', () => {
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Compose');
  });
});
