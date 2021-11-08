This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Steps to test my code:

```bash
git clone https://github.com/derekcrosslu/frontend-assessment.git

cd frontend-assessment

# start api server (on a different shell)

cd api

npm install

npm start

# api will run on port 9000



# run frontend development 

cd ..

npm install 

npm run dev

# JCrew product grid should open on  http://localhost:3000


Thanks! =)
```

INSTRUCTIONS

Step 1:
Download the JSON and category-server.js files from this link.
Run the Node.js server via node category-server.js. You can now hit any path on localhost:8000 to receive the needed JSON for
this project.
Although this task is simple and could be done with vanilla JavaScript or a minimal amount of basic React, the project's mission is to
display your knowledge in frontend frameworks. So, it is recommended to choose frameworks, packages and state management
libraries that would appropriately showcase your knowledge, and previous work in the domain.

Step 2:
Use the productsList[].products[] array to render product tiles on the page. Each product tile should include the product name,
product price, and product image. The product image URL can be generated in the following way:
https://www.jcrew.com/s7-img-facade/<productCode>_<defaultColorCode>
Feel free to minimally style in any way you see appropriate.

Step 3:
Each product tile should be a clickable link, to the url /<productCode>. Instead of using a new API endpoint, you should use the same
data requested previously by the API endpoint. There should be no second network request if you have made one to render the array
page.
The product page should include the product image, product name, product price, and a small swatch of every color available via the
productsList[].products[].colors[].colorCode property.



