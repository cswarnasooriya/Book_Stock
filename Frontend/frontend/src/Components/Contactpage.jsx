import { Link } from "react-router-dom"


const Contactpage = () => {
  return (
    <div>
      <div className=" max-w-screen-2xl mx-auto md:px-20 px-4  ">
            <div className=" justify-center items-center text-center">
                <h2 className=" pt-28 text-2xl md:text-4xl font-semibold">Anytime easily Connect with Us <span className="text-pink-500">Anywhere..! :)</span></h2>
                <p className='mt-12 text-justify'>
                  we are the best online free and updated book library in Sri Lanka. Any time, Any Where you can pickup your favourite book items with us and follow our all the book categories free and paid for your wishes.
                  So, we kindly invite all of you to stay tuned with us and improve your knowledge as well.
                </p>

                <Link to="/">
                  <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 hover:text-white duration-300">
                    Back
                  </button>
                </Link>

            </div>

            <div className="hero min-h-screen bg-base-100 dark:bg-slate-900 dark:text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-16">
                    <h1 className="text-5xl font-bold mb-8">Contact Us!</h1>
                    <p className="py-6 text-justify">You can easily connect and contact with us using our famous and trending chatbot and get real time support for you. We think it provide a great support for you soving your all problems and barriers using books and materials with us.</p>

                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-12">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="w-12 bg-neutral text-neutral-content">
                            <span>+99</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                    <h1 className="text-xl font-semibold text-blue-700 items-center justify-center text-center">You can get Rewards here!</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="email" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Promocode</span>
                        </label>
                        <input type="text" placeholder="Enter Promocode" className="input input-bordered" required />
                        <label className="label">
                            <a href="/login" className="label-text-alt link link-hover">Claim Promocode Now</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Get Reward</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

           

        </div>
    </div>
  )
}

export default Contactpage
