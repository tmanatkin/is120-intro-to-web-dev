## JavaScript Tip Calculator

Create a GitHub repo for this assignment named `is120-hw9-firstname-lastname`.

Build a tip calculator using JavaScript DOM manipulation and HTML inputs. Your application will consist of two main inputs, a number input for the initial cost, and a group of 4 radio buttons with varying values for the tip amount. You should have an HTML p tag output for tip amount and total amount.

- To help everything run smoothly, one of your radio buttons should be checked by default when the page loads. While you can accomplish this with HTML or JavaScript, for this assignment use JavaScript.
- The tip calculation should trigger any time the input number changes or a radio button selection changes. These event listeners should be added using JavaScript, not HTML.
- Getting the current selected tip percentage can be tricky. Unlike other selectors stored in variables at the top of the file, this one needs to be called inside your function in order to re-evaluate which radio button is currently checked. Here is the selector that I would recommend using. `document.querySelector('input[name="tip"]:checked').value`
- Round any output numbers to 2 decimal places. There are a few different methods to do this in JavaScript, they are all fairly straightforward, so I will let you figure that out.
- Include minimal styling to make your tip calculator look presentable.

In your `README.md` include the following:

- Walk me through how you thought about this assignment. What aspects did you handle or accomplish first, and what did you leave for last?
- What was the most difficult problem of this assignment and how did you work through it?
- What features would you like to add to this tip calculator in the future to make it more robust?

Publish using GitHub pages and include the live URL in your repo about section. Submit the GitHub repo URL in LearningSuite.
