import { doSomething } from '../src/index.js';

describe('doSomething', () => {
  it('returns ok', () => {
    expect(doSomething().ok).toBe(true);
  });
});
