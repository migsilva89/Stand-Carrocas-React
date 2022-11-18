import React from 'react'

function ContactForm() {
  return (
    <form className="px-10 space-y-7">
      <h2 className="text-blue-900 text-3xl font-bold">Contact us</h2>
      <div>
        <input
          placeholder="Insert your name"
          className="w-full px-4 leading-8  py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
          type="text"
        />
      </div>
      <div>
        <input
          placeholder="Insert your email"
          className="w-full px-4 leading-8  py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
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
