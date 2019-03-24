const initialState = {
  inputCounter: 0
}

/*
 * Redux Actions
 * When date changes, return the new date.
 */
export const actions = {
  inputCounterChanged(newInputCounter) {
    return {
      type: 'INPUT_COUNTER_CHANGED',
      newInputCounter
    }
  },
  inputCounterIncrement(newInputCounter) {
    return {
      type: 'INPUT_COUNTER_INCREMENT',
      newInputCounter
    }
  },
  inputCounterDecrement(newInputCounter) {
    return {
      type: 'INPUT_COUNTER_DECREMENT',
      newInputCounter
    }
  }
}

/*
 * Redux Reducer
 * Return new state based on action passed in.
 */
export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INPUT_COUNTER_CHANGED':
      return {
        ...state,
        inputCounter: action.newInputCounter
      }
    case 'INPUT_COUNTER_INCREMENT':
      return {
        ...state,
        inputCounter: state.inputCounter + 1
      }
    case 'INPUT_COUNTER_DECREMENT':
      return {
        ...state,
        inputCounter: state.inputCounter - 1
      }
    default:
      return state;
  }
}
