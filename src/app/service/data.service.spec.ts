import {TestBed, inject, async} from '@angular/core/testing';

import {DataService} from './data.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        DataService,
        {provide: APP_BASE_HREF, useValue: '/'},
      ],

    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(`should send a get request for data (students)`, async(inject([DataService, HttpTestingController],
    (service: DataService, backend: HttpTestingController) => {
      service.getData('/student/getAllStudents').subscribe((next) => {
        expect(next).toEqual({
          'studentId': 1,
          'fio': 'Vovk G.A.',
          'workGroup': 21,
          'yearsOld': 22
        });
      });

      backend.match({
        url: '/student/getAllStudents',
        method: 'GET'
      })[0].flush({
        'studentId': 1,
        'fio': 'Vovk G.A.',
        'workGroup': 21,
        'yearsOld': 22
      });
    })));


  it(`should get null when delete data`, async(inject([DataService, HttpTestingController],
    (service: DataService, backend: HttpTestingController) => {
      service.postData('/student/deleteStudent', 'student').subscribe((next) => {
        expect(next).toEqual(null);
      });

      backend.expectOne('/student/deleteStudent')
        .flush(null, {status: 200, statusText: 'Ok'});
    })));

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
