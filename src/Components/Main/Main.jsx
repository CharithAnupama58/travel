import React,{useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineClipboard } from "react-icons/hi"
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
  {
    id:1,
    imgSrc: img,
    desTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.New Zealand is a member of the United Nations, Commonwealth of Nations, ANZUS, UKUSA, OECD, ASEAN Plus Six, Asia-Pacific Economic Cooperation, the Pacific Community and the Pacific Islands Forum. It enjoys particularly close relations with the United States and is one of its major non-NATO allies;[15] the United Kingdom; and with Australia, with a shared "Trans-Tasman" identity between the two countries.'
  },

  {
    id:2,
    imgSrc: img2,
    desTitle:'Bora Bora',
    location:'America',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.'
  },

  {
    id:3,
    imgSrc: img3,
    desTitle:'Bora Bora',
    location:'Australia',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.'
  },

  {
    id:4,
    imgSrc: img4,
    desTitle:'Bora Bora',
    location:'France',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.'
  },

  // {
  //   id:5,
  //   imgSrc: img3,
  //   desTitle:'Bora Bora',
  //   location:'Australia',
  //   grade:'CULTURAL RELAX',
  //   fees:'$700',
  //   description:'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.'
  // },

  // {
  //   id:6,
  //   imgSrc: img3,
  //   desTitle:'Bora Bora',
  //   location:'Australia',
  //   grade:'CULTURAL RELAX',
  //   fees:'$700',
  //   description:'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.'
  // },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container section'>
        <div className='secTitle'>
          <h3 data-aos='fade-up' className='title'>
            Most visited destinations
          </h3>
        </div>

        <div className='secContent grid'>

        {
          Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=>{
            return(
                <div key={id} data-aos='fade-up' className='singleDestination'>

                  <div className='imgDiv'>
                    <img src={imgSrc} alt={desTitle}/>
                  </div>
                  <div className='cardInfo'>
                    <h4 className='desTitle'>{desTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker className='icon' />
                      <span className='name'>{location}</span>
                    </span>

                    <div className='fees flex'>
                      <div className='grade'>
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className='desc'>
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboard className='icon' />
                    </button>
                  </div>
                </div>
            )
          })
        }

        </div>

    </section>
  )
}

export default Main