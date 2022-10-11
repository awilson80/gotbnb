import star from '../img/star.png';
import ellipse from '../img/ellipse.png';

export default function Card(props) {
  // console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='card-container'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img
        src={props.img}
        alt='Example of an experience or excursion'
        className='card-image'
      />
      <div className='card-rating-container'>
        <img src={star} alt='Star rating icon' className='card-star' />
        <p>{props.rating}</p>
        <p>({props.reviewCount})</p>
        <img src={ellipse} className='card-ellipse' />
        <p>{props.location}</p>
      </div>
      <p className='card-descrip'>{props.title}</p>
      <p className='card-price'>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
