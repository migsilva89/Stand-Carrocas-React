import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function ContactForm() {
  const [isSubmited, setIsSubmited] = useState(false)

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string()
      .min(10, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Message is required'),
  })

  return (
    <div>
      {isSubmited ? (
        <div className="md:px-10 space-y-7 pt-16">
          <div>
            <div className="flex gap-5 items-center h-full">
              <h2 className="text-blue-900 text-3xl font-bold">
                Your message was sent
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={5}
                stroke="green"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
          <div className="text-left text-gray-400">
            <p>
              Thank you for reaching us, if you have any urgent matter feel free
              to call us on +35191xxxxxxx.
            </p>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            name: '',
            message: '',
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            setIsSubmited(true)
          }}
        >
          {({ errors, touched }) => (
            <Form className="md:px-10 space-y-7">
              <label
                htmlFor="name"
                className="text-blue-900 text-3xl font-bold"
              >
                Contact us
              </label>
              <div>
                <Field
                  placeholder="Insert your email"
                  name="name"
                  className="w-full px-4 leading-8 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                />
                <div className="text-red-500 text-xs pt-2">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div>
                <Field
                  placeholder="Insert your email"
                  name="email"
                  type="email"
                  className="w-full px-4 leading-8 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                />
                <div className="text-red-500 text-xs pt-2">
                  <ErrorMessage className="text-red-500 text-xs pt-2" name="email" />
                </div>
              </div>
              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Insert your message"
                  className="w-full px-4 leading-8  py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                />
                <div className="text-red-500 text-xs pt-2">
                  <ErrorMessage className="text-red-500 text-xs pt-2" name="message" />
                </div>
              </div>

              <button
                className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer"
                type="sumbit"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default ContactForm
