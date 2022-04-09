import React from 'react'
import ContactForm from '../Components/ContactForm/ContactForm'
import ContactGotStartup from '../Components/ContactGotStartup/ContactGotStartup'
import ContactOurOffice from '../Components/ContactOurOffice/ContactOurOffice'
import ContactUsTopSlider from '../Components/ContactUsTopSlider/ContactUsTopSlider'
import OurClientSays from '../Components/OurClientSays/OurClientSays'
import WordsClient from '../Components/WordsClient/WordsClient'

function ContactUs() {
  return (
    <>
      <ContactUsTopSlider/>
      <ContactForm/>
      <ContactGotStartup/>
      <OurClientSays/>
      <WordsClient/>
      <ContactOurOffice/>
    </>
  )
}

export default ContactUs