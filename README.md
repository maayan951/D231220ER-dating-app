167. Introduction:
     add a feature: adding the 'like' functionality:
     1. many to many relationships in EF (implemented using a join table)
        * we'll need to configure this relationship ourselves
        * we'll take a look at Fluent API: https://docs.microsoft.com/en-us/ef/core/modeling/relationships
            * Fluent API is a way to configure relationships the relationships in the model
            * tell Entity Framework that: AppUser [-Has One-] -> SourceUser [-With Many-] -> LikedUser
            * and on the other side:      AppUser [-Has One-] -> LikedUser [-With Many-] -> LikedByUser
            * so this is what we'll be setting up in this section
     2. configure entities in DbContext

168. Adding a likes entity
169. Adding a likes repository
170. Implementing the likes repository
171. Controller methods for likes feature
172. Setting up the likes functions in the Angular app
173. Adding the likes component
174. Adding pagination for the likes
175. Paginating the likes on the client
176. Section 14 summary:
     1. we implemented a 'like user' feature
     2. many to many relationship in EF Core 
          * we used a join table for this 
          * in the last ef core versions ef manages to create this relationship automatically
          * even though ef create the join table under the hood, it just invisible to the BE
               * many developers don't trust EF to handle it properly (like me)
          * I like to have control over this relationship
     3. configuring entities in the DbContext 
          * this give control over how things are being created in the DB
          * overriding EF conventions  -
          * also called Fluent API, In EF Core, the ModelBuilder class acts as a Fluent API.

up next: implementing a messaging system