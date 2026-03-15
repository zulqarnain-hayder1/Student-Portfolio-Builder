import React from "react";

const Dashboard = () => {

  const projects = [
    {
      title: "Weather Forecast App",
      description: "A web app that predicts weather using API data.",
      tag: "React",
    },
    {
      title: "Expense Tracker",
      description: "Track daily expenses and generate reports.",
      tag: "Flutter",
    },
    {
      title: "Campus Network Simulation",
      description: "Cisco Packet Tracer network design project.",
      tag: "Networking",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Intern Dashboard
        </h1>

        <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition">
          + Add New Project
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-gray-500 text-sm">Total Projects</h2>
          <p className="text-3xl font-bold text-indigo-500 mt-2">12</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-gray-500 text-sm">Portfolio Views</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">1,240</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-gray-500 text-sm">Shared Links</h2>
          <p className="text-3xl font-bold text-purple-500 mt-2">8</p>
        </div>

      </div>

      {/* Recent Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-5 text-gray-700">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>

              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs">
                {project.tag}
              </span>

              <div className="mt-4 flex justify-between">
                <button className="text-indigo-500 hover:underline text-sm">
                  View
                </button>

                <button className="text-red-500 hover:underline text-sm">
                  Delete
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Dashboard;