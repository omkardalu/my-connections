import { useEffect, useState } from "react";
import SubmissionsCard from '../components/SubmissionCard.jsx';
const NamesBoard = ({setIsLoading, isLoading}) => {
  const [ submissions, setSubmissions ] = useState();
  
  useEffect(() => {
    try{
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const getAllSubmissions = async () => {
        setIsLoading(true);
        const response = await fetch(`${backendUrl}/api/v1/allsubmissions`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });

        const submissionsData = await response.json();
        if(!submissionsData.success){
          setSubmissions('No Data found');
        }

        setSubmissions(submissionsData.submissions);
        setIsLoading(false);
      };

      getAllSubmissions();
    }catch (e){
      console.log(e);
    }
  }, []);
  
  if (!submissions) return 'Loading...';
  return (
  <section id="namesBoard" className="flex items-center justify-center flex-col  p-4 m-4 border-amber-50 border-2">
    {submissions.map((submission, index) => {
      return <SubmissionsCard key={index} name={submission.name} time={submission.submittedAt} />
    })}
  </section>
  )
};

export default NamesBoard;
