import moment from "moment";

function SubmissionCard({ name, time }) {
  return (
    <section className="p-2 rounder-lg border-2 rounded-2xl border-amber-200 m-2 ">
      <div className="p-1 text-2xl font-medium">{name}</div>
      <div className="p-1 font-mono text-[0.9rem]">{time}</div>
    </section>
  );
}

export default SubmissionCard;
