const DiagnosticTable = ({ patient }) => {
  if (!patient) return null;

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex">
          <h2 className="flex font-bold text-[24px]">Diagnostic List</h2>
        </div>

        <div className="flex flex-col mt-10 w-full">
          <table className="w-full border-separate flex flex-col border-spacing-0 h-58">
            <thead className="w-full">
              <tr className="bg-[#F6F7F8] rounded-3xl w-full flex overflow-hidden justify-center items-center gap-2.25">
                <th className="px-2 py-2 font-bold text-[#072635] md:text-sm text-left w-1/3 text-[11px] md:text-left md:w-1/2">
                  Problem/Diagnosis
                </th>
                <th className="px-2 py-2 font-bold text-[#072635] md:text-sm text-left w-1/3 md:w-1/2 text-[11px]">
                  Description
                </th>
                <th className="px-2 py-2 font-bold text-[#072635] md:text-sm md:text-left text-left text-[11px] w-1/3 md:w-1/2">
                  Status
                </th>
              </tr>
            </thead>
            <tbody
              className="flex flex-col overflow-y-auto max-h-75 w-full mt-3 divide-y divide-gray-100 [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:bg-gray-200 
  [&::-webkit-scrollbar-thumb]:bg-black 
  [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {patient.diagnostic_list?.map((list, index) => (
                <tr key={index} className="flex w-full">
                  <td className="px-4 py-4 w-1/3 md:text-sm text-[11px] md:w-1/2">
                    {list.name}
                  </td>
                  <td className="px-2 py-4 md:text-sm text-[11px] w-[37%] md:w-1/2">
                    {list.description}
                  </td>
                  <td className="px-4 py-4 w-1/6 md:text-sm text-[11px] md:w-1/2">
                    {list.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DiagnosticTable;
