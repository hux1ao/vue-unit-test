import Vue from 'vue'
import testClick from '../../../src/components/testClick.vue'
import { expect } from 'chai'

const Constructor = Vue.extend(testClick)
const vm = new Constructor().$mount()

vm.$el.querySelector('button').click()
describe('testKarma', () => {
  it('num should equal 2', () => {
    expect(vm.num).to.be.equal(3)
  })
})
