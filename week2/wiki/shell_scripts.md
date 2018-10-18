
### Installing Mongodb

Our goal is to install and configure Mongo database in a secure manner so that we can begin learning how to work with schema-less databases.

We could do this working in the terminal, using a series of commands. However, this brings us to an important philosophy of full-stack development.

### Never Assume the Environment

If we work directly on the environment, installing software and configuring options of the operating system, those same steps will need to be repeated the next time we create an environment. This places a burden on us for documentation, and extra steps for any team members who join in development.

The better way is to capture those steps in a form that can be versioned in the code repository, and thus re-created automatically by any developers who clone the repo.

The simplest format for this is a "shell script" or "bash script".

### Working with Scripts

A shell or bash script is a series of command-line instructions contained in a text file, that can be executed in the context of an operating system user (including the "root" user, in the case of Debian the "sudoer")

We will create a script that isntalls MongoDB, configures it for us, and makes it a running service. The steps involved will be:

* Add a key to 'apt' for the mongo registry server
* Update the sources.list registry
* Download the mongo executable
* Update the mongo configuration options
* Create a user with access rights
* Start the mongo service

Ready? Let's go!

The very first step is to add a key to the program 'apt' that is used to install software in Debian. This will allow the program to speak to the server where mongodb is hosted. This extra step helps to ensure security of the software. The command to do this looks like so:

`apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927`

At that location, a 'keyserver' service issues generated encryption keys. The apt-key program adds them to the 'apt' configuration.

This step enables communication, but does not start the installation process. For that we need to update the OS' sources.list configuration. This configuration is kept in a special location:

`/etc/apt/`

If you like you can cd into that location and look around. In there you will find some text files, including `source.list`, and a folder `sources.list.d` that contains more configuration. Both achieve the same thing, the `sources.list.d` folder simply allows each repository location to be contained in a separate file.

We need to add a source location to either the `source.list` file, or the `sources.list.d` folder.

In unix environments it is very common to "pipe" the output of one program to become the input of another program. We can add a source in one step by simply piping the output of the "echo" program into the location we want, like so:

```
echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" > /etc/apt/sources.list.d/mongodb-org-3.2.list
```

With these steps in mind, we are best to combine them into a simple script that can be executed at one time. It would look like this:

```
#!/bin/bash
set -e
 
echo "Installing repo"
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
 
echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" > /etc/apt/sources.list.d/mongodb-org-3.2.list
```

Notice the two lines at the beginning of the script. 

`#!/bin/bash`

Called the hashbang, this line instructs the OS to execute the script using the bash program.

`set -e`

This is a setting for the execution. If the output of a pipe causes an error, the script will bail out and quit

### Installation

With the source location added and the secure key in place, we are free to install the software. These lines can be added to our script:

```
apt-get update
apt-get install -y mongodb-org
```

This will get us to the point of installation. But there are two more tasks we should do before we start using Mongo. They include configuration, and user permissions.

### Configuration

By default, mongo keeps a configuratio file at `/etc/mongod.conf`. This configuration file includes details like:

* where the databases should be stored
* where to keep logs
* what port and IP to listen to requests on
* what size 'replicas' should be

As we have a number of configuration steps to do, it is a good time to encapsulate things in our shell script. We can use the 'cat' program to write multiple lines to a file.

```
echo "Setting up default settings"
rm -rf /var/lib/mongodb/*
cat > /etc/mongod.conf <<'EOF'
storage:
  dbPath: /var/lib/mongodb
  directoryPerDB: true
  journal:
    enabled: true
  engine: "wiredTiger"
 
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log
 
net:
  port: 27017
  bindIp: 0.0.0.0
  maxIncomingConnections: 100
 
replication:
  oplogSizeMB: 128
  replSetName: "rs1"
 
security:
  authorization: enabled
 
EOF
```

This part of our shell script not only saves us work, it provides valuable information to any other developers who use it, for locating important locations such as the log file folder.

In the configuration file, you'll notice we turned on security authorization. This means we now need to create a user with enough permissions to work with databases. In order to do this, mongo needs to be running:

`service mongod start`

### Creating an Admin User

Now that the service is running, our script can use a bundled command-line tool called "mongo admin" to create a user. We will make a user called "admin", assigning them a username, password, and role. Roles determine access levels in mongo, and they can be set either universally for all databases, or on a per-database basis. We will make this our "surperuser" by giving them full access to all databases.

```
mongo admin <<'EOF'
use admin
rs.initiate()
var user = {
  "user" : "admin",
  "pwd" : "admin",
  roles : [
      {
          "role" : "userAdminAnyDatabase",
          "db" : "admin"
      }
  ]
}
db.createUser(user);
exit
EOF
```

Take a look at the full script in the "scripts" folder of this repository.

All together, this script will create, configure, and define access for Mongo on a Debian-based server for anyone who clones the repo.

### Additional Notes

Any scripts must be set as executable to run. This is done using the "chmod" command. To add execution to permissions, the command will look like:

`chmod +x script_name_here`

Additionally, it is necessary to run the script with a user that has permission to write files such as configuration files. In Ubuntu, you'll want to use 'sudo'.


[Installing Mongo 3.2 on Debian](https://www.jamescoyle.net/how-to/supporting-scripts/2427-mongodb-3-2-bash-install-script)