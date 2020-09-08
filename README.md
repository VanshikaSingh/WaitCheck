## Wait Check
This project uses a template called [Start Bootstrap](https://startbootstrap.com/template-overviews/sb-admin-2/), 
as such, the commits history reflects those from the template that has been forked, as well as any commits from the current developers.

This is a functioning prototype for our final product, although it is not fully set up to use everything provided by its backend in Firebase, we've included the firebase project API in the code and it is ready to be set up to support **authentication security**, **scalability**, and **data analytics.** 



For the purpose of our demo, this prototype shows what our intentions will be with the final product. 



## Set up

After installation, run `npm install` and then run `npm start` which will open up a preview of waitcheck in your default browser. 

Once launched Wait check will open to the main page (index.html), sign in and out functionality is shown with the top right user drop down menu.
 
## Files/ code layout
The `gulpfile.js` file shows which tasks are included with the dev environment.

Each page of the prototype is made using it's own html file found in the main directory. 
Pages include: `buttons.html`, `cards.html`, `charts.html`, `login.html`, `index.html`

## Next Steps

1. We need to implement the sign in authentication and analytics offered by Firebase, the code for which has been provided in the project and just needs to be debugged. 
2. Implement data aqcuisition pipeline from excel file to incorporation into firebase json and display on the application
3. Implement integration with Jupyter Notebook for data analytics and insights



### Copyright and License for bootstrap template
Copyright 2013-2019 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-resume/blob/gh-pages/LICENSE) license.
