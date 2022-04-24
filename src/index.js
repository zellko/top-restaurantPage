console.log("Is it working?")

function component() {
    const element = document.createElement('div');

    element.textContent = "test";

    return element;
}

document.body.appendChild(component());