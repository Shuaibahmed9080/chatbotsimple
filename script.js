const chat = document.getElementById("chatArea");
const input = document.getElementById("userInput");
let humanChatEnabled = false;
const WHATSAPP_NUMBER = "919080887600"; // replace with your number


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
  { label: "NDA", action: plan },
  { label: "Human chat", action: account },
]);


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

function account() {
  userMsg("Human Chat");

  withLoading(() => {
    humanChatEnabled = true;

    botMsg(`
      You are now connected to human support.
      <br/>Please type your message and it will be sent to WhatsApp.
    `);
  });
}




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
      { label: "Why is Aadhaar needed during onboarding?", action: onemore2 },
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

function plan() {
  userMsg("NDA");

  withLoading(() => {
    botMsg(
      "NDA Non-Disclosure Agreement.An NDA is a legal agreement that protects confidential company information.It ensures employees do not share sensitive data during or after employment."
    );
  });
  showOptions(
    [
      { label: "What is an NDA (Non-Disclosure Agreement)?", action: sevenmore1 },
      { label: "Why is an NDA required?", action: sevenmore2 },
      { label: "What information is considered confidential?", action: sevenmore3 },
      { label: "When do I need to sign the NDA?", action: sevenmore4 },
      { label: "How do I sign the NDA?", action: sevenmore5 },
      { label: "How long is the NDA valid?", action: sevenmore6 },
      { label: "Does the NDA apply after leaving the company?", action: sevenmore7 },
      { label: "What happens if I violate the NDA?", action: sevenmore8 },
      { label: "Can I share company information with others?", action: sevenmore9 },
      { label: "Is my information safe after signing the NDA?", action: sevenmore10 },
      { label: "Can I ask questions before signing the NDA?", action: sevenmore11 },
      { label: "Who should I contact if I need help with the NDA?", action: sevenmore12 }
    ]

  );
}

function fiveG() {
  userMsg("Background Verfication");

  withLoading(() => {
    botMsg(`
      It is the process of checking a candidate’s identity, education, employment, and address details.This helps the company ensure the information provided is genuine and trustworthy.
    `);

    showOptions([
      { label: "Why is Background Verification required?", action: twoMore },
      { label: "What happens if Background Verification fails?", action: twomore2 },
      { label: "What is Background Verification?", action: twoMore1 },
      // { label: "Why is Background Verification required?", action: twoMore2 },
      { label: "What details are checked during Background Verification?", action: twoMore3 },
      { label: "What documents do I need to submit for verification?", action: twoMore4 },
      { label: "Is my personal information safe during verification?", action: twoMore5 },
      { label: "How long does Background Verification take?", action: twoMore6 },
      { label: "What if my documents do not match?", action: twoMore7 },
      { label: "How will I know the verification status?", action: twoMore8 },
      { label: "What should I do if I get an error or rejection?", action: twoMore9 },
      { label: "What help tips should I follow to complete verification easily?", action: twoMore10 },
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
      { label: "What is Payroll?", action: threemore1 },
      // { label: "Why is Payroll important?", action: threemore22 },
      { label: "How is my salary calculated?", action: threemore3 },
      { label: "What deductions are taken from my salary?", action: threemore4 },
      { label: "When will my salary be credited?", action: threemore5 },
      { label: "How will I receive my salary?", action: threemore6 },
      { label: "What is a payslip and why is it important?", action: threemore7 },
      { label: "Where can I check my payslip?", action: threemore8 },
      { label: "What should I do if my salary is not credited?", action: threemore9 },
      { label: "What should I do if there is an error in my salary?", action: threemore10 },
      // { label: "Is my payroll and salary information safe?", action: threemore11 },
      // { label: "What help tips should I follow to understand payroll easily?", action: threemore12 }
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

      { label: "What is an Offer Letter?", action: fourmore1 },
      // { label: "Why is an Offer Letter important?", action: fourmore2 },
      { label: "What details are mentioned in an Offer Letter?", action: fourmore3 },
      { label: "How should I read my Offer Letter?", action: fourmore4 },
      { label: "How do I accept the Offer Letter?", action: fourmore5 },
      { label: "How do I sign the Offer Letter?", action: fourmore6 },
      { label: "What documents do I need to submit after accepting the Offer Letter?", action: fourmore7 },
      { label: "What happens after I accept the Offer Letter?", action: fourmore8 },
      { label: "Can I ask questions before accepting the Offer Letter?", action: fourmore9 },
      { label: "What if I do not accept the Offer Letter on time?", action: fourmore10 },
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
      { label: "What is DOJ (Date of Joining)?", action: fivemore1 },
      { label: "Why is DOJ important?", action: fivemore22 },
      { label: "How does DOJ affect my salary?", action: fivemore3 },
      { label: "How does DOJ affect attendance?", action: fivemore4 },
      { label: "How does DOJ affect onboarding?", action: fivemore5 },
      { label: "What should I do on my first day (DOJ)?", action: fivemore6 },
      { label: "What if my DOJ changes?", action: fivemore7 },
      { label: "What happens if I join late on my DOJ?", action: fivemore8 },
      { label: "What documents should I carry on DOJ?", action: fivemore9 },
      { label: "Who should I contact if I have doubts about DOJ?", action: fivemore10 },
      // { label: "Can my DOJ affect my probation period?", action: fivemore11 },
      // { label: "What help tips should I follow to avoid DOJ confusion?", action: fivemore12 }
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
      { label: "What is Salary?", action: sixmore1 },
      // { label: "Why is Salary important?", action: sixmore2 },
      { label: "How is my Salary calculated?", action: sixmore3 },
      { label: "What is Basic Pay?", action: sixmore4 },
      { label: "What are Allowances?", action: sixmore5 },
      { label: "What deductions are taken from Salary?", action: sixmore6 },
      { label: "What is Net Salary?", action: sixmore7 },
      { label: "When will my Salary be credited?", action: sixmore8 },
      { label: "How will I receive my Salary?", action: sixmore9 },
      { label: "What is a Payslip?", action: sixmore10 },
      { label: "What should I do if there is a salary issue?", action: sixmore11 },
      // { label: "What help tips should I follow to understand Salary easily?", action: sixmore12 }
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
} function twoMore1() {
  userMsg("What is Background Verification?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>It is a process to verify your personal and professional details</li>
        <li>The company checks the information you provided</li>
        <li>This ensures all details are genuine</li>
      </ul>
    `);
  });
}
function twoMore3() {
  userMsg("What details are checked during Background Verification?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Identity details like name and address</li>
        <li>Educational qualifications</li>
        <li>Previous employment details (if applicable)</li>
      </ul>
    `);
  });
}
function twoMore4() {
  userMsg("What documents do I need to submit for verification?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Government ID such as Aadhaar or PAN</li>
        <li>Educational certificates</li>
        <li>Previous company documents if required</li>
      </ul>
    `);
  });
}
function twoMore5() {
  userMsg("Is my personal information safe during verification?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Your information is kept confidential</li>
        <li>Used only for verification purposes</li>
        <li>Not shared with unauthorized persons</li>
      </ul>
    `);
  });
}
function twoMore6() {
  userMsg("How long does Background Verification take?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Usually takes 7 to 15 working days</li>
        <li>Time may vary based on document checks</li>
        <li>Delays may happen if details are incomplete</li>
      </ul>
    `);
  });
}
function twoMore7() {
  userMsg("What if my documents do not match?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>This is common and can be corrected</li>
        <li>Inform HR about the mismatch immediately</li>
        <li>Submit correct or supporting documents</li>
      </ul>
    `);
  });
}
function twoMore8() {
  userMsg("How will I know the verification status?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>HR will update you on the progress</li>
        <li>You may receive an email or call</li>
        <li>You will be informed once verification is complete</li>
      </ul>
    `);
  });
}
function twoMore9() {
  userMsg("What should I do if I get an error or rejection?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Read the error message carefully</li>
        <li>Check document clarity and format</li>
        <li>Re-upload the correct document if asked</li>
      </ul>
    `);
  });
}
function twoMore10() {
  userMsg("What help tips should I follow to complete verification easily?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Upload clear and correct documents</li>
        <li>Enter details exactly as per documents</li>
        <li>Double-check everything before submission</li>
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
function threemore1() {
  userMsg("What is Payroll?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Payroll is the process of paying employee salaries</li>
        <li>It includes salary calculation and payment</li>
        <li>It shows earnings and deductions clearly</li>
      </ul>
    `);
  });
}
function threemore22() {
  userMsg("Why is Payroll important?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Ensures employees are paid correctly</li>
        <li>Helps salaries get credited on time</li>
        <li>Follows company and legal rules</li>
      </ul>
    `);
  });
}
function threemore3() {
  userMsg("How is my salary calculated?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Based on your job role and salary structure</li>
        <li>Attendance and working days are considered</li>
        <li>Deductions are removed before payment</li>
      </ul>
    `);
  });
}
function threemore4() {
  userMsg("What deductions are taken from my salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Provident Fund (PF)</li>
        <li>Income tax or professional tax</li>
        <li>Other deductions as per company policy</li>
      </ul>
    `);
  });
}
function threemore5() {
  userMsg("When will my salary be credited?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary is credited once every month</li>
        <li>It is paid on a fixed date</li>
        <li>The date depends on company policy</li>
      </ul>
    `);
  });
}
function threemore6() {
  userMsg("How will I receive my salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary is paid through bank transfer</li>
        <li>It is credited to your registered bank account</li>
        <li>Cash payments are not allowed</li>
      </ul>
    `);
  });
}
function threemore7() {
  userMsg("What is a payslip and why is it important?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>A payslip shows your salary details</li>
        <li>It includes earnings and deductions</li>
        <li>Useful for records and future reference</li>
      </ul>
    `);
  });
}
function threemore8() {
  userMsg("Where can I check my payslip?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Payslip is shared by HR or payroll team</li>
        <li>May be available on the company portal</li>
        <li>You can request it if not received</li>
      </ul>
    `);
  });
}
function threemore9() {
  userMsg("What should I do if my salary is not credited?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Check the salary credit date first</li>
        <li>Verify your bank account details</li>
        <li>Contact HR or payroll support</li>
      </ul>
    `);
  });
}
function threemore10() {
  userMsg("What should I do if there is an error in my salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Inform HR or payroll immediately</li>
        <li>Explain the issue clearly</li>
        <li>Corrections will be done if required</li>
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
function fourmore1() {
  userMsg("What is an Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>An offer letter is an official document from the company</li>
        <li>It confirms that you are selected for the job</li>
        <li>It shares job details in written form</li>
      </ul>
    `);
  });
}
function fourmore2() {
  userMsg("Why is an Offer Letter important?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>It gives written proof of the job offer</li>
        <li>It clearly explains job terms and conditions</li>
        <li>It helps avoid confusion before joining</li>
      </ul>
    `);
  });
}
function fourmore3() {
  userMsg("What details are mentioned in an Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Job role and department</li>
        <li>Salary and benefits</li>
        <li>Date of joining and work location</li>
      </ul>
    `);
  });
}
function fourmore4() {
  userMsg("How should I read my Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Read all points carefully</li>
        <li>Check salary, role, and joining date</li>
        <li>Ask HR if anything is unclear</li>
      </ul>
    `);
  });
}
function fourmore5() {
  userMsg("How do I accept the Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Follow the acceptance instructions in the letter</li>
        <li>Sign or reply as mentioned</li>
        <li>Send the accepted copy to HR</li>
      </ul>
    `);
  });
}
function fourmore6() {
  userMsg("How do I sign the Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>You may sign digitally or manually</li>
        <li>Ensure the signature is clear</li>
        <li>Upload or email the signed copy</li>
      </ul>
    `);
  });
}
function fourmore7() {
  userMsg("What documents do I need to submit after accepting the Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Identity proof such as Aadhaar or PAN</li>
        <li>Educational certificates</li>
        <li>Any other documents requested by HR</li>
      </ul>
    `);
  });
}
function fourmore8() {
  userMsg("What happens after I accept the Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>HR will confirm your acceptance</li>
        <li>Onboarding process will begin</li>
        <li>You will receive joining instructions</li>
      </ul>
    `);
  });
}
function fourmore9() {
  userMsg("Can I ask questions before accepting the Offer Letter?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Yes, you can contact HR</li>
        <li>Clarify salary, role, or joining date</li>
        <li>It is better to ask before accepting</li>
      </ul>
    `);
  });
}
function fourmore10() {
  userMsg("What if I do not accept the Offer Letter on time?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>The offer may expire after the deadline</li>
        <li>Inform HR if you need more time</li>
        <li>Late response may delay joining</li>
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
function fivemore1() {
  userMsg("What is DOJ (Date of Joining)?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>DOJ means Date of Joining</li>
        <li>It is the first day you start work</li>
        <li>It is your official joining date</li>
      </ul>
    `);
  });
}
function fivemore22() {
  userMsg("Why is DOJ important?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>It decides when your salary starts</li>
        <li>It is used for attendance tracking</li>
        <li>It marks the start of employment</li>
      </ul>
    `);
  });
}
function fivemore3() {
  userMsg("How does DOJ affect my salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary is calculated from DOJ</li>
        <li>First salary depends on days worked</li>
        <li>Delay in DOJ may delay salary</li>
      </ul>
    `);
  });
}
function fivemore3() {
  userMsg("How does DOJ affect my salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary is calculated from DOJ</li>
        <li>First salary depends on days worked</li>
        <li>Delay in DOJ may delay salary</li>
      </ul>
    `);
  });
}
function fivemore4() {
  userMsg("How does DOJ affect attendance?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Attendance starts from DOJ</li>
        <li>Leaves are counted after DOJ</li>
        <li>Working days begin from this date</li>
      </ul>
    `);
  });
}
function fivemore5() {
  userMsg("How does DOJ affect onboarding?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Onboarding starts on DOJ</li>
        <li>System access and ID are provided</li>
        <li>Training may begin on this day</li>
      </ul>
    `);
  });
}
function fivemore6() {
  userMsg("What should I do on my first day (DOJ)?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Report to office or login as instructed</li>
        <li>Follow HR or manager guidance</li>
        <li>Carry required documents if asked</li>
      </ul>
    `);
  });
}
function fivemore7() {
  userMsg("What if my DOJ changes?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Inform HR immediately</li>
        <li>Get confirmation for the new DOJ</li>
        <li>Updated DOJ will be recorded</li>
      </ul>
    `);
  });
}
function fivemore8() {
  userMsg("What happens if I join late on my DOJ?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Inform HR or manager in advance</li>
        <li>Salary or attendance may be affected</li>
        <li>Approval may be required</li>
      </ul>
    `);
  });
}
function fivemore9() {
  userMsg("What documents should I carry on DOJ?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Identity proof like Aadhaar or PAN</li>
        <li>Educational certificates</li>
        <li>Documents requested by HR</li>
      </ul>
    `);
  });
}
function fivemore10() {
  userMsg("Who should I contact if I have doubts about DOJ?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Contact the HR team</li>
        <li>Reach out to your reporting manager</li>
        <li>Use official company contacts</li>
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
function sixmore1() {
  userMsg("What is Salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary is the money you receive for your work</li>
        <li>It is paid by the company to the employee</li>
        <li>It helps manage daily and monthly expenses</li>
      </ul>
    `);
  });
}

function sixmore3() {
  userMsg("How is my Salary calculated?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Based on job role and salary agreement</li>
        <li>Attendance and working days are considered</li>
        <li>Deductions are reduced before payment</li>
      </ul>
    `);
  });
}
function sixmore4() {
  userMsg("What is Basic Pay?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Basic pay is the main part of salary</li>
        <li>Other allowances depend on basic pay</li>
        <li>It is fixed in the offer letter</li>
      </ul>
    `);
  });
}
function sixmore5() {
  userMsg("What are Allowances?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Extra payments like HRA or travel allowance</li>
        <li>They support work and living expenses</li>
        <li>They are added to basic pay</li>
      </ul>
    `);
  });
}
function sixmore6() {
  userMsg("What deductions are taken from Salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Provident Fund (PF)</li>
        <li>Income tax or professional tax</li>
        <li>Other deductions as per company rules</li>
      </ul>
    `);
  });
}
function sixmore7() {
  userMsg("What is Net Salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Net salary is the final amount you receive</li>
        <li>It is calculated after all deductions</li>
        <li>This amount is credited to your bank</li>
      </ul>
    `);
  });
}
function sixmore8() {
  userMsg("When will my Salary be credited?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary is credited once every month</li>
        <li>It is paid on a fixed date</li>
        <li>Date depends on company policy</li>
      </ul>
    `);
  });
}
function sixmore9() {
  userMsg("How will I receive my Salary?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Salary is paid through bank transfer</li>
        <li>It is credited to your registered bank account</li>
        <li>Cash payment is not allowed</li>
      </ul>
    `);
  });
}
function sixmore10() {
  userMsg("What is a Payslip?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>A payslip shows salary details</li>
        <li>It includes earnings and deductions</li>
        <li>Useful for records and proof</li>
      </ul>
    `);
  });
}
function sixmore11() {
  userMsg("What should I do if there is a salary issue?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Check your payslip and bank account</li>
        <li>Confirm the salary credit date</li>
        <li>Contact HR or payroll team</li>
      </ul>
    `);
  });
}
function sevenmore1() {
  userMsg("What is an NDA (Non-Disclosure Agreement)?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>NDA means Non-Disclosure Agreement</li>
        <li>It is a legal agreement with the company</li>
        <li>It protects confidential company information</li>
      </ul>
    `);
  });
}
function sevenmore2() {
  userMsg("Why is an NDA required?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>To protect company data and secrets</li>
        <li>To prevent information from being shared</li>
        <li>To maintain trust between company and employee</li>
      </ul>
    `);
  });
}
function sevenmore3() {
  userMsg("What information is considered confidential?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Company documents and internal data</li>
        <li>Client information and business plans</li>
        <li>Processes, systems, and strategies</li>
      </ul>
    `);
  });
}
function sevenmore4() {
  userMsg("When do I need to sign the NDA?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Before joining the company</li>
        <li>During the onboarding process</li>
        <li>Before getting system access</li>
      </ul>
    `);
  });
}
function sevenmore5() {
  userMsg("How do I sign the NDA?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>You may sign digitally or manually</li>
        <li>Follow the instructions shared by HR</li>
        <li>Submit the signed copy to HR</li>
      </ul>
    `);
  });
}
function sevenmore6() {
  userMsg("How long is the NDA valid?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>NDA is valid during employment</li>
        <li>It may continue after leaving the company</li>
        <li>Duration is mentioned in the NDA document</li>
      </ul>
    `);
  });
}
function sevenmore7() {
  userMsg("Does the NDA apply after leaving the company?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Yes, NDA usually applies after leaving</li>
        <li>Confidential information must not be shared</li>
        <li>This protects the company even after exit</li>
      </ul>
    `);
  });
}
function sevenmore8() {
  userMsg("What happens if I violate the NDA?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Company may take legal action</li>
        <li>Employment may be terminated</li>
        <li>Penalties may apply as per agreement</li>
      </ul>
    `);
  });
}
function sevenmore9() {
  userMsg("Can I share company information with others?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>No, confidential information must not be shared</li>
        <li>This includes friends and family</li>
        <li>NDA strictly restricts such sharing</li>
      </ul>
    `);
  });
}
function sevenmore10() {
  userMsg("Is my information safe after signing the NDA?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Your personal details are kept secure</li>
        <li>NDA focuses on company confidentiality</li>
        <li>Documents are handled by authorized staff</li>
      </ul>
    `);
  });
}
function sevenmore11() {
  userMsg("Can I ask questions before signing the NDA?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Yes, you should ask if anything is unclear</li>
        <li>HR can explain the NDA terms</li>
        <li>Understand fully before signing</li>
      </ul>
    `);
  });
}
function sevenmore12() {
  userMsg("Who should I contact if I need help with the NDA?");

  withLoading(() => {
    botMsg(`
      <ul>
        <li>Contact the HR or legal team</li>
        <li>Explain your doubts clearly</li>
        <li>They will guide you step by step</li>
      </ul>
    `);
  });
}

//newcode
function redirectToWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  botMsg("Sending your message to human support on WhatsApp...");

  setTimeout(() => {
    // ✅ Force redirect (works on mobile + desktop)
    window.open(url, "_blank");
  }, 800);
}




function handleInput() {
  const originalText = input.value.trim();
  if (!originalText) return;

  userMsg(originalText);

  withLoading(() => {
    const text = originalText.toLowerCase();

    // 🟢 HUMAN CHAT MODE
    if (humanChatEnabled) {
      redirectToWhatsApp(originalText);
      return;
    }

    // 🟢 NORMAL CHATBOT FLOW
    if (text.includes("aadhar card")) internetIssue();
    else if (text.includes("background verification")) fiveG();
    else if (text.includes("payroll")) pack();
    else if (text.includes("offer letter")) pack2();
    else if (text.includes("doj")) pack3();
    else if (text.includes("salary")) pack4();
    else if (text.includes("nda")) plan();
    else {
      botMsg("Please enter a valid option from the menu.");
    }
  });

  input.value = "";
}


