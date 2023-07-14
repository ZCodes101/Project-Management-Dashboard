# Project Management Dashboard

## Project Overview
The Project Management Dashboard is a full-stack React web application designed to streamline project management and collaboration. It provides users with a powerful set of features and functionalities to effectively manage projects, tasks, and timelines. By leveraging the capabilities of Firebase for data storage and retrieval, implementing authentication using Firebase, and integrating with Google APIs, this dashboard offers a seamless and secure user experience. Users can register for an account or log in to access various features and functionalities.

**Website : 
 You can access the Project Management Dashboard by following this link: https://pmdashboard-4684f.web.app/**

Test account login ---> 
**Username: test@test.com
 Password: test123**



## Features

**User Registration and Login:** Users can securely create an account or log in to access the dashboard.

**CRUD Operations:** Users can perform Create, Read, Update, and Delete operations on projects and comments.

**Privilege Access Controls:** The admin user has full control over managing projects, comments, and user accounts. Users have least controls. 

**Real-time Updates:** Users experience real-time updates for logged-in actions such as project creation, deletion, and comments.

**Filtering:** A filter allows users to sort and view different projects or focus on their own projects specifically.

**User Assignment:** Projects can be assigned to specific users using arrays and map data structures during creation.

**Calendar API Integration:** The dashboard integrates a calendar API, enabling users to manage project timelines and schedule events.


### Installation and Setup

To set up the project locally, please follow these steps:

1) Clone the repository:
 git clone https://github.com/ZCodes101/Project-Management-Dashboard.git 

2) Navigate to the project directory:
cd project-management-dashboard 

3) Install the dependencies:
 npm install 


4) Create a Firebase project and set up the necessary configurations.

5) Update the Firebase configuration details in the project:
Open the .env file and replace the placeholder values with your Firebase project's credentials.
Start the development server:

 npm start 

Open your browser and visit http://localhost:3000 to access the Project Management Dashboard locally.

## Technologies Used
**React:** A popular JavaScript library for building user interfaces that enables efficient rendering and management of UI components.

**Firebase:** A Backend-as-a-Service platform that offers data storage, retrieval, and authentication services, providing a secure and scalable infrastructure for the application.

**JavaScript:** The primary programming language used for implementing interactivity, logic, and dynamic behavior within the dashboard.

**HTML/CSS:** The standard markup language and styling framework used for structuring and presenting the web pages, ensuring an appealing and user-friendly interface.
