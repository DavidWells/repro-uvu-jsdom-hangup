import { test } from 'uvu'
import * as assert from 'uvu/assert'
import React from 'react'
import { render } from "@testing-library/react"

test('Tests run', async () => {
  assert.is(true, true)
})

test("Renders component in test", async () => {
  const MyComponent = () => {
    return (
      <>
        <div>
          <span>inside</span>
          <span>another</span>
        </div>
        <div>outside</div>
      </>
    );
  }

  const result = render(<MyComponent />)
  assert.ok(MyComponent)
  console.log('result.container.innerHTML', result.container.innerHTML)
  assert.match(result.container.innerHTML, 'inside')
})

// The Fix https://github.com/lukeed/uvu/issues/124#issuecomment-912070397
/*
test.after(() => {
  setTimeout(() => {
    process.exit(0)
  }, 100)
}) 
/**/

test.run()