import { useState, useEffect, useRef } from 'react'

import '../components/Slide.css';

import { motion } from 'framer-motion';

import image1 from '../img/slide/foto1.jpg'
import image2 from '../img/slide/foto2.png'
import image3 from '../img/slide/foto3.jpg'
import image4 from '../img/slide/foto4.jpg'
import image5 from '../img/slide/foto5.png'
import image6 from '../img/slide/foto6.png'
import image7 from '../img/slide/foto7.jpg'
import image8 from '../img/slide/foto8.png'
import image9 from '../img/slide/foto9.png'
import image10 from '../img/slide/foto10.png'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];


function Slide() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

useEffect(() => {
  console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])



  return( 
    <div className="container">
    <div className="galeria">
    <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
    <motion.div 
    className="inner"
    drag="x"
    dragConstraints={{right: 0, left: -width}}
    initial={{ x: 500}}
    animate={{ x: 0}}
    transition={{ duration: 0.88}}
    >

        {images.map(image => ( 
          <motion.div className="item" key={image}>
            <img src={image} alt="texto alt"/>
          </motion.div> 
        ))}

    </motion.div>
  </motion.div>
  </div>
</div>
)}

export default Slide;