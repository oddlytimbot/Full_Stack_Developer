Web development has changed radically.

Today, web applications and even sites are collections of various services running on differing platforms. It is the job of the full-stack developer to navigate these varying services to deliver a pleasing user-experience to the end-user.

This completes a trend that has grown over the last six to eight years that was kicked off by virtualization.

### What is Virtualization?

Virtualization is software that allows hardware to emulate diverse systems. At the consumer level, a good example would be a tool like Bootcamp or Parallels, that allows the Windows operating system to run on Mac hardware, even though that hardware is designed for OSX.

The MAME game emulator is another example, allowing older video games from the days of coin-op machines to run on modern hardware, such as Intel-based processors.

In the web development world, some of the earlier examples of virtualization included software like VMWare and Hypervisor. A tool like Vagrant would be used to set up a virtual machine, which would have it's own operating system. Configuration for that operating system would be done with a tool like Chef, or Puppet. Then a web app would be developed inside that operating system running in the virtual environment.

The problem with such solutions was that they were very heavy and processor intensive, because each operating system running in a virtual machine would have it's own kernel install.

Fast forwarding, today virtualization is usually achieved using Docker.

Docker is a much more lightweight solution, that uses a single operating system, which becomes host to "containers". A Docker container is a set of processes that emulate various operating systems, but behind the scenes runs them in a single operating system - the virtual machine is eliminated. Only one kernel is needed.

Docker containers wrap up software and its dependencies into a standardized unit for software development that includes everything it needs to run: code, runtime, system tools and libraries.

This is critical for developer teams, allowing the application, configuration, and dependencies to be wrapped up into an isolated container.

"If you're looking for jobs with companies like Google and Amazon, you'll find they are moving toward container-ization" - Brad Traversy, August 2018

## Setting Up Docker

For this lesson, you will set up Docker and get it running on your system.

_Note: before completing this portion of the week 2 lesson, you should have created your account at Oddlylabs.com and familiarized yourself with using Git_

Docker is built in the Go programming language. It includes the server itself and a client for communicating with the docker installation.

- Download the docker installer. This will place the docker software on your system. (Note: docker toolbox for older systems)

On windows 10 pro edition 64 bit, a Docker Desktop application is available. For Home edition, or earlier versions of windows, use Docker Toolbox.

[Docker Toolbox](https://docs.docker.com/toolbox/overview/)

Download, install, use the Docker Quickstart Terminal to launch docker. The first time you do so, it will download an iso image

Confirm by running:

`docker version`

`docker info`

_Lesson Requirement_

Copy the output of `docker version` and `docker info`. Using markdown, place this information in the Readme file of your week2 folder in your code repository. This information must be properly formatted with markdown.

## Containers and Images

A container is launched by running an image. An image is an executable package that includes everything needed to run an application - the code, a runtime, libraries, environment variables, and configuration files.

A container is a runtime instance of an image - what the image becomes in memory when executed (that is, an image with state, or a user process). You can see a list of your running containers with the command, docker ps, just as you would in Linux.

## Install an Image

We are ready to test our docker installation by installing an image. Make sure your Docker quickstart terminal is running, and in the terminal let's install a very basic image. When we do so, the image will be downloaded and stored on our system for use in launching containers - applications running with that image.

For this example, we will use one of the official Docker images. A link to this one can be found here:

[Official Hello World](https://hub.docker.com/_/hello-world)

In the terminal, type:

`docker run hello-world`

Provided you have not previously run this image, you'll see output indicating that the image will be downloaded. Upon completion, the image will be installed and you'll see some helpful information in the console.

_output of console_

```bash
$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete
Digest: sha256:2557e3c07ed1e38f26e389462d03ed943586f744621577a99efb77324b0fe535
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/
```

You can list your Docker images with the following command:

`docker image ls --all`

Likewise you can list your docker containers that run on those images like so:

`docker container ls --all`

Here is a list of helpful docker commands for keeping track of your images and containers:

```
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute a Docker image (example)
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq
```

Words to know:

- Images
- Containers

Resources:
[What is a kernel?](<https://en.wikipedia.org/wiki/Kernel_(operating_system)>)

[What is an ISO image?](https://en.wikipedia.org/wiki/ISO_image)

[Setting up Docker](https://www.youtube.com/watch?v=hP77Rua1E0c)
