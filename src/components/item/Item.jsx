import { useState } from "react";
import "./Item.css";

const Item = ({ card }) => {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true)
  }, 2500);
  const { name, img, options } = card;
  // console.log(name);
  // console.log(img)
  // console.log(options);
  return (
    <div onClick={() => setShow(!show)} className='card'>
      {show ? (
        <div>
          <div>
            <img className='card-logo' src={img} alt='' />
            <h3 className='card-title'>{name}</h3>
          </div>
        </div>
      ) : (
        <div>
          <ul className="list">
            {options.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default Item;
