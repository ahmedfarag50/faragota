document.addEventListener("DOMContentLoaded", function () {
  const reviews = [
    {
      id: 1,
      name: "John Wick",
      job: "UX DESIGNER",
      img: "./Images/pro2.jpg",
      text: "Lorem ipsum, dolor sit amet consecteturadipisicing elit. Expedita porr adipisicing elit. Expedita porro iure autem quisquam, nostrum maiores molestiae laboriosam dolor, itaque natus tempore obcaecati! Unde, eum recusanda",
    },
    {
      id: 2,
      name: "Sansa Stark",
      job: "GRAPHICS DESIGNER",
      img: "./Images/pro3.jpg",
      text: "Lorem ipsum, dolor sit aes molestiae laboriosam dolor, itaque natus tempore obcaecati! Unde, eum recusanda",
    },
    {
      id: 3,
      name: "Emily Jordan",
      job: "UX DESIGNER",
      img: "./Images/pro4.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing eli",
    },
    {
      id: 4,
      name: "Youssef Fattoh",
      job: "WEB DEVELOPER",
      img: "./Images/pro1.jpg",
      text: " adipisicing elit. Expedita porro iure autem quisquam, nostrum maiores molestiae laboriosam dolor, itaque natus tempore obcaecati! Unde, eum recusanda",
    },
  ];

  //get elements
  const name = document.querySelector(".author h2");
  const job = document.querySelector(".job p");
  const image = document.getElementById("image");
  const review = document.querySelector(".review");

  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");
  const random = document.querySelector(".random");

  let person = 0;
  //add event listeners to the buttons
  //left button
  rightBtn.addEventListener("click", function () {
    if (person > reviews.length - 1) {
      person = 0;
    }
    showPerson();
    person++;
  });

  //right button
  leftBtn.addEventListener("click", function () {
    person--;

    if (person < 0) {
      person = reviews.length - 1;
    }
    showPerson();
  });

  //random button
  random.addEventListener('click', function () {
    person = Math.floor(Math.random() * reviews.length);
    showPerson();
  });

  function showPerson() {
    image.src = reviews[person].img;
    name.innerText = reviews[person].name;
    review.textContent = reviews[person].text;
    job.textContent = reviews[person].job;
  }
});
