        
    let checkTaskList = [];
    
    function showColors() {
        
        let colorArray = {'#ffca18':'#fff875','#0ed145':'#73f196','#db356a':'#ffaec8','#b83dba':'#f187f3','#3ed0cb':'#83ede9','#d04552':'#ff9ea7','#ff7f27':'#ffb785','#aaaaaa':'#c3c3c3','#6d6d6d':'#6d6d6d'};
        let index = 0;
        for (let ce in colorArray) {
            let optElem = document.createElement("option");
            optElem.value = "color" + index;
            optElem.style.backgroundColor = colorArray[ce];            
            optElem.style.border = "3px solid " + ce;
            optElem.onclick = selectColor;
            if (index == 0) {
                optElem.selected = true;
                document.getElementById("colors").style.backgroundColor = colorArray[ce];
            }
            document.getElementById("colors").appendChild(optElem);
            index++;
        }
    }

    function selectColor() {
        document.getElementById("colors").style.backgroundColor = this.style.backgroundColor;
        document.getElementById("colors").style.border = this.style.border;        
    }

    function updateList() {
        
        document.getElementsByClassName("txtinput")[0].value = "";

        checkTaskList.length = 0;
        const allList = document.querySelectorAll("li");
        
        let desigTask = false;

        for (let e = 0; e < allList.length; e++) {
            checkTaskList[allList[e].id] = allList[e].getElementsByTagName("input")[0].checked;
            desigTask = (checkTaskList[allList[e].id] == true) ? true : desigTask;            
        }
        /*
        document.getElementById("checked").innerHTML = "";
        allList.forEach(element => {
            document.getElementById("checked").innerHTML += element.id + " " + element.getElementsByTagName("input")[0].checked + "<br>";
        });*/

        document.getElementsByClassName("reset")[0].disabled = (!desigTask) ? true : false ;
        
    }

    function deleteTasks() {

        for (let chel in checkTaskList) {
            if (checkTaskList[chel] == true) {
                document.getElementById(chel).remove();
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

    function newTask(e, tskcol) {

        if (e.length > 0) {
            //let parameter = location.search.substring(1).split("=")[1];
            let liElem = document.createElement("li");
            liElem.id = document.getElementsByClassName("list")[0].childElementCount;
            liElem.style.backgroundColor = tskcol.backgroundColor;
            liElem.style.borderColor = tskcol.borderColor;
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

