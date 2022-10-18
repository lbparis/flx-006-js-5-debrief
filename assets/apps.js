// Selects from a pool of at least ten names of your classmates
// Contains Generate Random Names button that initiates the selection of 4 random names (duplicate names are OK)
// The selected random names are displayed to the browser
// Each time the Generate Random Names button is pressed, a new set of names appears (replacing the previous set of 4 random names)
// Contains button named Clear that removes the populated list from the screen
// Once you have completed steps 1-6, try to complete the Stretch Goals listed below.



// let fourNames = [];

// function getNames(){
//     let iList = Math.floor(Math.random() * (0 - 10 + 1)) +10;
//     let name = listofNames[iList]
//     fourNames.push(name)
   
    

// // while (length.fourNames < 4) {
    
// //     getNames()
// // }

//  console.log(name)


let listofNames = ['Paris', 'Jack', 'Carlos', 'Dunni', 'Dunamis', 'Jocelyn', 'John', 'Jacob', 'Jingleheimer', 'Schmidt'];

const getNamesButton = document.getElementById('getNames');
const clearNamesButton = document.getElementById('clearNames');
const nameDiv = document.getElementById('name-div');


function getNames(){
    
        while(nameDiv.firstChild){
                nameDiv.removeChild(nameDiv.firstChild);
        }

        const fourNames = document.createElement('ul');
        fourNames.id = 'list';
        document.getElementById('name-div').appendChild(fourNames);

        for(i = 0; i < 5; i++){
        
        randomName = listofNames[Math.floor(Math.random()* listofNames.length)]
        
        const name = document.createElement('li');
        name.id = 'name';
        name.innerHTML = randomName;
        document.getElementById('list').appendChild(name);
        } 
    }


function clearNames(){
    document.getElementById('list').remove();
}

getNamesButton.onclick = getNames;
clearNamesButton.onclick = clearNames;