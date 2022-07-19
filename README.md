# React exercise

In this exercise you can demonstrate your knowledge about React and its concepts. You are allowed to
use [React docs](https://reactjs.org/).

**Requirements**

- Install [Nodejs](https://nodejs.org). In the custom setup, make sure npm package manager is also being installed.

**Set up**

1. Clone this project to your development machine
2. In the project's working directory
    1. Install packages: Run `npm install`
    2. Run the React app: Run `npm run start` (Browser will open automatically with url http://localhost:3000/)

**Tasks**

The tasks should be performed in order. At least one commit per task should be done.

1. Render a form in `src/App.js`. The form should be a component named `UserForm`, and it should include following
   elements:
    - Text input: First name
    - Text input: Last name
    - Dropdown: Canton
        - Options: Zürich, Bern
    - Submit button
2. Simulate a form submission by showing an alert box after clicking submit. In the alert box, the form data should be
   shown in JSON format.
3. Create a `Page` component and wrap it around the UserForm component.
4. Show the filling form data as text in the Page component, right before the UserForm.
5. Mark first name and last name as required form fields, with a star `*`. The star should be colored red with an SCSS
   variable.
6. Validate the required fields. If one of the required fields is empty, prevent the submission.
7. Use [Carbon Design components](https://carbondesignsystem.com/components/overview/) for the form elements.