import React, { useState } from "react";
import { addProject } from "../api/api";


const PortfolioEditor = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    tags: "",
    image: null,
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setProject({
      ...project,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
//! image handling here is important as we need to send the image file along with the other project details to the backend. We will use FormData to handle this multipart/form-data request.
    try{

      const formData = new FormData();

      formData.append("title", project.title);
      formData.append("description", project.description);
      formData.append("tags", project.tags);
      formData.append("upload_file", project.image);

      let response = await addProject(formData)
      if(response.data.success){
        alert("Project Submitted Successfully!");
        setProject({
          title: "",
          description: "",
          tags: "",
          image: null,
        })
      }else{
        alert("Failed to submit project. Please try again.");
      }
    }catch(error){
      console.error("Error submitting project:", error);
      alert("An error occurred while submitting the project. Please try again.");
    }

    console.log(project);

    alert("Project Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-8">

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create New Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" method="post" encType="multipart/form-data">

          {/* Project Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Project Description
            </label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your project..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              name="tags"
              value={project.tags}
              onChange={handleChange}
              placeholder="React, Node, MongoDB"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Project Image
            </label>
            <input
              type="file"
              onChange={handleImage}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
            >
              Publish Project
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default PortfolioEditor;