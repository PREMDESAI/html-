const navLinks = document.querySelectorAll(".nav .navItem")
const pageContext = document.body.getAttribute('data-page')
const popup = document.getElementById('popup')
const blurred = document.querySelector('.blur')
const confrimationPopup = document.getElementById('confirmation')
const toastError = document.querySelector("#toast-error")

function sharedFunction (data) {
    const {recentPostsData} = data
    const recentPostList = document.querySelector(".recent-posts")
        recentPostsData.forEach(post => {
            const listItem = document.createElement("li")
            listItem.classList.add("recent-feed")
            if (pageContext === "recentPost") {
                listItem.classList.add("demarcation")
            }
            listItem.innerHTML = `
                <div class="recent-post-image" style="background-image: url('${post.image}');"></div>
                <p class="about-profile" style="text-align: left;">${post.text}</p>
            `
            recentPostList.appendChild(listItem)
        })
}

function subcriptionConfrimation() {
    const confrimationPopup = document.querySelector("#confirmation")
    confrimationPopup.innerHTML = `
        <img src="/images/confirmIcon.svg">
        <h4>Thank you for subscribing. You will receive an email shortly.</h4>
    `
}

function showToastError() {
    toastError.innerHTML = `
        <h4>Enter a valid email address</h4?
    `
}

function subscriptionForm () {
    const subscriptionForm = document.querySelector("#popup")
        subscriptionForm.innerHTML = `
            <img src="/images/close-x.svg" class="close-icon" onclick="toggle()">
            <img src="/images/subscribeImage.jpg" class="subscription-form-image">
            <div class="subscribe-form-text">
                <h1>KEEP IN TOUCH</h1>
                <p>Never miss a post by subscribing to our weekly newsletter and hearing about our special offers ahead of the crowd</p>
                <p>Don't worry you can unsubscribe at any time :)</p>
                <div class="send-form">
                    <input type="email" spellcheck="false" placeholder="email address" onkeyup="validateEmail()">
                    <button onclick="submitForm()"><img src="/images/paper-plane-2563.svg"></button>
                </div>
                <span class="validation-message"></span>
            </div>
        `
}

function displayHomePage (data) {
    const {homePageMainFeedData} = data
    const mainFeedList = document.querySelector(".main-posts")
        homePageMainFeedData.forEach(post => {
            const listItem = document.createElement("li")
            listItem.classList.add("post")
            listItem.innerHTML = `
                <div class="post-image-section">
                    <img src="${post.image}" class="post-image">
                    <p class="date-font">${post.date}</p>
                </div>
                <div class="post-description-section">
                    <h4 class="main-feed-subheading margin-zero">${post.title}</h4>
                    <p class="post-description">${post.description}</p>
                    <p class="moreInfo-font">CONTINUE READING</p>
                </div>
            `
            mainFeedList.appendChild(listItem)
        })
}

function displayRecentPage (data) {
    const {recentPostFeedData} = data

    const recentFeedList = document.querySelector(".main-posts")
    recentPostFeedData.forEach((feedData) => {
        const listItem = document.createElement("li")
        listItem.classList.add("post")
        listItem.innerHTML = `
        <div class="post-image-section">
            <img src="${feedData.image}" class="post-image">
            <p class="date-font">${feedData.date}</p>
        </div>
        <div class="post-description-section">
            <h4 class="main-feed-subheading margin-zero">${feedData.title}</h4>
            <p class="post-description">${feedData.description}</p>
            <p class="moreInfo-font">CONTINUE READING</p>
        </div>
        `
        recentFeedList.appendChild(listItem)
    })
}

async function fetchData () {
    try {
        const response = await fetch('/data.json')
        const data = await response.json()

        handlePage(data)
    } catch (error) {

    }
}

function handlePage(data) {
    sharedFunction(data)
    subscriptionForm()
    subcriptionConfrimation()
    showToastError()

    if (pageContext === "home") {
        displayHomePage(data)
    } else if (pageContext === "recentPost") {
        displayRecentPage(data)
    }
}

function toggle () {
    blurred.classList.toggle('active')
    popup.classList.toggle('active')
    const emailFields = document.querySelectorAll(".send-form input")
    emailFields.forEach(item => {
        item.value = ""
        item.style.borderColor = "#c5c2c2"
        item.style.boxShadow = "none"
    })
    const validationMessage = document.querySelector(".validation-message")
    validationMessage.innerHTML = ""

}

function validateEmail () {
    const validationMessage = document.querySelector(".validation-message")
    const emailFields = document.querySelectorAll(".send-form input")
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailFields.forEach(item => {
        if (!emailPattern.test(item.value)) {
            validationMessage.innerHTML = "Please enter a valid email"
            item.style.borderColor = "red"
            item.style.boxShadow = "0px 0px 7px red"
            return false
        } 
        validationMessage.innerHTML = ""
        item.style.borderColor = "green"
        item.style.boxShadow = "0px 0px 7px #2b5933"
        return true
        
        
    })
}

function submitForm() {
    const emailFields = document.querySelectorAll(".send-form input")
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailFields.forEach(item => {
        if (emailPattern.test(item.value)) {
            popup.classList.toggle('active')
            confrimationPopup.classList.toggle('active')
            setTimeout(() => {
                blurred.classList.toggle('active')
                confrimationPopup.classList.toggle('active')
            }, 1300);
            return false
        }
        toastError.classList.add('show-error')
        setTimeout(() => {
            toastError.classList.remove("show-error") 
        }, 2000);
    })
}

function setActiveLink () {
    const currentPath = window.location.pathname
    navLinks.forEach(link => {
        link.classList.remove("current")

        if(link.getAttribute('href') === currentPath) {
            link.classList.add("current")
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    setActiveLink()
})