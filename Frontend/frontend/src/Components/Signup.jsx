import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);


  return (
    <div className="flex h-screen items-center justify-center">
    
    <div id="my_model_3" className="w-[600px] font-semibold text-md" >
        <div className="modal-box">
                <form  onSubmit={handleSubmit(onSubmit)}  method="dialog">
                {/* if there is a button in form, it will close the modal */}
                    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    
                    <h3 className="font-bold text-lg">SignUp</h3>

                        {/* name */}
                    <div className="mt-4 space-y-2">
                        <span>Name</span>
                        <br />
                        <input type="text" placeholder="Enter Your Name" className="w-80 px-3 py-1 border rounded-md outline-none"
                         {...register("name", { required: true })} />
                         {errors.name && <span className="text-sm text-red-500 font-thin font-mono"> <br />This field is required</span>}
                    </div>
    {/* 
                    email */}

                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none"
                        { ...register("email", { required: true })} />
                         {errors.email && <span className="text-sm text-red-500 font-thin font-mono"> <br />This field is required</span>}
                    </div>


                        {/* password */}
                    <div className="mt-4 space-y-2">
                        <span>Password</span>
                        <br />
                        <input type="password" placeholder="Enter Your Password" className="w-80 px-3 py-1 border rounded-md outline-none"
                        {...register("password", { required: true })} />
                        {errors.password && <span className="text-sm text-red-500 font-thin font-mono"> <br />This field is required</span>}
                    </div>

                    <div className="justify-around flex mt-8">
                        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SignUp</button>


                        <p className=" font-semibold">Have Account?{"   "} <button className="text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button> {" "}
                        <Login/>
                        </p>
                    </div>
                </form>
                

            </div>
    </div>
  
</div>
  )
}

export default Signup
