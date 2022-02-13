121. Section 10: Introduction
     we will learn and understand:
     1. photo storage options: there are different options like : local, BE and cloud storage
     2. adding related entities to a photo: these entities are related to a user
     3. using 3rd party API: this will help us with our photo storage needs
     4. using the debugger, again, because the logic here will need a closer look
     5. updating and deleting resources
     6. what to return from a 'create' operation in a REST based API
          * REST: representational state transfer, a way to transfer data between clients and servers, it's a
            architectural style that uses HTTP verbs to communicate with the server and clients.
          * HTTP: Hypertext Transfer Protocol, a protocol that allows you to send and receive data over the internet.
          * verbs: GET, POST, PUT, DELETE, PATCH, OPTIONS
          * at the end REST is a set of restrains (conventions) over how we use client - server communication
          * so we will learn and implement REST in our API (REST)

* ok, so our choices for photo storage:
     1. DB: as binary large objects (BLOB)
          + but easy to use
          - not efficient
          - takes up a lot space: not good when we deploy our app and need to pay for that space
          - we need to pay for the space, storage, bandwidth, etc.
     2. local file system:
          + are efficient, easy to use and cheep. file systems are optimized for storing binary data
          - local file system storage (or cloud based file system) is not infinite.
          - one other thing to worry and write  logic for this server (like aspect ratio. etc.)
     3. cloud storage:
          + no disadvantages as to space, logic written, etc.
          ~ basic plan is free, will cost more if we use lots of storage (pay as you go)
          + using service's logic for the aspect ratio calculations (we will use only square)

122. Cloudinary Account
123. Configuring Cloudinary in the API
124. Adding a photo service
