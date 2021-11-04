import { getRequests } from "./dataAccess.js"






export const Requests = () => {
    const requests = getRequests()

    const convertRequestToListElement = (eachResultOfMap) => {
        return `
        <li>
            ${eachResultOfMap.description} -- $${eachResultOfMap.budget}
            <button class="request__delete"  id="request--${eachResultOfMap.id}">Delete</button>
        </li>
    `
        
    }

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")}
        </ul>
    `

    return html
    }



