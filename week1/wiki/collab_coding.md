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

### Installing a Git client

To use your new account, you'll need to have a git client installed on the system you wish to use. Fortunately, git clients exist for nearly every operating system.

You can find guides for installing git for Windows, MacOS, and Linux here:

[Installing Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)

At the end of the installation process, you'll be able to use the git client, preferably from the command-line. In this course, it is _highly_ encouraged to use the command line to achieve things whenever possible, and this is particularly true of code versioning.

Full Stack developers are command-line junkies. While at first the command line can seem strange, it is the one tool that can always be counted on in any environment to work quickly and efficiently.

To test out your new Git installation, we will do a basic cloning operation that will let you get the latest course materials onto your system.

### Cloning Course Materials

It is important to understand that this course runs like an open-source project. At any time, documentation and code examples in the course materials may be updated based on feedback from students. You'll want to use git to ensure you always have the most up-to-date version of the documentation.

In this step, we will clone the course materials to your local system. This will show you how to clone with Git, and will verify that your account access is working. Additionally this local copy of the materials can be used to stay up to date and to ensure you always have the latest information.

Open up your terminal (or command line) and browse to a location you would like to work from. If you are unfamiliar with using the command line to move around your directories, the most common commands you'll need are the `cd` for change-directory, and `ls` to list the contents of a directory. You can make a new folder with the `mkdir` command.

Make a directory to contain the course materials and your own work.

`mkdir humber`

Enter that new directory.

`cd humber`

Now you can clone the course materials from the remote repository using the Git client.

`git clone https://oddlylabs.com/Humber/Full_Stack_Developer.git`

You'll be prompted to enter your username and then your password. In short order, you'll see a new folder in your directory. Inside it will be all the course materials. These can be opened up in your code editor.

As a student, you have read-only access to the course materials repo. At any time you can update the repo using the `pull` command. To try it out, cd into the directorly like so:

`cd Full_Stack_Developer`

From within the folder, do a pull operation to fetch latest updates:

`git pull origin master`

In the above command, we have asked for any updates from "origin", which is the name applied to the online repository we originally cloned the materials from. We have asked for the "master" branch, which should be considered the production-ready branch of the materials.

Most likely, you have the most up-to-date materials, but from time to time you may wish to refresh them by repeating the pull operation.

Now it's time to set up your very own repo!

### Creating your Repo

In this step, you will create your own repository for your course. This will be used to submit all of your assignments, and in the end will provide an outstanding profile of all of your activities.

Return to your dashboard by logging in with your account at Oddlylabs.

From the dashboard, on the right you will see a link called "My Repositories" with a plus-sign. Click the plus-sign to create your first repository.

[Watch Creating A Repo](https://youtu.be/-ngFD7hQ47k?t=433)

The most important points of the video are that you _must_ include a gitignore file and a license in your repo!

Once the repo is created, you'll be able to clone it to your local system just as you did with the course material. You can retrieve the URL of your repo by visiting the repo's home page Move up to your humber directory, and clone your repo into it.

`cd ..` - to move up a directory

`git clone ADDRESS_OF_MY_REPO_HERE`

### Creating a Branch (and working!)

You have a remote repo, and you have cloned a local version of it. You're ready to do work!

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

1. Update a README file in a `week1` sub-folder using Markdown to include a brief description of yourself, and a link to both your profile on oddlylabs and a link to the cloud9 IDE you are working in.
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

`git checkout -b week1`

You'll get a message indicating a new branch was created. You can now make a sub-folder in which to create your bio.

`mkdir week1`

`cd week1`

You can feel free to create and edit the README file according to the information required by the issue you assigned yourself.

When the file is ready, go up to your main directory and add it and commit it to your branch.

`cd ..`

`git add ./week1/README.md`

`git commit -m "completing issue for assignment 1, personal details added"`

Remember, all the work you've done has been on your local machine. Now it is time to let the remote server know about your new branch. Push your branch into the remote repo. The command will look like this:

`git push origin week1`

Off it goes to the remote repo. You can confirm this by going to the dashboard for the repo, where you will now find TWO branches available. One of them will have the "week1" name you created.

### The Pull Request

In a real production environment, it is likely that you would request someone else to test the code you wrote in your branch before it gets moved into the "master" branch (code in the master branch is usually the code that goes live in front of users). The way to request that review is via a pull request.

Your goal is to ask one of the collaborators you added to the project to review and merge your code into the master branch.

To make a pull request, you'll go to the "pull requests" tab, and click on "new pull request". The URL will look similar to this:

`https://oddlylabs.com/YOUR_USER_NAME/YOUR_REPO_NAME/pulls`

Your goal is to merge your new branch into the master. The branch you are merging into is known as the _base_ branch. So leave "master" as the base, and select your working branch as the branch to merge in.

On the right, you have options to assign a label (such as "enhancement"), and then the most important part - the assignee. Assign one of the collaborators you added to the repo in an earlier step. (If you have not added any collaborators you'll have to stop here, go back, and add at least one person).

### Congrats, you did your part!!

Your collaborator will need to clone the repo, take a look at it, and merge the pull request through the UI.
