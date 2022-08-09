// useEffect ------------------
// useEffect is a hook with logic similar to componentDidMount, componentDidUpdate, componentWillUnmount
// This hook has second param. If we don't provide it, useEffect will be handling on every render
// If we pass empty array [], useEffect will handle only on first render
// if we pass some vars to array, useEffect will handle when vars that we provided changes
// To simulate componentWillUnmount or cleanup useEffect we need to return function from it and do some logic there

import { createContext, useContext } from 'react'

// State and Props -------------
// Props are like parameters in function. We can pass props to some component and use them there
// Props are immutable and read-only. We can pass props on any deep level (but it's not good idea)
// Props are really usefull to make components reusable
// State holds inforamtion about component
// State can be changed it's mutable
// Very often we pass state as prop to child component

// class and functional components ------------
// As for me, we can create whole project with functions
// Only way we need class is error boundary
// class looks more heavy and functions are less code
// with functions we use hooks with classes no

// Context ---------------
// Context is like "global" variables
// With context we can pass some vars to all components that are wrapped with Provider
// Example:

const ThemeContext = createContext()

const App = () => {
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <Comp1 />
    </ThemeContext.Provider>
  )
}

const Comp1 = () => {
  return (
    <>
      first
      <Comp2 />
    </>
  )
}

const Comp2 = () => {
  return (
    <>
      second
      <Comp3 />
    </>
  )
}

const Comp3 = () => {
  const context = useContext(ThemeContext)

  return context.theme
}
