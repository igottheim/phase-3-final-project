Project: TASKFORCE

Purpose of Application: TASKFORCE is an application to allow users to categorize and prioritize their tasks, specifically around the house. Users can create new tasks, delete tasks, update tasks, and move tasks to specific locations around the house. 

Ruby Backend setup

Tables
    1. Tasks
        Columns: (id,name,user_id,category_id,priority,completed?)
    2. Categories
        Columns:(id, name)
    3. User
        Columns: (id, first_name, last_name, password, username)
        The password is hashed within the backend to prevent hackers from stealing information!

Relationships
    Users have many tasks. Users have many categories, through tasks.
    Categories have many tasks. Categories have many users, through tasks
    Tasks belongs to a user. Tasks belong to a category

There are 11 set categories that users can add to:
    1	Bathroom
    2	Kitchen
    3	Living Room
    4	Master Bedroom
    5	Guest BedRoom
    6	Patio
    7	Garage
    8	Basement
    9	Frontyard
    10	Backyard
    11	Car


The tasks will have full CRUD capabilities. Tasks can be added, deleted, and modified based on priority. 

Users can be added to the database with a new login.


The front end has been built with React. The backend has been built with Ruby, implementing Sinatra


To Start Backend
bundle install(to install all gems)
rake server (set at port 9295)

To Start Frontend
npm build
npm start