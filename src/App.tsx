function App() {
  return (
    <div className="flex h-[375px] max-w-[350px] flex-col overflow-hidden rounded-xl bg-white">
      <div className="relative h-[280px] ">
        <img
          className="absolute bottom-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[5px] border-white"
          src="./image-victor.jpg"
          alt="profile"
        />
        <img className="bg-cover" src="./bg-pattern-card.svg" alt="card" />
        <div className="mb-4 flex h-1/2 flex-col items-center justify-end pb-6">
          <h1 className="mb-1 font-bold text-very-dark-desaturated-blue">
            Victor Crest
            <span className="font-normal text-dark-grayish-blue"> 26</span>
          </h1>
          <p className="text-sm text-dark-grayish-blue">London</p>
        </div>
      </div>
      <hr className="border-dark-gray opacity-25" />
      <div className="flex flex-1 flex-row items-center justify-evenly text-center">
        <div>
          <p className="font-bold text-very-dark-desaturated-blue">80K</p>
          <p className="text-[11px] tracking-widest text-dark-grayish-blue">
            Followers
          </p>
        </div>
        <div>
          <p className="font-bold text-very-dark-desaturated-blue">803K</p>
          <p className="text-[11px] tracking-widest text-dark-grayish-blue">
            Likes
          </p>
        </div>
        <div>
          <p className="font-bold text-very-dark-desaturated-blue">1.4K</p>
          <p className="text-[11px] tracking-widest text-dark-grayish-blue">
            Photos
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
