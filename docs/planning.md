# Planning for Count the Miles

## ERD (Entity Relationship Diagram) - Data Model

![image of my ERD - TBD ](#)

### Ride

- \_id: ObjectId
- rideDist: Number \*\*\*
- unit: String (enum: ['km', 'mi']) \*\*\*
- route: routeSchema
- heroImage: String (default: "TBD")
- category: String (enum: ['road', 'mountain', 'gravel', 'touring'])
- isPublic: Boolean (default: true)
- createdAt: Mongoose
- updatedAt: Mongoose

### Route

- \_id: ObjectId
- name: String \*\*\*
- challengeRating: Number [0-5]
- routeDist: Number \*\*\*
- unit: String (enum: ['km', 'mi']) \*\*\*
- isPublic: Boolean (default: true)

### User

- \_id: ObjectId
- username: String \*\*\*
- password: String \*\*\*

### Profile

- \_id: ObjectId
- bio: String
- displayName: String \*\*\*
- image: (default: TBD)
- location \*\*\*
- rides: [ObjectId]

\*\*\* Required

### Application Flow Chart

[Link to Flow Diagram - TBD](#)

## References ( Documentation used for quick access )

- [Fruits App](https://generalassembly.instructure.com/courses/393/pages/men-stack-crud-app-fruits?module_item_id=25674)
- [Associations Lesson](https://generalassembly.instructure.com/courses/393/pages/men-stack-embedding-related-data-fruits-app?module_item_id=49715)
- [Auth Lesson](https://generalassembly.instructure.com/courses/393/pages/men-stack-session-auth?module_item_id=25675)

## Project Planning

1. Build out big-picture build lists feature by feature (from notes / documentation)
1. Populate the subtasks by referencing Fruits App build steps
1. Migrate populated list into the Doing field below

### To Do - MVP Feature

Each build feature is the 1st level bullet points with subtasks below. Substeps will be populated in build days below.

- project setup / boilerplate
  - create repo
  - initialize node project
  - install dependencies
  - etc.
- Build landing page (homepage)
- Connect to database
  - install dependencies
  - setup .env and .gitignore
  - add DB connection string
- Build the Ride model
- Build the new Ride page
- Create a Ride
- Build the Ride index page
- Build the Ride Show page
- Build the Edit Ride page
- Delete a Ride
- Update a Ride
- Define a Route Schema
- Build a Route Association Form
- Populate Route Associations Controller
- Rendering Route Info on Show Page
- Populate (public) Rides on (public) Rides

## Icebox / Stretch

- Add a User Model
- Add an Auth Controller
- Build Sign Up Page
- Add Create a User page
- Build Sign In Page
- Sign in the User
- Sign out the User
- Protecting Routes
- Add User Session Middleware
- Register / login functional

---

## Doing

What I am currently working on:

- project setup / boilerplate
  - create repo
  - initialize node project
  - install dependencies
  - etc.

---

## Done

Features I have completed:

- planning + boilerplate - populate `planning.md`

### Day 1

- boilerplate - create repo
  - create repo
  - initialize node project
  - install dependencies
  - etc.

### Day 2

### Day 3

### Day 4

### Day 5

### Day 6

### Day 7

### Day 8

### Day 9

### Day 10
