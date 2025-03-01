import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { useEffect } from 'react'

export default ({score}) => {
  const { width, height } = useWindowSize()
  useEffect(() => {
    console.log("SeeOff Mounted - Received Score:", score);
  }, [score]); // Runs when `score` changes
  
  const data = localStorage.getItem("scores")
  return (
    <>
        <Confetti
      width={width}
      height={height}
    />
    <h1> Look at this!! {data}%</h1>
    </>

  )
}