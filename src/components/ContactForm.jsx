import React, { useState } from 'react'

function ContactForm() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

 

  return (
    <form className="px-10 space-y-7">
      <label htmlFor="name" className="text-blue-900 text-3xl font-bold">
        Contact us
      </label>
      <div>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Insert your name"
          className="w-full px-4 leading-8 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
        />
      </div>
      <div>
        <input
          placeholder="Insert your email"
          className="w-full px-4 leading-8 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
          type="email"
        />
      </div>
      <div>
        <textarea
          placeholder="Insert your message"
          className="w-full px-4 leading-8  py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
          type="text"
        />
      </div>
      <div>
        <button
          className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer"
          type="sumbit"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
