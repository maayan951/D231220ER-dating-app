148. Introduction:
      1. implement paging (pagination), sorting and filtering in the client and the api
      2. deferred execution (doing it later) using IQueryable
      3. using .net core Action Filters (on every received action in the api, we can do something)
      4. adding a TimeAgo pipe to the client
      5. implement caching in the client for paginated resources
      * http://localhost:5001/api/users?pageNumber=1&pageSize=5
          IQueryable<User> => var query _context.Users.Where(x => x.Gender == gender)
                                                  .OrderBy(x => x.UserName)
                                                  .Take(5)// pagination: take pageSize
                                                  .Skip(0)// pagination: skip (pageNumber-1)
                                                  .AsQueryable()
          .ToList()
          .ToListAsync()
          .ToArrayAsync()
          .ToDictionary() 
          .Count()
      1. get the total number of relevant items
      2. get the items based on 1. and the pagination parameters
     
149. Adding a paged list class
150. Adding helper classes for pagination
151. Using the pagination classes
152. Setting up client pagination
153. Using the angular bootstrap pagination component
154. Adding filtering to the API
155. Adding additional filters
