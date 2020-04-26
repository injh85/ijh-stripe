# Stripe POC

A make believe e-commerce page with the ability to add things to cart and check out using Stripe's API

## To Operate
1. Navigate to [Homepage](https://jh-stripe.glitch.me/index.html)
2. Add item(s) to cart in the "Trending Item" section by hovering mouse on product image
<img src="https://cdn.glitch.com/944a86a0-5dd9-430b-a03a-6a189cf0f69d%2FScreenshot%202020-04-26%20at%207.14.37%20PM.png?v=1587899709694" width="300px" />
3. Hover on shopping cart icon on the top right corner to view the cart, check out or empty shopping cart
<img src="https://cdn.glitch.com/944a86a0-5dd9-430b-a03a-6a189cf0f69d%2FScreenshot%202020-04-26%20at%207.16.54%20PM.png?v=1587899842731" width="300px" />
4. Click on "CHECKOUT" button to navigate to the checkout page
5. Enter test credit card number and click on "Pay" button
- list of test credit cards can be found [here](https://stripe.com/docs/payments/accept-a-payment#web-test-integration)
6. If payment is successful:
<img src="https://cdn.glitch.com/944a86a0-5dd9-430b-a03a-6a189cf0f69d%2FScreenshot%202020-04-26%20at%207.22.13%20PM.png?v=1587900158218" width="300px" />

## Your Project

On the front-end,

- Edit `views/index.html` to change the content of the webpage
- `public/client.js` is the javacript that runs when you load the webpage
- `public/style.css` is the styles for `views/index.html`
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

Click `Show` in the header to see your app live. Updates to your code will instantly deploy.


## Made by [Glitch](https://glitch.com/)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

( ᵔ ᴥ ᵔ )