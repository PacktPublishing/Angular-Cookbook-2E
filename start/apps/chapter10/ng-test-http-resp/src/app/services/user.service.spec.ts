import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected user data (HttpClient called once)', (done) => {
    const expectedData = [
      { id: 1, name: 'User A' },
      { id: 2, name: 'User B' },
    ];

    service.getUsers().subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
        done();
      },
      error: (err) => {
        console.log('Error: ', err);
      },
    });

    const req = httpTestingController.expectOne('assets/fake-users.json');
    expect(req.request.method).toEqual('GET');

    req.flush(expectedData); // Respond with mocked data
  });
});
