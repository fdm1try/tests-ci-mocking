import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Getting user level', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 2,
  });

  const result = getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
  expect(result).toBe('Ваш текущий уровень: 2');
});

test('Getting user level when API is not available', () => {
  fetchData.mockReturnValue({
    status: 'error',
  });

  const result = getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
  expect(result).toBe('Информация об уровне временно недоступна');
});
