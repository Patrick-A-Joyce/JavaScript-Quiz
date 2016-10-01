var pos = 0, test, header_display, question, optionA, optionB, optionC, correct = 0, Footer_Display; // globay diclared variables.
var questions = 
	[ 
	[ "What does IBM stand for ?", "International Business machines", "Intelegent business management", "Intelegent business machines", "A" ],
	[ "The brain of any computer system is ?", "CPU", "RAM", "Hard disk", "A" ],
	[ "Group of instructions that directs a computer is called ?", "Logic", "List", "Program", "C" ],
	[ "Which of the following is not an output device ?", "Keyboard", "Printer", "Monitor", "A" ],
	[ "What does R in RAM stand for? ?", "Rapid", "Register", "Random", "C" ],
	[ "Did the Apple iPhone first become available in ?", "2005", "2006", "2007", "C" ],
	[ "What science fiction writer wrote the three laws of robotics ?", "Isay Kosminov", "Isaac Kosminov", "Isaac Asimov", "C" ],
	[ "Firefox, Opera, Chrome, Safari and Explorer are types of what ?", "Hardware", "Software", "Browsers", "C" ],
	[ "Nintendo was founded in what year ?", "1990", "1989", "1889", "C" ],
	[ "In terms of computing, what does CPU stand for ?", "Central programming unit", "Central processing unit", "Central pulsing unit", "B" ],
	[ "What was the largest computer ever built ?","sage" ],
	[ "Who cracked the Ignigma code ?","alan turing" ],
	[ "What does the word Computer stand for ?","computations" ],
	[ "Who invented the mouse ?","douglas engelbart" ],
	[ "Who invented the keyboard layout qwerty ?","christopher latham sholes" ],
	[ "What is OCR ?","optical character recognition" ],
	[ "What is the meaning of 'CC' in case of E-mail ?","carbon copy" ],
	[ "What is the name of the first Computer Network ?","arpanet" ],
	[ "What is the base 16 number system called ?","hexadecimal" ],
	[ "What was the first ARPANET message ?","lo" ]
	]; // a multi demintional array used to store all the quiz questions and answers
	
	var logs = [
	["Q1: ",""],
	["Q2: ",""],
	["Q3: ",""],
	["Q4: ",""],
	["Q5: ",""],
	["Q6: ",""],
	["Q7: ",""],
	["Q8: ",""],
	["Q9: ",""],
	["Q10: ",""],
	["Q11: ",""],
	["Q12: ",""],
	["Q13: ",""],
	["Q14: ",""],
	["Q15: ",""],
	["Q16: ",""],
	["Q17: ",""],
	["Q18: ",""],
	["Q19: ",""],
	["Q20: ",""]
	]; // a multi demintional array holding the question reference q1 ....ect and an empty place to be inputed to later



function percent() // a function which takes the variables and calculates the value of correct and turns in to a percentage
{
	var perc = Math.round((correct/questions.length)*100);
	return perc;
}
function fetch(x) // simple function to get elemet by id saving multiple typing
	{ 
		return document.getElementById(x); 
	} 
function createDiv() // function to create a div , used later to place inside another div
	{
		return document.createElement('div'); // creates a new Div
	}

function renderQuestion() // Function to render the question
{ 
	test = fetch("quizquestions");  // variable test is assinged the content of div quizquestions
		
	if(pos >= questions.length) // if the value of variable pos is equal to the length of the array questions then the following code will execute
	{
		//input in to the test div......a message with the values stored in correct and the value of the length of the array questions.
		// Also call thefunction percent and display that too.
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>"+ "your percentage is " + percent() + "\%"; 
		// get the div footer-display and ut into its inner html the value entered into the name diaog box from the form on the main page.
		fetch("Footer_Display").innerHTML = first_name.value;
		// get the html element pre on the pain page and put the strin below and call the percent function into it.
		fetch("pre").innerHTML = "Your Percentage was: " + percent()+ "\%";
		// get the html element certname and enter the input from the form into that html element.
		fetch("certname").innerHTML = first_name.value;	
		
		
		
		// a for loop to loop through the logs array and pulls its contents out of the positions and displays them into a div entered in footer-display.
		for (var i = 0; i< logs.length; i++)
		{
			var logsDisplay = createDiv();// logs display is now equal to the create div function ( basicly a new empty div ).
			logsDisplay.innerHTML = logs[i][0]+" "+logs[i][1]+"<br>";// puts content from logs array into logs display div.
			fetch("Footer_Display").appendChild(logsDisplay); // gets logs line above and places it in inside footer display without removing the content previously entered.
		}

			fetch("header_display").innerHTML = "Test Completed"; pos = 0; correct = 0; return false; 
				// get the header display div and put html of test completed into it. 
				//Then reset the variables pos (position) and correct (score) both to 0.
				
	}
	
	// if the value of variable pos is not equal to the length of the array questions then the following code will execute
	// This code will display the quiz questions, the following if,else statment takes care of weather its to be multiple choice or freeform question is to be displayed.
	else
	{
	// get the header_display html element and put the following string and value in "pos" which has added 1 to it, given javascript is 0 indexed and displayes the length of the questions array.
	 fetch("header_display").innerHTML = "Question "+(pos+1)+" of "+questions.length; 
	 //If the multidimentional questions array pos lenght is exactly equal to five (the multiple choice question within the array) then run the following code.
	 if ( questions[pos].length===5)
	 	{
			question = questions[pos][0]; // tells where and what value to link the variable questions with. which is the first element on the first row of the questions array.
	 		optionA = questions[pos][1]; // tells where and what value to link the variable  optionA with. which is the second element on the first row of the questions array.
	 		optionB = questions[pos][2]; // tells where and what value to link the variable optionB with. which is the third element on the first row of the questions array.
	 		optionC = questions[pos][3]; // tells where and what value to link the variable optionC with. which is the forth element on the first row of the questions array.
			// get the div test and past the following into it.
	 		test.innerHTML = "<h3>"+question+"</h3>"; // display the value stored in questions
	 		test.innerHTML += "<input type='radio' name='choices' value='A'> "+optionA+"<br>"; // display a radial button and the value stored in optionA and give it a value of A and a name choices.
	 		test.innerHTML += "<input type='radio' name='choices' value='B'> "+optionB+"<br>"; // display a radial button and the value stored in optionB and give it a value of B and a name choices.
	 		test.innerHTML += "<input type='radio' name='choices' value='C'> "+optionC+"<br><br>";// display a radial button and the value stored in optionC and give it a value of C and a name choices.
	 		test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>"; // display a submit button when clicked runs the checkanswer function.
	}
	else
	// If the position of questions array is not equal to 5 ( not a multiple choice question ) then execute the following.
		{
			question = questions[pos][0];// tell where and to what value to link to the questions variable.
			test.innerHTML = "<h3>"+question+"</h3>"; // get the test div and display the value of the questions variable. 
			test.innerHTML += "<input type='text' name='choices'><br>";// display a input ( text box ) and give it the name choices.
			test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>"; // display a submit button when clicked runs the checkanswer function.
		}
	
	}
}
	// function to check the answers that have been submitted.
	function checkAnswer()
	{ 							// get elementbyname automaticly creats an array named choices and places the values named choices ( radio buttons )
		var choices = document.getElementsByName("choices");// declare the variable choices and give it the value of the elements named as choice ( radio button names )
		var choice;		// declare the variable choice.
			for(var i=0; i<choices.length; i++)// for loop to loop through the choices array created above and look for the one value that has been checked.
			{ 
				if (choices[i].type === "radio")// 
					{
					if(choices[i].checked)
						{ 
							choice = choices[i].value; // the checked radio button found is now given the name choice.
						}
					}
			}
			
				var answer;// declares the variable answer.
				
				if ( questions[pos].length===5) // if the questions array row has 5 elements then.......
				{
					answer = questions[pos][4];// the answer to the question is in position 4 ( last element in that row ).
				}			
				else
				{
					answer = questions[pos][1];// if not the answer is in position 1 ( the second position ) this allows for the freeform answers.
 				}
		// below loops through after each question has been found and weather is correct or wrong inputs a string into a particular position in the logs array.		
		if(choice == answer)// if the value in choice is equal to the value in answer do the following.
			{ 
				correct++; // increment the value in correct.
				logs[pos][1] = "correct"; // place in the logs array in the second position of the first row....."correct". 
			}
		else // if its not correct then is wrong so do the following.
			{
				logs[pos][1] = "wrong"; // place in the logs array in the second position of the first row....."wrong".
			}
		pos++; renderQuestion(); // increment the value in pos by one.   and run the function renderquestion.
 	}
window.addEventListener("load", renderQuestion, false);
	
