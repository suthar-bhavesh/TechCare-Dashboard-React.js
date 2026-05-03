import { Calendar, VenusIcon, Phone, ShieldCheck } from "lucide-react";

const PatientProfile = ({ patient }) => {
  if (!patient) return null;

  const Dateformat = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-full h-full flex flex-col gap-10">
      {/* profile image and Patient Name */}
      <div className="flex flex-col justify-center items-center gap-6">
        <div>
          <img src={patient.profile_picture} alt={patient.name} />
        </div>
        <div>
          <h3 className="text-[24px] font-bold">{patient.name}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-8 space-y-4">
        {/* date of birth */}
        <div className="flex items-center">
          <div className="bg-[#F6F7F8] p-2 rounded-full">
            <Calendar />
          </div>
          <div className="text-[14px]">
            <p className="text-[#072635]">Date Of Birth</p>
            <p className="text-[#072635] font-medium">
              {Dateformat(patient.date_of_birth)}
            </p>
          </div>
        </div>
        {/* Gendar */}
        <div className="flex items-center">
          <div className="bg-[#F6F7F8] p-2 rounded-full">
            <VenusIcon />
          </div>
          <div className="text-[14px]">
            <p className="text-[#072635]">Gender</p>
            <p className="text-[#072635] font-medium">{patient.gender}</p>
          </div>
        </div>
        {/* Contact info */}
        <div className="flex items-center">
          <div className="bg-[#F6F7F8] p-2 rounded-full">
            <Phone />
          </div>
          <div className="text-[14px]">
            <p className="text-[#072635]">Contact Info</p>
            <p className="text-[#072635] font-medium">{patient.phone_number}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#F6F7F8] p-2 rounded-full">
            <Phone />
          </div>
          <div className="text-[14px]">
            <p className="text-[#072635]">Emergency Contacts</p>
            <p className="text-[#072635] font-medium">
              {patient.emergency_contact}
            </p>
          </div>
        </div>
        {/* Insurance Name */}
        <div className="flex items-center">
          <div className="bg-[#F6F7F8] p-2 rounded-full">
            <ShieldCheck />
          </div>
          <div className="text-[14px]">
            <p className="text-[#072635]">Insurance Provider</p>
            <p className="text-[#072635] font-medium">
              {patient.insurance_type}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <button className="flex bg-[#01F0D0] py-2.75 mt-auto px-10 rounded-[41px] text-[14px] font-medium cursor-pointer">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default PatientProfile;
