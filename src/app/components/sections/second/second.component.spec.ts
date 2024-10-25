import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionsComponent } from './second.component';

describe('SecondComponent', () => {
  let component: SecondSectionsComponent;
  let fixture: ComponentFixture<SecondSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondSectionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
