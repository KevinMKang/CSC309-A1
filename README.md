# Assignment 1: Personal Profile Page

You will practise building an HTML web page with CSS for layout and style, and Javascript to make it dynamic, by building a profile page - either for yourself, or for a fictional character. All components of the page should be responsive. Changes made to the page during user interactions are non-persistent; refreshing the page will reset all changes.

### Part 1: Navigation 

Implement a responsive navigation bar, as seen in Lab 3. That is, navigation links should be in a single row for larger screens, and stacked and collapsed for smaller screens (see advanced section of Lab 3). 

There should be a 'logo' section with the name of your profile. The navigation links should be anchor links to the other sections of the page
 - one link to the profile information in part 2 
 - one link to the feed section in part 3

### Part 2: Profile information

The next section on the page should contain profile information. This could be information about yourself or the character whose profile you are creating. 

The main content portion of the page should have this information:
 
 - Name
 - Cover photo
 - Profile Photo
 - Location
 - List of hobbies/interests
 - Blurb / bio

And should contain a section for external / contact links:
 - The GitHub account you are using for this course
 - link to email you
 - 2 other links of your choosing 

### Part 3: Profile Feed

Implement a status feed for your profile. This is similar to Twitter or Facebook statuses. 

#### Interaction 1: Posting

There are two types of posts that can be made: text posts or photo posts. Each post should contain the timestamp of when the post was made, as well as the profile's name and photo. 

Text post: There is a text box into which you can enter text, and a button which 'posts' this text onto your profile feed. 

Photo post: There is a text box into which a URL to a photo can be entered, and a button which 'posts' this photo onto your profile feed. No need to worry about file type checking or anything to make sure that the input is indeed a URL for a photo.  

#### Interaction 2: Liking

Each post should keep a simple counter of the number of 'likes'. There is to be a button within each post and pressing the button will increment the number of 'likes' on the post by 1. The counter starts at 0. The button can be pressed as many times as you'd like. 

## Details
A solution that fully satisfies the above specifications in a simple way with minimal design work will receive approximately 70%.
Style the layout and components such that they are visually appealing. A well-designed page that meets specifications will receive up to 85%.
Once you have a well-designed page that meets specifications, showcase your skills and creativity with additional features.
Extra features you may want to consider: 
 - having multiple profile photos 
 - smooth scrolling for the anchor links in the nav bar
 - transitions or animations for interactions
 - additional profile information
 - checking the URL to make sure that it is a photo type

## What to submit:
- `profile.html`
- `profile.css`
- `profile.js`
- any other appropriately named CSS or JS files used in your assignment


The README.md file will contain any information you would like to pass onto the grader regarding design decisions and additional features.  It is also the place to indicate if you were able to partially complete one or more of the questions.  This should not be a long document and will not be graded.

Your assignment should be able to load in the latest version of Chrome or Firefox. Your code should be clean and concise and easily readable. 

Reminder: It is an academic offence to submit work that is not your own without attribution.  If you find a function or snippets of code that help you implement your assignment, you must cite where you got the code from.

## Rough Marking Scheme

 - Functional correctness - 60%
 - Code style: modular, readable, documented - 15%
 - Web page style - 10%
 - Polish and extra feature(s) - 15%
 
Clean, polished code will receive a higher mark than mostly working fancy features.  

## Code Specification
**Your code will be partially autograded**

TODO: fill in this section with autograding details


