
import React from "react";
import { useNavigate } from "react-router-dom";

const EventTable = ({ events }) => {
  const navigate = useNavigate();

  // ✅ Format date and time cleanly
  const formatDateTime = (dateStr, timeStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);

    const formatted = date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const timeFormatted = timeStr
      ? timeStr
      : `${String(date.getHours()).padStart(2, "0")}:${String(
          date.getMinutes()
        ).padStart(2, "0")}`;

    return `${formatted} ${timeFormatted}`;
  };

  // ✅ Navigate to event details page
  const handleClick = (id) => {
    navigate(`/admin/events/${id}`);
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Event Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Created By
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Event Date & Time
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Date of Creation
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 bg-white">
          {events.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center py-4 text-gray-500 text-sm"
              >
                No Events Found
              </td>
            </tr>
          ) : (
            events.map((e) => (
              <tr
                key={e._id}
                className="hover:bg-gray-50 transition cursor-pointer"
                onClick={() => handleClick(e._id)}
              >
                <td className="px-4 py-2 text-gray-700">
                  {e.name}
                </td>
                <td className="px-4 py-2 text-gray-600">
                  {e.organizerPage || e.createdBy || "N/A"}
                </td>
                <td className="px-4 py-2 text-gray-600">
                  {formatDateTime(e.startDate, e.startTime)}
                </td>
                <td className="px-4 py-2 text-gray-600">
                  {formatDateTime(e.createdAt)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
