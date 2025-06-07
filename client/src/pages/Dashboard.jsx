import SubmissionForm from "../components/SubmissionForm.jsx";
import NamesBoard from "../components/NamesBoard.jsx";
import { useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(null);
  return (
    <main>
      <div className="h-1">
        {isLoading && <div className="fixed right-0 left-0 flex w-[100%] bg-blue-300 h-1">
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
          <span className="loader-animation w-1 bg-blue-400 h-full rounded-full"></span>
        </div>}
      </div>
      <SubmissionForm setEdit={setEdit} edit={edit} setIsLoading={setIsLoading} />
      <NamesBoard setEdit={setEdit} setIsLoading={setIsLoading} />
    </main>
  );
};

export default Dashboard;
