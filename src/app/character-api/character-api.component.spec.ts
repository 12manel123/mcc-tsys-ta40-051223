import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterApiComponent } from './character-api.component';

describe('CharacterApiComponent', () => {
  let component: CharacterApiComponent;
  let fixture: ComponentFixture<CharacterApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
