 


 
 


 function toggleContent(contentId) {
     var allContent = document.querySelectorAll('.detail');
     allContent.forEach(function (content) {
         if (content.id === contentId) {
              
                 content.style.display = content.style.display === "block" ? "block" : "block";
         } else {
             content.style.display = "none";
         }
     });
 }
 

 






document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search input");
    const jobs = document.querySelectorAll(".card");
     
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      jobs.forEach((job) => {
        const jobTitle = job
          .querySelector(".jjpost")
          .textContent.toLowerCase();
          
          const bookmarkButton = job.nextElementSibling.querySelector(".book");
        if (jobTitle.includes(searchTerm)) {
          // Apply smooth transition effect
         
         
          job.style.transition = "opacity 0.5s ease";
          job.style.opacity = 1;
  
          // Delay hiding/showing   to allow for smooth transition
          setTimeout(() => {
            job.style.display = "flex";                     
          }, 50000); // 500 milliseconds, matching the transition duration
          if (bookmarkButton) {
            bookmarkButton.style.display = "block";
        }
        } else {
          // Apply smooth transition effect
          job.style.transition = "opacity 0.5s ease";
          job.style.opacity = 0;
        
          // Delay hiding/showing   to allow for smooth transition
          setTimeout(() => {
            
            job.style.display = "none";                    
          }, 5000);

          if (bookmarkButton) {
            bookmarkButton.style.display = "none";
        }
          // 500 milliseconds, matching the transition duration
        }
      });
  



      // const nojobfound = document.getElementById("nojobfound");
      // if (Array.from(jobs).every((job) => job.style.display === "none")) {
      //   // No   found
      //   if (!nojobfound) {
      //     const noMealMessage = document.createElement("p");
      //     noMealMessage.id = "nojobfound";
      //     noMealMessage.textContent = "no job found";
      //     noMealMessage.style.textAlign = "center";
      //     noMealMessage.style.fontWeight = "bold";
      //     noMealMessage.style.marginTop = "1rem";
      //     document.querySelector(".wrapper").appendChild(noMealMessage);
      //   }
      // } else {
      //   // Remove no   found message if displayed
      //   if (nojobfound) {
      //     nojobfound.remove();
      //   }
      // }

    });
  });


  //
  
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const searchInput = document.querySelector(".search input");
    const cards = document.querySelectorAll(".card");
  
    // Predefined recommended  
    const recommendedMeals = [
      "Data Science",
      "Data Engineer",
      "Data Analyst",
      "Data Visualization",
      "CRM Analyst",

      // Add more recommended   as needed
    ];
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const recommendedjob = button.textContent;
        searchInput.value = recommendedjob;
        triggerSearch();
      });
    });
  
    searchInput.addEventListener("input", function () {
      if (searchInput.value.trim() === "") {
        resetCards();
      } else {
        triggerSearch();
      }
    });
  

    
    function triggerSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      cards.forEach((card) => {

        const bookmarkButton = card.nextElementSibling.querySelector(".book");

        const jonpost = card
          .querySelector(".jjpost")
          .textContent.toLowerCase();
        const isMatch = jonpost.includes(searchTerm);
        if (isMatch){
          if (bookmarkButton) {
            bookmarkButton.style.display = "block";
        }
        }
        else{
          if (bookmarkButton) {
            bookmarkButton.style.display = "none";
        }
        }
  
        // Apply fade-in/fade-out transition effect
        card.style.transition = "opacity 0.5s ease";
        card.style.opacity = isMatch ? 1 : 0;
  
        // Delay hiding/showing cards to allow for smooth transition
        setTimeout(() => {
          card.style.display = isMatch ? "flex" : "none";
        }, 500); // 500 milliseconds, matching the transition duration
      });
    }
  
    function resetCards() {
      cards.forEach((card) => {
        // Reset transition and display all cards
        card.style.transition = "none";
        card.style.opacity = 1;
        card.style.display = "flex";
      });
    }
  });



 









   

//   document.addEventListener("DOMContentLoaded", function () {
//     const sortSelect = document.querySelector(".sort-list select");
//     const cardsWrapper = document.querySelector(".wrapper");
//     const cards = document.querySelectorAll(".card");

//     sortSelect.addEventListener("change", function () {
//         const sortBy = parseInt(sortSelect.value);

//         // Sort cards based on salary
//         switch (sortBy) {
//             case 0: // All
//                 cardsWrapper.innerHTML = ""; // Clear previous cards
//                 cards.forEach((card) => cardsWrapper.appendChild(card));
//                 break;
//             case 1: // Sort Ascending
//                 sortBySalaryAsc();
//                 break;
//             case 2: // Sort Descending
//                 sortBySalaryDesc();
//                 break;
//         }
//     });

//     function sortBySalaryAsc() {
//         const sortedCards = Array.from(cards).sort((a, b) => {
//             const salaryA = parseFloat(a.querySelector(".card-salary b").textContent.replace("$", ""));
//             const salaryB = parseFloat(b.querySelector(".card-salary b").textContent.replace("$", ""));
//             return salaryA - salaryB;
//         });

//         cardsWrapper.innerHTML = ""; // Clear previous cards
//         sortedCards.forEach((card) => cardsWrapper.appendChild(card));
//     }

//     function sortBySalaryDesc() {
//         const sortedCards = Array.from(cards).sort((a, b) => {
//             const salaryA = parseFloat(a.querySelector(".card-salary b").textContent.replace("$", ""));
//             const salaryB = parseFloat(b.querySelector(".card-salary b").textContent.replace("$", ""));
//             return salaryB - salaryA;
//         });

//         cardsWrapper.innerHTML = ""; // Clear previous cards
//         sortedCards.forEach((card) => cardsWrapper.appendChild(card));
//     }
// });











 


document.addEventListener("DOMContentLoaded", function () {
  const sortSelect = document.querySelector(".sort-list select");
  const cardsWrapper = document.querySelector(".wrapper");
  const cards = document.querySelectorAll(".card");

  sortSelect.addEventListener("change", function () {
      const sortBy = parseInt(sortSelect.value);

      // Sort cards based on salary
      switch (sortBy) {
          case 0: // All
              cardsWrapper.innerHTML = ""; // Clear previous cards
              cards.forEach((card) => {
                  const clonedCard = card.cloneNode(true);
                  cardsWrapper.appendChild(clonedCard);
                  reattachBookmarkListener(clonedCard);
              });
              break;
          case 1: // Sort Ascending
              sortBySalaryAsc();
              break;
          case 2: // Sort Descending
              sortBySalaryDesc();
              break;
      }
  });

  function sortBySalaryAsc() {
      const sortedCards = Array.from(cards).sort((a, b) => {
          const salaryA = parseFloat(a.querySelector(".card-salary b").textContent.replace("$", ""));
          const salaryB = parseFloat(b.querySelector(".card-salary b").textContent.replace("$", ""));
          return salaryA - salaryB;
      });

      cardsWrapper.innerHTML = ""; // Clear previous cards
      sortedCards.forEach((card) => {
          const clonedCard = card.cloneNode(true);
          cardsWrapper.appendChild(clonedCard);
          reattachBookmarkListener(clonedCard);
      });
  }

  function sortBySalaryDesc() {
      const sortedCards = Array.from(cards).sort((a, b) => {
          const salaryA = parseFloat(a.querySelector(".card-salary b").textContent.replace("$", ""));
          const salaryB = parseFloat(b.querySelector(".card-salary b").textContent.replace("$", ""));
          return salaryB - salaryA;
      });

      cardsWrapper.innerHTML = ""; // Clear previous cards
      sortedCards.forEach((card) => {
          const clonedCard = card.cloneNode(true);
          cardsWrapper.appendChild(clonedCard);
          reattachBookmarkListener(clonedCard);
      });
  }

  function reattachBookmarkListener(card) {
      const bookmarkButton = card.querySelector(".book");
      if (bookmarkButton) {
          bookmarkButton.addEventListener("click", function() {
              const jobId = card.getAttribute("data-id");
              bookmarkJob(jobId);
          });
      }
  }

  function bookmarkJob(jobId) {
      console.log("Job bookmarked:", jobId);
      // Add your additional logic for bookmarking here
      // For example, you can send a request to the server to save the bookmark
  }
});






const sliderEl = document.getElementById("slider");
const closeSliderBtn = document.getElementById("close-slider");
const menuBarIcon = document.querySelector(".menu-bar");

menuBarIcon.addEventListener("click", function () {
  sliderEl.style.display = "flex";
});

closeSliderBtn.addEventListener("click", function () {
  sliderEl.style.display = "none";
});