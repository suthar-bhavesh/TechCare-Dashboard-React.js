import useFetch from "../Hooks/useFetch";
import Patientlist from "../Components/Patientlist";
import BloodPressureChart from "../Components/BloodPressureChart";
import HealthCard from "../Components/HealthCard";
import PatientProfile from "../Components/Patientprofile";
import DiagnosticTable from "../Components/DiagnosticTable";
import LabResult from "../Components/LabResults";
import { useState } from "react";
const Dashboard = () => {
  const [activePatient, setActivePatient] = useState("Jessica Taylor");

  const { data = [] } = useFetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
  );

  const patient = data.find((p) => p.name === activePatient);

  const Months = patient?.diagnosis_history?.slice(0, 6).reverse();

  return (
    <>
      <div className="flex flex-col 2xl:flex-row md:gap-8">
        <Patientlist
          Patients={data}
          activePatient={activePatient}
          setActivePatient={setActivePatient}
        />

        <div className="flex flex-col gap-8 mt-8">
          <div className="overflow-hidden flex md:flex-col flex-col bg-white rounded-2xl px-5 py-6 2xl:w-191.5 2xl:h-168.25 md:justify-between gap-5 w-full h-full">
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-bold">Diagnosis History</h2>
            </div>

            <div className="rounded-2xl flex flex-col">
              {patient && (
                <BloodPressureChart
                  data={Months}
                  className="w-130.25 h-56.25 bg-[#F4F0FE]"
                />
              )}
            </div>
            <div className="flex flex-col">
              <HealthCard patient={patient} />
            </div>
          </div>
          <div className="2xl:w-191.5 2xl:h-87.25 bg-white px-5 py-6 rounded-2xl flex flex-col overflow-hidden">
            <DiagnosticTable patient={patient} />
          </div>
        </div>
        <div className="flex flex-col md:gap-8 mt-8">
          <div className="2xl:w-91.75 2xl:h-185 bg-white rounded-2xl px-5 py-6 w-full h-full flex flex-col">
            <PatientProfile patient={patient} />
          </div>
          <div className="bg-white 2xl:w-91.75 2xl:h-74 rounded-2xl px-5 py-6">
            <LabResult patient={patient} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
