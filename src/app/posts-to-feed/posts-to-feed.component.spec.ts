import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsToFeedComponent } from './posts-to-feed.component';

describe('PostsToFeedComponent', () => {
  let component: PostsToFeedComponent;
  let fixture: ComponentFixture<PostsToFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsToFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsToFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
