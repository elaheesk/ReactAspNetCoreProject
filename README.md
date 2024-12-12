Quotes Application

Description:
This is a full-stack web application built with:
*Frontend: React with Typescript
*Backend: ASP.NET Core
*Database: SQLite

The application allows users to:
*Add quotes.
*View a list of quotes.
*Edit or delete quotes.
*Persist quotes in an SQLite database.

Technologies Used:
*React: For the frontend, providing a dynamic and interactive user interface.
*ASP.NET Core: For the backend, serving APIs to handle CRUD operations.
*SQLite: A lightweight database for storing quotes.


Getting Started
Prerequisites:
Ensure you have the following installed on your system:
Node.js (for the React frontend)
.NET SDK (for the ASP.NET Core backend)
Visual Studio or Visual Studio Code (optional, for editing and running the project)

Frontend Setup
1. Navigate to the frontend folder
2. Install dependencies: npm install
3. Start the development server: npm run dev
The frontend will be available at http://localhost:5173

Backend Setup
1.Open the project.server folder in Visual Studio.
2.Ensure the SQLite database is configured correctly in Program.cs
3.Run the backend: Click the Run button (▶️) in Visual Studio, or press F5.
The backend will be available at https://localhost:7285/swagger/index.html (the port depends on your Visual Studio setup).

Database
*The application uses SQLite for storing quotes.
*The database file (app.db) will be created automatically in the project.server folder.
*Use a database viewer (e.g., DB Browser for SQLite) if you want to inspect the database.
