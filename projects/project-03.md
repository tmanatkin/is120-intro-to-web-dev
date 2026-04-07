## Project 3

Create a Supabase CRUD application related to a topic that you are interested in. This may be added as a new feature to Project 2, or can be created as a completely new project. Some ideas: movie watchlist, recent books, workout log, bucket list, expense tracker, etc.

- Your table should include 5 total columns (this may include `id` and `created_at`)
- You must include the following CRUD operations
  - Create a new row
  - Read all rows
  - Update row by ID
  - Delete row by ID
- To ensure data accuracy on load and after every operation, you should call your read all operation and refresh elements on the DOM
- You may display each row element however you would like (table, cards, etc.)
- Include styling to make this project look clean, professional, and user friendly

If you're struggling to find how to implement CRUD operations using HTML, here are some suggestions

- You shouldn't need any elements for a read operation. This will trigger automatically on load and after other CRUD operations
- To create elements, use a group input tags (one for each column) with a save button to trigger the create function
- For updating and deleting, include buttons on each element that edit or delete that specific row
- Updating is the most complex operation to implement. The edit buttons on each element should populate the existing input tags with that row's data. The save button should then trigger the update function when clicked. You can handle this change from save being create to update by storing the current row's ID in a variable when the edit button is clicked, and checking if that variable is set when clicking save.

In your `README.md`, include a brief description of your project and what you learned while building it. What was difficult about this project and what did you learn about Supabase and creating a CRUD application? Is there anything you would like to add or change for your Project 3 in the future?

Submit this project as a GitHub repo named `is120-project3-firstname-lastname`.

Publish using GitHub pages and include the live URL in your repo about section. Submit the GitHub repo URL in LearningSuite.
