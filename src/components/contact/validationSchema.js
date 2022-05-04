import * as Yup from 'yup'

function validationSchema() {
  const schema = Yup.object().shape({
    user_name: Yup.string().required('Your name is required!'),
    user_email: Yup.string().email('Enter a valid email!').required('Email is required!'),
    subject: Yup.string(),
    message: Yup.string().required('Message field is required!')
  })
  return schema
}

export default validationSchema