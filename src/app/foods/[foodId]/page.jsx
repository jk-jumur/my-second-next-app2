
// import Image from "next/image";

// const FoodDetailPage = async ({ params }) => {
//      const { foodId } = await params;
//      const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
//      const data = await res.json();
//      const {id, dish_name, image_link} = data.data; 
     
     


//      return (
//          <div>
//              <h2>Show details of food : {foodId}</h2>
//              <h3>{dish_name}</h3>
//              <Image 
//              src={image_link} 
//              alt={dish_name}
//              width={200}
//              height={200}></Image>


//              {/* <h2 className="text-3xl">Ingredients : </h2> */}
//              {/* <ul className="list-disc">
//                   {
//                     ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
//                   }
//              </ul> */}


//          </div>
//      );
// };

// export default FoodDetailPage;