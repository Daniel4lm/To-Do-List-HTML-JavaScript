//$(document).ready(function(){
    
    let checkTaskList = [];
    let checkMarkTask;
    
    function showColors() {
        
        let colorArray = {'#ffca18':'#fff875', // yellow
                          '#02bf37':'#73f196', // green
                          '#db356a':'#ffaec8', // pink
                          '#b83dba':'#f187f3', // violet
                          '#30b3af':'#83ede9', // blue
                          '#d04552':'#ff9ea7', // red
                          '#ff7f27':'#ffb785', // orange
                          '#919191':'#c3c3c3', // grey
                          '#6d6d6d':'#6d6d6d' // darkgrey
        };
                
        let index = 0;
        $(".colorSlider div").eq(index).css("width", "28%");
        for (let ce in colorArray) {

            $(".colorSlider div").eq(index + 1).css("background-color", colorArray[ce]);
            $(".colorSlider div").eq(index + 1).css("width", "8%");
            $(".colorSlider div").eq(index + 1).css("borderTopColor", ce);
            $(".colorSlider div").eq(index + 1).css("borderLeftColor", ce);
            $(".colorSlider div").eq(index + 1).css("borderRightColor", ce);
            $(".colorSlider div").eq(index + 1).css("borderBottomColor", ce);
            
            /*
            let optElem = document.createElement("option");
            optElem.value = "color" + index;
            optElem.style.backgroundColor = colorArray[ce];            
            optElem.style.border = "3px solid " + ce;
            optElem.onclick = selectColor;
            if (index == 0) {
                optElem.selected = true;
                document.getElementById("colors").style.backgroundColor = colorArray[ce];
            }
            document.getElementById("colors").appendChild(optElem);*/
            index++;
        }
    }

    $(".colorSlider div[class!='coltitle']").click(function () {
        $(".colorbtn").css("background-color", $(this).css("background-color"));
        $(".colorbtn").css("borderTopColor", $(this).css("borderTopColor"));
        $(".colorbtn").css("borderLeftColor", $(this).css("borderLeftColor"));
        $(".colorbtn").css("borderRightColor", $(this).css("borderRightColor"));
        $(".colorbtn").css("borderBottomColor", $(this).css("borderBottomColor"));
        
        $(".colorbtn i").css("color", 
            ($(".colorbtn").css("borderBottomColor") == "rgb(109, 109, 109)") ? "white" : 
            $(".colorbtn").css("color") );
        
        
    });

    $(".colorbtn").click( function () {
        $(".colorSlider").slideToggle("slow");
    });

    function selectColor() {
        //$(".colorbtn").css("background-color", this.style.backgroundColor);
        //$(".colorbtn").css("border", this.style.border);
        //document.getElementById("colors").style.backgroundColor = this.style.backgroundColor;
        //document.getElementById("colors").style.border = this.style.border;        
    }

    function updateList() {
        
        $(".txtinput").val("");  //document.getElementsByClassName("txtinput")[0].value = "";

        checkTaskList.length = 0;
        const allList = document.querySelectorAll("li");
        
        let desigTask = false;
        let oneTask, oneTskIndex = 0;

        for (let e = 0; e < allList.length; e++) {
            checkTaskList[allList[e].id] = allList[e].getElementsByTagName("input")[0].checked;

            if (checkTaskList[allList[e].id] == true) {
                desigTask = true;
                oneTask = allList[e].getElementsByTagName("input")[0].getElementById;
                oneTskIndex += 1;
            }
            //desigTask = (checkTaskList[allList[e].id] == true) ? true : desigTask;
            
        }

        document.getElementById("checked").innerHTML = oneTskIndex;

        /*
        document.getElementById("checked").innerHTML = "";
        allList.forEach(element => {
            document.getElementById("checked").innerHTML += element.id + " " + element.getElementsByTagName("input")[0].checked + "<br>";
        });*/

        //document.getElementsByClassName("reset")[0].disabled = (!desigTask) ? true : false ;

        $(".reset").attr("disabled", (!desigTask) ? true : false);
        $(".mark").attr("disabled", (!desigTask) ? true : false);
        $(".edit").attr("disabled", (oneTskIndex > 0 && oneTskIndex < 2) ? false : true);
        
    }

    $(".mark").click( function() {
        for (let chel in checkTaskList) {
            if (checkTaskList[chel] == true) {
                $("#" + chel).children("label").css("text-decoration", "line-through");
                //$("#" + chel).children("input").attr("disabled", "true");
            }
        }
        updateList();

    });

    function deleteTasks() {

        for (let chel in checkTaskList) {
            if (checkTaskList[chel] == true) {
                $("#" + chel).remove();
                //document.getElementById(chel).remove();
            }
        }
        updateList();
    }

    function checkListTask(e) {
        updateList(); 
    }

    function checkTask() {
        updateList();
    }

    function newTask(e, backgcolor, bordcolor) {

        if (e.length > 0) {
            //let parameter = location.search.substring(1).split("=")[1];
            let liElem = document.createElement("li");
            liElem.id = document.getElementsByClassName("list")[0].childElementCount;
            
            if (backgcolor == "rgb(109, 109, 109)") {
                liElem.style.color = "rgb(255, 255, 255)";
            }
            // (backgcolor == "rgb(109, 109, 109)") ? "rgb(255, 255, 255)":

            liElem.style.backgroundColor = backgcolor;
            liElem.style.borderColor = bordcolor;
            let iElem = document.createElement("i");
            iElem.className = "fa fa-star-o";            
            let inputElem = document.createElement("input");
            inputElem.type = "checkbox";
            inputElem.name = "rowArray[]";
            inputElem.id = "ch" + (document.getElementsByClassName("list")[0].childElementCount);
            inputElem.style.marginLeft = "10px";
            inputElem.onclick = checkTask;
            let labelElem = document.createElement("label");
            labelElem.innerHTML = e.trim();
            labelElem.style.marginLeft = "5px";
            labelElem.htmlFor = inputElem.id;
            liElem.appendChild(iElem);
            liElem.appendChild(inputElem);
            liElem.appendChild(labelElem);
            document.getElementsByClassName("list")[0].appendChild(liElem);
        
            updateList();
        }
    }

//});
