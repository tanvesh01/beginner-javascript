console.log("asdasd");

let x = 69;

const myHtml = `
    <div>
        <h1>Thios is from innerHTML ${x} </h1>
    </div>
`;

const element = document.querySelector(".wrapper");
element.innerHTML = myHtml;
