Welcome to lab 1 of the Full Stack Development course!

During this course, you will gain an introduction to the creation of web applications using a full-stack development methodology.

Before diving into development, it is good to get an understanding of just what "full stack" development involves.

## Some History

In the past, development for the web was usually divided into two very distinct roles. They included "front end" development, and corresponding "back end" development. Teams were comprised of people who worked on the front or back end, and it was rare to find people who did both.

### Front End Developing

Developing for the front end involved working in HTML, CSS, and Javascript with an emphasis on user interaction.

### Back End Developing

The back end of developing involved I.T., and database design. Multiple languages existed for this purpose, with some of the popular ones including Java and SQL.

### The Arrival of Full Stack

There was always a strong desire among developers to remove the barriers between the front end and back end. Some of the early efforts involved automating the creation of the back-end using tools like Ruby on Rails, or Wordpress. These were very different technologies, but they had the same goal - to abstract away the I.T. side of things so that front end developers could create the sites they wanted to.

But even these technologies still required learning new skill sets and stepping outside of familiar languages like Javascript. The languages of the back-end (like PHP) still bore little resemblance to the front end. The switching-cost of moving between the two sides left much to be desired among developers.

### Node Changes Everything

In 2009 Ryan Dahl introduced something new to the development scene. Working with the Chromium web browser (Google's open-source version of Chrome) he took the V8 engine used to interpret javascript, and made it run on a server rather than in the browser.

For the first time, it was possible to program the back-end (the I.T. and Database side of things) using the same language used on the front-end. The floodgates opened, and developers from the front-end side of things poured into the back-end. The first real examples of full-stack development began to appear.

Front-end developers did not just use their new-found ability for creating databases. The Node project gained significant momentum and a vibrant ecosystem sprang up around it. Using javascript, and coordinating through communities like GitHub, developers created a vast number of tools to improve their programming environment.

The timing for the arrival of Node was fortuitous. It corresponded with a push to make development more open and community-based.

In 2005 Linus Torvalds has introduced Git code-versioning through Linux development. Git is a tool for monitoring code and allowing better collaboration among developers, and it began to gain adoption. The unique feature of git was that it required no network access among people working on a project together, since every directory containing project code includes a full history of the code. Developers found that it worked faster than other code versioning solutions.

The growing popularity of Git lead to the arrival of community-sites for users of the tool, most notably GitHub, which launched in 2008. At this time, what we now call "full stack" development began to take off in earnest.

Developers writing full-stack software were typically using Git for their version control, and checking their code into the growing community at GitHub. This allowed more network connections to be created. With a growing development scene taking place developers quickly began to tackle (together) some of the issues standing in the way of full-stack development, the most important of which was "dependency resolution", also called "package management".

### Managing the Growing Ecosystem

The whole point of collaborative code using Git and the Github community was to allow developers to build on top of each other's work. When a solution was created, developers should be able to find, learn about, and use that solution without having to go back to the drawing-board every time. But with the vast amount of code being contributed, this task became on of the most important for the full-stack development movement.

In 2010 Isaac Z. Schluter introduced a tool "npm", which stands for "node package manager". It quickly became the accepted automation tool for finding and implementing "packages" - javacript libraries written and prepared for deployment through "npmjs", an online registry for code.

The tool and corresponding online registry took off, with many developers finding their way to it from the Github community and contributing their source code. The number of repositories listed in npmjs and hosted on Github multiplied exponentially, with libraries appearing for every conceivable task. Node itself continued to gain momentum, pushing out beyond the server and into more architectures finding it's way onto the growing "internet of things" movement.

### Virtualization of I.T.

While node showed the benefits of working from a single code language across the entire app architecture, one problem kept developers from realizing the full benefits of the stack - the I.T. While node could run on any hardware setup, the configuration of that hardware might vary wildly from one environment to another. For example node applications could run on Windows, MacOS, or the dozens of variations of Linux. But those apps still ran into problems with things like file permissions, user accounts, port conflicts, dependencies, and the many other factors reliant on the operating system.

The first solution to this problem was virtualization. Tools like Vagrant allowed developers to set up virtual environments by installing multiple kernels on their development systems. Still more tools were created to configure those environment's settings (like Chef and Puppet). And still more tools were created for resolving code dependencies.

In 2013 a new tool arrived called Docker. Docker took a radically different approach to virtualization by providing a base machine, on which could be built images of not just operating systems, but entire systems, including settings, dependencies, everything.

Since that time, Docker has grown in popularity to become the defacto standard for developers working in the full-stack.

### Javascript Eating the World

Given the relatively short period of time during which full-stack development emmerged, and it's heavy reliance on javascript, it was common to hear that javascript was "eating the world". A great many tasks that formerly required dedicated back-end languages to perform were now being done in Javascript.

But along with the proliferation of new tools came a phenomenon many termed "javascript fatigue" - simply put, too much of a good thing. As developers used to working on the front-end began to flex their tool-making muscles it became extremely challenging to keep up with the wave of tools and methodologies that would arrive, gain popularity, then be replaced.

While this phenomenon has improved to some degree, the rate of change in the world of full-stack development remains robust, and students should be prepared for the joys (and effort!) of continually learning if they take on the unique challenges of full-stack development.
