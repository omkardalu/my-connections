import { useRef } from "react";

const SubmissionForm = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const submitText = useRef("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    submitText.current.innerText = "Submiting..";
    submitText.current.disabled = true;
    const name = formData.get("name");

    const response = await fetch(`${backendUrl}/api/v1/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();

    if (data.success) {
      submitText.current.innerText = "Submited";
    } else {
      submitText.current.innerText = "failed";
    }
  };
  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="p-4">
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          required
          name="name"
          placeholder="Enter your name"
          className="p-1 px-2 border-2 text-gray-500 border-blue-400 rounded-lg"
        />
      </div>
      <div>
        <button
          className="bg-gray-100 p-2 px-4 rounded-lg m-2 text-gray-400 hover:bg-gray-200"
          type="reset"
          onClick={() => {
            submitText.current.innerText = "Submit";
            submitText.current.disabled = false;
          }}
        >
          Clear
        </button>
        <button
          className="bg-blue-400 p-2 px-4 rounded-lg m-2 w-[100px] disabled:bg-blue-200 disabled:hover:cursor-no-drop hover:cursor-pointer text-white hover:bg-blue-500"
          type="submit"
          ref={submitText}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SubmissionForm;