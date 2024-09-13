import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorSteuerungTsComponent } from './tor-steuerung.ts.component';

describe('TorSteuerungTsComponent', () => {
  let component: TorSteuerungTsComponent;
  let fixture: ComponentFixture<TorSteuerungTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorSteuerungTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorSteuerungTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
