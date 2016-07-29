# codesit-webpage
This is a website I developed for my sister, based on my idea/encouragement that she should parlay her baby-sitting experience and coding skills into a small business.

## Architecture and Design
I used bootstrap's freelancer template, and decided to keep the default color scheme, since its simplistic, but colorful design is better geared for younger kids. 

## Added Features
I added a smooth-page scroll to the website, so that when the user clicks on any of the nav links, the page will scroll to that section of the page (as opposed to just jumping straight there). Addtionally, I configured the form to allow the users to contact my sister via email. Previously, I was using github to host the live site, and for whatever reason, the php email template wasn't working. As a temporary fix, I was able to use formspree within the html file, allowing users to submit the contact form. However, upon submitting the formspree form, users are redirected from the website to a formspree confirmation page. This method works, but could be a little confusing for the user. When I moved the live site over to GoDaddy hosting, I switched the form back to using the php template that I had previously configured. So ultimately, the live version of the site uses the php form, and the gh-pages version still uses the formspree form. 
