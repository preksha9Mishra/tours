import React, { useState } from 'react';

const Tour = ({id, image, info, name, price,remove}) => {
  const [readmore,setreadMore] = useState(false);
  return (
    <article className = "single-tour">
      <img src={image} alt={name} />
      <footer>
      <div className = "tour-info">
          <h4>{name}</h4>
          <h4 className = "tour-price">${price}</h4>
        </div>
        <p>
        {readmore ? info : `${info.substring(0,200)}...`}
        <button onClick = {() => {setreadMore(!readmore)}}>
          {readmore ? 'show less' : 'read more'}
        </button>
        </p>
        <button className = "delete-btn" onClick = {() => remove(id)}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
