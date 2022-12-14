import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Map from '../components/Map'
import ContactForm from '../components/ContactForm'

function ContactsPage() {

  return (
    <MainLayout>
      <header className="relative bg-hero-contact h-96 bg-cover">
        <div className="bg-blue-500 h-96 bg-opacity-25"></div>
      </header>
      <section className="max-w-7xl mx-auto py-16 px-12 my-10 grid md:grid-cols-2 w-full">
        <div>
          <div className="md:mt-0">
            <ContactForm />
          </div>
          <div className="md:px-10 mt-8 space-y-2">
            <h1 className="text-blue-900 text-3xl font-bold">Location</h1>
            <div className="text-gray-400 font-normal tracking-wide mt-6 max-w-md">
              <p>
                Adress: Rua Alexandrino chaves velho 394 - Freamunde, Porto,
                Portugal
              </p>
              <div>
                <p>Zipcode: 4590-368</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-16">
          <Map></Map>
        </div>
      </section>
    </MainLayout>
  )
}

export default ContactsPage
