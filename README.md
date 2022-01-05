31. section 4, authentication basics, intro:
goals:
    1. implement basic authentication
    2. understand how to store passwords in DB
    3. c# inheritance - DRY
    4. using c# debugger
    5. TDOs
    6. validation
    7. JWT
    8. services in C#
    9. middleware
    10. extension methods - DRY

requirements:
    1. log in
    2. register
    3. view other users
    4. privately message other users

32. Safe storage of passwords
33. Updating the user entity
34. Creating an Account Controller with a register endpoint
35. Using the debugger
36. Using DTOs
37. Adding validation
38. Adding a login endpoint
39. JSON web tokens
40. Adding a token service
41. Adding the create token logic
42. Creating a User DTO and returning the token
43. Adding the authentication middleware
44. Adding extension methods
45. summery - we learned:
    1. store passwords in DB, basic authentication
        * storing password hash is not good enough, there are multiple dictionaries with every common password to hash via different algos (general dictionary attack)
        * lasting keep up safe from that BUT it's not keep us safe from an attack on a single password, only multiple people using the same password
    2. using inheritance in C# - DRY
    3. using C# debugger
    4. DTOs
    5. Validation
    6. JWTs
    7. using services (single responsibility) in C# 
    8. extension methods - DRY


