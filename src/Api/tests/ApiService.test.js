import axios from 'axios';
import ApiService from '../ApiService';

// Mock axios module
jest.mock('axios');

describe('ApiService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Test "getCollection" method for getting data from the API with correct parameters', async () => {
    const mockResponse = {
      data: { artObjects: [{ id: 'en-AK-MAK-84', title: 'Guanyin' }] },
    };
    axios.get.mockResolvedValue(mockResponse);

    const query = 'Guanyin';
    const page = 1;
    const expectedUrl = 'https://www.rijksmuseum.nl/api/en/collection';
    const expectedParams = {
      params: {
        ps: 20,
        key: process.env.REACT_APP_RIJKSMUSEUM_API_KEY,
        p: page,
        q: query,
        imgonly: true,
      },
    };

    const response = await ApiService.getCollection(query, page);

    expect(response).toEqual(mockResponse);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expectedUrl, expectedParams);
  });
});
