function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    email_sender: document.getElementById("emailSender").value,
    subject_sender: document.getElementById("subjectSender").value,
    message_sender: document.getElementById("message").value,
  };
  emailjs
    .send("{{SERVICE ID}}", "{{TEMPLATE ID}}", tempParams)
    .then(function (res) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mail Sent Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Aspiring Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    fadeOut: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// Scroll to top button script
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const resumeButton = document.getElementById("resume-button-1");
let isDownloaded = false;

resumeButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!isDownloaded) {
    const downloadUrl = resumeButton.getAttribute("data-download-url");
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "Jivak-Sute-Resume";
    downloadLink.click();

    isDownloaded = true;

    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1eWh557jlpOx7cgxpQNA4pqp_BWr_cQCi/view?usp=sharing",
        "_blank"
      );
    }, 200);
  }
});

const resumeButton2 = document.getElementById("resume-button-2");
let isDownloaded2 = false;

resumeButton2.addEventListener("click", () => {
  if (!isDownloaded2) {
    const downloadUrl = resumeButton2.getAttribute("data-download-url");
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "Jivak-Sute-Resume";
    downloadLink.click();

    isDownloaded2 = true;

    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1eWh557jlpOx7cgxpQNA4pqp_BWr_cQCi/view?usp=sharing",
        "_blank"
      );
    }, 200);
  }
});

https: GitHubCalendar(".calendar", "jivakys", { responsive: true });
