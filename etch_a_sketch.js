function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

let container = document.querySelector(".container");
container.style.width = "960px";
container.style.height = "960px";
container.style.display = "flex";
container.style.flexDirection = "column";

const rows = [];
for(i = 0; i < 16; i++){
    row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexGrow = "1";
    rows.push(row);
}

const elements = [];


for(row of rows){
    for(i = 0; i < 16; i++){
        element = document.createElement("div");
        element.style.backgroundColor = "blue";
        //element.style.height = "10px";
        //element.style.width = "10px";
        element.style.flexGrow = "1";
        elements.push(element);
        row.appendChild(element);
    }
    container.appendChild(row);
}

elements.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";
    });
});

let btn = document.querySelector(".changeResolution");

btn.addEventListener("click", () => {
    let num = prompt("Enter a number");
    removeAllChildNodes(container);
    num = parseInt(num);
    const rows = [];
    for(i = 0; i < num; i++){
        row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexGrow = "1";
        rows.push(row);
    }
    
    const elements = [];
    
    
    for(row of rows){
        for(i = 0; i < num; i++){
            element = document.createElement("div");
            element.style.backgroundColor = "blue";
            //element.style.height = "10px";
            //element.style.width = "10px";
            element.style.flexGrow = "1";
            elements.push(element);
            row.appendChild(element);
        }
        container.appendChild(row);
    }
    
    elements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "red";
        });
    });

})
