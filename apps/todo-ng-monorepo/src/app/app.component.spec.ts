import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './components/nx-welcome.component';
import { UnderlineHostComponent } from './components/underline-host.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        NxWelcomeComponent,
        UnderlineHostComponent,
        RouterTestingModule.withRoutes(appRoutes),
      ],
    }).compileComponents();
  });
  
  beforeEach(() => {
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome todo-ng-monorepo'
    );
  });

  it(`should have as title 'todo-ng-monorepo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-ng-monorepo');
  });
});
