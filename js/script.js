window.onload = ()=>{
    const userNameSection = document.getElementById("username");
    userNameSection.innerHTML = '';
    const navbar = document.querySelector(".navbar");
    
    // FORM VALIDATION
    const nameInput = document.getElementById("name");
    const companyInput = document.getElementById("companyName");
    let companyFinalText = "";
    const phoneNumberInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");
    const reasonInput = document.getElementsByName("reason");
    let isReasonSelected = false;
    let selectedReason;
    let reasonFinalText = "";
    const reasonError = document.getElementById("reasonError");
    const noteInput = document.getElementById("note");
    let noteFinalText = "";
    const finalInputResult = document.querySelector(".input-result");
    
    // BUTTONS
    const navHome = document.getElementById("li-home");
    const navProfile = document.getElementById("li-profile");
    const navProduct = document.getElementById("li-product");
    const navProject = document.getElementById("li-project");
    const navMessage = document.getElementById("li-message");
    const preview = document.getElementById("show-preview");
    const submit = document.getElementById("submit");
    const edit = document.getElementById("edit");
    
     function initializePage(){
        do{
            const userName = prompt("Hi, please enter your name! ^^");
        
            if (userName == '' || userName == null) {
                userNameSection.innerHTML += " there!";
            } else if(validateCharacterInput(userName)) {
                userNameSection.innerHTML += " " + userName + "!";
            } else {
                alert("Please only enter characters!");
            }
        }while(userNameSection.innerHTML ==  '' || userName == null);
     }
    
    
    function validateCharacterInput(input) {
      // Regex to allow only alphabets
      const regex = /^[a-zA-Z]+$/;
      return regex.test(input);
    }
    
    function validateNumberInput(input) {
      // Regex to allow only numbers
      const regex = /^[0-9]+$/;
      return regex.test(input);
    }
    
    function validateEmailInput(input) {
      // Regex to validate email
      const regex = /^[a-zA-Z@.]+$/;
      return regex.test(input);
    }
    
    function clearForm() {
        nameInput.value = '';
        companyInput.value = '';
        phoneNumberInput.value = '';
        emailInput.value = '';
        noteInput.value = '';
        nameInput.classList.remove("error");
        companyInput.classList.remove("error");
        phoneNumberInput.classList.remove("error");
        emailInput.classList.remove("error");
        finalInputResult.innerHTML = '';
        submit.style.display = "none";
        edit.style.display = "none";
      }
    
    function submitForm(){
        clearForm();
        alert("Your message is successfully sent! Please gives us time to review your message, we will contact you as soon as possible, thank you!");
        document.querySelector('#home').scrollIntoView({
            behavior: 'smooth'
          });
    }

    // SCROLL TO PARTICULAR DIV
    document.querySelector('#li-home').addEventListener('click', ()=>{
        document.querySelector('#home').scrollIntoView({
            behavior: 'smooth'
          });
    });

    document.querySelector('#li-profile').addEventListener('click', ()=>{
        document.querySelector('#our-profile').scrollIntoView({
            behavior: 'smooth'
          });
    });

    document.querySelector('#li-product').addEventListener('click', ()=>{
        document.querySelector('#product').scrollIntoView({
            behavior: 'smooth'
          });
    });

    document.querySelector('#li-project').addEventListener('click', ()=>{
        document.querySelector('#project').scrollIntoView({
            behavior: 'smooth'
          });
    });

    document.querySelector('#li-message').addEventListener('click', ()=>{
        document.querySelector('#message-us').scrollIntoView({
            behavior: 'smooth'
          });
    });


    // INPUT FORM HANDLER
    preview.addEventListener("click", function (event) {
        event.preventDefault();
    // All validations are passed when isValidationDone's value is 4
    let isValidationDone = 0;
      finalInputResult.innerHTML = "";
      reasonError.innerHTML = '';
    
      // NAME VALIDATION
      if (!validateCharacterInput(nameInput.value)) {
        nameInput.classList.add("error");
        nameInput.value = '';
        nameInput.placeholder = '';
        nameInput.placeholder = "Please enter characters only";
      } else {
        isValidationDone++;
      }
    
      // COMPANY NAME VALIDATION
      if (companyInput.value != '') {
        companyFinalText = `from ${companyInput.value} company`;
      } 
    
      // PHONE NUMBER VALIDATION
      if (!validateNumberInput(phoneNumberInput.value)) {
        phoneNumberInput.classList.add("error");
        phoneNumberInput.value = "";
        phoneNumberInput.placeholder = '';
        phoneNumberInput.placeholder = "Please enter numbers only";
      } else {
        isValidationDone++;
      }
    
      // EMAIL VALIDATION
      if (!validateEmailInput(emailInput.value)) {
        emailInput.classList.add("error");
        emailInput.value = '';
        emailInput.placeholder = '';
        emailInput.placeholder = "Missing email characteristics (./@)";
      } else {
        isValidationDone++;
      }
    
      // REASON VALIDATION
      for (const reason of reasonInput) {
        if (reason.checked) {
          isReasonSelected = true;
          selectedReason = reason.value;
          break;
        }
      }
      if (!isReasonSelected) {
        reasonError.innerHTML += "*Please enter of the reason";
      } else {
        if (selectedReason == "purchase") {
          reasonFinalText = "purchasing some of your products";
        } else if (selectedReason == "collaborate") {
          reasonFinalText =
            "explore a potential collaboration that could be mutually beneficial for both of the parties";
        } else {
          reasonFinalText = "file an inquiry or complaint";
        }
        isValidationDone++;
      }
    
      // NOTE VALIDATION
      if (noteInput.value != '') {
        noteFinalText =
          "<p>I would leave a note, hopefully this is helpful for clarifying things better :</p>";
        noteFinalText += `<p>${noteInput.value}</p>`;
      }
    
      if(isValidationDone == 4){
        const now = new Date();
      const formattedDateTime = now.toLocaleString();
      finalInputResult.innerHTML += `<p>Date: ${formattedDateTime}</p><br>`;
      finalInputResult.innerHTML += 'Sender Information:';
      finalInputResult.innerHTML +=  `<p>Name: ${nameInput.value}</p>`;
      finalInputResult.innerHTML += `<p>Phone Number: ${phoneNumberInput.value}</p>`;
      finalInputResult.innerHTML += `Email: ${emailInput.value}<br>`;
      finalInputResult.innerHTML += '<br><p>Greetings.</p>';
      finalInputResult.innerHTML += `Let me briefly introduce myself. My name is ${nameInput.value} ${companyFinalText}, and I am reaching out to ${reasonFinalText}. </p>`;
      finalInputResult.innerHTML += noteFinalText;
      finalInputResult.innerHTML +=
        "<p>Please let me know if you would be available for a quick call or meeting at your convenience. I look forward to hearing from you.</p>";
      finalInputResult.innerHTML += "<p>Best regards,</p>";
      finalInputResult.innerHTML += nameInput.value;
        submit.style.display = "flex";
        edit.style.display = "flex";
      }
    });
    
    // SUBMIT FORM HANDLER
    submit.addEventListener("click", ()=>{
        submitForm();
    });
    
    // EDIT FORM HANDLER
    edit.addEventListener("click", ()=>{
        clearForm();
    })
    
    initializePage();
}

