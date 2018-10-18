## Assignment Two

Our first killer micro-service!

### Purpose:

In lab 3 we learned how to deal with async actions related to Mongo database. We saw how to use the Node mongo drivers to conduct queries. And we learned about setting up babel compilation to polyfill newer Ecmascript features that are standardized but still in development - particularly import/export and async/await.

This exercise will combine your knowledge of queries and improve your skills in designing a micro-service api.

### Requirements:

Working in a development branch of your Lab3 repo, create a micro-service using Node, the "micro" library, and async queries to your mongo database.

To complete this assignment, you'll need your shell script from lab 2 that creates a database sample and gives it an authorized user. Your api should authenticate as that user for running queries.

When ready, you'll have a classmate review your code by creating an "issue" and assigning it to a collaborator.

To complete the assignment, your reviewer should submit a pull request and assign the instructor to it "OddlyTimbot".

### Details:

Using the "example" folder, you'll design and create an API for a micro-service that uses a mongo database.

To complete this, your script will need to:

- import and compile the "micro" library
- establish API routes for GET, POST, UPDATE, and DELETE
- serve valid json responses
- be able to retreive at least one complex query

A complex query is one that requires more than a single query to complete. For example if query 1 retreived a list of movie titles from the 'movies' collection, a second query would retreive descriptions for each movie from a 'movie_descriptions' collection. The API should serve back a combined JSON object with the full information.

Don't forget to provide good documentation to the reviewer testing your code - API examples should be provided.

## For the Collab Reviewer:

When you are requested to review via issue, clone the repo to your environment and run the database-creation script using the command line.

Remember, the script will NOT be in the master branch, so you'll need to checkout to the development branch for testing.

Following directions in the README, compile and serve the api service.

Test the API by connecting to the IP of your running cloud9 server.

When satisfied, comment/close the issue.

After closing the issue, submit a pull request with "master" as the base and the development branch you tested in as the "comparison". Assign the prof to the pull request to submit the assignment.

### Checklist:

* Did you work in a branch (not in master)?
* Did you push your branch before starting?
* Did you add all the collaborators you needed to at the beginning?
* Were you descriptive and helpful in the issue assigned?
* Did you have your service listen on port 3000?
* Have you used a complex query?
* Do you have routes for all 4 REST verbs POST, GET, UPDATE, DELETE?
* Does your mongo database require authentication?
* Reviewer - did you ACTUALLY test before approving?
* Reviewer - how robust were your testing queries?
* Reviewer - did you post your API queries to the issue? How is your communication?
* Reviewer - did you create the pull request? 
* Reviewer - were you thorough in your description to the pull request?
* Both - how timely/helpful were you responding to communications?
* Both - if your pull-request is rejected, can you work together to resolve the issue?

# Pull Request Due Date: Thursday, Feb. 22

Tips:

*Do not wait to start this assignment!! You should create your development branch and push it RIGHT AWAY to show you've begun without procrastinating. Add your collaborators BEFORE you begin the work to establish your participation.*

*Add/commit frequently. Always add a message to your commits. Establish history - this is MORE important than your final result*
