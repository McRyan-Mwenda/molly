import React, { useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import styles from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      'service_0too47q', 
      'template_v0ote7c',
      {
        from_name: form.name,
        to_name: 'MacRyan',
        from_email: form.email,
        to_email: 'mcryanmwenda.k@gmail.com',
        message: form.message,
      },
      'jV_3qFxoAJromq3We'
      )
    .then((result) => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        console.log(error);
        setLoading(false);
        alert('Something went wrong, please try again')
      });
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.paragraph}>Get in touch</p>
        <h3 className={styles.heading2}>Contact Us.</h3>
      
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='font-poppins text-white font-medium mb-4'>Your name...</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='What is your name?'
            className='font-poppins bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-poppins text-white font-medium mb-4'>Your Email...</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='What is your email?'
            className='font-poppins bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='font-poppins text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows='7'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What do you want to tell me?'
            className='font-poppins bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>

        <button
          type='submit'
          className='font-poppins py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl '
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")