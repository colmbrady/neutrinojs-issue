import helloWorld from '../src/index';
 
describe('simple', () => {
  it('should be hello world', () => {
    if( helloWorld() !== 'world') {
      throw new Error();
    }
  });
});