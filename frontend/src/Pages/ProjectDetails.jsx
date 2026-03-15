import React, { useEffect, useState } from "react";
import { getProjects } from "../api/api";

const ProjectDetails = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const response = await getProjects();

      if (response.data.success) {
        console.log("Projects fetched:", response.data.data);

        // backend sends data
        setProjects(response.data.data);

      } else {
        console.error("Failed:", response.data.message);
      }

    } catch (error) {
      console.error("Error fetching projects:", error);
      alert("Error loading projects");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="max-w-3xl w-full space-y-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6"
          >

            <img
              src={`http://localhost:3000/uploads/${project.upload_file}`}
              alt="Project"
              className="rounded-lg mb-6"
            />

            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {project.title}
            </h1>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex gap-2 flex-wrap">
              {project.tags.split(",").map((tag, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default ProjectDetails;