import React from "react";

const PublicPortfolio = () => {

  const projects = [
    {
      title: "Expense Tracker",
      description: "Track daily expenses using Flutter.",
    },
    {
      title: "Campus Network Simulation",
      description: "Cisco Packet Tracer network design project.",
    },
    {
      title: "Weather Forecast App",
      description: "React weather forecast application.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Intern Portfolio
        </h1>
        <p className="text-gray-600">
          Projects created and showcased professionally
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 text-sm">
              {project.description}
            </p>

            <button className="mt-4 text-indigo-500 hover:underline text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PublicPortfolio;