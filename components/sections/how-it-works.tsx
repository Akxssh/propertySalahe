export default function HowItWorks() {
  return (
    <section className="my-0 flex h-auto w-full flex-col items-center justify-center gap-8 bg-[#1a1a1a] p-6 outline outline-2 outline-[#333333]">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-4xl text-white sm:text-5xl">How it works</h2>
        <h3 className="text-base text-gray-500">
          Simple 3-step process to find your home
        </h3>
      </div>
      <div className="flex flex-col items-start justify-center gap-8 text-white">
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
            <span className="text-xl font-bold text-black">1</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl">Tell Your Budget</span>
            <span className="text-xl text-gray-500">
              Share budget & preferred areas
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
            <span className="text-xl font-bold text-black">2</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl">Get Shortlist</span>
            <span className="text-xl text-gray-500">
              Receive vetted project options
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
            <span className="text-xl font-bold text-black">3</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl">Site Visit + Loan</span>
            <span className="text-xl text-gray-500">
              We arrange visits & loan help
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
