import './Item.css'

const Item = ({ card }) => {
  
  const { name, img, options } = card;
  // console.log(name);
  // console.log(img)
  // console.log(options);
  return (
    <div className="card">
        <img className="card-logo" src={img} alt='' />
        <h3 className="card-title">{name}</h3>
      
    </div>
  );
};

export default Item;
