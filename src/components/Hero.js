import exp from '../img/kingsLanding.jpg';

export default function Hero() {
  return (
    <div className='hero-container'>
      <img
        src={exp}
        alt='Collage of images representing online experiences'
        className='hero-collage'
      />
      <div className='hero-text-container'>
        <h1 className='hero-title'>Experiences</h1>
        <p className='hero-text'>
          Join unique interactive activities led by one-of-a-kind hosts—spanning
          from online to wherever is west of Westeros.
        </p>
      </div>
    </div>
  );
}
