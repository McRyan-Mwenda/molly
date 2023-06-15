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
        Membership is not about owning something, it's about being a part of something bigger than yourself.
      </Header>

      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
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