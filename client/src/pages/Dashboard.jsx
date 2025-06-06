import SubmissionForm from "../components/SubmissionForm.jsx";
import NamesBoard from "../components/NamesBoard.jsx";
import { useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main>
      <div className="h-1">
        {isLoading && <div className="relative flex w-[100%] bg-blue-300 h-1">
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
        </div>}
      </div>
      <SubmissionForm setIsLoading={setIsLoading} />
      <NamesBoard isLoading={isLoading} setIsLoading={setIsLoading} />
    </main>
  );
};

export default Dashboard;
