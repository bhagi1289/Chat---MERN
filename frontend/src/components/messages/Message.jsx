import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                    alt='Tailwind CSS chat bubble component'
                    src={"https://gravatar.com/avatar/8aa3777ee9d7111cbc085bf8fd75d1a0?s=400&d=robohash&r=x"}
                 />
            </div>
        </div>

        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's up?</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42</div>
    </div>
  )
}

export default Message