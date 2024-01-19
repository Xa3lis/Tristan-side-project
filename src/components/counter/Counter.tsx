import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from '@/components/counter/counterSlice'

export function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-8">
        <button
          className="btn btn-square btn-outline btn-neutral"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          disabled={count <= 0}
        >
          -
        </button>
        <span aria-label="Count">
          {count}
        </span>
        <button
          className="btn btn-square btn-outline btn-neutral"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex gap-4">
        <input
          className="input input-bordered input-primary"
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className="btn btn-neutral"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="btn btn-neutral"
          disabled={status !== 'idle'}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className="btn btn-neutral"
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
