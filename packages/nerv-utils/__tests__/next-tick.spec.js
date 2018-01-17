import { nextTick } from '../src'
import sinon from 'sinon'

describe('nextTick', () => {
  it('accepts a callback', done => {
    nextTick(done)
  })

  it.skip('throw error in callback can carry on', async () => {
    const consoleErr = console.error
    console.error = function () {}
    const spy = sinon.spy(console, 'error')
    nextTick(() => {
      throw new Error('e')
    })
    await nextTick()
    expect(spy.called).toBeTruthy()
    console.error = consoleErr
  })
})
