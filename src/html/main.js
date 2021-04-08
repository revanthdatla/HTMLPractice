var imageElement = document.querySelector('img');

imageElement.onclick = function () {
    let mySrc = imageElement.getAttribute('src');

    if(mySrc == './dinosaur_small.jpg')
    {
        imageElement.setAttribute('src', './dove.png')
    }
    else
    {
        imageElement.setAttribute('src', './dinosaur_small.jpg')
    }
}

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName()
{
    let myName = prompt('Please enter your name');

    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);

        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');

    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}