import star from '../img/star.png';
import ellipse from '../img/ellipse.png';

export default function Card(props) {
  return (
    <div className='card-container'>
      <img
        src={`../img/${props.img}`}
        alt='Example of an experience or excursion'
        className='card-image'
      />
      <div className='card-rating-container'>
        <img src={star} alt='Star rating icon' className='card-star' />
        <p>{props.rating}</p>
        <p>({props.reviewCount})</p>
        <img src={ellipse} className='card-ellipse' />
        <p>{props.country}</p>
      </div>
      <p className='card-descrip'>{props.title}</p>
      <p className='card-price'>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
