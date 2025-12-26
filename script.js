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
  }, 2000); // ⏳ 4 seconds
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
      { label: "I’m not able to upload my Aadhaar picture. What should I do?", action: fiveGCheck }
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
