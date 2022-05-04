import React, { useRef, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';
import validationSchema from './validationSchema';
import TextError from './TextError'
import FormSuccess from './FormSuccess';
import FormFailed from './FormFailed'
import { FaAsterisk } from 'react-icons/fa'
import ReCAPTCHA from "react-google-recaptcha";
import FormWrapper from "./FormWrapper";

function ContactForm () {
  const form = useRef()
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState('')

  const restartHandler = () => {
    setSuccess(false)
    setFailed(false)
    setRecaptchaToken('')
  }

  const onChangeRecaptcha = (token) => setRecaptchaToken(token)

  async function validateHuman(token) {
    const secret = process.env.GATSBY_RECAPTCHA_SECRET_KEY
    const response = await fetch(`https://cors-milanlaser.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
      method: "POST",
    })
    const recaptchaData = await response.json()
    return recaptchaData
  }

  const sendEmail = (values, actions) => {
    setSubmitting(true)
    validateHuman(recaptchaToken).then(response => {
      if(response.success) {
        emailjs.sendForm(process.env.GATSBY_EMAILJS_SERVICE_ID, process.env.GATSBY_EMAILJS_TEMPLATE_ID, form.current, process.env.GATSBY_EMAILJS_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setSuccess(true)
          setFailed(false)
        }, (error) => {
          console.log(error.text);
          setFailed(true)
          setSuccess(false)
        }).finally(() => {
          setSubmitting(false)
          actions.resetForm()
        })
      }
    })
  };

  return (
    <Formik 
      initialValues={{
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => sendEmail(values, actions)}>
      {
        formik => {
          return (
          <FormWrapper>
            <Form ref={form}>
            {
              failed ? <FormFailed /> : success ? <FormSuccess /> :
              <>
              <div className="row justify-content-center mx-auto pt-3">
                <label htmlFor="user_name">Your name <sup><FaAsterisk /></sup></label>
                <Field 
                  id="user_name" name="user_name" placeholder="John Doe" className="form-control"
                  style={formik.touched.user_name && formik.errors.user_name ? {borderColor: 'red'} : null} />
                  <ErrorMessage name="user_name" component={TextError} />
              </div>

              <div className="row justify-content-center mx-auto pt-3">
                <label htmlFor="email">Your email <sup><FaAsterisk /></sup></label>
                <Field
                  id="user_email" name="user_email"  placeholder="user@mailbox.com"
                  type="user_email" className="form-control"
                  style={formik.touched.user_email && formik.errors.user_email ? {borderColor: 'red'} : null}
                />
                <ErrorMessage name="user_email" component={TextError} />
              </div>

              <div className="row justify-content-center mx-auto pt-3">
                <label htmlFor="subject">Subject </label>
                <Field 
                  id="subject" name="subject" placeholder="Subject..." className="form-control"
                  style={formik.touched.subject && formik.errors.subject ? {borderColor: 'red'} : null} />
                  <ErrorMessage name="subject" component={TextError} />
              </div>

              <div className="row justify-content-center mx-auto pt-3">
                <label htmlFor="message">Message <sup><FaAsterisk /></sup></label>
                <Field as="textarea" className="form-control" placeholder="Your message..." id="message" name="message" rows="3"
                  style={formik.touched.message && formik.errors.message ? {borderColor: 'red'} : null}/>
                <ErrorMessage name="message" component={TextError} />
              </div>

              <div className="row justify-content-center mx-auto pt-3">
                <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} onChange={onChangeRecaptcha} className="px-0" />
              </div>
            

              <div className="row pt-3">
                <div className="">
                  <input type="submit" value={submitting ? 'Sending...' : 'SEND MESSAGE'} className='py-2 px-3 shadow-sm basic-btn rounded' disabled={!formik.isValid || !recaptchaToken} />
                </div>
              </div>
              </>
            }
            {
              (failed || success) && 
              <div className="row justify-content-center mx-auto pt-5">
                <div className="col-md-6 px-0">
                  <input 
                    type="button" value={failed ? 'Try Again' : 'Submit Another Request'} 
                    className='w-100 basic-btn py-2 shadow-sm rounded'
                    onClick={restartHandler}/>
                </div>
              </div>
            }
            </Form>
          </FormWrapper>
          )
        }
      }
    </Formik>
  )
};

export default ContactForm