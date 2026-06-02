import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const navbar = () => {
  
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: '50px top',
        toggleActions: 'play none none reverse',
      }
    });

    navTween.to('nav', {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      ease: 'power1.inOut',
      duration: 0.5,
    })
  }, [])

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src={import.meta.env.BASE_URL + "images/logo.png"} alt="Velvet Pour Logo" />
          <p>Velvet Pour</p>
        </a>
        
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default navbar