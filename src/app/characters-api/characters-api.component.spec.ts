import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersApiComponent } from './characters-api.component';

describe('CharactersApiComponent', () => {
  let component: CharactersApiComponent;
  let fixture: ComponentFixture<CharactersApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
