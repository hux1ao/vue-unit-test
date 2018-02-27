import { expect } from 'chai'
import mutation from '../../../src/store/mutation'

describe('mutations', () => {
  it('INCREMENT', () => {
    const state = { count: 0 }
    mutation.increment(state)
    expect(state.count).to.equal(1)
  })
})
