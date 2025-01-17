import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCardComponent } from './audio-card.component';

describe('AudioCardComponent', () => {
  let component: AudioCardComponent;
  let fixture: ComponentFixture<AudioCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioCardComponent]
    });
    fixture = TestBed.createComponent(AudioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
