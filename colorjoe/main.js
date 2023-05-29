const firebaseConfig = {
    apiKey: "AIzaSyDGA9RF9Oefcn6dVNSItrxbtkwmXSUVO8Y",
    authDomain: "neopixel-b7592.firebaseapp.com",
    projectId: "neopixel-b7592",
    databaseURL: "https://neopixel-b7592-default-rtdb.firebaseio.com",
    storageBucket: "neopixel-b7592.appspot.com",
    messagingSenderId: "307870089770",
    appId: "1:307870089770:web:a730aace7ce840528d3953"
  };

  // Initialize Firebase


  const app = firebase.initializeApp(firebaseConfig);

  const checkboxes = document.querySelectorAll('.commCheck');

  // document.getElementById("toggle_PWR").checked ?  document.getElementById("toggle_PWR").classList.toggle("powerON") :  document.getElementById("toggle_PWR").classList.toggle("powerOFF");
  // document.getElementById("toggle_PWR").classList.contains("powerON") ? firebase.database().ref('/').update({
  //     Power: "true",
  //   }) :  null
  //   document.getElementById("toggle_PWR").classList.contains("powerOFF") ? firebase.database().ref('/').update({
  //     Power: "false",
  //   }) :  null


class ColorPicker {
    constructor(root) {
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;
        

        this.colorjoe.show();
        this.setSelectedColor("#00def7"); // 000000 10010101 00101101 
        this.root.querySelector(".selected-color-text-rgb").textContent = "rgb("+"0" + "," + "222" + "," + "247"+")";
        this.colorjoe.on("change", color => {
           var  hex = String(color.hex())
            var hex_red = parseInt(hex.slice(1,3), 16)
            var hex_green = parseInt(hex.slice(3,5), 16);
            var hex_blue = parseInt(hex.slice(5,7), 16);
            // console.log(hex_red, hex_green, hex_blue)

            this.setSelectedColor(color.hex(), hex_red, hex_green, hex_blue, true);
            firebase.database().ref('/').update({
                Red: hex_red,
              })
              firebase.database().ref('/').update({
                Green: hex_green,
              })
              firebase.database().ref('/').update({
                Blue: hex_blue,
              })
              firebase.database().ref('/').update({
                Hex: color.hex(),
              })
              
              firebase.database().ref('/').update({
                Status: "404",
              })


        });

        this.root.querySelectorAll(".saved-color").forEach((el, i) => {
            this.showSavedColor(el, this.savedColors[i]);

            el.addEventListener("mouseup", e => {
                if (e.button == 1) {
                    this.saveColor(this.selectedColor, i);
                    this.showSavedColor(el, this.selectedColor);
                }

                this.setSelectedColor(el.dataset.color);
            });
        });
    }

    setSelectedColor(color, hex_red, hex_green, hex_blue, skipCjUpdate = false) {
        this.selectedColor = color;
        this.root.querySelector(".selected-color-text").textContent = color;
        this.root.querySelector(".selected-color").style.background = color;
        this.root.querySelector(".selected-color-text-rgb").textContent = "rgb("+hex_red + "," + hex_green + "," + hex_blue+")";
        this.root.querySelector(".selected-color").style.boxShadow = "0 0 10px" + color;
        var hex_red = hex_red;
        var hex_green = hex_green;
        var hex_blue = hex_blue;
        
    

        if (!skipCjUpdate) {
            this.colorjoe.set(color);
        }
    }

}

const cp = new ColorPicker(document.querySelector(".container"));


function redPwr()
{
    firebase.database().ref('/').update({
        Red: "255",
      })
      firebase.database().ref('/').update({
        Green: "0",
      })
      firebase.database().ref('/').update({
        Blue: "0.",
      })

      firebase.database().ref('/').update({
        Hex: "#ff0000",
      })

      
      firebase.database().ref('/').update({
        Status: "404",
      })


      document.querySelector(".colorPicker .oned .pointer").style.top = "0%";

      document.querySelector(".colorPicker .twod .pointer").style.top = "0%";
      document.querySelector(".colorPicker .twod .pointer").style.left = "100%";
    //   document.querySelector(".colorPicker .twod").style.background = "rgb(255,0,0)";
        selectedColor = "#ff0000";
        document.querySelector(".selected-color-text").textContent = "#ff0000";
        document.querySelector(".selected-color").style.background = "#ff0000";
        document.querySelector(".selected-color-text-rgb").textContent = "rgb("+"255" + "," + "00" + "," + "00"+")";
        document.querySelector(".selected-color").style.boxShadow = "0 0 10px" + "#ff0000";
}

function greenPwr()
{
    firebase.database().ref('/').update({
        Green: "255",
      })
      firebase.database().ref('/').update({
        Red: "0",
      })
      firebase.database().ref('/').update({
        Blue: "0",
      })
      firebase.database().ref('/').update({
        Hex: "00ff00",
      })

      
      firebase.database().ref('/').update({
        Status: "404",
      })


      document.querySelector(".colorPicker .oned .pointer").style.top = "33.48%";

      document.querySelector(".colorPicker .twod .pointer").style.top = "0%";
      document.querySelector(".colorPicker .twod .pointer").style.left = "100%";
    //   document.querySelector(".colorPicker .twod").style.background = "rgb(0,255,0)";

      selectedColor = "#00ff00";
        document.querySelector(".selected-color-text").textContent = "#00ff00";
        document.querySelector(".selected-color").style.background = "#00ff00";
        document.querySelector(".selected-color-text-rgb").textContent = "rgb("+"00" + "," + "255" + "," + "00"+")";
        document.querySelector(".selected-color").style.boxShadow = "0 0 10px" + "#00ff00";
}

function bluePwr()
{
    firebase.database().ref('/').update({
        Blue: "255",
      })
      firebase.database().ref('/').update({
        Red: "0",
      })
      firebase.database().ref('/').update({
        Green: "0",
      })
      firebase.database().ref('/').update({
        Hex: "#0000ff",
      })
      
      firebase.database().ref('/').update({
        Status: "404",
      })


      document.querySelector(".colorPicker .oned .pointer").style.top = "66.2%";

      document.querySelector(".colorPicker .twod .pointer").style.top = "0%";
      document.querySelector(".colorPicker .twod .pointer").style.left = "100%";
    //   document.querySelector(".colorPicker .twod").style.background = "rgb(0,0,255)";

      selectedColor = "#0000ff";
        document.querySelector(".selected-color-text").textContent = "#0000ff";
        document.querySelector(".selected-color").style.background = "#0000ff";
        document.querySelector(".selected-color-text-rgb").textContent = "rgb("+"00" + "," + "00" + "," + "255"+")";
        document.querySelector(".selected-color").style.boxShadow = "0 0 10px" + "#0000ff";
}

function whitePwr()
{
    firebase.database().ref('/').update({
        Blue: "255",
      })
      firebase.database().ref('/').update({
        Green: "255",
      })
      firebase.database().ref('/').update({
        Red: "255",
      })
      firebase.database().ref('/').update({
        Hex: "#ffffff",
      })

      firebase.database().ref('/').update({
        Status: "404",
      })

      document.querySelector(".colorPicker .oned .pointer").style.top = "22.2%";

      document.querySelector(".colorPicker .twod .pointer").style.top = "0%";
      document.querySelector(".colorPicker .twod .pointer").style.left = "0%";
    //   document.querySelector(".colorPicker .twod").style.background = "rgb(255,255,255)";

      selectedColor = "#ffffff";
        document.querySelector(".selected-color-text").textContent = "#ffffff";
        document.querySelector(".selected-color").style.background = "#ffffff";
        document.querySelector(".selected-color-text-rgb").textContent = "rgb("+"255" + "," + "255" + "," + "255"+")";
        document.querySelector(".selected-color").style.boxShadow = "0 0 10px" + "#ffffff";

        
        
}

document.getElementById("toggle_PWR").addEventListener("change", () => {
  if (document.getElementById("toggle_PWR").checked)
{
  document.getElementById("toggle_PWR").classList.toggle("powerON");
  firebase.database().ref('/').update({
            Power: "true",
          })
}
else
{
  document.getElementById("toggle_PWR").classList.toggle("powerOFF");
  firebase.database().ref('/').update({
            Power: "false",
          })
}
})




setInterval(() => {
  

firebase.database().ref('/Status').on('value', (snapshot) => {
  

  if(snapshot.val() == "404")
  {
    document.getElementById("status_render").style.display = "block";
    document.getElementById("status_done").style.display = "none";
    document.getElementById("status_error").style.display = "none";
    

    const err_time = setTimeout(() => {
      if(snapshot.val() != "200")
      {
        firebase.database().ref('/').update({
          Status: "408",
        })
        
      }
      if(snapshot.val() == "200")
      {
        clearTimeout(err_time);
      }
      clearTimeout(err_time)
    }, 6000) 


  }

  if(snapshot.val() == "200")
  {
    document.getElementById("status_done").style.display = "block"
    document.getElementById("status_render").style.display = "none"
    document.getElementById("status_error").style.display = "none"

  }



if(snapshot.val() == "408")
{
  document.getElementById("status_error").style.display = "block";
  document.getElementById("status_done").style.display="none";
  document.getElementById("status_render").style.display="none";

}


});
  




}, 50);
