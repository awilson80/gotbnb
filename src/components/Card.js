import star from '../img/star.png';
import ellipse from '../img/ellipse.png';

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='card-container'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img
        src={props.card.img}
        alt='Example of an experience or excursion'
        className='card-image'
      />
      <div className='card-rating-container'>
        <img src={star} alt='Star rating icon' className='card-star' />
        <p>{props.card.stats.rating}</p>
        <p>({props.card.stats.reviewCount})</p>
        <img src={ellipse} className='card-ellipse' />
        <p>{props.card.location}</p>
      </div>
      <p className='card-descrip'>{props.card.title}</p>
      <p className='card-price'>
        <strong>From ${props.card.price}</strong> / person
      </p>
    </div>
  );
}
