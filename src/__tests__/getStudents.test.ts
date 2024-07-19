import axios from 'axios';
import { getStudents } from '../lib/api'; // Ensure the path is correct

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getStudents', () => {
  const originalConsoleLog = console.log;

  beforeEach(() => {
    console.log = jest.fn(); // Mock console.log to suppress logs during tests
  });

  afterEach(() => {
    console.log = originalConsoleLog; // Restore original console.log after each test
  });

  it('fetches successfully data from an API', async () => {
    const data = {
      users: [
        {
          id: 1,
          first_name: 'Kayla',
          last_name: 'Lopez',
          email: 'kayla.lopez.1@slingacademy.com',
          phone: '+1-697-415-3345x5215',
          gender: 'female',
          date_of_birth: '2002-04-25T00:00:00',
          street: '3388 Roger Wells Apt. 010',
          city: 'Humphreyfurt',
          state: 'Vermont',
          country: 'Jordan',
          zipcode: '79574',
          longitude: 112.16014,
          latitude: 13.032103,
          job: 'Herbalist',
          profile_picture: 'https://api.slingacademy.com/public/sample-users/1.png',
        },
      ],
    };

    mockedAxios.get.mockResolvedValue({ data });

    const result = await getStudents(0, 10, 'Jordan');
    expect(result).toEqual(data.users); // Matching the returned users array
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    const result = await getStudents(0, 10, 'Jordan');
    expect(result).toEqual([]); // Adjusted to match the returned empty array on error
  });
});
