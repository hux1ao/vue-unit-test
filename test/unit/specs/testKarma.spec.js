import Vue from 'vue'
import testKarma from '../../../src/components/testKarma.vue'

const expect = require('chai').expect
const Constructor = Vue.extend(testKarma)
const vm = new Constructor().$mount()

vm.$el.querySelector('button').click()
describe('testKarma', () => {
  it('num should equal 2', () => {
    expect(vm.num).to.be.equal(3)
  })
})
