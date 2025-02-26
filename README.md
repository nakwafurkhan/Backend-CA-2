# Backend-CA-2


Part 1: Project Setup:
• Initialize a new Node.js project and install the necessary dependencies for building and running an Express server.
• Write a basic Express server and ensure it runs properly.
Part 2: Implementing a Signup Endpoint
Create Signup Endpoint
• Create the functionality to handle user signup on your server.
• The signup form should collect the following details from the user:
• Username
• Email
• Password
• Date of Birth
• When a user fills out this form and submits it, these details should be sent to your server for processing.
• Your server should be able to receive this information, validate it, and create a new user account based on the provided details.

Requirements for the input fields
1. Username:
• Username can not be empty
• Return an error message: "Username cannot be empty" if not provided.
2. Email:
• Email can not be empty
• Return an error message: "Email cannot be empty" if not provided.
3. Password:
• Minimum length: 8 characters.
• Maximum length: 16 characters.
• If the password is too short or too long, return the error: "Password length should be greater than 8 or less than or equal to 16".
(Use simple if-else conditions for validating input fields)

Part 3: Finalizing and Deploying the Project
Push all changes to Git:
• Initialize a Git repository in your project directory.
• Add and commit all the code written so far.
• Add node modules to git ignore.
• Push the code to a Git repository on a platform like GitHub.
Deploy the Backend:
• Deploy the backend to a backend deployment service (e.g., Render).
• Ensure the server is running and accessible from the internet.