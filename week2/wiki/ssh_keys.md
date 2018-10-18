To find out information about the operating system, you can use the following command:

`uname -a`

Secondly, to discover distribution version you can use this:

`cat /etc/*release`

From this we can see that the default Linux installec by Amazon is based on CentOS. Let's change that by creating an environment based on Debian (Ubuntu 16.04)

## Setting up an OS Distro

Your instructor has prepared a Debian-based Amazon Machine Image with the correct configuration for the Cloud9 development environment. To use it, we need to enable secure access for the AWS installer. This means enabling ssh access using ssh key-pairs.

### Working with SSH Keys

SSH keys serve as a means of identifying yourself to an SSH server using public-key cryptography and challenge-response authentication. One immediate advantage this method has over traditional password authentication is that you can be authenticated by the server without ever having to send your password over the network. Anyone eavesdropping on your connection will not be able to intercept and crack your password because it is never actually transmitted. Additionally, using SSH keys for authentication virtually eliminates the risk posed by brute-force password attacks by drastically reducing the chances of the attacker correctly guessing the proper credentials.

As well as offering additional security, SSH key authentication can be more convenient than the more traditional password authentication. When used with a program known as an SSH agent, SSH keys can allow you to connect to a server, or multiple servers, without having to remember or enter your password for each system.

### Key Generation

SSH keys are generated as long strings of characters by applications like *ssh-keygen* included in the OpenSSH set of tools. Different algorithms can be specified for the key generation, but the server which will use the key for identifying the user must be capable of using the algorithm chosen. By far the most common algorithm is RSA, which is the default used by *ssh-keygen*.

AWS provides an online tool during the creation of cloud9 environments that can be used to generate an RSA-based ssh key.

The steps will be:
* log in to Leaflet if needed (for your login/password)
* log in to AWS
* go to the cloud9 service
* click 'create new environment'

In the last lesson we used the 'create new EC2 instance' option. This time we will use the other option 'connect via ssh'.

*Your instructor can provide you with an IP and username to use*

Enter the username and IP. These will be used by the IDE to connect to your server.

The UI will create an RSA based encryption key pair. One half of the pair (the public key) needs to be given to the server you wish to connect to via ssh. AWS will keep the other half of the pair (the private key) to identify itself to the server you are connecting the IDE to.

If you like, click on "view public SSH key" to see what your public key looks like.

Copy the public key, and provide it to your instructor, who will add it to the "authorized keys" file for the username you were provided.

Now that access is enabled, the AWS installer can use it's ssh to begin installing everything needed for the IDE. Click to enable the installer.

### The Ubuntu Image

The ubuntu image used in this course is based on Ubuntu 16.04 LTS, and comes pre-configured with both Python3 and Python2.7. A symlink has been created at `/usr/bin/python` that directs to Python2.7 by default. This is a requirement of the Cloud9 IDE that gets installed via SSH by Amazon Web Services.

The image also has node version 6.12.3 installed, which again is a requirement of the Cloud9 IDE (version 6 and up). This can be confirmed by executing `node --version` at the command prompt.

The installed version of Git is 2.7.4