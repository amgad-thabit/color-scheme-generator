
const slectInput = document.getElementById("select-input")
const buttonColor = document.getElementById("button-color")
const inputColor = document.getElementById("input-color")
const divShapeColor = document.getElementById("div-main")

// const mode = slectInput.options[slectInput.selectedIndex]
buttonColor.addEventListener("click",fetchColor)

function fetchColor(){
    let html = ''
    const selection = slectInput.options[slectInput.selectedIndex]
    const color = inputColor.value.slice(1)

    const params = {
        hex: color,
        mode: selection
    };

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${selection.value}`, {
        method: "GET",
        
    })
        .then(response => response.json())
        .then(data => {
        const colors =  data.colors
        
        for(lor of colors){
            html += `
            <div  class="color" onclick="copyColor('${lor.hex.value}')" style="background:
                ${lor.hex.value}">
                <div class="son" >
                    <p  style="background:${lor.hex.value}">${lor.hex.value}</p>
                </div>
            </div>` 
        }
        
        divShapeColor.innerHTML = html

        })

}
function copyColor(color) {
  // Create a new textarea element and set its value to the color value
  const fs = document.createElement("textarea");
  fs.value = color;

  // Append the textarea element to the body
  document.body.appendChild(fs);
    
  // Select the text inside the textarea element
  fs.select();

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the textarea element from the body
  document.body.removeChild(fs);
}

fetchColor()
// {
//     const selection = slectInput.options[slectInput.selectedIndex]
//     console.log(selection)
//     const color = inputColor.value.slice(1)
//     console.log(color)
    
//     fetchColor()
// })
// const mapINput = color.map(()=> {})