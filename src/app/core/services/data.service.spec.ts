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

  it(`should send a get request for data (tours)`, async(inject([DataService, HttpTestingController],
    (service: DataService, backend: HttpTestingController) => {
      service.getData('/tour/tours').subscribe((next) => {
        expect(next).toEqual({
          'tourId': 1,
          'theme': 'Italian Renaissance',
          'typeOfExhibits': 'paintings',
          'duration': 2,
          'cost': 220
        });
      });

      backend.match({
        url: '/tour/tours',
        method: 'GET'
      })[0].flush({
        'tourId': 1,
        'theme': 'Italian Renaissance',
        'typeOfExhibits': 'paintings',
        'duration': 2,
        'cost': 220
      });
    })));


  it(`should get null when delete data`, async(inject([DataService, HttpTestingController],
    (service: DataService, backend: HttpTestingController) => {
      service.postData('/tour/tours/delete/{tourId}', 'tourId').subscribe((next) => {
        expect(next).toEqual(null);
      });

      backend.expectOne('/tour/tours/delete/{tourId}')
        .flush(null, {status: 200, statusText: 'Ok'});
    })));

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
