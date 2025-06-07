import moment from "moment";

function SubmissionCard({ id, name, time, setEdit }) {
  const handleEdit = () => {
    setEdit({id,name});
  }
  const handleDelete = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await fetch (`${backendUrl}/api/v1/submit/${id}`,{
      method:'DELETE',
      headers:{
        "content-type": "application/json",
      },
    })
    const data = response.json();
    console.log(data);
    
  }
  return (
    <section className=" relative p-2 w-xl rounder-lg border-2 rounded-lg overflow-hidden border-amber-200 m-2 ">
      <span onClick={handleEdit} className="absolute right-0 bottom-0 hover:bg-amber-400/50 hover:cursor-pointer rounded-lg p-2">🔧</span>
      <span onClick={handleDelete} className="absolute right-0 top-0 hover:bg-amber-400/50 hover:cursor-pointer rounded-lg p-2">❌</span>
      <div className="p-1 text-2xl font-medium">{name}</div>
      <div className="p-1 font-mono text-[0.9rem]">{time}</div>
    </section>
  );
}

export default SubmissionCard;
