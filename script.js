function addQuestion(){
    var questionDiv = document.createElement('div');
    questionDiv.className = "bg-white rounded shadow-sm p-4 question-box ";
    var questionType = null;

    questionType = document.querySelector("#question-type").value;
    //console.log(questionType);
    
    var htmlcode = "";
    switch(questionType){
        case "short-text":
            shortTextBoxCount++;
            questionDiv.id = "question-box1" + shortTextBoxCount;
            htmlcode = `
        <h6>Short Text</h6>
        <div class="shortText">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="write question here" disabled=true>
            </div>
            <hr>

            <button type="button" class="btn btn-secondary mt-2 bottom-right" id="deleteButton1${shortTextBoxCount}" onclick="deleteQuestionBox(event)">
                delete
            </button>
        </div>`;
            break;
        
        case "long-text":
            longTextBoxCount++;
            questionDiv.id = "question-box2" + longTextBoxCount;
                htmlcode = `
        <h6>Long Text</h6>
        <div class="longText">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-group">
                <textarea class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Write question here" disabled></textarea>
            </div>
            <hr>

            <button type="button" class="btn btn-secondary mt-2 bottom-right" id="deleteButton2${longTextBoxCount}" onclick="deleteQuestionBox(event)">
                delete
            </button>
        </div>`
            break;

        case "multiple-choice":
            MultipleCoiceBoxCount++;
            questionDiv.id = "question-box3" + MultipleCoiceBoxCount;
            htmlcode = `
        <h6>Multiple Choice</h6>
        <div class="multipleChoice">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div id="mcq-options${MultipleCoiceBoxCount}">    
                <div class="form-check">
                    <input type="radio" class="form-check-input" name="mcq" id="mcqOption${MultipleCoiceBoxCount}1" value="option" disabled=true>
                    <label class="form-check-label" for="mcqOption1"><input type="text" class='form-control' value="option"></label>
                </div>
                <div class="form-check">
                    <input type="radio" class="form-check-input" name="mcq" id="mcqOption${MultipleCoiceBoxCount}2" value="option" disabled=true>
                    <label class="form-check-label" for="mcqOption2"><input type="text" class='form-control' value="option"></label>
                </div>
            </div>
            <button type="button" class="btn btn-secondary mt-2" id="mcqOptionsButton${MultipleCoiceBoxCount}" onclick="addMultipleChoiceOptionButton(event)">Add Option</button>
            <hr>

            <button type="button" class="btn btn-secondary mt-2 bottom-right" id="deleteButton3${MultipleCoiceBoxCount}" onclick="deleteQuestionBox(event)">
                delete
            </button>
        </div>`
            break;

        case "dropdown":
            dropdownBoxCount++;
            questionDiv.id = "question-box4" + dropdownBoxCount;
            htmlcode = `
        <h6>Drop Down</h6>
        <div class="dropDown">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-control" id="dropdownQuestion${dropdownBoxCount}">
                <p><input type="text" class='form-control' value="option"></p>
                <p><input type="text" class='form-control' value="option"></p>
            </div>
            <button type="button" class="btn btn-secondary mt-2" id="dropdownOptionsButton${dropdownBoxCount}" onclick="addDropdownOptionButton(event)">Add Option</button>
            <hr>

            <button type="button" class="btn btn-secondary mt-2 bottom-right" id="deleteButton4${dropdownBoxCount}"  onclick="deleteQuestionBox(event)">
                delete
            </button>
        </div>`
            break;

        case "checkboxes":
            checkboxBoxCount++;
            questionDiv.id = "question-box5" + checkboxBoxCount;
            htmlcode = `
        <h6>Checkbox</h6>
        <div class="CheckBox">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div id="checkbox-options${checkboxBoxCount}">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkboxOption1" name="checkbox" value="option1" disabled=true>
                    <label class="form-check-label" for="checkboxOption1"><input type="text" class='form-control' value="option"></label>
                </div>
            </div>
            <button type="button" class="btn btn-secondary mt-2" id="checkboxOptionsButton${checkboxBoxCount}"onclick="addCheckBoxOptionButton(event)">Add Option</button>
            <hr>

            <button type="button" class="btn btn-secondary mt-2 bottom-right" id="deleteButton5${checkboxBoxCount}" onclick="deleteQuestionBox(event)>
                delete
            </button>

        </div>`
            break;



    }
    
    
    questionDiv.innerHTML = htmlcode;
    console.log(questionDiv);
    document.querySelector("#form-container").appendChild(questionDiv);
    //console.log(document.querySelector("#formTitle").value, "    ",document.querySelector("#formDesc").value);

    // adding click event listeners to all
    document.querySelectorAll('.question-box').forEach(box => {
        box.addEventListener('click', handleQuestionBoxClick);
    });
    
}


var MultipleChoiceOptionCount = 2;
var MultipleCoiceBoxCount = 0;
function addMultipleChoiceOptionButton(e) {
    // console.log(e);
    var string = e.target.id;
    var boxNo = string.substr(16);
    //console.log("fdgsssfgd",boxNo);

    MultipleChoiceOptionCount++;

    var newOptionDiv = document.createElement('div');
    newOptionDiv.className = 'form-check';

    var newRadio = document.createElement('input');
    newRadio.type = 'radio';
    newRadio.className = 'form-check-input';
    newRadio.name = 'mcq';
    newRadio.id = 'mcqOption' + boxNo + MultipleChoiceOptionCount;
    newRadio.value = 'option';
    newRadio.disabled = true;

    var newLabel = document.createElement('label');
    newLabel.className = 'form-check-label';
    newLabel.htmlFor = 'mcqOption' + MultipleChoiceOptionCount;

    var newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.className = 'form-control';
    newTextInput.value = 'option';

    newLabel.appendChild(newTextInput);

    newOptionDiv.appendChild(newRadio);
    newOptionDiv.appendChild(newLabel);
    
    document.querySelector("#mcq-options"+boxNo).appendChild(newOptionDiv);
}

var dropdownOptionCount = 2;
var dropdownBoxCount = 0;
function addDropdownOptionButton(e) {
    // console.log(e);
    var string = e.target.id;
    var boxNo = string.substr(21);
    // console.log("fdgsssfgd",boxNo);

    dropdownOptionCount++;
    var newOptionP = document.createElement('p');

    var newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.className = 'form-control';
    newTextInput.value = 'option';

    newOptionP.appendChild(newTextInput);

    document.querySelector("#dropdownQuestion"+boxNo).appendChild(newOptionP);

}



var CheckboxOptionCount = 1;
var checkboxBoxCount = 0;
function addCheckBoxOptionButton(e) {

    // console.log(e);
    var string = e.target.id;
    var boxNo = string.substr(21);
    // console.log("fdgsssfgd",boxNo);

    CheckboxOptionCount++;
    var newCheckboxDiv = document.createElement('div');
    newCheckboxDiv.className = 'form-check';

    var newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.className = 'form-check-input';
    newCheckbox.name = 'checkbox';
    newCheckbox.id = 'checkboxOption' + boxNo + CheckboxOptionCount;
    newCheckbox.value = 'option';
    newCheckbox.disabled = true;

    var newLabel = document.createElement('label');
    newLabel.className = 'form-check-label';
    newLabel.htmlFor = 'checkboxOption' + CheckboxOptionCount;

    var newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.className = 'form-control';
    newTextInput.value = 'option';

    newLabel.appendChild(newTextInput);

    newCheckboxDiv.appendChild(newCheckbox);
    newCheckboxDiv.appendChild(newLabel);

    document.querySelector("#checkbox-options"+boxNo).appendChild(newCheckboxDiv);
}

var shortTextBoxCount = 0;
var longTextBoxCount = 0;

// give css class left border blue
function handleQuestionBoxClick(event) {
    // Remove the active-border class from all .question-box elements
    document.querySelectorAll('.question-box').forEach(box => {
        box.classList.remove('active-border');
    });
    // console.log(event);
    // Add the active-border class to the clicked .question-box element
    event.currentTarget.classList.add('active-border');
}

// Attach the click event listener to all .question-box elements
document.querySelectorAll('.question-box').forEach(box => {
    box.addEventListener('click', handleQuestionBoxClick);
});


// delete the question box
function deleteQuestionBox(e) {
    var string = e.target.id;
    var boxNo = string.substr(12);
    console.log(e);
    var div = document.getElementById('question-box'+boxNo);
    div.parentNode.removeChild(div);


}