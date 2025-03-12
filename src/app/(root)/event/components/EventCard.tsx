import Image from "next/image";

export default function EventCard() {
  return (
    <div className="flex flex-col min-w-80 bg-[#202020] rounded-lg flex-grow">
      <div className="min-h-40 sm:min-h-48 md:min-h-56 lg:min-h-64 relative rounded-lg">
        <Image
          src="/assets/ronaldo.jpg"
          alt="Image"
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-col p-4 gap-4">
        <div className="flex justify-between gap-1">
          <div className="flex flex-col">
            <h2 className="text-base sm:text-lg font-bold text-gray-400">
              RunRise Nation 15k 2025
            </h2>
            <h5 className="text-xs sm:text-sm opacity-65 font-medium text-gray-400">
              Mohammadpur, Dhaka
            </h5>
          </div>
          <div className="flex flex-col justify-center gap-1 w-32 text-right">
            <h2 className="text-xs sm:text-sm font-medium text-gray-400">
              8 Oct, 2025
            </h2>
            <h5 className="text-xs sm:text-sm font-medium text-gray-400">
              11:00 pm
            </h5>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="text-gray-800 rounded-md font-semibold px-2 py-1 sm:px-4 sm:py-2 bg-emerald-600 hover:bg-emerald-500">
            Interested
          </button>
          <button className="text-gray-800 rounded-md font-semibold px-2 py-1 sm:px-4 sm:py-2 bg-emerald-600 hover:bg-emerald-500">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}