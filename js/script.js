const scrollingElement = document.querySelector(".chat-section");
let chatSection = document.querySelector(".chat-section");

let questionIndex = 0;

const questions = [
  {
    id: 1,
    title: "Vad behöver du hjälp med?",
    input: "button",
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
    answers: ["Fast pris", "Pris per timme"],
  },
  {
    id: 3,
    title: "När vill du bli kontaktad?",
    input: "button",
    answers: ["Så snart som möjligt", "Förmiddag", "Eftermiddag", "Kväll"],
  },
  {
    id: 4,
    title: "Plats",
    input: "button",
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
    answers: ["Privatperson", "Företag", "Förening", "Myndighet"],
  },
  {
    id: 6,
    title: "Beskriv uppdraget",
    input: "textarea",
    answers: [],
  },
];

function onReady() {
  scrollingElement.scrollTop = scrollingElement.scrollHeight;

  let suggestionSection = document.querySelectorAll(
    ".suggestion-section button"
  );

  if (document.querySelector(".textarea")) {
    console.log("Hello textarea");
    document.querySelector(".textarea").addEventListener("input", function () {
      this.style.height = "37px";
      this.style.height =
        (this.scrollHeight > 80 ? 80 : this.scrollHeight) + "px";
    });
  }

  suggestionSection.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      createAndAppendChatElement(ele);
      questionIndex++;
      createAndAppendQuestion(questionIndex);
      createAndAppendSuggestionElement(questionIndex);
      // handelSlider(questionIndex);
      onReady();
    });
  });
}

function createAndAppendChatElement(ele) {
  let textValue = document.querySelector(".textarea")
    ? document.querySelector(".textarea").value
    : "";
  let file = document.querySelector("#file")
    ? document.querySelector("#file")
    : "";

  if (textValue != "" && file.files[0] != null) {
    let img = document.createElement("img");
    var reader = new FileReader();
    reader.onload = function (e) {
      img.setAttribute("id", "image");
      img.classList.add("image");
      img.setAttribute("src", e.target.result);
      chatSection.insertAdjacentElement("beforeend", img);
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
    file.files[0] = null;
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
    document.querySelector("#file").file.files[0] = null;
  } else if (textValue != "") {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = textValue;
    div.classList.add("my-chat");
    div.classList.add("animate__animated");
    div.classList.add("animate__fadeInUp");
    div.appendChild(p);
    chatSection.insertAdjacentElement("beforeend", div);
  } else if (ele.textContent !== "Submit") {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = ele.textContent;
    div.classList.add("my-chat");
    div.classList.add("animate__animated");
    div.classList.add("animate__fadeInUp");
    div.appendChild(p);
    chatSection.insertAdjacentElement("beforeend", div);
  }
}

function createAndAppendQuestion(index) {
  if (questions.length != index) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = questions[index].title;
    div.classList.add("user-chat");
    div.classList.add("animate__animated");
    div.classList.add("animate__fadeInUp");
    div.appendChild(p);
    setTimeout(() => {
      chatSection.insertAdjacentElement("beforeend", div);
    }, 500);
  }
}

function createAndAppendSuggestionElement(index) {
  document
    .querySelector(".suggestion-section")
    .classList.remove("slick-initialized");
  document
    .querySelector(".suggestion-section")
    .classList.remove("slick-slider");

  document.querySelector(".suggestion-section").innerHTML = "";

  if (questions.length != index) {
    if (questions[index].input === "button") {
      console.log("Hello");
      for (let i = 0; i < questions[index].answers.length; i++) {
        let button = document.createElement("button");
        button.classList.add("animate__animated");
        button.classList.add("animate__fadeInRight");

        button.innerText = questions[index].answers[i];

        document
          .querySelector(".suggestion-section")
          .insertAdjacentElement("beforeend", button);
      }
    } else if (questions[index].input === "textarea") {
      setTimeout(() => {
        let slickTrack = document.querySelector(".slick-track");
        slickTrack.classList.replace("slick-track", "slick-track-reset");
      }, 200);
      let div = document.createElement("div");
      div.classList.add("file-section");

      let label = document.createElement("label");
      label.setAttribute("for", "file");
      let input = document.createElement("input");
      let i = document.createElement("i");

      i.classList.add("fa-regular");
      i.classList.add("fa-image");

      i.classList.add("animate__animated");
      i.classList.add("animate__fadeInRight");

      label.insertAdjacentElement("beforeend", i);

      input.setAttribute("type", "file");
      input.setAttribute("id", "file");

      label.insertAdjacentElement("beforeend", input);

      let textareaDiv = document.createElement("div");

      textareaDiv.classList.add("text_field");

      let textarea = document.createElement("textarea");
      textarea.classList.add("animate__animated");
      textarea.classList.add("animate__fadeInRight");
      textarea.classList.add("textarea");
      textarea.setAttribute("row", 1);
      textarea.setAttribute("placeholder", "Aa");

      textareaDiv.insertAdjacentElement("beforeend", textarea);

      div.style.display = "flex";
      div.style.width = "100%";
      div.insertAdjacentElement("beforeend", label);
      div.insertAdjacentElement("beforeend", textareaDiv);

      let button = document.createElement("button");
      button.classList.add("animate__animated");
      button.classList.add("animate__fadeInRight");
      button.classList.add("sent-button");

      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABkklEQVRIS71VQVLCQBCcWagilB7wBz4hF8WjT4gvgB8Iog/grGh4geEH8QccQQ/mB/IDOGgRKJJhswjFQrLZGDDn2e7pmZ4OwpE/PDI+/C9B9d5/ASITCXqD57JzCHWSgmrL/wQg8xd4xInaeYlkgpWCxl7niPbwyWj+RZFEcHU3rRPCayIQJ8IFdQd2eaRLJhGYjXGlVDDGqY8zEO25qNqafnGC81QSUYAuBtRUKdojuHj4NhkVa7G7SJ6dSxD03jsn7m6J8g4uWz8WQqHGnWVpKvKQ+I62LK51aGI3rFQHxFu98aE77Bg3Yog6nUUEBjMsEgSbO1E81SAQoEXDJAI+IuQjoopGM32+u7dZOHM8+2wSqyBaMgZoITIOrOsm6Efx4oe+uwZeN5PTptAPWdD8eDz1ktRJBMKiYYHnkepDLp28NOBYBeqoiICjjhdtVcfKO+BXHOVQXS7CCVHQZSFzsmRQrAI5JlbA83Bu7y5Ow02bkp3/gVBwza3W3bZaFsBMUZEHONGmhwDdxtCKijykS2MFqxmVxfFkAAAAAElFTkSuQmCC"
      );
      img.classList.add("animate__animated");
      img.classList.add("animate__fadeInRight");
      button.insertAdjacentElement("beforeend", img);
      div.insertAdjacentElement("beforeend", button);

      {
        /* <i class="fa-duotone fa-paper-plane-top"></i> */
      }
      // let iSend = document.createElement("i");
      // iSend.classList.add("fa-duotone");
      // iSend.classList.add("fa-paper-plane-top");
      // // button.classList.add("button-full-width");

      // button.insertAdjacentElement("beforeend", iSend);

      // div.insertAdjacentElement("beforeend", button);

      document
        .querySelector(".suggestion-section")
        .insertAdjacentElement("beforeend", div);

      // document
      //   .querySelector(".suggestion-section")
      //   .insertAdjacentElement("beforeend", button);
    }
  }
}

function handelSlider(index) {
  if (questions.length != index) {
    $(".suggestion-section").slick({
      autoplay: false,
      speed: 10,
      infinite: false,
      slidesToShow: 3,
      arrows: false,
      swipe: true,
      swipeToSlide: true,
      touchMove: true,
    });
  }
}

createAndAppendQuestion(questionIndex);
createAndAppendSuggestionElement(questionIndex);
onReady();
// handelSlider();
