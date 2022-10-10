import displayImg from '../img/zaferes.png';
import star from '../img/star.png';
import ellipse from '../img/ellipse.png';

export default function Card(props) {
  return (
    <div className='card-container'>
      <img
        src={displayImg}
        alt='Image representing an experience or excursion'
        className='card-image'
      />
      <div className='card-rating-container'>
        <img src={star} alt='Star rating icon' className='card-star' />
        <p>5.0</p>
        <p>(6)</p>
        <img src={ellipse} className='card-ellipse' />
        <p>USA</p>
      </div>
      <p className='card-descrip'>Life lessons with Katie Zaferes</p>
      <p className='card-price'>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
