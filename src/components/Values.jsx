import React from 'react'
import Values_Image from '../assets/Values_image.jpg'
import SectionHead from './SectionHead'
import {GiFlexibleStar} from 'react-icons/gi'
import {values} from '../constants/data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Values_Image} alt='Values Image'/>
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiFlexibleStar />} title='Values' />
                <p>
                    At finance fluent, we have values that set us apart from other financial tools.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return (
                                <Card key={id} className="values__value">
                                    <img src={icon} style={{width: "10%"}}/>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values