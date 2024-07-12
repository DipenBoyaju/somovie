import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const nav = useNavigate();
  return (
    <div className="flex justify-center flex-1 mx-auto lg:py-10 py-4 w-full">
      <div className=" backdrop-blur-3xl mx-auto flex">
        <div className="p-8 lg:p-14 bg-zinc-800">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">Welcome back!</h2>
            <div className="font-bold text-2xl tracking-wider" >
              <Link to={'/'} onClick={() => nav('/home')}><p className="font-[orbitron] text-[#FFCB9A] hidden lg:block"><span className="text-[#D1E8E2]">So</span>M<span className="">o</span>v<span className="text-[#FFCB9A]">ie</span>s</p></Link>
            </div>
          </div>
          <form action="" className="space-y-4 pt-8">
            <div>
              <label className="text-zinc-400 text-xs font-semibold uppercase">Email Address</label>
              <input type="email" placeholder="name@email.com" className="h-[45px] rounded-sm px-2 focus:outline-none w-full mt-1" />
            </div>
            <div>
              <label className="text-zinc-400 text-xs font-semibold uppercase">Password</label>
              <input type="password" placeholder="Password" className="h-[45px] rounded-sm px-2 mt-1 focus:outline-none w-full" />
            </div>
            <button className="bg-yellow-400 rounded-sm w-full py-2">Login</button>
          </form>
          <div className=" text-center pt-8 lg:pt-12">
            <p className="text-lg text-white cursor-pointer hover:text-[#FFCB9A]" onClick={() => nav('/signup')}>Create a Free Account</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login