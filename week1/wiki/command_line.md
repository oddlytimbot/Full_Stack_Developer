At the start of everything is the command-line.

The command line is the most basic way of accessing the operating system of a computer and interacting with it. Regular users are removed from the command line via the various graphical user interfaces that have been popularized, such as Windows and MacOS. For the Linux operating system there are a wide variety of GUI including Unity (the default for Ubuntu linux), Mint,GNOME, and many more.

But developers, particularly full-stack developers, use the command line.

In the command line, a developer can work extremely fast and efficiently without the visual cues provided by the GUI.

### Getting Around the OS

Unfortunately, while the process of working with the command line may look the same across operating system (entering text into a textbox instead of clicking icons) there are differences in the commands themselves. Windows has it's own version of the command line based on DOS, and even linux and MacOS, while similar do have differences.

For this reason, it is very common to use a tool that allows one standard for commands across the operating systems. And that standard is based on Unix commands.

In order to run unix-style commands on the Windows operating system you'll need a tool. The two most popular for this are GitBash and CygWin.

If you are working in the MacOS operating system you can likely use the built-in terminal program for running unix-style commands.

And a terminal is also available on Linux. In fact it is extremely common in Linux environments to do everything via command line and not even install a GUI.

### Common Commands

Once you have the ability to run command line options, there are a few areas you should concentrate on. You will quickly find that with just a dozen or so commands you can accomplish quite a lot.

#### Installing Software

In a Linux environment, software is installed using the `apt` command.

`apt` command

#### Files and Folders

It is important to be able to fluidly move around the directory structure in a Unix environment.

`ls` command

`cd` command

`pwd` command

`mkdir` command

`touch` command

`mv` command

`cp` command

`rm` command

`ln` command

Once you have the ability to navigate around, you'll start to be familiar with the directories commonly found in a linux environment - where software gets installed, where binary files are found, where log files get created, and so forth.

#### Users and Permissions

In linux, every command is associated with a user. Some users are built-in, such as the "root" super-user, and in linux distributions like Ubuntu the "sudo" user.

It is very common to create users specifically for the purpose of restricting their access to files, folders, and processes in order to maintain a secure system. In full-stack development this can be particularly important as Node enables full access to the operating system.

`useradd` command

`chmod` command

#### Processes

With the ability to install softare, navigate, create files and run them you'll want to know how to tell if something is running. In linux every running application has a "process" associated with it, and a numeric identifier for that process. It is straightforward enough to see the running processes, and you can even monitor them, sorting and filtering them by how active they are.

`ps` command

`top` command

