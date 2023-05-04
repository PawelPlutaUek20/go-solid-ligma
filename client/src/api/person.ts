import { getAuth } from "firebase/auth";
import { get } from "./api";

async function getPerson() {
    return get("/json", {
        headers: { Authorization: await getAuth().currentUser.getIdToken() }
    })
}

export { getPerson }
