import img from "/img/cover1.png"
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {

    return (

        <div className='flex justify-center my-5  '>
            <img className='w-[30%] lg:flex hidden' src={img} alt="" />
            <div className='w-96 shadow border-px rounded-lg'>
                <div className='m-5 border-1:hiden'>
                    <h2 className='text-3xl text-center text-primary'>Login</h2>
                    <br></br>
                    <form className="space-y-4" action="">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                                placeholder="Email address or phone number"
                            />
                        </div>


                        <div>
                            <label className="block placeholder:left-2 text-sm font-medium text-gray-700 mb-1">

                            </label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                                placeholder="••••••••"
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 ">  Log in
                        </button>

                    </form>
                    <br></br>
                    <p>Are you new Here? please <a href="" className='text-primary'>SignUp</a></p>

                    <div className='divider'>OR</div>
                    <div>
                        <button className="w-full flex items-center justify-center gap-2 border-gray-500 py-2 px-4 rounded-md hover:bg-gray-100 ">
                            <FcGoogle className="text-lg" />
                            <span>Continue with Google</span>
                        </button>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default LogIn;