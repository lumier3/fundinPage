const bookmarkTag = document.querySelector(".bookmark");
const textTag = document.querySelector(".buttonTwo");
const thanksForSupport = document.querySelector(".thanks4SupportContainer");
const thanks4SupportBtnTag = document.querySelector(".thanks4Support-btn")
const bodyTag = document.querySelector(".contianer");
const containerOne = document.querySelector(".textContainerOne");
const containerTwo = document.querySelector(".textContainerTwo");
const containerThree = document.querySelector(".textContainerThree");
const selectBtn = document.querySelectorAll(".selectbtn");
const closeTag = document.querySelector(".closeModal");
let alrdybookmarked = true;

const activeBlur = () => {
    bodyTag.classList.add("activeblur");
    containerOne.classList.add("activeblur");
    containerTwo.classList.add("activeblur");
    containerThree.classList.add("activeblur");
};

const removeActiveBlur = () => {
    bodyTag.classList.remove("activeblur");
    containerOne.classList.remove("activeblur");
    containerTwo.classList.remove("activeblur");
    containerThree.classList.remove("activeblur");
};

bookmarkTag.addEventListener("click", () => {
    if (alrdybookmarked) {
        bookmarkTag.classList.add("activeBM");
        textTag.classList.add("activeTxtandBg");
        document.getElementById("changeText").innerHTML = "Bookmarked"
        thanksForSupport.classList.add("activeThanksforSupport");
        activeBlur();
        alrdybookmarked = false;
    } else {
        bookmarkTag.classList.remove("activeBM");
        textTag.classList.remove("activeTxtandBg");
        document.getElementById("changeText").innerHTML = "Bookmark";
        bodyTag.classList.remove("activeblur");
        removeActiveBlur();
        alrdybookmarked = true;
    }
});

thanks4SupportBtnTag.addEventListener("click", () => {
    thanksForSupport.classList.remove("activeThanksforSupport");
    removeActiveBlur();
});

const backThisProject = document.querySelector(".backThisProjectContainer");
const toEnterPledge = document.querySelectorAll(".toEnterPledge");
const selectRadio = document.querySelectorAll(".form-check-input");

for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener("click", () => {
        backThisProject.classList.add("backThisProjectContainerToShow");
        if (backThisProject.classList.contains("backThisProjectContainerToShow")) {
            activeBlur();
        }
    });
};

closeTag.addEventListener("click", () => {
    backThisProject.classList.remove("backThisProjectContainerToShow");
    removeActiveBlur();
})


for (let i = 0; i < selectRadio.length; i++) {
    selectRadio[i].addEventListener("click", () => {
        toEnterPledge.forEach((hide) => {
            hide.classList.remove("toShowEnterPledge");
        });
        toEnterPledge[i].classList.add("toShowEnterPledge");
    });
        
};

