# TaskManagement
A simple project that allows you to manage your tasks and keep track of what you need to get done. Built using HTML, CSS, and JavaScript, with the added feature of preserving your todos in local storage.
website- https://abhinavsinghyadav5.github.io/TaskManagement/

##  Features
- Users can add new tasks with a title, description, and due date.
- Users can view detailed information of each task.
- Option to edit existing tasks.
- Option to delete tasks.
- Responsive design to ensure usability on both desktop and mobile
devices.

### Running the Server
To run the server, execute:

bash
Copy code
node index.js

### Testing the API
You can use tools like Postman or curl to test the endpoints:

Retrieve all tasks:

bash
Copy code
curl -X GET http://localhost:3000/tasks
Create a new task:

bash
Copy code
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "Task 1", "description": "Description of Task 1", "dueDate": "2024-07-01"}'
Retrieve a single task by ID:

bash
Copy code
curl -X GET http://localhost:3000/tasks/1
Update an existing task:

bash
Copy code
curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task 1", "description": "Updated description", "dueDate": "2024-07-02"}'
Delete a task:

bash
Copy code
curl -X DELETE http://localhost:3000/tasks/1
