import React from 'react'

const Button = ( {styles} ) => {
  return (
    <button type="button" className={`py-4 px-6 
    font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]
    bg-gradient-to-r from-green-400  to-blue-500`}>
      Get Started
    </button>
  )
}
// bg-blue-gradient 

export default Button