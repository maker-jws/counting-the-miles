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
- isPublic: Boolean (default: false)
- createdAt: Mongoose
- updatedAt: Mongoose

### Route

- \_id: ObjectId
- name: String \*\*\*
- description: String \*\*\*
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
  - Connect to database
  - setup .env and .gitignore
  - add DB connection string
  - etc.
- Build Primary And Second Models X
  - Build the Ride model - X
  - Define a Route Schema - X
- Build landing page (homepage)
- Build the new Ride page
- Create a Ride
- Build the Ride index page
- Build the Ride Show page
- Build the Edit Ride page
- Delete a Ride
- Update a Ride
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

---

- Build the Ride index page
- Build the Ride Show page
- Build the Edit Ride page
- Add Additional header style partial and fallback hero image

## Done

Features I have completed:

### Day 1

- Revisit and populate draft ERD in `planning.md`

### Day 2

- boilerplate - create repo
  - create repo - DONE
  - initialize node project - DONE
  - install base dependencies - DONE
  - populate directories (controllers, views, models, middleware, utils)- DONE
  - populated server.js -
    - application imports + listener - DONE
    - import db connection - DONE
    - set view engine - DONE
    - import and mount express middleware (LU: Isolated express-specific middleware to discrete module) - DONE
    - build test route - DONE

### Day 3

- Build the Ride model

### Day 4

- Build landing page (homepage)

  - populate headers
  - populate partials
  - populate global styles and base css

- Build the new Ride page
  - create form
- Create a Ride
  - write custome middleware to clean up request body (empty fields and convert checkbox values to boolean)

### Day 5

### Day 6

### Day 7

### Day 8

### Day 9

### Day 10
