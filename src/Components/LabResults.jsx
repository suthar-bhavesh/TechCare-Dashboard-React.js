import { Download } from "lucide-react";

const LabResult = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex ">
        <h2 className="flex font-bold text-[24px]">Lab Results</h2>
      </div>
      <div
        className="mt-4 overflow-y-auto [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:bg-gray-200 
  [&::-webkit-scrollbar-thumb]:bg-black 
  [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {patient.lab_results?.map((result, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center hover:bg-[#F6F7F8] p-2.5"
            >
              <p>{result}</p>
              <Download />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LabResult;
