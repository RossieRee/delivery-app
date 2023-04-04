import { useState } from "react"
import { TrackingInfoProps } from "../types"

export default function TrackingPage() {
    const [trackingNumber, setTrackingNumber] = useState("")
    const [postcode, setPostcode] = useState("")

    const sendData = ({trackingNumber, postcode}: TrackingInfoProps) => {
        console.log("trying to send data...")
        /* TO DO */
    }

    return(
        <div>
            <h1>Track your parcel</h1>
            <h2>Enter your tracking number</h2>
            <input 
                placeholder="Tracking number"
                type="text"
                onChange={(ev) => {setTrackingNumber(ev.target.value)}}
                value={trackingNumber}
            />

            <h1>Track your parcel</h1>
            <h2>Enter your tracking number</h2>
            <input 
                placeholder="Delivery postcode"
                onChange={(ev) => {setPostcode(ev.target.value)}}
                value={postcode}
            />

            <button onClick={() => {sendData({trackingNumber, postcode})}}>Track</button>
        </div>
    )
}