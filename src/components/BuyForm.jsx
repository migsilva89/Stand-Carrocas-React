import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function BuyForm(props) {
  const [offer, setOffer] = useState(props.price)

  if (offer.length < 4) {
    setOffer(props.price)
  }

  const SignupSchema = Yup.object().shape({
    offer: Yup.number()
      .min(offer - 5000, 'Too Short!')
      .max(offer + 50000, 'Too Long!')
      .required('An offer is required'),
    parts: '',
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    birth: '',
    adress: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Adress is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    message: Yup.string()
      .min(10, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Message is required'),
  })

  return (
    <Formik
      initialValues={{
        offer: '',
        parts: '',
        name: '',
        birth: '',
        adress: '',
        email: '',
        phoneNumber: '',
        message: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        // setIsSubmited(true)

        //* Here we have our saved values with FORMIK.
        console.log(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-7">
          <div>
            <label className="text-blue-900 ">
              <h2 className="text-3xl font-bold">What's your offer ?</h2>
              <Field
                placeholder={`Insert your offer - PVP $${offer}`}
                className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="number"
                name="offer"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="offer" />
              </div>
            </label>
          </div>

          <div className="">
            <h2 className="text-blue-900 text-3xl font-bold mb-4">
              Would you like to pay in parts?
            </h2>
            <div className="flex justify-between pt-4">
              <div className="flex items-center mb-4">
                <Field
                  type="radio"
                  value={offer.toFixed()}
                  name="parts"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="radio-2"
                  className="ml-2 text-sm font-medium text-blue-900"
                >
                  Pay total - $ {offer}
                </label>
              </div>
              <div className="flex items-center mb-4">
                <Field
                  type="radio"
                  value={(offer / 60).toFixed()}
                  name="parts"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="radio-1"
                  className="ml-2 text-sm font-medium text-blue-900"
                >
                  5 Years - $ {(offer / 60).toFixed()} /month
                </label>
              </div>
              <div className="flex items-center mb-4">
                <Field
                  type="radio"
                  value={(offer / 120).toFixed()}
                  name="parts"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="radio-1"
                  className="ml-2 text-sm font-medium text-blue-900"
                >
                  10 Years - $ {(offer / 120).toFixed()} /month
                </label>
              </div>
              <div className="flex items-center mb-4">
                <Field
                  // checked
                  type="radio"
                  value={(offer / 180).toFixed()}
                  name="parts"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />

                <label
                  htmlFor="radio-2"
                  className="ml-2 text-sm font-medium text-blue-900"
                >
                  15 Years - $ {(offer / 180).toFixed()} /month
                </label>
              </div>
            </div>
          </div>
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
          <div>
            <h2 className="text-blue-900 text-3xl font-bold pb-2">Message</h2>
            <div>
              <Field
                as="textarea"
                placeholder="Insert your message"
                className="w-full px-4 leading-8  py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
                type="text"
                name="message"
              />
              <div className="text-red-500 text-xs pt-2">
                <ErrorMessage name="message" />
              </div>
            </div>
          </div>

          <div>
            <button
              className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer"
              type="sumbit"
            >
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default BuyForm
