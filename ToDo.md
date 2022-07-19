## To Do List for 7/19/2022 

1) School System
    - Make a Mongoose Model for a School, Controller, and Routing js files. 
         - Properties (All Strings): 
            - City
            - State
            - Country (USA By Default)
            - Address 
            - Current Principal 
            - School District Name
            - Pretty Much Anything else i can think of....
    - After preparing the backend for the School Object, integrate schools into SearchBar.vue
    - Add the specialized "School input" into the current school input in the Write.vue file. 
    - Make a /schools route and connect it to School.vue and write Vue code respectfully. 
    - That should slove the issue and will transition into the subject System. 

      
2) Subject System
- In the client side, when submitting the review to the backend, we should also create a subject category. 
     - Make a model for the Subject and integrate into the backend respectfully through the controllers and routing. 
         - Properties: 
               - School ID: String
               - Rating IDs: Array
               - Type: String
    - Then integrate respectfully into the frontend 
        - Probably should remove the subject type input in Write.vue as well (meaning clearing everything again :( )
        - Make the search feature for the subjects. 


With these changes made, EduRate (ML Version) EB Testing 1 can be released successfully into the Web for Feedback!