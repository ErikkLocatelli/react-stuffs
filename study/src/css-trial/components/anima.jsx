import React, {useState} from 'react'
import styles from './anima.module.css'
import Button from '../../components/Button'

const slides = [
  {
    "id": 1, 
    "conteudo": "Slide 1",
    "img": "https://images.pexels.com/photos/12673810/pexels-photo-12673810.jpeg"
  }, 
  {
    "id": 2, 
    "conteudo": "Slide 2", 
    "img": "https://images.pexels.com/photos/14917976/pexels-photo-14917976.jpeg"
  }, 
  {
    "id": 3, 
    "conteudo": "Slide 3",
    "img": "https://images.pexels.com/photos/36752959/pexels-photo-36752959.jpeg"
  }, 
  {
    "id": 4, 
    "conteudo": "Slide 4",
    "img": "https://images.pexels.com/photos/36507750/pexels-photo-36507750.jpeg"
  }, 
  {
    "id": 5, 
    "conteudo": "Slide 5",
    "img": "https://images.pexels.com/photos/36752529/pexels-photo-36752529.jpeg"
  }, 
]

const Anima = () => {

  const [slide, setSlide] = useState(0)
  
  const nextSlide = () => {
    return setSlide((slide+1) % slides.length)
  }

  const backSlide = () => {
    return setSlide((slide - 1 + slides.length) % slides.length)
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
       
          <div key={slides[slide].id} className={`${styles.item} ${styles.animeLeft}`}><img className={styles.img} src={slides[slide].img}/></div>
        
      </div>
      <nav className={styles.nav}>
        <Button texto={"Anterior"} onClick={backSlide}/>
        <div className={styles.circles}>{slides.map((dado, index) => 
          <input type='radio' 
            onChange={() => setSlide(index)}  
            key={dado.id} 
            name='dados' 
            className={styles.circle} 
            checked={slide === index} >
          </input> 
        )}</div>
        <Button texto={"Próximo"} onClick={nextSlide}/>
      </nav>
    </section>
  )
}

export default Anima
