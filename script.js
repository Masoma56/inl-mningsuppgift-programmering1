let numberOfJavascriptBook = 0
let numberOfHtmlBook = 0
let numberOfCssBook = 0

function openDropDownMenu() {
    document.getElementById("dropdown").classList.toggle("show")
}

function closeMenu() {
    document.getElementById("dropdown").classList.remove("show")
}

function priceOfJavascriptBook(x) {
    return x * 69 + (" kr")
}

function updateAllResult() {
    sumNumberOfAllBooks()
    totalBookPrices()
    updatePriceJavascriptBook()
    toggleJavascriptBook()
    updatePriceHtmlBook()
    toggleHtmlBook()
    updatePriceCssBook()
    toggleCssBook()
}

function updatePriceJavascriptBook() {
    numberOfJavascriptBook = document.getElementById("javascriptbook-input").valueAsNumber
    let JavascriptBookResult = document.getElementById("total-price-of-javascript-book")
    JavascriptBookResult.innerHTML = priceOfJavascriptBook(numberOfJavascriptBook)
}

function javascriptBookInput() {
    updatePriceJavascriptBook()
    updateAllResult()
}

function priceOfHtmlBook(x) {
    return x * 59 + (" kr")
}

function updatePriceHtmlBook() {
    numberOfHtmlBook = document.getElementById("htmlbook-input").valueAsNumber
    let htmlBookResult = document.getElementById("total-price-of-html-book")
    htmlBookResult.innerHTML = priceOfHtmlBook(numberOfHtmlBook)
}

function htmlBookInput() {
    updatePriceHtmlBook()
    updateAllResult()
}

function priceOfCssBook(x) {
    return x * 49 + (" kr")
}

function updatePriceCssBook() {
    numberOfCssBook = document.getElementById("cssbook-input").valueAsNumber
    let cssResult = document.getElementById("total-price-of-css-book")
    cssResult.innerHTML = priceOfCssBook(numberOfCssBook)
}

function cssBookInput() {
    updatePriceCssBook()
    updateAllResult()
}

function totalPriceOfAllBooks(x, y, z) {
    return x * 69 + y * 59 + z * 49 + (" kr")

}

function totalBookPrices() {
    let number1 = document.getElementById("javascriptbook-input").valueAsNumber
    let number2 = document.getElementById("htmlbook-input").valueAsNumber
    let number3 = document.getElementById("cssbook-input").valueAsNumber

    let allBooksResult = document.getElementById("sum-num-field2")

    allBooksResult.innerHTML = totalPriceOfAllBooks(number1, number2, number3)
}

function NumberOfBooks(x, y, z) {
    return x + y + z;
}

function sumNumberOfAllBooks() {
    let num1 = document.getElementById("javascriptbook-input").valueAsNumber
    let num2 = document.getElementById("htmlbook-input").valueAsNumber
    let num3 = document.getElementById("cssbook-input").valueAsNumber

    let sum = document.getElementById("sum-num-field")

    sum.innerHTML = NumberOfBooks(num1, num2, num3)
}

function freeFreightSumman() {
    let number1 = document.getElementById("javascriptbook-input").valueAsNumber
    let number2 = document.getElementById("htmlbook-input").valueAsNumber
    let number3 = document.getElementById("cssbook-input").valueAsNumber

    return totalPriceOfAllBooks(number1, number2, number3)
}

function freefreight() {
    let freight = freeFreightSumman()
    if (freight.valueAsNumber >= 159) {
        return "You have free freight!"
    } else {
        let rest = 159 - freight
        return `Free freight over 159 kr ( ${rest} kr left)`
    }
}

function showFreeFreight() {
    let xTwo5Result = document.getElementById("sum-num-field3")
    xTwo5Result.innerHTML = freefreight()
}

showFreeFreight()

function toggleJavascriptBook() {
    if (numberOfJavascriptBook >= 1) {
        document.getElementById("javascript").style.display = "block"
    } else {
        document.getElementById("javascript").style.display = "none"
    }

}

function buyButtonJavascriptBook() {
    numberOfJavascriptBook += 1
    document.getElementById("javascriptbook-input").value = numberOfJavascriptBook
    updateAllResult()
    console.log("buybuttonjavascript")
}

function toggleHtmlBook() {
    if (numberOfHtmlBook >= 1) {
        document.getElementById("html").style.display = "block"
    } else {
        document.getElementById("html").style.display = "none"
    }
}

function buyButtonHtmlBook() {
    numberOfHtmlBook += 1
    document.getElementById("htmlbook-input").value = numberOfHtmlBook
    updateAllResult()
    console.log("buybuttonhtml")
}

function toggleCssBook() {
    if (numberOfCssBook >= 1) {
        document.getElementById("css").style.display = "block"
    } else {
        document.getElementById("css").style.display = "none"
    }
}

function buyButtonCssBook() {
    numberOfCssBook += 1
    document.getElementById("cssbook-input").value = numberOfCssBook
    updateAllResult()
}






updateAllResult()








