# PROJECT TITLE
  Course Registration
## PROJECT DESCRIPTION
This project is based on some courses from where users can registration the specific courses.
There are some cards,where every card hold a cover picture,title,description,price & credit of its own course.And also it has a select button.
By clicking select button user can registration the course.And every details of this clicking specified course like title price and credit added in the registration list.
In registration list there are some condition like if user select more than 20 credit  it shows a toast.And its fixed credit is 20.
-feature 1:Course Select:The ability to add new course to the registration list.
-feature 2: Price Add:The ability to add price of every courses and show summation of all selection corses price.
-feature 3:Credit Add:The ability to add credit of every courses show summation of all selection corses credit.
-feature 4:The ability to show a toast on credit when it is over than 20 and the remaining credit is less than 0.
## Frequently Asked Questions (FAQs)
-Discuss the state of this project
1.The course state which is used in `Card.jsx` it holds the json data and managed the data to show on ui.Since json data are arrays thats why its initialized with empty array;
2.The courseAdd state which is hold the json data in `App.jsx` which is handled the data by triggering the onClick of select button in `Cards.jsx`.The event handler function is passed as props in `Card.jsx` than `Cards.jsx` select button and it also pass a parameter course list of array the trigerred selected button.And HandleAdd function recives the parameter and works on it.
3.
## GETTING STARTED
Follow these steps to set project up and running:
1.Create a folder:`Course-Registration`.
2.Navigate to the project directory: `cd course-reg`
3.Install react by this in terminal `npm create vite@latest course-reg -- --template react`
4.Navigate project directory again with : `cd course-reg`
5.Run the project in browser : `npm run dev`
6.install tailwind : `npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p`
6.install daisyui : `npm i -D daisyui@latest`
7.install toastify : `$ npm install --save react-toastify`
## Usage
To use this course registration application:
1.open the browser with this live link ``
2.Click the select button from the card.
3.Add the course title in course registration form.
## Contributing
If you'd like to contribute to this project, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature-name'`
4. Push your changes to your forked repository: `git push origin feature-name`
5. Create a pull request.
