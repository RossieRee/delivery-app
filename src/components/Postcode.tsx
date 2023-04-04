import { useState } from "react"

export default function Postcode() {
    const [postcode, setPostcode] = useState("")
    return(
        <input 
            placeholder="Postcode"
            onChange={(ev) => {setPostcode(ev.target.value)}}
            value={postcode}
        />
    )
}