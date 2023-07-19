import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { User } from '../user.interface';

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
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'User A',
        email: 'userA@example.com',
        username: 'userA',
        address: {
          street: 'sample street 1',
          suite: '123 ABC',
          city: 'Dream city',
          zipcode: '4567'
        }
      },
      {
        id: 2,
        name: 'User B',
        email: 'userA@example.com',
        username: 'userA',
        address: {
          street: 'sample street 2',
          suite: '123 ABC',
          city: 'Dream city',
          zipcode: '890'
        }
      },
    ];

    service.getUsers().subscribe({
      next: (data) => {
        expect(data).toEqual([{
          ...mockUsers[0],
          fullAddress: 'sample street 1, 123 ABC, Dream city, 4567'
        }, {
          ...mockUsers[1],
          fullAddress: 'sample street 2, 123 ABC, Dream city, 890'
        }]);
        done();
      },
      error: (err) => {
        console.log('Error: ', err);
      },
    });

    const req = httpTestingController.expectOne('assets/users.json');
    expect(req.request.method).toEqual('GET');

    req.flush(mockUsers); // Respond with mocked data
  });
});
