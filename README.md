
## Product Overview

### Product Name
Boom! Roasted


### Description

Boom! Roasted is a web application that allows the user to easily navigate our coffee blends and merchandise. This site will serve as a place of comfort for anyone looking to escape from the daily struggles of shopping for their coffee online. We at Boom! Roasted have made it our goal to put our customer’s minds at ease while giving them the best damn coffee they can get their hands on. 


### Schema for users 
```
 const User = new Schema  ({
   firstname: {
     type: String,
     required: true,
   },
   email: {
     type: String,
     required: true,
   },
   password_digest: {
     type: String,
     required: true,
     select: false
   },
   { timestamps: true }
 })
```
### Schema for products 
```
const Product = new Schema
(
  {
    name: { 
      type: String, 
      required: true 
      },
    description: { 
      type: String, 
      required: true 
      },
    price: { 
      type: String, 
      required: true 
      },
    origin: { 
      type: String, 
      required: false  
      },
    imgURL: { 
      type: String, 
      required: true 
      }
  },
  { timestamps: true }
)
```

### Wireframes
![imgAlt](https://imgur.com/bbulEVm.jpg)

### Component Heiarchy 
![imgAlt](https://imgur.com/jRAeXdG.jpg)

### Team Expectations and Planning
[Team Expectations](https://docs.google.com/document/d/1TuvOuy0UQ42KGOza9IAGs8pkPfmoIlVP4Vj6OnJNGG4/edit)

[Github Projects Board](https://github.com/myfriendpaul/boom-roasted/projects/3?add_cards_query=is%3Aopen)
### MVP

- Create an API to manage, store, and authenticate user information.  
- API will also manage product inventory with full CRUD functionality.
- Fully responsive design utilizing Bootstrap CSS framework.
- Users will be able sign up / sign in and browse current inventory.
- If the user has a custom coffee blend that is not available or not in inventory, they will be able to add the blend.
- Deployed to Heroku, Netlify, and MongoDB Atlas.

### Schedule

| Day      | Deliverable                                                 | Status     |
| -------- | ----------------------------------------------------------- | ---------- |
| Sept 9  | Client consultation / Wireframes / Timeframes                | Complete   |
| Sept 10 | Readme / Back-end development                                | Incomplete |
| Sept 11 | Prepare back-end for deployment                              | Incomplete |
| Sept 12 | Code review and deployment                                   | Incomplete |
| Sept 13 | Front-end development                                        | Incomplete |
| Sept 14 | Working prototype                                            | Incomplete |
| Sept 15 | Styling screens                                              | Incomplete |
| Sept 16 | Styling screens / 1 MVP feature                              | Incomplete |
| Sept 17 | Product Launch                                              | Incomplete |


