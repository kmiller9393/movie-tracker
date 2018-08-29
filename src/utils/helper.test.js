import { cleanMurrayData } from './helper';
import { mockMurrayData } from './mockData/mockMurrayData';
jest.mock('./__mocks__/apiCalls');

describe('cleanMurrayData', () => {
  it('should return the correct data', async () => {
    const fetchedMurrayData = await cleanMurrayData();

    expect(fetchedMurrayData).toEqual(mockMurrayData);
  });
});
