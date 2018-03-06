import async from '../../../src/components/async'
import Vue from 'vue'
import {expect} from 'chai'
describe('test async', (done) => {
  it('测试异步操作', () => {
    const Constructor = Vue.extend(async)
    var vm = new Constructor().$mount()
    vm.async.then(res => {
      expect(res).to.be.equal('hux1ao')
      done()
    })
  })
})
