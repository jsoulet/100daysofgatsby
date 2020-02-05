import React, { FunctionComponent } from 'react'

import { useFormik } from 'formik'
import { ContactFormValues } from './index'

import Input from './Input'
import validate from './validate'

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void
}

const initialValues: ContactFormValues = {
  email: '',
  firstname: '',
  lastname: '',
  message: '',
}

const ContactForm: FunctionComponent<ContactFormProps> = ({ onSubmit }) => {
  const formik = useFormik<ContactFormValues>({
    initialValues,
    onSubmit,
    validate,
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full mt-10">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            id="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.submitCount > 0 && formik.errors.firstname}
            placeholder="Bruce"
            label="First name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Input
            id="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.submitCount > 0 && formik.errors.lastname}
            placeholder="Wayne"
            label="Last name"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Input
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.submitCount > 0 && formik.errors.email}
            placeholder="bruce@wayneenterprise.corp"
            label="Email"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Input
            id="message"
            type="textarea"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.submitCount > 0 && formik.errors.message}
            label="Message"
            className="no-resize h-48 resize-y"
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            value="Send"
            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >Submit</button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  )
}

export default ContactForm
