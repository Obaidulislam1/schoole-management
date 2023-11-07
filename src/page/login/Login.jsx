import file from '../../../Animation - 1699105821641.json'
import Lottie from "lottie-react"
const Login = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-10/12 m-auto items-center'>
            <Lottie animationData={file} />
            <form className="card-body">
                <h1 className='text-2xl text-center text-black font-serif mb-5'>Login Now</h1>
        <div className="form-control">
          <label className="label">
            <span className="text-xl text-black">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl text-black">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt text-black link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        </div>
    );
};

export default Login;