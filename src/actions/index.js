const increment = () => {
    return {
      type: 'INCREMENT',
      payload: 6
    }
  }
  
  const decrement = () => {
    return {
      type: 'DECREMENT',
      payload: 6
    }
  }
  
  const signIn = () => {
    return {
      type: 'SIGN_IN'
  
    }
  }
  export {increment, decrement, signIn} ;