import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormatUrlComponent} from './format-url.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {UrlShortenerService} from "../url-shortener.service";
import {HttpTestingController} from "@angular/common/http/testing";
import {of} from "rxjs";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
describe('FormatUrlComponent', () => {
  let component: FormatUrlComponent;
  let fixture: ComponentFixture<FormatUrlComponent>;
  let urlShortenerService: UrlShortenerService;
  let httpMock: HttpTestingController;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatUrlComponent ],
      imports: [ReactiveFormsModule],
      providers : [FormBuilder,UrlShortenerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatUrlComponent);
    component = fixture.componentInstance;
    fb = fixture.debugElement.injector.get(FormBuilder);
    urlShortenerService = fixture.debugElement.injector.get(UrlShortenerService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call expand a URL method', () => {
    // GIVEN
    const spy1 = spyOn(urlShortenerService, 'shortenUrl').and.returnValue(
      of({
        "longUrl": "https://www.example.com/blog/we-did-something-cool",
        "shortUrl": "http://localhost:8080/bd673c"
      })
    );

    component.expandUrlForm = fb.group({
      shortUrl: ['http://localhost:8080/bd673c'],
    });

    expect(spy1).toHaveBeenCalled();
    // WHEN
    component.expandUrl();

    // THEN
    expect(component.expandedUrl).toEqual('https://www.example.com/blog/we-did-something-cool');
  });

});
