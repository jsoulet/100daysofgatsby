import { FormikErrors } from 'formik'
import { ContactFormValues } from './index'

const validate = (values: ContactFormValues) => {
  let errors: FormikErrors<ContactFormValues> = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Message is required'
  }

  return errors
}

export default validate
