const Dashboard = () => {
  return (
    <main>
      <form action="" className="flex flex-col items-center justify-center">
        <div className="p-4">
          <label htmlFor="name">Your name: </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-1 px-2"
          />
        </div>
      </form>
    </main>
  );
};

export default Dashboard;
