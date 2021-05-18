import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutPutPostComponent } from './out-put-post.component';

describe('OutPutPostComponent', () => {
  let component: OutPutPostComponent;
  let fixture: ComponentFixture<OutPutPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutPutPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutPutPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
