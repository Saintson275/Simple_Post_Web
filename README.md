# React Redux Toolkit Blog App

This project is a simple blog application built using React, Redux Toolkit, and React Router. It allows users to view a list of posts, add new posts, and navigate between different sections of the application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/react-redux-toolkit-blog-app.git
   cd react-redux-toolkit-blog-app
   
2. **Install dependencies:**:

   ```bash
   npm install
   
3. **Start the development server::**:

   ```bash
   npm run dev
   
## Usage
- Home Page: Navigate to the home page (/) to view a list of posts.
- Create Post: Navigate to /create-post and fill out the form to add a new post with a title and content.

## Folder Structure
The project structure is organized as follows:
react-redux-toolkit-blog-app/
├── public/                 # Public assets and index.html
├── src/                    # Source code
│   ├── components/         # React components
│   ├── services/           # API services and Redux setup
│   ├── ui/                 # Reusable UI components (e.g., buttons, cards)
│   ├── App.tsx             # Main application component with routing
│   └── index.tsx           # Entry point, renders the App component
├── package.json            # Dependencies and scripts
└── README.md               # Project README file

## Features
- Redux Toolkit: State management with Redux Toolkit, including creating slices and defining API queries.
- React Router: Navigation and routing between different components (HomePage, AddPostForm).
- API Integration: Integration with a mock API (jsonplaceholder.typicode.com) to fetch and add posts.
- Responsive Design: Uses Tailwind CSS for responsive and mobile-first design principles.
- Error Handling: Basic error handling for API requests and form submissions.
- Dialogs and Modals: Utilizes Shadcn Alert Dialog for displaying modal dialogs for success/error messages.

Technologies Used
- [React](https://reactjs.org)
- [Redux Toolkit]
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)
- [Tailwind CSS](https://tailwindcss.com)
- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) (Mock API for testing)
