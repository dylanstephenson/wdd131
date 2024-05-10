function fullName (first, last) {
    return `${first} ${last}`
}

const fullName = (first, last) => {
    `${first} ${last}`
}

document.getElementById("fullName").innerHTML = fullName(first, last);