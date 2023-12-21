# Automation testing with cypress
This repository contains multiple automated test cases implemented using Cypress, a powerful end-to-end testing framework.
## Installation
To run the test cases locally, you need to have Node.js and npm (Node Package Manager) installed on your machine. Follow these steps to get started:
1. Go to `https://nodejs.org/en` and install the newest LTS version available.
2. Clone the repository: `git clone https://github.com/AndreiLitvinenco/Automation-testing-with-cypress.git`.
3. Change into the project directory: `cd Automation-testing-with-cypress`.
4. Install the project dependencies: `npm install cypress`.

## Running the tests
To run the test cases on your machine follow the next steps:
1. Change into the project directory: `cd automated-test-cases`.
2. Type the command `npx cypress open`.
3. Click on `E2E testing`.
4. Chose whichever browser you desire.
5. Run any of the tests by clicking on them.

## Test catalog
* Login test with wrong user or password (check if you get an error message).
* Login test with standard user (check if you are logged in then).
* Logout test (you must be logged in before you can log out - after logging in you have in
top left menu containing logout).
* Test to check if you can open and close the side menu.
* Test to add a product to the cart (you add the product to the cart and check if it has
added).
* Test to remove a product from the cart (check if the product has disappeared or the cart
is empty).
* Test to check if you can order a product (add a product to the cart and
then follow all the checkout steps until the order is placed).
* Test to check if you can access the product details page (the
that appears when you click on a product).
* Test if the "Back to products" button on a product page takes you to
main page.
