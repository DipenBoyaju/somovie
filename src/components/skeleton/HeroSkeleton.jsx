const HeroSkeleton = () => {
  return (
    <div>
      <div className="w-full bg-zinc-900 h-[100%] p-16 pt-40">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-10 py-1">
            <div className="h-6 w-40 bg-slate-700 rounded-lg"></div>
            <div className="w-[70vw] bg-slate-700 h-14 rounded-xl"></div>
            <div className="grid grid-row-3 gap-1 w-[40vw]">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
            <div className="grid grid-cols-3 w-[30vw] gap-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
            <div className="bg-slate-800 h-12 w-[20vw] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSkeleton