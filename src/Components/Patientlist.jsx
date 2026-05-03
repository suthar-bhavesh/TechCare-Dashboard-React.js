import { Ellipsis, Search } from "lucide-react";

const PatientList = ({ Patients }) => {
  return (
    <div className="bg-white 2xl:w-91.75 2xl:h-263.5 w-full h-full mt-8 rounded-2xl overflow-hidden pb-6 flex flex-col">
      <div className="flex justify-between items-center px-7 py-6">
        <h2 className="text-[24px] font-bold">Patients</h2>
        <Search />
      </div>
      <div
        className="overflow-y-auto flex flex-col overflow-hidden h-237 [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:bg-gray-200 
  [&::-webkit-scrollbar-thumb]:bg-black 
  [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {Patients?.map((patient) => (
          <div
            key={patient.name}
            className={`flex justify-between items-center px-5 mb-8 ${
              patient.name === "Jessica Taylor" ? "bg-[#D8FCF7] py-4" : ""
            } `}
          >
            <div className="flex items-center gap-3">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-medium text-[14px]">{patient.name}</h3>
                <div className="flex items-center text-[14px] text-gray-400 font-medium">
                  <p>{patient.gender}, &nbsp;</p>
                  <p> {patient.age}</p>
                </div>
              </div>
            </div>
            <div>
              <Ellipsis />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
