import { example } from './index'

describe("Returns expected values", () => {
  it('Returns "Hello World", () => {
    expect(example()).toBe('Hello World')
  });
})
