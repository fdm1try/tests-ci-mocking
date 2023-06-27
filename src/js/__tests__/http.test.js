import fetchData from '../http';

test('Should throw an error', () => {
  function callAPI() {
    fetchData('http://localhost');
  }
  expect(callAPI).toThrow(new Error('Mock this! http://localhost'));
});
