# WebDashboard
This website promotes interactivity and usability through data visualization with Charts, graphics, tables and other User interface components.

## Technologies Used
I used mainly 

**_Chart.js_**, 
Chart. js is a community maintained open-source library (it's available on GitHub) that helps you easily visualize data using JavaScript. It's similar to Chartist and Google Charts. It supports 8 different chart types (including bars, lines, & pies), and they're all responsive.

**_HTML_**,

**_SVG_**
scalable Vector Graphics help to render very clear crips images that do not have alot of detail with a very small file size.

_I embeded the SVG elements within my HTML and used the VIEWBOX property to adjust their positions and sizes on the page

I added **_SCSS_** SCSS is a special type of file for SASS , a program written in Ruby that assembles CSS style sheets for a browser, and for information, SASS adds lots of additional functionality to CSS like variables, nesting and more which can make writing CSS easier and faster.

I also added some custom **_Javascript_** 
    -I used the `localStorage` method in Javascript to save changes made to the settings section of the website.
    -I also used the DOM manipulation technique to change elements on the fly, for example. the Alert box is hidden when the X on its right is clicked.
    - There is custom error messages when the send button is clicked but the input fields are empty. 
    - The Search For User input field filters through the names of the users to suggest the person you should be sending the message.


## Page Layout and Usabilty
This site is broken down into several parts;

 ### _Navigation_
 
 At the top of the page is two navigation sections; 
  
  -The first having the Brand Name, notification bell icon Student avatar and student Name.
  -The second having four SVG icons that navigate to different parts of the dashboard.
  With `@media queries`, and Grid-layout method `grid-area` the second potion of the navigation changes position from the top to the left of the page
 ### _Traffic Section_
 
 This is a Line Graph showing the number of people who visit the website on an Hourly, Daily, Weekly annd Monthly basis.
 the graph automatically updates with no refreasg to the page when different times are selected
 ### _Daily Traffic_
 
 Ths is a Bar graph that shows the dialy visits to the website
 ### _Mobile Users_
 
 This is a Doughnut graph and it shows the number of people and what devices they use to interact with the website
 ### _Social Stats_
 
 Thes are social statistics of how many followers your business has on different social media accounts that are associated with your website
 ### _New Members_
 
 This section shows the latest information of people who have used or signed in on your website, this includes their Name, email and when they signed up,
 We also haev the recent activity section that displays what each user commented and when they did.
  ### _Message User_
 
 The dashboard provides a way to contact users.
  ### _Settings_
  
  You can also change settings of the dashboard and the time zone.
