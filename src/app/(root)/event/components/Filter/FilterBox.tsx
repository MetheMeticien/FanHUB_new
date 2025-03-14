"use client";

export default function FilterBox({ filters, onFilterChange, onApplyFilters }) {
  const { startDate, endDate, time, location } = filters;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilters();
  };

  return (
    <div className="p-6 bg-[#202020] rounded-lg shadow-lg w-full max-w-md border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Filter Events</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Start Date Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onFilterChange("startDate", e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* End Date Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onFilterChange("endDate", e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* Time Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => onFilterChange("time", e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => onFilterChange("location", e.target.value)}
            className="w-full p-2 bg-[#2d2d2d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}