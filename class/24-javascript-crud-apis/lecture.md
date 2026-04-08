JavaScript CRUD APIs Slides

- https://docs.google.com/presentation/d/1NjCpLAobb8JWBNybuvlq8Y-wve94sY_4jYm1t7KO1lk/edit?usp=sharing

- Walkthrough
  - New org -> project -> table
  - Add some data (make sure RLS is disabled)
  - Connect table to code
    - JavaScript Docs
      - JavaScript CDN install
        - Look at minified supabase CDN code for fun
      - createClient
        - rename supabase to something else like db
        - Find Supabase URL and Publishable Key (dashboard or settings)
  - Test connection
    - Table API Docs
      - Go through get all with everyone
      - Pair programming
        - Functions for each operation (only console.log() stuff)
          - get all
          - create new row
          - delete row by ID
          - edit row by ID
