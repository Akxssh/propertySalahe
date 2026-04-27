export default function WeCompare() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-black px-4 py-16 text-white outline outline-2 outline-[#363636]">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        We Compare So You Don&apos;t Overpay
      </h2>

      <p className="mt-2 text-sm text-gray-400">Sample comparison snapshot</p>

      <div className="mt-10 w-full max-w-3xl">
        <div className="grid grid-cols-3 border-b border-gray-700 pb-3 text-center">
          <div></div>
          <div className="font-medium text-white">Builder A</div>
          <div className="font-medium text-white">Builder B</div>
        </div>

        <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
          <div className="text-gray-400">Price/sqft</div>
          <div>₹6,800</div>
          <div>₹7,200</div>
        </div>

        <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
          <div className="text-gray-400">RERA Status</div>
          <div className="text-green-500">Approved</div>
          <div className="text-red-500">Pending</div>
        </div>

        <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
          <div className="text-gray-400">Possession</div>
          <div>Dec 2025</div>
          <div>Mar 2027</div>
        </div>

        <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
          <div className="text-gray-400">Hidden Charges</div>
          <div>₹2.5L</div>
          <div>₹6L</div>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        We analyze 15+ factors before recommending any project.
      </p>
    </section>
  )
}
