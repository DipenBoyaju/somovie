import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#11656642] py-6 px-4 lg:px-12 flex justify-between flex-col lg:flex-row gap-10">
      <div className="font-bold text-2xl tracking-wider">
        <Link to={'/'}><p className="font-[orbitron] text-[#FFCB9A]"><span className="text-[#D1E8E2]">So</span>M<span className="">o</span>v<span className="text-[#FFCB9A]">ie</span>s</p></Link>
        <p className="text-[#14c7caf5] text-sm font-light">© SoMovie</p>
      </div>
      <div className="text-zinc-400">
        <p>SoMovie is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from AndyDay and watch it later if you want.</p>
        <ul className="flex gap-4 pt-3 text-[#D9B08C]">
          <li>Terms of service</li>
          <li>DMCA</li>
          <li>Contact</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className="">
        <p className="text-sm text-zinc-300 border border-zinc-300 p-2">SoMovie does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p>
      </div>
    </footer>
  )
}
export default Footer