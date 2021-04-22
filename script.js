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
    return x * 60 + (" kr")
}

function updateAllResult() {
    updatePriceJavascriptBook()
    updatePriceHtmlBook()
    updatePriceCssBook()
    toggleJavascriptBook()
    toggleHtmlBook()
    toggleCssBook()
    sumNumberOfAllBooks()
    totalBookPrices()
    freeFreightSumman()
    freefreight()
    showFreeFreight()
}

function updatePriceJavascriptBook() {
    numberOfJavascriptBook = document.getElementById("javascriptbook-input").valueAsNumber
    if (numberOfJavascriptBook < 0) {
        numberOfJavascriptBook = 0
    }

    let JavascriptBookResult = document.getElementById("total-price-of-javascript-book")
    JavascriptBookResult.innerHTML = priceOfJavascriptBook(numberOfJavascriptBook)
}

function javascriptBookInput() {
    updatePriceJavascriptBook()
    updateAllResult()
}

function priceOfHtmlBook(x) {
    return x * 50 + (" kr")
}

function updatePriceHtmlBook() {
    numberOfHtmlBook = document.getElementById("htmlbook-input").valueAsNumber
    if (numberOfHtmlBook < 0) {
        numberOfHtmlBook = 0
    }

    let htmlBookResult = document.getElementById("total-price-of-html-book")
    htmlBookResult.innerHTML = priceOfHtmlBook(numberOfHtmlBook)
}

function htmlBookInput() {
    updatePriceHtmlBook()
    updateAllResult()
}

function priceOfCssBook(x) {
    return x * 40 + (" kr")
}

function updatePriceCssBook() {
    numberOfCssBook = document.getElementById("cssbook-input").valueAsNumber
    if (numberOfCssBook < 0) {
        numberOfCssBook = 0
    }

    let cssResult = document.getElementById("total-price-of-css-book")
    cssResult.innerHTML = priceOfCssBook(numberOfCssBook)
}

function cssBookInput() {
    updatePriceCssBook()
    updateAllResult()
}

function totalPriceOfAllBooks(x, y, z) {
    return x * 60 + y * 50 + z * 40

}

function totalBookPrices() {
    let allBooksResult = document.getElementById("total-book-prices")
    allBooksResult.innerHTML = totalPriceOfAllBooks(numberOfJavascriptBook, numberOfHtmlBook, numberOfCssBook)
}

function NumberOfBooks(x, y, z) {
    return x + y + z;
}

function sumNumberOfAllBooks() {
    let sum = document.getElementById("sum-number-of-all-books")
    sum.innerHTML = NumberOfBooks(numberOfJavascriptBook, numberOfHtmlBook, numberOfCssBook)
}

function freeFreightSumman() {
    return totalPriceOfAllBooks(numberOfJavascriptBook, numberOfHtmlBook, numberOfCssBook)
}

function freefreight() {
    let freight = freeFreightSumman()
    if (freight >= 159) {
        return "You have free freight!"
    } else {
        let rest = 159 - freight
        return `Free freight over 159 kr ( ${rest} kr left)`
    }
}

function showFreeFreight() {
    let xTwo5Result = document.getElementById("show-free-freight")
    xTwo5Result.innerHTML = freefreight()
}

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








