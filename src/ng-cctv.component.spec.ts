import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { NgCCTVComponent } from 'ng-cctv.component';

describe('NgCCTVComponent', () => {

  let comp:    NgCCTVComponent;
  let fixture: ComponentFixture<NgCCTVComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCCTVComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(NgCCTVComponent);

    comp = fixture.componentInstance; // NgCCTVComponent test instance

    // query for the <div> by CSS element selector
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });
});
