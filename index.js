
const add=()=>{
let h2=document.createElement("h2");
let h2Text=document.createTextNode("Image Element Added.")
h2.appendChild(h2Text);
document.getElementById("sub").appendChild(h2)
h2.style.marginTop="1rem";
h2.style.color="green";
let imgAdd=document.createElement("img");
imgAdd.src="https://geekster.in/images/logo.svg";
document.getElementById("sub").appendChild(imgAdd);
imgAdd.style.marginTop="2rem";
imgAdd.style.width="12rem"
}
document.getElementById("btn").addEventListener("click",add);