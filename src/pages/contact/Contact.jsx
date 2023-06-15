import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assets/HeaderImage.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit fugiat consequuntur, velit aliquam, dolorem eum praesentium reiciendis veritatis officiis nulla enim molestiae cum magnam aliquid voluptates ad laudantium laborum.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:mcryanmwenda@gmail.com" target="_blank" rel='noreferrer noopener'>
              <MdEmail />
            </a>
            <a href="https://m.me/mcryan.kirimi" target="_blank" rel='noreferrer noopener'>
              <BsMessenger />
            </a>
            <a href="https://wa.me/+254710722273" target="_blank" rel='noreferrer noopener'>
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact