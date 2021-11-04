import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { deleteRequest } from "./dataAccess.js"






const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


mainContainer.addEventListener(  //listen on mainContainer wich is declared on line 10 and is asigned the value of document.querySelect("#container")
    "click", // type of event - in this case its a click event
    click => {  // Function that will do something with the data that will be attached to the click event
    if (click.target.id.startsWith("request--")) {  // using the .startsWith method to look for the string in the DOM that starts with id of "request"
        const [,requestId] = click.target.id.split("--") // deconstructing the array using the .split method to remove the 2 dashes from between the word request
        // and ${eachResultOfMap.id} in the declaration of the creation of the Delete Button in Rquests Module on line 15 and then creating the requestId variable inside of the array
        deleteRequest(parseInt(requestId)) // invoking the function deleteRequest and passing in as an argument the requestId variable and coverting it back into an integer.
        
    }
})
