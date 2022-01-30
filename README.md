82. Section 7 Extending the API:
    1. Entity Framework Relationships
    2. Entity Framework Conventions (using conventions to let EF figure out the relationships) 
    3. Seeding Data into the Database (the lazy approach)
    4. the repository pattern (abstracting our work away from the dbcontext)
    5. Using AutoMapper utility to map our models to our DTOs

83. Introduction
84. Extending the user entity
85. Adding a DateTime extension to calculate age
86. Entity Framework relationships
87. Generating seed data
88. Seeding data part one
89. Seeding data part two
90. The repository pattern, why? 
    1. encapsulation of the logic
    2. DRY: reduces duplicate query logic
    3. it helps with testing
    4. we can change the ORM

91. Creating the repository
92. Updating the users controller
93. Using AutoMapper
94. Configuring AutoMapper
95. Using AutoMapper Queryable Extensions
96. Section 7 Summary:
    1. EF Relationship: understand the one to many relationship
    2. EF Conventions: fully define relationship (photo being added it added to a user)
    3. Seeding Data into the Database: the lazy way
    4. The Repository Pattern: a bit more architecture (some will argue that's not necessary, 
    but when it comes to testing it's a good idea)
    5. Using AutoMapper:
        * configure AutoMapper and using the queryable extensions to use projection from our 
          repository into our DTOs, 
        * so we don't handle the mapping in the controller, but in the repository
        * as it's one of it's jobs too, to get the data from the DB and return it in a presentable 
          format TO the controller

    