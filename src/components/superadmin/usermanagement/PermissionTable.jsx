
export default function PermissionsTable() {
  const permissions = [
    { feature: "Key Features", status: "Given" },
    { feature: "ChatGPT Integration", status: "Given" },
    { feature: "Campus School", status: "Restricted" },
    { feature: "Alumni Features", status: "Given" },
    { feature: "Learning Management System", status: "Given" },
    { feature: "Entrance Examination System (Secondary only)", status: "Restricted" },
    { feature: "WhatsApp/SMS Broadcast Message", status: "Given" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full  border rounded bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-[#8E959C]">
              Permission List
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-[#8E959C]">
              Nursery
            </th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr key={index}>
              <td className="px-6 py-4 border-b border-gray-200 text-md text-[#8E959C]">
                {permission.feature}
              </td>
              <td className="px-6 py-4 flex items-center gap-4 border-b border-gray-200 text-sm text-[#8E959C]">
              <input
                  type="checkbox"
                  checked={permission.status !== "Restricted"}
                  readOnly
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <div className={`${permission.status !== "Restricted" ? "text-blue-500" :""}`}>

                {permission.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
