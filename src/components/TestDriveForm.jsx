import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  birth: '',
  adress: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Adress is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  date: '',
  time: '',
})

export default function TestDriveForm() {
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <Formik
      initialValues={{
        name: '',
        birth: '',
        adress: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        setIsSubmited(true)

        //* Here we are loggin our input values.
        console.log(values)
      }}
    >
      {isSubmited ? (
        <div className="md:px-10 space-y-7">
          <div>
            <div className="flex gap-5 items-center h-full justify-center">
              <h2 className="text-blue-900 text-3xl font-bold">
                Your request for a test drive was sent.
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
          <div className="text-center text-gray-400">
            <p>
              Thank you for choosing us, please check your mail box, we have
              sent a confirmation.
            </p>
            <p>
              In the meantime if you have any question or urgent matter feel
              free to call us on +35191xxxxxxx.
            </p>
          </div>
        </div>
      ) : (
        <Form className="space-y-7">
          <div>
            <label className="text-blue-900">
              <h2 className="text-3xl font-bold">Full name</h2>
              <Field
                placeholder="Insert your name"
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="text"
                name="name"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="name" />
              </div>
            </label>
          </div>
          <div>
            <label className="text-blue-900">
              <h2 className="text-3xl font-bold">Date of birth</h2>
              <Field
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="date"
                name="birth"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="birth" />
              </div>
            </label>
          </div>
          <div>
            <label className="text-blue-900">
              <h2 className="text-3xl font-bold">Adress</h2>
              <Field
                placeholder="Insert your adress"
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="text"
                name="adress"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="adress" />
              </div>
            </label>
          </div>
          <div>
            <label className="text-blue-900">
              <h2 className="text-3xl font-bold">Email</h2>
              <Field
                placeholder="Insert your email"
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="email"
                name="email"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="email" />
              </div>
            </label>
          </div>
          <div>
            <label className="text-blue-900">
              <h2 className="text-3xl font-bold">Phone number</h2>
              <Field
                placeholder="Insert your phone number"
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="number"
                name="phoneNumber"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="phoneNumber" />
              </div>
            </label>
          </div>
          <div className="flex justify-between gap-6">
            <label className="text-blue-900 w-full">
              <h2 className="text-3xl font-bold">Prefered Date</h2>
              <Field
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="date"
                name="date"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="date" />
              </div>
            </label>
            <label className="text-blue-900 w-full">
              <h2 className="text-3xl font-bold">Prefered Time</h2>
              <Field
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="time"
                name="time"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="time" />
              </div>
            </label>
          </div>
          <div>
            <button
              className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer"
              type="sumbit"
            >
              Send Request
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
