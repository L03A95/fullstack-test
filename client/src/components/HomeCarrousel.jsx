import Carousel from 'react-bootstrap/Carousel';
import '../styles/carrousel.css'

export default function HomeCarrousel() {
  return (
    <Carousel className='carrousel-wrapper'>
      <Carousel.Item interval={5000}>
      <img src='https://i.redd.it/hg6nbyuxi2241.png' className='carrousel_image'/>
        <Carousel.Caption>
          <h3>Autum Sale discounts!</h3>
          <p>See the newer games at the half of the original price!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <img src='https://exputer.com/wp-content/uploads/2021/03/Terraria.jpg' className='carrousel_image'/>
        <Carousel.Caption>
          <h3>Terraria</h3>
          <p>The imersive game Terraria is one of the most challenging survival games, try it now!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <img src='https://505games.com/wp-content/uploads/2023/04/miasma_2560x1000.jpg' className='carrousel_image'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}