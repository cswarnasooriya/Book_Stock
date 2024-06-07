

const Card = ({ item }) => {
  return (
    <>
    <div className="mt-5 p-2">
        <div className="card w-92 cursor-pointer bg-base-100 shadow-xl hover:scale-[1.02]">
    <figure>
        <img src={item.img} 
            alt="Shoes" />

    </figure>
    <div className="card-body">
        <h2 className="card-title">
        {item.name}
        <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between">
        <div className="badge badge-outline px-2 py-4 cursor-pointer">LKR {item.price}</div> 
        <div className="rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 px-2 py-2 cursor-pointer">Claim Now</div>
        </div>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Card