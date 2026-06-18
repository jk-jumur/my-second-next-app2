import Image from "next/image";
import Link from "next/link";


const FoodCard = ({food}) => {
    const {id, dish_name, image_link, category, price, rating, cuisine} = food
    return (
        <div className="card bg-base-300  shadow-sm">
  <figure>
    
        <Image 
          src={image_link}
          alt={dish_name}
          width={150}
          height={150}
        
        >


        </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {dish_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p><small>Category: {category}</small></p>
    <p>Price: ${price}</p>
    <p>Rating: {rating}</p>
    <p >{cuisine}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add To Cart</button>
       <Link href={`foods/${id}`}>
            <button className="btn btn-ghost">Show Details</button>
       </Link>
    
    </div>
  </div>
</div>
    );
};

export default FoodCard;