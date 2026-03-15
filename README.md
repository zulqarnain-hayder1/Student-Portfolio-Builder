# Intern Project Showcase Platform

##  Overview

The **Intern Project Showcase Platform** is a MERN stack web application that allows interns to professionally present their projects online. The platform provides a simple interface where users can upload project details, add images, include descriptions, and organize their work in one place.

The main purpose of this platform is to help interns build a small project portfolio that can easily be shared with recruiters, mentors, or potential employers.

---

##  Objective

The goal of this project is to provide a system where interns can showcase their technical work in a structured way. Instead of sharing projects individually, users can upload them to the platform and generate shareable links for easy presentation.

---

##  Technologies Used

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Other Tools

* Multer (for file/image uploads)
* REST APIs for data handling

---

##  Features

* Upload projects with **title, description, tags, and images**
* Store project data securely in **MongoDB**
* Generate **shareable project links**
* Simple interface to manage and update projects
* Backend APIs for project management

---

##  How the System Works

1. The user uploads project information through the frontend interface.
2. The backend API receives the request and processes the data.
3. Images are uploaded using **Multer**.
4. Project details are stored securely in **MongoDB**.
5. The platform displays projects in an organized format that can be shared with others.

---

## 📂 Project Structure

```bash
Intern-Project-Showcase-Platform
│
├── Backend
│   ├── auth.js              # Authentication logic
│   ├── db_config.js         # MongoDB database configuration
│   ├── Interns.js           # Intern/project data model
│   ├── multer.js            # File upload configuration
│   ├── index.js             # Main backend server file
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── main.jsx
│   ├── index.html
│
├── package.json
├── .gitignore
└── README.md
```

---

##  Future Improvements

* User authentication and login system
* Project search and filtering
* User profile pages
* Project analytics (views and engagement)
* Better UI for project presentation

---

##  Outcome

This platform helps interns display their projects in a professional and organized way. It provides a simple portfolio-style system where users can highlight their technical work and share it easily with recruiters or employers.

---

##  Author

**Zulqarnain Haider**

Software Engineering Student
