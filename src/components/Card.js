/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
import displayImg from '../img/zaferes.png';
import star from '../img/star.png';
import ellipse from '../img/ellipse.png';

export default function Card() {
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
