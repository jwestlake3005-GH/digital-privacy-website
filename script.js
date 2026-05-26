function setQuizAnswer(message, className) {
  var answer = document.getElementById("quiz-answer");
  if (!answer) {
    return;
  }
  answer.className = className;
  answer.textContent = message;
}

function chooseQuiz(choice) {
  if (choice === "gdpr") {
    setQuizAnswer(
      "Good answer: GDPR gives people rights over personal data and requires organizations to explain how data is collected and used.",
      "correct"
    );
  } else if (choice === "section230") {
    setQuizAnswer(
      "Section 230 mostly concerns platform responsibility for user-posted content. It is important, but it is not the main privacy law in this example.",
      "caution"
    );
  } else if (choice === "forgotten") {
    setQuizAnswer(
      "The Right to be Forgotten can support removal requests in some contexts, but the example is mainly about data collection and consent.",
      "correct"
    );
  } else {
    setQuizAnswer(
      "Try again. The strongest answer is the law focused on personal data rights and transparency.",
      "caution"
    );
  }
}

function validateFeedbackForm(event) {
  var form = document.getElementById("feedback-form");
  var error = document.getElementById("form-error");
  if (!form || !error) {
    return true;
  }

  var name = form.elements.name.value.trim();
  var email = form.elements.email.value.trim();
  var message = form.elements.message.value.trim();

  if (name === "" || email === "" || message === "") {
    event.preventDefault();
    error.textContent = "Please enter your name, email, and message before submitting.";
    return false;
  }

  error.textContent = "Thank you. This sample form is ready to submit in a live site.";
  event.preventDefault();
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("feedback-form");
  if (form) {
    form.addEventListener("submit", validateFeedbackForm);
  }
});
