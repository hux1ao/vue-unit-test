import { mount } from '@vue/test-utils'
import testClick from '../../../src/components/testClick.vue'
import { expect } from 'chai'

const wrapper = mount(testClick)
const vm = wrapper.vm
describe('test click from vue-unit-test', () => {
  it('num should be 2', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(vm.num).to.equal(2)
  })
})
