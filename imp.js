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
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="write question here" disabled=true>
            </div>`;
            break;
        
        case "long-text":
                htmlcode = `
            <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
            </div>
            <br>
            <div class="form-group">
                <textarea class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Write question here" disabled></textarea>

            </div>`
            break;

        case "multiple-choice":
            htmlcode = `
        <div class="form-group">
                <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
        </div>
        <div id="mcq-options">    
            <div class="form-check">
            <input type="radio" class="form-check-input" name="mcq" id="mcqOption1" value="option1">
            <label class="form-check-label" for="mcqOption1"><input type="text" class='form-control' value="option1"></label>
        </div>
        <div class="form-check">
            <input type="radio" class="form-check-input" name="mcq" id="mcqOption2" value="option2">
            <label class="form-check-label" for="mcqOption2"><input type="text" class='form-control' value="option2"></label>
        </div>
        </div>
        <button type="button" class="btn btn-secondary mt-2" onclick="addMultipleChoiceOptionButton()">Add Option</button>`
        break;

        case "dropdown":
            htmlcode = `
        <div class="form-group">
            <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
        </div>
        <select class="form-control" id="dropdownQuestion">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
        <button type="button" class="btn btn-secondary mt-2" onclick="addDropdownOptionButton()">Add Option</button>`
        break;

        case "checkboxes":
            htmlcode = `<div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkboxOption1" name="checkbox" value="option1">
            <label class="form-check-label" for="checkboxOption1">Option 1</label>
        </div>
        
        </div>`
        break;



    }
    
    // var htmlcode = `
    //         <div class="form-group">
    //             <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="Question">
    //         </div>
    //         <br>
    //         <div class="form-group">
    //             <input type="text" class="form-control" id="inputHeader" aria-describedby="headerHelp" placeholder="write question here" disabled=true>
    //         </div>`
    
    questionDiv.innerHTML = htmlcode;

    document.querySelector("#form-container").appendChild(questionDiv);
    
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
    
}





