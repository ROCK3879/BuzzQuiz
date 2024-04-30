# BuzzQuiz

Hello readers !

* In this document, you will be able to see the structure of a series of questions and suggested answers for quick memorization. The application technology used helps users to speed up memory and expand knowledge. The essence of these random questions, which can be expanded and supplemented in the future, will force you to be faster and faster in giving correct answers. BuzzQuiz is a website that offers a quiz for people who want to expand their insects general knowledge. The focus of this quiz will be on insect lovers who are looking for new informations.

* Informative content and navigation will be easy for users.
  As a visiting user, I would like to view the score and restart quiz button when quiz end Responsiveness to all devices provides an excellent browsing experience regardless of which device you use.

![Screen responsiveness](/media/am_i_responsive.png)

# User stories

* The quiz is designed according to the concept of constantly randomly repeating questions about insects inhabited around the Earth.
* When you enter the quiz, you can see a simple approach with the start button to start the game, after which a question box will appear and four answers will be offered.
* When you select an answer, the screen and the answer buttons will change color and thus show you whether you have chosen the correct answer. Red shades of color indicate an 
  incorrect answer and green shades indicate a correct answer.
* Below the question and answer box you can see a button to switch to a next question.
* As a visiting user, I would like to view the score and restart quiz button when quiz end.
* This quiz is designed so that there are many questions that are randomly changed and there are many of them. In this test version, we will be able to display only 10 questions with the possibility of expansion in the future.

# Features

## Present Features

### Start button

* The start button is located right at the beginning when entering the quiz and enables access to the quiz.

![Start button](/media/start_button.png)

### Questions box

* Displayed on page, the question box includes questions and four answers.
* After the selected answer, the next button appears.

![Question and answer box](/media/question_answer_box.png)

### Correct and wrong output

* The display in the next picture is the output reaction of the quiz to a correct or incorrect answer. The correct answer is displayed in green, while the incorrect answer is displayed in red.

![Correct and wrong output](/media/correct_wrong_answers.png)

### Next button

* The button to switch to the next question is located right below the answers and allows the user to move through the questions after the given answer.

![Next button](/media/next_q_button.png)

### Restart button with result information

* Once the user reaches the end of the quiz, the quiz result appears and a restart button below, which allows the user to repeat learning the answers to the questions until they remember the correct answers.

![Restart button and score](/media/restart_button.png)

## Future Features

* Future features may be created and expanded with more random questions and answers.

## Technology used

* HTML - creating of web site with Git Hub and Git Pod.
* CSS - web site styling and managing the layout of website.
* JavaScript - It was created because of the functionality of the quiz.

## Design

### Colors

* Button border color: hsl(var(--hue), 100%, 30%);
* Button background color: hsl(var(--hue), 100%, 50%);
* Body background color: hsl(var(--hue), 100%, 20%);
* Question box color: #ffffff; 
* Button color: #0051ff9c;
* Button correct color:--hue-correct: 75;
* Button wrong color:--hue-wrong: 30;
* Button neutral color: --hue-neutral: 400;
* Restart button color: #4CAF50;
* Shadow color: #808080;
* Hover color: #000000;

### Typography

* 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

## Testing

* HTML - When testing the HTML validator, one error was found on HTML structure on line 10 <script> was wrongly linked, I made the correction by linking the script document correctly. Testing was done through the official W3C validator.
* CSS - No errors were found when passing through the official Jigsaw validator.
* JavaScript - No errors were found when passing through the official Jshint validator.

   - The following metrics were returned:

     -There are 13 functions in this file

     -Function with the largest signature take 2 arguments, while the median is 0.

     -Largest function has 12 statements in it, while the median is 2.

     -The most complex function has a cyclomatic complexity value of 3 while the median is 1.

### Validator Testing

* HTML [W3C validator](https://validator.w3.org/)
* CSS [(Jigsaw) validator ](https://jigsaw.w3.org/css-validator/)
* JavaScript [(Jshint) validator ](https://jshint.com/)

### Layout and Design Testing

* The content is well structured and aligned.
* Website layout and design reviewed.
* Tested quiz responsiveness by resizing the browser window or using developer tools to simulate different device sizes.

### Functionality

#### Manual testing and game steps
* Checked if all interactive elements are functional.
* All user inputs tested and ensured to produce expected outputs.
* Game steps:

   - When you enter the Buzz Quiz website, the first thing you see is the Start button.
   - When you press the Start button, the game starts.
   - When the game starts, you see a screen with a question and four answers offered.
   - Choose one answer and the game will show you whether you have chosen correctly or incorrectly by changing the color of the correct answer to green and the Next button will 
     appear.
   - Click on the Next button for the game to move on and game will ask a new question.
   - In the background, the game records your score, which will be shown at the end of the game.
   - When you reach the end of the game, your result will appear on the screen, showing how many correct answers you had and how many results were expressed in percentages, and 
     the Restart button.
   - Press the Restart button to repeat the game.
![Game step 1](/media/mob_respon_start_img.png), ![Game step 2](/media/mob_respon_quest_img.png),![Game step 3](/media/mob_respon_answ_img.png),![Game step 4](/media/mob_respon_end_img.png)
### Bugs:

* The error was found on HTML structure on line 10 <script> was wrongly linked.

#### Fixed:

* I solved the error correction by linking the script document correctly.

#### Unfixed: 

* None

#### Lighthouse report

![Lighthouse report](/media/lighthouse_report.png)

## Deployment
* Deployment steps:
   - When entering the Git Hub, select the BuzzQuiz repository and click the CODE button, copy the HTTPS Link and transfer the copied link to the Submission form.
   - By clicking on the Settings button, select the Pages option.
   - After entering the Pages option in the Build and Deployment section, select the main/root option and click on the Save button.
   - After GitHub publishes the page, copy the live link, which I also enter in the Submission form.
   - When we have properly filled out the Submission form with all the required data, submit the completed project to the Submit button
* Live link: 
[BuzzQuiz](https://rock3879.github.io/BuzzQuiz/)
* GitHub repo link:
[GitHub repo](https://github.com/ROCK3879/BuzzQuiz.git)

## Fork a GitHub Repository

* To fork a repo, log in to your account and then go to the repository. In the top-right corner of the window, there is a "Fork" button with a number to the right of it, which represents the number of times the repository has been forked. Go ahead and click that button.
* A message will briefly appear letting you know that the forking process has started. It only takes a few seconds to fork the repo.
* You're now safe to make any changes to the code in your forked repository that you like. To do so, just clone the forked repository to your local machine and get busy!

## Credits 

### Content

* The Favicon was taken from [Favicon.io](https://favicon.io/)

### Media

* Photos used from this open source website

Enjoy!
