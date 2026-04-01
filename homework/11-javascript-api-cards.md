## JavaScript API Cards

Create a GitHub repo for this assignment named `is120-hw11-firstname-lastname`.

Find a public API for any topic you would like. You will need to ensure that the API is free to use without an API key and that it does not have restricting CORS policies. The API you use should also have the ability to return a list of items. Some good places to find free public APIs:

- https://free-apis.github.io/#/browse
- https://github.com/public-apis/public-apis

Using your selected API, build a page that displays multiple cards from a list of selected items returned by the API.

- This should be generated from a single API call that returns a list of objects.
- Feel free to hardcode query parameters here as well if your API allows them.

After your card display is working correctly, you will need to add functionality for a new group of favorite cards.

- This will be a separate display above the list of cards you have already grabbed from the API. Add a condition to hide this display if there are no favorites
- You will not need another API call, you are already fetching the data once and can use that to help build your favorite cards
- You will likely have an array of favorites that holds the names or ID numbers for each of your favorite cards
- It is up to you how to get cards into your favorites array (text input to get favorite name, buttons on each card to add to favorites, etc.)
- Duplication of cards in your favorite and normal sections is okay
- Your favorites array should be stored in local storage so the cards persist after closing the page
- Include minimal styling to make your cards look presentable

Note: For this entire homework, you will only need ONE API call. It is important for you to consider performance, especially when you're using someone else's API.

In your `README.md` include the following:

- Why is it important that we only make one API call for this page? How does that affect you as a frontend developer and how does that affect the API developers?
- Why is local storage useful in this scenario? Can you think of other instances where it would be useful?
- What would break if a user's favorites referenced an item the API no longer returns? How could you fix that?

Publish using GitHub pages and include the live URL in your repo about section. Submit the GitHub repo URL in LearningSuite.
