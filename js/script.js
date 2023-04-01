const scrollingElement = document.querySelector(".chat-section");
let chatSection = document.querySelector(".chat-section");

let buttonNext = document.getElementById("button-next");
let buttonPrevious = document.getElementById("button-privous");

let suggestionSection = document.querySelector(".suggestion-section");

let questionIndex = 0;

const questions = [
  {
    id: 1,
    title: "Vad behöver du hjälp med?",
    input: "button",
    placeholder: "",
    answers: [
      "Skapa ny hemsida",
      "Utveckling av befintlig hemsida",
      "Sökoptimering",
      "Marknadsföring",
      "Apputveckling",
      "IT-förfrågan",
      "Annat",
    ],
  },
  {
    id: 2,
    title: "Önskar du ett fast pris eller ett pris per timme?",
    input: "button",
    placeholder: "",
    answers: ["Fast pris", "Pris per timme"],
  },
  {
    id: 3,
    title: "När vill du bli kontaktad?",
    input: "button",
    placeholder: "",
    answers: ["Så snart som möjligt", "Förmiddag", "Eftermiddag", "Kväll"],
  },
  {
    id: 4,
    title: "Plats",
    input: "button",
    placeholder: "",

    answers: [
      "Blekinge",
      "Dalarna",
      "Gotland",
      "Gävleborg",
      "Göteborg",
      "Halland",
      "Jämtland",
      "Jönköping",
      "Kalmar",
      "Kronoberg",
      "Skaraborg",
      "Skåne",
      "Stockholm",
      "Södermanland",
      "Uppsala",
      "Värmland",
      "Västerbotten",
      "Älvsborg",
      "Örebro",
      "Östergötland",
    ],
  },
  {
    id: 5,
    title: "Vem representerar du?",
    input: "button",
    placeholder: "",
    answers: ["Privatperson", "Företag", "Förening", "Myndighet"],
  },
  {
    id: 6,
    title: "Beskriv uppdraget",
    input: "textarea",
    placeholder: "Berätta mer…",
    answers: [],
  },
  {
    id: 7,
    title: "Vad heter du?",
    input: "text",
    placeholder: "Namn",
    answers: [],
  },
  {
    id: 8,
    title: "Ange e-postadress.",
    input: "text",
    placeholder: "E-post",
    answers: [],
  },
  {
    id: 8,
    title: "Ange telefonummer.",
    input: "text",
    placeholder: "Telefon",
    answers: [],
  },
];

const messages = [
  {
    title: "Tack! Snart blir du kontaktad av webbutvecklare.",
  },
  {
    title:
      "Vi kommer nu att granska din förfrågan sedan kommer den att publiceras för våra anslutna leverantörer.",
  },
];

function onReady() {
  let suggestionSection = document.querySelectorAll(
    ".suggestion-section button"
  );

  if (document.querySelector(".textarea")) {
    document.querySelector(".textarea").addEventListener("input", function () {
      this.style.height = "37px";
      this.style.height =
        (this.scrollHeight > 80 ? 80 : this.scrollHeight) + "px";
    });
  }

  suggestionSection.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      createAndAppendChatElement(ele);
    });
  });
}

function createAndAppendChatElement(ele) {
  let textValue = document.querySelector(".textarea")
    ? document.querySelector(".textarea").value
    : "";

  if (document.querySelector("#file")) {
    let file = document.querySelector("#file")
      ? document.querySelector("#file")
      : "";
    // chatSection.innerHTML = "";

    if (textValue != "" && file?.files[0] != null) {
      let img = document.createElement("img");
      var reader = new FileReader();
      reader.onload = function (e) {
        img.setAttribute("id", "image");
        img.classList.add("image");
        img.setAttribute("src", e.target.result);

        let div = document.createElement("div");
        div.classList.add("my-chat-image");

        div.insertAdjacentElement("beforeend", img);
        chatSection.insertAdjacentElement("beforeend", div);
      };

      reader.readAsDataURL(file.files[0]);

      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = textValue;
      div.classList.add("my-chat");
      div.classList.add("animate__animated");
      div.classList.add("animate__fadeInUp");
      div.appendChild(p);
      chatSection.insertAdjacentElement("beforeend", div);

      textValue.textContent = "";
      setTimeout(() => {
        console.log("INSIDE");
        chatSection.replaceChildren("");
      }, 1200);

      setTimeout(() => {
        console.log("OUTSIDE");
        restart();
        onReady();
      }, 700);
    } else if (textValue != "") {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = textValue;
      div.classList.add("my-chat");
      div.classList.add("animate__animated");
      div.classList.add("animate__fadeInUp");
      div.appendChild(p);
      chatSection.insertAdjacentElement("beforeend", div);
      setTimeout(() => {
        console.log("INSIDE");
        chatSection.replaceChildren("");
      }, 1200);

      setTimeout(() => {
        console.log("OUTSIDE");
        restart();
        onReady();
      }, 700);
    } else if (file != "" && file.files[0] != null) {
      let img = document.createElement("img");
      var reader = new FileReader();
      reader.onload = function (e) {
        img.setAttribute("id", "image");
        img.classList.add("image");
        img.setAttribute("src", e.target.result);
        chatSection.insertAdjacentElement("beforeend", img);
      };

      reader.readAsDataURL(file.files[0]);
      setTimeout(() => {
        console.log("INSIDE");
        chatSection.replaceChildren("");
      }, 1200);

      setTimeout(() => {
        console.log("OUTSIDE");
        restart();
        onReady();
      }, 700);
    }
  } else {
    if (textValue != "") {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = textValue;
      div.classList.add("my-chat");
      div.classList.add("animate__animated");
      div.classList.add("animate__fadeInUp");
      div.appendChild(p);
      chatSection.insertAdjacentElement("beforeend", div);
      setTimeout(() => {
        console.log("INSIDE");
        chatSection.replaceChildren("");
      }, 1200);

      setTimeout(() => {
        console.log("OUTSIDE");
        restart();
        onReady();
      }, 700);
    }
    if (ele.textContent !== "") {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = ele.textContent;
      div.classList.add("my-chat");
      div.classList.add("animate__animated");
      div.classList.add("animate__fadeInUp");
      div.appendChild(p);
      chatSection.insertAdjacentElement("beforeend", div);

      setTimeout(() => {
        console.log("INSIDE");
        chatSection.replaceChildren("");
      }, 1200);

      setTimeout(() => {
        console.log("OUTSIDE");
        restart();
        onReady();
      }, 700);
    }
  }

  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

function createAndAppendQuestion(index) {
  if (questions.length != index) {
    // console.log(index);
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = questions[index].title;
    div.classList.add("user-chat");
    div.classList.add("animate__animated");
    div.classList.add("animate__fadeInUp");
    div.appendChild(p);
    setTimeout(() => {
      chatSection.insertAdjacentElement("beforeend", div);
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }, 900);
  } else {
    messages.forEach((message) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = message.title;
      div.classList.add("user-chat");
      div.classList.add("animate__animated");
      div.classList.add("animate__fadeInUp");
      div.appendChild(p);
      setTimeout(() => {
        chatSection.insertAdjacentElement("beforeend", div);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }, 900);
    });
  }
}

function createAndAppendSuggestionElement(index) {
  document.querySelector(".suggestion-section").innerHTML = "";

  if (questions.length != index) {
    if (questions[index].input === "button") {
      for (let i = 0; i < questions[index].answers.length; i++) {
        let button = document.createElement("button");
        button.classList.add("animate__animated");
        button.classList.add("animate__fadeInLeft");

        button.innerText = questions[index].answers[i];

        document
          .querySelector(".suggestion-section")
          .insertAdjacentElement("beforeend", button);
      }
    } else if (questions[index].input === "textarea") {
      buttonNext.style.display = "none";
      buttonPrevious.style.display = "none";
      let div = document.createElement("div");
      div.classList.add("file-section");

      let label = document.createElement("label");
      label.setAttribute("for", "file");
      let input = document.createElement("input");
      let i = document.createElement("i");

      i.classList.add("fa-regular");
      i.classList.add("fa-image");

      i.classList.add("animate__animated");
      i.classList.add("animate__fadeInLeft");

      label.insertAdjacentElement("beforeend", i);

      input.setAttribute("type", "file");
      input.setAttribute("id", "file");

      label.insertAdjacentElement("beforeend", input);

      let textareaDiv = document.createElement("div");
      textareaDiv.classList.add("animate__animated");
      textareaDiv.classList.add("animate__fadeInLeft");
      textareaDiv.classList.add("text_field");

      let textarea = document.createElement("textarea");
      textarea.classList.add("animate__animated");
      textarea.classList.add("animate__fadeInLeft");
      textarea.classList.add("textarea");
      textarea.setAttribute("row", 1);
      textarea.setAttribute("placeholder", questions[index].placeholder);

      textareaDiv.insertAdjacentElement("beforeend", textarea);

      div.style.display = "flex";
      div.style.width = "100%";
      div.insertAdjacentElement("beforeend", label);
      div.insertAdjacentElement("beforeend", textareaDiv);

      let button = document.createElement("button");
      button.classList.add("animate__animated");
      button.classList.add("animate__fadeInLeft");
      button.classList.add("sent-button");

      let img = document.createElement("img");

      img.setAttribute("src", "./assets/send.svg");
      img.classList.add("animate__animated");
      img.classList.add("animate__fadeInLeft");
      button.insertAdjacentElement("beforeend", img);
      div.insertAdjacentElement("beforeend", button);

      document
        .querySelector(".suggestion-section")
        .insertAdjacentElement("beforeend", div);
    } else if (questions[index].input === "text") {
      buttonNext.style.display = "none";
      buttonPrevious.style.display = "none";

      let div = document.createElement("div");
      div.classList.add("file-section");
      div.classList.add("animate__animated");
      div.classList.add("animate__fadeInLeft");

      let textareaDiv = document.createElement("div");

      textareaDiv.classList.add("text_field");

      let textarea = document.createElement("textarea");
      textarea.classList.add("animate__animated");
      textarea.classList.add("animate__fadeInLeft");
      textarea.classList.add("textarea");
      textarea.setAttribute("row", 1);
      textarea.setAttribute("required", true);
      textarea.setAttribute("placeholder", questions[index].placeholder);

      textareaDiv.insertAdjacentElement("beforeend", textarea);

      div.style.display = "flex";
      div.style.width = "100%";
      div.insertAdjacentElement("beforeend", textareaDiv);

      let button = document.createElement("button");
      button.classList.add("animate__animated");
      button.classList.add("animate__fadeInLeft");
      button.classList.add("sent-button");

      let img = document.createElement("img");

      img.setAttribute("src", "./assets/send.svg");
      img.classList.add("animate__animated");
      img.classList.add("animate__fadeInLeft");
      button.insertAdjacentElement("beforeend", img);
      div.insertAdjacentElement("beforeend", button);

      document
        .querySelector(".suggestion-section")
        .insertAdjacentElement("beforeend", div);
    }
  }
  suggestionForMobile();
  showArrows();
}

// function handelSlider(index) {
//   if (questions.length != index) {
//     $(".suggestion-section").slick({
//       autoplay: false,
//       speed: 10,
//       infinite: false,
//       slidesToShow: 3,
//       arrows: false,
//       swipe: true,
//       swipeToSlide: true,
//       touchMove: true,
//     });
//   }
// }

function restart() {
  questionIndex++;
  createAndAppendQuestion(questionIndex);
  createAndAppendSuggestionElement(questionIndex);
}

function handelClickScrolling() {
  buttonNext.onclick = () => {
    suggestionSection.scrollLeft += 50;
  };

  buttonPrevious.onclick = () => {
    suggestionSection.scrollLeft -= 50;
  };
}

function isOverflown(clientWidth, scrollWidth) {
  // return scrollHeight > clientHeight || scrollWidth > clientWidth;
  return scrollWidth > clientWidth;
}

function showArrows() {
  if (document.body.clientWidth >= 1400) {
    let isTrue = isOverflown(
      suggestionSection.clientWidth,
      suggestionSection.scrollWidth
    );
    if (!isTrue) {
      suggestionSection.style.justifyContent = "center";

      buttonNext.style.display = "none";
      buttonPrevious.style.display = "none";
    } else {
      suggestionSection.style.justifyContent = "start";

      buttonNext.style.display = "block";
      buttonPrevious.style.display = "block";
    }
  }
}

function suggestionForMobile() {
  if (document.body.clientWidth <= 400) {
    console.log("Hello world!");
    let isTrue = isOverflown(
      suggestionSection.clientWidth,
      suggestionSection.scrollWidth
    );
    if (!isTrue) {
      suggestionSection.style.justifyContent = "center";
    } else {
      suggestionSection.style.justifyContent = "start";
    }
  }
}

window.addEventListener("resize", () => {
  showArrows();
});

showArrows();
createAndAppendQuestion(questionIndex);
createAndAppendSuggestionElement(questionIndex);
onReady();
handelClickScrolling();
// handelSlider();
