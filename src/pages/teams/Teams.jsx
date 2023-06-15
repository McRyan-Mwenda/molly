import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assets/HeaderImage.jpg'
import {team} from '../../constants/data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Team from '../../components/Team'
import './teams.css'

const Teams = () => {
  return (
    <>
      <Header title="Our Team" image={HeaderImage}>
        Coming together is the beginning, staying together is progress, and working together is success <br /><br /> <i>Henry Ford</i>
      </Header>
      <section className="team">
        <div className="container team__container">
          {
            team.map(({id, image, name, job, socials}) => {
              return <Team key={id} image={image} name={name} job={job} socials={[
                {icon: <BsInstagram />, link: socials[0]},
                {icon: <AiOutlineTwitter />, link: socials[1]},
                {icon: <FaFacebookF />, link: socials[2]},
                {icon: <FaLinkedin />, link: socials[3]}
              ]}/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Teams