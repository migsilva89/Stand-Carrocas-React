import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

function ContactForm() {
  const [isSubmited, setIsSubmited] = useState(false)

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
      .min(10, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Required'),
  })

  return (
    <div>
      {isSubmited ? (
        <div>Enviado</div>
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
            <Form className="px-10 space-y-7">
              <label
                htmlFor="name"
                className="text-blue-900 text-3xl font-bold"
              >
                Contact us
              </label>
              <Field
                placeholder="Insert your email"
                name="name"
                className="w-full px-4 leading-8 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}

              <Field
                placeholder="Insert your email"
                name="email"
                type="email"
                className="w-full px-4 leading-8 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field
                as="textarea"
                name="message"
                placeholder="Insert your message"
                className="w-full px-4 leading-8  py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
              />
              {errors.message && touched.message ? (
                <div>{errors.message}</div>
              ) : null}
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
