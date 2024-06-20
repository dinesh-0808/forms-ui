function addQuestion(){
    var questionDiv = document.createElement('div');
    questionDiv.className = "bg-white rounded shadow-sm p-4 question-box";
    var questionType = null;

    questionType = document.querySelector("#question-type").value;
    //console.log(questionType);
    
    var htmlcode = "";
    switch(questionType){
        case "short-text":
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
        </div>`;
            break;
        
        case "long-text":
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
        </div>`
            break;

        case "multiple-choice":
            MultipleCoiceBoxCount++;
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
            <button type="button" class="btn btn-secondary mt-2" id="mcqOptionsButton${MultipleCoiceBoxCount}"onclick="addMultipleChoiceOptionButton(event)"">Add Option</button>
        </div>`
            break;

        case "dropdown":
            dropdownBoxCount++;
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
        </div>`
            break;

        case "checkboxes":
            checkboxBoxCount++;
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
        </div>`
            break;



    }
    
    
    questionDiv.innerHTML = htmlcode;

    document.querySelector("#form-container").appendChild(questionDiv);
    //console.log(document.querySelector("#formTitle").value, "    ",document.querySelector("#formDesc").value);
    
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

