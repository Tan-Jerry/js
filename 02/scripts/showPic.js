function addLoadEvent(func)
{
    let oldonload = window.onload;

    if (typeof window.onload != "function")
    {
        window.onload = func;
    }
    else
    {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement)
{
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement)
    {
        parent.appendChild(newElement);
    }
    else
    {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function showPic(whichPic)
{
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    var title = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = title;

    return false;
}

function countBodyChildren()
{
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);  
}

function prepareGallery()
{
    let gallery = document.getElementById("imagegallery");
    let links = gallery.getElementsByTagName("a");

    for (let link of links)
    {
        link.onclick = function(){
            return showPic(this);
        }
    }
}

function preparePlaceholder()
{
    let placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/DSC00062.JPG");
    placeholder.setAttribute("alt", "my image gallery");

    let description = document.createElement("p");
    description.setAttribute("id", "description");
    let desctext = document.createTextNode("choose an image");
    description.appendChild(desctext);

    let gallery = document.getElementById("imagegallery");

    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);