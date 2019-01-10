Git is an amazing code versioning tool, but on it's own it does not guarantee our code work will be collaborative. In modern full stack development, it is very important to become familiar with and utilize additional tools that make our use of Git team-based.

A number of popular code communities exist, including Github, Gitlab, BitBucket and others.

For students in the full stack developer course, a fully-featured git-based community has been created for your use. Get to know the features available!

The most important features of a collab environment include:

1. Adding Collaborators
2. Joining Organizations
3. Creating Milestones
4. Creating issues, assigning to milestones
5. Labeling and assigning issues to collaborators
6. Creating pull requests related to issues
7. Merging pull requests and resolving issues

To get familiar with all of these features, you will simulate a typical production environment. You'll start by joining an organization at oddlylabs using the membership you received during registration.

### Joining Oddlylabs

The first step for this course will be joining the Oddlylabs git community, which requires a valid email address. You can use your school email address for this, but it is highly recommended to use an email address you will look at often and that will remain once you are finished your course.

[Watch Creating Account](https://youtu.be/-ngFD7hQ47k)

Once you have an account, you can request access to the Humber organization on Oddlylabs. To do so, use the following form:

[Join Humber Organization](https://goo.gl/forms/jb7IsYIxhnxTNtBL2)

After you have been accepted to the "Humber" organization you'll be able to view the available code repositories. You'll be using the "full_stack_lab1" repository as a starting point.

### Cloning Course Materials

In this step, we will clone the course materials to your local system. This will show you how to clone with Git, and will verify that your account access is working. Additionally this local copy of the materials can be used to stay up to date and to ensure you always have the latest information.

`git clone PASTE_URL_HERE`

You'll be prompted to enter your username and then your password.

### Creating your Repo

In this step, you will create your own repository for your course. This will be used to submit all of your assignments, and in the end will provide an outstanding profile of all of your activities.

### Adding a Remote

With git, every initialized folder contains a .git subfolder that contains configuration and a complete history of the project code. One of those configuration options is called the "remote" information. This is information about any remote servers you wish to coordinate with. You can coordinate with as many servers, identified by URL locations, as you wish.

When you first clone a project, the remote information includes one server - the one you cloned the project from. It's root URL is labelled "origin".

If you wish to coordinate with another repository (such as your own) it is a matter of adding that other repository as a remote. The command looks like this:

`git remote add SOME_LABEL_HERE HTTPS://SOME_REPO_URL_HERE`

So for example if I wish to copy the code I have cloned into my own repo I want to move add a remote label and URL to the repo in my account. It might look like this:

`git remote add oddly https://oddlylabs.com/OddlyTimbot/example_lab.git`

After that, I can work with either the original code repo by using the remote label 'origin', or I can work with my own repo by referring to is as 'oddly' in my git commands. The first command I should use is the one to push all the code up into the "master" branch at the newly added remote.

`git push oddly master`

Because this command refers to the master branch at 'oddly' the code will be pushed into my own repo, rather than the one I cloned from (which you will recall is referred to as 'origin' by default)

_See if you can make some changes to the README file and get those changes into your own repo_

### Add a Collaborator

Now that the versioned code is going into your repo, it's time to invite a collaborator.

Go to the settings for the repository. The URL will look similar to this:

`https://oddlylabs.com/OddlyTimbot/full_stack_lab_1/settings`

In the above URL "OddlyTimbot" is the user name, and "full_stack_lab_1" is the repo name.

Locate the "collaboration" tab to the left-hand side and click on it. You'll see a search field you can use to search out any available member on the site.

It is a good idea to add your professor "OddlyTimbot" as a colaborator. By doing so, you'll allow them to clone your code, examine it, make suggestions and help fix problems.

Additionally, add one of your fellow class members. (You'll be assigning them an issue to take care of)

With a couple of collaborators added, you're ready to assign some issues.

### Creating Milestones and Issues

With your repo ready to go and a couple of collaborators added, it's time for serious development. Your goals are:

1. Update the README file using Markdown to include a brief description of yourself, and a link to both your profile on oddlylabs and a link to the cloud9 IDE you are working in.
2. Get a collaborator to approve and merge your work.
3. Create an issue and assign it to a colloborator to get them to update the README file adding their own information.

To begin, create the milestone by visiting the "issues" area for your repository. The URL will look like the following:

`https://oddlylabs.com/OddlyTimbot/full_stack_lab_1/issues`

On that page, you'll see a tab called "milestones". Click it to create your first milestone. Use the following information to create the milestone.

Title: "Complete Lab 1 Collab Exercise"
Description: "Get to know working with collaborators, milestones, and issues, as detailed in lab 1 of the full stack development course"

Once the milestone is created, you'll be able to add issues to it. Issues are any task related to your project, and in this case to completing your lab 1 milestone.

It is very common to create issues, even for tasks you are going to complete yourself. The reason for this is that other collaborators on the project will be able to view issues you are working on and follow your progress. If things become busy, you can reassign issues to other collaborators. You can use the conversation thread of the issue to ask for advice or assistance, or share resources related to the issue.

Create an issue, and assign it to yourself, with the "enhancement" label.

Okay, now you have a task to complete.

Remember, it is a good idea to never work within the "master" branch!! You'll want to create a new branch to work from. Back in the terminal, use the following command to create a working branch from the master.

`git checkout -b working_branch`

You'll get a message indicating a new branch was created, and you can feel free to edit the README file according to the information required by the issue you assigned yourself.

When the file is ready, add it and commit it to your branch.

`git add README.md`

`git commit -m "completing issue for assignment 1, personal details added"`

Remember, all the work you've done has been on your local machine. Now it is time to let the remote server know about your new branch. Push your branch into the remote repo. The command will look like this:

`git push YOUR_REPO_LABEL`

In the example above, I added a remote called 'oddly' using the `git remote add` command. Therefore to push to that remote repo my command would look like this:

`git push oddly working_branch`

Off it goes to the remote repo. You can confirm this by going to the dashboard for the repo, where you will now find TWO branches available. One of them will have the "working_branch" name you created.

### The Pull Request

In a real production environment, it is likely that you would request someone else to test the code you wrote in your branch before it gets moved into the "master" branch (code in the master branch is usually the code that goes live in front of users). The way to request that review is via a pull request.

Your goal is to ask one of the collaborators you added to the project to review and merge your code into the master branch.

To make a pull request, you'll go to the "pull requests" tab, and click on "new pull request". The URL will look similar to this:

`https://oddlylabs.com/YOUR_USER_NAME/YOUR_REPO_NAME/pulls`

Your goal is to merge your new branch into the master. The branch you are merging into is known as the _base_ branch. So leave "master" as the base, and select your working branch as the branch to merge in.

On the right, you have options to assign a label (such as "enhancement"), and then the most important part - the assignee. Assign one of the collaborators you added to the repo in an earlier step. (If you have not added any collaborators you'll have to stop here, go back, and add at least one person).

### Congrats, you did your part!!

Your collaborator will need to clone the repo, take a look at it, and merge the pull request through the UI.
