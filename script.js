const chat = document.getElementById("chatArea");
const input = document.getElementById("userInput");

/* ===============================
   Utility functions
   =============================== */
function botMsg(text) {
  const div = document.createElement("div");
  div.className = "bot";
  div.innerHTML = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function userMsg(text) {
  const div = document.createElement("div");
  div.className = "user";
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showOptions(buttons) {
  const wrap = document.createElement("div");
  wrap.className = "options";

  buttons.forEach(btn => {
    const b = document.createElement("button");
    b.innerText = btn.label;
    b.onclick = btn.action;
    wrap.appendChild(b);
  });

  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
}

/* ===============================
   Loader (4 seconds)
   =============================== */
function showLoader() {
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.id = "loader";
  loader.innerText = "Loading...";
  chat.appendChild(loader);
  chat.scrollTop = chat.scrollHeight;
}

function removeLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.remove();
}

function withLoading(callback) {
  showLoader();
  setTimeout(() => {
    removeLoader();
    callback();
  }, 2000); // ⏳ 2 seconds
}

/* ===============================
   Initial Bot Message
   =============================== */
botMsg("Select one of the options below or type your query");

showOptions([
  { label: "Aadhar Card  /  Background Verification", action: networkIssue },
  { label: "Payroll  /  Offer letter", action: roamingPack },
  { label: "DOJ  /  Salary", action: billing },
//   { label: "NDA/Pre-requisite ", action: plan },
//   { label: "Manage account / Shift connection", action: account },
//   { label: "More", action: more }
]);
// showOptions([
//   { label: "Issue with Network / Channels / No Signal", action: networkIssue },
//   { label: "International roaming pack activation / Support", action: roamingPack },
//   { label: "Bills / Payment / Recharge query", action: billing },
//   { label: "Plan or Pack related query", action: plan },
//   { label: "Manage account / Shift connection", action: account },
//   { label: "More", action: more }
// ]);

/* ===============================
   Step 1 Handlers
   =============================== */
function networkIssue() {
  userMsg("Aadhar Card/ Background Verification");

  withLoading(() => {
    botMsg("Pick a suitable option to proceed");

    showOptions([
      { label: "Aadhar Card", action: internetIssue },
      { label: "Background Verification", action: fiveG },
    //   { label: "International roaming", action: roaming }
    ]);
  });
}

function roamingPack() {
  userMsg("Payroll/Offer letter");

  withLoading(() => {
    botMsg("Pick a suitable option to proceed");
    showOptions([
      { label: "Payroll", action: pack },
      { label: "Offer letter", action: pack2 },
    //   { label: "International roaming", action: roaming }
    ]);


  });
}

function billing() {
  userMsg("DOJ/ Salary");

  withLoading(() => {
    botMsg("Pick a suitable option to proceed");
    showOptions([
      { label: "DOJ", action: pack3 },
      { label: "Salary", action: pack4 },
    //   { label: "International roaming", action: roaming }
    ]);
})

}

// function plan() {
//   userMsg("Plan or Pack related query");

//   withLoading(() => {
//     botMsg("Please choose a plan that suits your usage.");
//   });
// }

// function account() {
//   userMsg("Manage account / Shift connection");

//   withLoading(() => {
//     botMsg("Account management services are available here.");
//   });
// }

// function more() {
//   userMsg("More");

//   withLoading(() => {
//     botMsg("Please type your query to continue.");
//   });
// }

/* ===============================
   Step 2 Handlers
   =============================== */
function internetIssue() {
//   userMsg("Issue with internet/calls");
  userMsg("Aadhar card");

  withLoading(() => {
    botMsg(
      "An Aadhaar card is a unique 12-digit individual identification number issued by the Unique Identification Authority of India (UIDAI) on behalf of the Government of India."
    );
    showOptions([
      { label: "Why is Aadhaar card required?", action: oneMore },
      { label: "Why is Aadhaar needed during onboarding?",action: onemore2 },
      { label: "I’m not able to upload my Aadhaar picture. What should I do?", action: fiveGCheck },
      { label: "Why is Aadhaar required?", action: oneMore1 },
  { label: "What Aadhaar details do I need to enter in the form?", action: oneMore2 },
  { label: "How do I upload my Aadhaar image?", action: oneMore3 },
  { label: "What common mistakes should I avoid while uploading Aadhaar?", action: oneMore4 },
  { label: "What should I do if I face an error while uploading Aadhaar?", action: oneMore5 },
  { label: "What help tips should I follow to complete the form easily?", action: oneMore6 },
  { label: "Is my Aadhaar information safe?", action: oneMore7 },
  { label: "Can I edit my Aadhaar details after submitting the form?", action: oneMore8 },
  { label: "What happens after I submit my Aadhaar details?", action: oneMore9 },
  { label: "What should I do if my Aadhaar name does not match my other documents?", action: oneMore10 },
  { label: "Can I use someone else’s Aadhaar card?", action: oneMore11 },
  { label: "Who should I contact if I still face issues?", action: oneMore12 }
    ]);
  });
}

function roaming() {
  userMsg("International roaming");

  withLoading(() => {
    botMsg(
      "International roaming must be activated before travel. Charges vary by country."
    );
  });
}

function fiveG() {
  userMsg("Background Verfication");

  withLoading(() => {
    botMsg(`
      It is the process of checking a candidate’s identity, education, employment, and address details.This helps the company ensure the information provided is genuine and trustworthy.
    `);

    showOptions([
      { label: "Why is Background Verification required?", action: twoMore },
      { label: "What happens if Background Verification fails?", action: twomore2},
    //   { label: "Check if your handset is 5G ready", action:  }
    ]);
  });
}
// my own
function pack() {
  userMsg("Payroll");

  withLoading(() => {
    botMsg(`
      Payroll is the process of calculating and paying employee salaries, including deductions and allowances.
    `);

    showOptions([
      { label: "Why is Payroll important in a company ?", action: threemore },
      { label: "What information is required for Payroll processing?", action: threemore2 },
    //   { label: "Check if your handset is 5G ready", action: fiveGCheck }
    ]);
  });
}
function pack2() {
  userMsg("Offer letter");

  withLoading(() => {
    botMsg(`
      An offer letter is an official document given by a company to a selected candidate.
It confirms the job role, salary details, and date of joining, and outlines the basic terms of employment.
    `);

    showOptions([
      { label: "Why is an Offer Letter important?", action: fourmore },
      { label: "What details are mentioned in an Offer Letter?", action: fourmore2 },
    //   { label: "Check if your handset is 5G ready", action: fiveGCheck }
    ]);
  });
}
function pack3() {
  userMsg("DOJ");

  withLoading(() => {
    botMsg(`
     It is the official date on which an employee starts working in the company.
This date is used for salary, attendance, and all employment records.
    `);

    showOptions([
      { label: "When is DOJ finalized?", action: fivemore },
      { label: "What happens if DOJ is delayed?", action: fivemore2 },
    //   { label: "Check if your handset is 5G ready", action: fiveGCheck }
    ]);
  });
}
function pack4() {
  userMsg("Salary");

  withLoading(() => {
    botMsg(`
      Salary is the fixed amount paid to an employee for the work they perform.
It is usually paid monthly and includes basic pay, allowances, and deductions.
    `);

    showOptions([
      { label: "Why is Salary important for employees?", action: sixmore },
      { label: "When is Salary credited?", action: sixmore2 },
    //   { label: "Check if your handset is 5G ready", action: fiveGCheck }
    ]);
  });
}

/* ===============================
   Step 3 Handlers
   =============================== */
function oneMore() {
  userMsg("Why is Aadhaar card required?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>For identity verification (KYC)</li>
        <li>Confirms the candidate’s name, DOB, and address</li>
        <li>Helps prevent fake or duplicate profiles</li>
      </ul>
    `);
  });
}


function onemore2() {
  userMsg("Why is Aadhaar needed during onboarding?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>To verify the employee’s legal identity</li>
        <li>Required for payroll, PF, and official records</li>
        <li>Ensures compliance with company and government rules</li>
      </ul>
    `);
  });
}
function oneMore1() {
  userMsg("Why is Aadhaar required?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Aadhaar is used to verify your identity</li>
        <li>It confirms your name, date of birth, and address</li>
        <li>It helps avoid fake or duplicate records</li>
      </ul>
    `);
  });
}
function oneMore2() {
  userMsg("What Aadhaar details do I need to enter in the form?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Enter your full name exactly as on Aadhaar</li>
        <li>Enter your Aadhaar number correctly</li>
        <li>Ensure the date of birth matches the Aadhaar card</li>
      </ul>
    `);
  });
}
function oneMore3() {
  userMsg("How do I upload my Aadhaar image?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Take a clear photo or scan of your Aadhaar card</li>
        <li>Upload the image in JPG or PNG format</li>
        <li>Ensure the image size is less than 1MB</li>
      </ul>
    `);
  });
}
function oneMore4() {
  userMsg("What common mistakes should I avoid while uploading Aadhaar?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Do not upload blurry or unclear images</li>
        <li>Avoid files larger than 1MB</li>
        <li>Do not upload screenshots or wrong documents</li>
      </ul>
    `);
  });
}
function oneMore5() {
  userMsg("What should I do if I face an error while uploading Aadhaar?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Check your internet connection</li>
        <li>Refresh the page and try again</li>
        <li>Resize the image and re-upload</li>
      </ul>
    `);
  });
}
function oneMore6() {
  userMsg("What help tips should I follow to complete the form easily?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Read each field label carefully</li>
        <li>Double-check all details before submitting</li>
        <li>Contact support if the issue continues</li>
      </ul>
    `);
  });
}
function oneMore7() {
  userMsg("Is my Aadhaar information safe?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Your Aadhaar details are kept confidential</li>
        <li>Used only for verification purposes</li>
        <li>Not shared with unauthorized people</li>
      </ul>
    `);
  });
}
function oneMore8() {
  userMsg("Can I edit my Aadhaar details after submitting the form?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Editing may be allowed before final approval</li>
        <li>Contact HR or support for corrections</li>
        <li>Always recheck details before submitting</li>
      </ul>
    `);
  });
}
function oneMore9() {
  userMsg("What happens after I submit my Aadhaar details?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Details are reviewed by the HR team</li>
        <li>You may be contacted for clarification</li>
        <li>Onboarding continues after verification</li>
      </ul>
    `);
  });
}
function oneMore10() {
  userMsg("What should I do if my Aadhaar name does not match other documents?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Inform HR immediately about the mismatch</li>
        <li>Provide supporting documents if asked</li>
        <li>Avoid submitting incorrect details</li>
      </ul>
    `);
  });
}
function oneMore11() {
  userMsg("Can I use someone else’s Aadhaar card?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Only your own Aadhaar card is allowed</li>
        <li>Using another person’s Aadhaar is not permitted</li>
        <li>This may lead to rejection</li>
      </ul>
    `);
  });
}
function oneMore12() {
  userMsg("Who should I contact if I still face issues?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Contact the HR or support team</li>
        <li>Share the error message or screenshot</li>
        <li>They will help resolve the issue</li>
      </ul>
    `);
  });
}


function fiveGCheck() {
  userMsg("I’m not able to upload my Aadhaar picture. What should I do?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Check your internet connection</li>
        <li>Make sure the image is clear and not blurry</li>
        <li>Try uploading again after refreshing the page</li>
      </ul>
    `);
  });
}
// background 
function twoMore() {
  userMsg("Why is Background Verification required?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>To verify the candidate’s identity and past records</li>
        <li>Confirms employment, education, and address details</li>
        <li>Helps the company hire trustworthy employees</li>
      </ul>
    `);
  });
}
function twomore2() {
  userMsg("What happens if Background Verification fails?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>The company may ask for clarification or documents</li>
        <li>Offer letter or joining may be delayed</li>
        <li>In some cases, employment may be cancelled</li>
      </ul>
    `);
  });
}
function threemore() {
  userMsg("Why is Payroll important in a company?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Ensures employees are paid on time</li>
        <li>Maintains transparency in salary payments</li>
        <li>Helps the company follow legal rules</li>
      </ul>
    `);
  });
}
function threemore2() {
  userMsg("What information is required for Payroll processing?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Employee bank account details</li>
        <li>Salary structure and designation</li>
        <li>Attendance and leave records</li>
      </ul>
    `);
  });
}
function fourmore() {
  userMsg("Why is an Offer Letter important?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>It gives written confirmation of employment</li>
        <li>Helps the candidate understand job terms clearly</li>
        <li>Acts as proof before joining the company</li>
      </ul>
    `);
  });
}
function fourmore2() {
  userMsg("What details are mentioned in an Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Job title and department</li>
        <li>Salary structure and benefits</li>
        <li>Date of joining and work location</li>
      </ul>
    `);
  });
}
function fivemore() {
  userMsg("When is DOJ finalized?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>After the candidate accepts the offer letter</li>
        <li>Once document verification is completed</li>
        <li>Based on mutual agreement between company and employee</li>
        <li>Communicated before the joining date</li>
      </ul>
    `);
  });
}
function fivemore2() {
  userMsg("What happens if DOJ is delayed?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary payment may be postponed</li>
        <li>Onboarding schedule may change</li>
        <li>Benefits and leave may be affectede</li>
        <li>Company approval may be required</li>
        <li>HR records need to be updated</li>
      </ul>
    `);
  });
}
function sixmore() {
  userMsg("What components are included in Salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <liBasic pay</li>
        <li>Allowances (HRA, travel, etc.)</li>
        <li>Deductions like PF and tax</li>
        <li>Bonuses or incentives (if applicable)</li>
        <li>Other benefits as per company policy</li>
      </ul>
    `);
  });
}
function sixmore2() {
  userMsg("When is Salary credited?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Credited on a fixed date every month</li>
        <li>Paid through bank transfer</li>
        <li>Date depends on company policy</li>
        <li>Salary slip is shared after payment</li>
        <li>Delays may occur on holidays or bank issues</li>
      </ul>
    `);
  });
}



/* ===============================
   Text Input Handling
   =============================== */
function handleInput() {
  const text = input.value.trim().toLowerCase();
  if (!text) return;

  userMsg(input.value);

  withLoading(() => {
    // if (text.includes("aadhar")) networkIssue();
    if (text.includes("aadhar card")) internetIssue();
    // if (text.includes("network")) networkIssue();
    else if (text.includes("background verification")) fiveG();
    else if (text.includes("payroll")) pack();
    else if (text.includes("offer letter")) pack2();
    else if (text.includes("doj")) pack3();
    else if (text.includes("salary")) pack4();
    // else if (text.includes("roaming")) roaming();
    else botMsg("Please enter a valid option from the menu.");
  });

  input.value = "";
}
