import exp from '../img/onlineExperiences.png';

export default function Hero() {
  return (
    <div className='hero-container'>
      <img
        src={exp}
        alt='Collage of images representing online experiences'
        className='hero-collage'
      />
      <h1 className='hero-title'>Online Experiences</h1>
      <p className='hero-text'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
