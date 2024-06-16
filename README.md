# Event-Management-App

### Project Description

This project is a full-stack application that combines the power of Next.js with React for the frontend and Django for the backend. Next.js provides a framework for server-rendered or statically exported React applications, offering benefits like fast rendering and SEO friendliness. React is used for building the user interface components, making the app interactive and dynamic. On the backend, Django, a high-level Python web framework, is used for handling server-side logic, database operations, and routing. Django's robust features and security measures make it an excellent choice for backend development.

### Running the Project

#### Backend Setup (Django)

1. **Set up a virtual environment**:

   - Open a terminal and navigate to the backend directory.
   - Run `python -m venv venv` to create a virtual environment.
   - Activate the virtual environment:
     - Windows: `.\venv\Scripts\activate`
     - macOS/Linux: `source venv/bin/activate`

2. **Install dependencies**:

   - Ensure you are in the backend directory where the `requirements.txt` is located.
   - Run `pip install -r requirements.txt` to install the required Python packages.

3. **Migrate the database**:

   - Run `python manage.py migrate` to apply migrations.

4. **Run the Django development server**:
   - Execute `python manage.py runserver`.
   - The backend will be available at `http://127.0.0.1:8000/`.

#### Frontend Setup (Next.js with React)

1. **Install Node.js and npm**:

   - Ensure Node.js and npm are installed. You can download them from [nodejs.org](https://nodejs.org/).

2. **Install dependencies**:

   - Open a new terminal and navigate to the frontend directory.
   - Run `npm install` to install the necessary packages.

3. **Run the Next.js development server**:
   - Execute `npm run dev`.
   - The frontend will be accessible at `http://localhost:3000/`.

#### Accessing the Application

- After starting both servers, you can access the frontend of the application by navigating to `http://localhost:3000/` in your web browser. The frontend will communicate with the Django backend for data management and server-side operations.

#### Note

- Ensure both the backend and frontend servers are running simultaneously for the full functionality of the application.
- You might need to adjust CORS settings in Django or proxy settings in Next.js based on your development needs.
