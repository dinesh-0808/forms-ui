function addQuestion(){
    var questionDiv = document.createElement('div');
    questionDiv.className = "bg-white rounded shadow-sm p-4 question-box";
    var questionType = null;

    questionType = document.querySelector("#question-type").value;
    console.log(questionType);
    
    var htmlcode = "";
    switch(questionType){
        case "short-text":
            htmlcode = `
        <div class="shortText">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="write question here" disabled=true>
            </div>
        </div>`;
            break;
        
        case "long-text":
                htmlcode = `
        <div class="longText">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-group">
                <textarea class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Write question here" disabled></textarea>
            </div>
        </div>`
            break;

        case "multiple-choice":
            htmlcode = `
        <div class="multipleChoice">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div id="mcq-options">    
                <div class="form-check">
                    <input type="radio" class="form-check-input" name="mcq" id="mcqOption1" value="option1" disabled=true>
                    <label class="form-check-label" for="mcqOption1"><input type="text" class='form-control' value="option1"></label>
                </div>
                <div class="form-check">
                    <input type="radio" class="form-check-input" name="mcq" id="mcqOption2" value="option2" disabled=true>
                    <label class="form-check-label" for="mcqOption2"><input type="text" class='form-control' value="option2"></label>
                </div>
            </div>
            <button type="button" class="btn btn-secondary mt-2" onclick="addMultipleChoiceOptionButton()">Add Option</button>
        </div>`
            break;

        case "dropdown":
            htmlcode = `
        <div class="dropDown">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-control" id="dropdownQuestion">
                <p><input type="text" class='form-control' value="option1"></p>
                <p><input type="text" class='form-control' value="option2"></p>
            </div>
            <button type="button" class="btn btn-secondary mt-2" onclick="addDropdownOptionButton()">Add Option</button>
        </div>`
            break;

        case "checkboxes":
            htmlcode = `
        <div class="CheckBox">
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div id="checkbox-options">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkboxOption1" name="checkbox" value="option1" disabled=true>
                    <label class="form-check-label" for="checkboxOption1"><input type="text" class='form-control' value="option1"></label>
                </div>
            </div>
            <button type="button" class="btn btn-secondary mt-2" onclick="addCheckBoxOptionButton()">Add Option</button>
        </div>`
            break;



    }
    
    
    questionDiv.innerHTML = htmlcode;

    document.querySelector("#form-container").appendChild(questionDiv);
    console.log(document.querySelector("#formTitle").value, "    ",document.querySelector("#formDesc").value);
    
}


var MultipleChoiceOptionCount = 2;
function addMultipleChoiceOptionButton() {
    
    MultipleChoiceOptionCount++;
    var newOptionDiv = document.createElement('div');
    newOptionDiv.className = 'form-check';

    var newRadio = document.createElement('input');
    newRadio.type = 'radio';
    newRadio.className = 'form-check-input';
    newRadio.name = 'mcq';
    newRadio.id = 'mcqOption' + MultipleChoiceOptionCount;
    newRadio.value = 'option' + MultipleChoiceOptionCount;
    newRadio.disabled = true;

    var newLabel = document.createElement('label');
    newLabel.className = 'form-check-label';
    newLabel.htmlFor = 'mcqOption' + MultipleChoiceOptionCount;

    var newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.className = 'form-control';
    newTextInput.value = 'option' + MultipleChoiceOptionCount;

    newLabel.appendChild(newTextInput);

    newOptionDiv.appendChild(newRadio);
    newOptionDiv.appendChild(newLabel);
    
    document.querySelector("#mcq-options").appendChild(newOptionDiv);
}

var dropdownOptionCount = 2;
function addDropdownOptionButton() {
    dropdownOptionCount++;
    var newOptionP = document.createElement('p');

    var newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.className = 'form-control';
    newTextInput.value = 'option' + dropdownOptionCount;

    newOptionP.appendChild(newTextInput);

    document.querySelector("#dropdownQuestion").appendChild(newOptionP);

}



var CheckboxOptionCount = 1;
function addCheckBoxOptionButton() {
    CheckboxOptionCount++;

    var newCheckboxDiv = document.createElement('div');
    newCheckboxDiv.className = 'form-check';

    var newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.className = 'form-check-input';
    newCheckbox.name = 'checkbox';
    newCheckbox.id = 'checkboxOption' + CheckboxOptionCount;
    newCheckbox.value = 'option' + CheckboxOptionCount;
    newCheckbox.disabled = true;

    var newLabel = document.createElement('label');
    newLabel.className = 'form-check-label';
    newLabel.htmlFor = 'checkboxOption' + CheckboxOptionCount;

    var newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.className = 'form-control';
    newTextInput.value = 'option' + CheckboxOptionCount;

    newLabel.appendChild(newTextInput);

    newCheckboxDiv.appendChild(newCheckbox);
    newCheckboxDiv.appendChild(newLabel);

    document.querySelector("#checkbox-options").appendChild(newCheckboxDiv);
}

