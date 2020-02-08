import { ContactFormValues } from '../../components/ContactForm'

export function submit(values: ContactFormValues): Promise<{ ok: boolean }> {
  return fetch('https://api.formik.com/submit/100daysofgatsby/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}
