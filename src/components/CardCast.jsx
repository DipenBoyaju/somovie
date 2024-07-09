import demoImg from '../assets/images/demoimg.jpg'

const CardCast = ({ item }) => {
  return (
    <div className="shadow-sm bg-zinc-950 shadow-black text-zinc-100 rounded-md items-center overflow-hidden" key={item.id} >
      <div className="">
        {item.profile_path ?
          <img src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`} alt="" className="w-full" /> :
          <img src={demoImg} />}
      </div>
      <div className="px-1 py-2 text-center">
        <p>{item.name}</p>
        <p>{item.character}</p>
      </div>
    </div>
  )
}
export default CardCast