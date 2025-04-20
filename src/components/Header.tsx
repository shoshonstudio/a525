import React from 'react'
import UserButton from './user-button'
import TransitionLink from './transition-link'

const Header = () => {
  return (
    <div className='w-full flex flex items-center justify-between gap-4 p-2 fixed top-0 left-0'>
        <div className='text-white mx-4'><TransitionLink href="/">SHOSHONSTUDIO</TransitionLink></div>
        
        <UserButton />
    </div>
  )
}

export default Header