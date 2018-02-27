import Vue from 'vue'
import HelloWorld from '../../../src/components/HelloWorld.vue'

const expect = require('chai').expect
const Constructor = Vue.extend(HelloWorld)
const vm = new Constructor().$mount()
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
  it('should equal 10', () => {
    expect(vm.num).to.be.equal(10)
  })
})
