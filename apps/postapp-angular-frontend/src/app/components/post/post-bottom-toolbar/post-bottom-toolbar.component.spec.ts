import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBottomToolbarComponent } from './post-bottom-toolbar.component';

describe('PostBottomToolbarComponent', () => {
  let component: PostBottomToolbarComponent;
  let fixture: ComponentFixture<PostBottomToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBottomToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBottomToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
