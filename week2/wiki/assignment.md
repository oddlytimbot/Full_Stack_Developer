## Assignment One

Let's do this!

### Purpose:

In lab 2 we got our Debian environments up and running. We learned how to use shell scripts and install Mongo. We got as far as covering the basics of inserting data and doing queries with the REPL.

The following assignment will test and reinforce that knowledge of scripts, as well as expanding knowledge of Mongo queries, particularly operators.

As an equally important goal, the assignment should get people practicing collab tools like issues, milestones, and pull requests.

### Requirements:

Working in a development branch of your Lab2 repo, create a shell script that makes a sample database. Add a colaborator to your repo and assign them an issue to review/test your work.

To complete the assignment, your reviewer should submit a pull request and assign the instructor to it "OddlyTimbot".

### Details:

Based on our mongo installation script, create another script that instructs mongo to make a sample database, including one collection containing documents of your choosing. (For an example, take a look at the wiki, which contains some commands for an "actors" collection)

To complete this, your script will need to:
- "use" a database
- create a user for the database
- authenticate as the user
- insert JSON-based documents in a collection

When your script is complete, push your branch to your repo.

Add a classmate as collaborator to the repo, and add your instructor "OddlyTimbot".

Create an issue requesting review (be sure to be descriptive in the issue). Assign the issue to your classmate collaborator.

You're done, unless your collaborator provides feedback about any problem running your script. Using the issue conversation, work with them to resolve any problems.

## For the Collab Reviewer:

When you are requested to review via issue, clone the repo to your environment and test the database-creation script using the command line.

Remember, the script will NOT be in the master branch, so you'll need to checkout to the development branch for testing.

Use the Mongo repl to authenticate as the user created by the script and ensure the database collection contains records.

To be thorough, you should compose several queries for the records and post them in the issue assigned to you to document your testing method.

When satisfied, comment/close the issue.

After closing the issue, submit a pull request with "master" as the base and the development branch you tested in as the "comparison". Assign the prof to the pull request to submit the assignment.

### Checklist:

* Did you work in a branch (not in master)?
* Did you push your branch before starting?
* Did you add all the collaborators you needed to at the beginning?
* Were you descriptive and helpful in the issue assigned?
* How elegant is your shell script?
* Is your database/collection/record interesting? For example what about sub-objects?
* Does your database give evidence you read the wiki resources?
* Reviewer - did you ACTUALLY test before approving?
* Reviewer - how robust were your testing queries?
* Reviewer - did you post your queries to the issue? How is your communication?
* Reviewer - did you create the pull request? 
* Reviewer - were you thorough in your description to the pull request?
* Both - how timely/helpful were you responding to communications?
* Both - if your pull-request is rejected, can you work together to resolve the issue?

# Pull Request Due Date: Thursday, Feb. 15

Tips:

*Do not wait to start this assignment!! You should create your development branch and push it RIGHT AWAY to show you've begun without procrastinating. Add your collaborators BEFORE you begin the work to establish your participation.*

*Add/commit frequently. Always add a message to your commits. Establish history - this is MORE important than your final result*

### Resources

[Setting up](https://youtu.be/J7iiWx7bS4s)

[Update 1: Branching, History, Issues, Adding Collaborators](https://youtu.be/bWuprEJVFkQ)

[Update 2: First Review](https://youtu.be/0Qx8ntRpNqI)

[Update 3: Final Review, Pull Request](https://youtu.be/08yHeBCoRfo)