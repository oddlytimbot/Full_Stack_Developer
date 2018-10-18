# full_stack_lab4_authentication

Okay! We have a micro service running behind a REST discovery service, serving up info from our mongo database. Nice! Now it's time to secure that thing.

* add a user with non-owner permissions to the database
* add a 'users' collection to the database for authentication
* protect the POST route! - jwt.sign, jwt-verify
* handle url sub-routes - get token
* 

[decent video](https://youtu.be/7nafaH9SddU)

### Coming up

* encrypt the password storage using bcrypt
* use filesystem to get private key (no versionsing)
* allow url-variables
* expire those tokens!