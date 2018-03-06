import { expect } from 'chai'
import {action} from '../../../src/store/action'

describe('test action', () => {
  it('type should be huxiao', () => {
    const commit = (type, payload) => {
      expect(type).to.equal('huxiao')
    }
    console.log(typeof action)
    action(commit)
  })
})
