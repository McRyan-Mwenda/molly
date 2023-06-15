import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assets/HeaderImage.jpg'
import Card from '../../UI/Card'
import { plans } from '../../constants/data'
import './plans.css'

const Plans = ({}) => {
  return (
    <>
      <Header title="Subscription Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod inventore ducimus provident, voluptatum magnam neque.
      </Header>

      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price1, price2, features}) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price1} | Ksh${price2}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Go to App</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans