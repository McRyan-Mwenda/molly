import React from 'react'
import Card from '../UI/Card'

const Team = ({image, name, job, socials}) => {
  return (
    <Card className="team">
        <div className="team__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className='team__socials'>
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target='_blank' rel='noreferrer noopener'>{icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Team