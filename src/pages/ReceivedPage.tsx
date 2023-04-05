import { useState } from "react"
import IncomingCard from "../components/IncomingCard"

export default function RecievedPage() {
    const [incoming, setIncoming] = useState([])
    const [delivered, setDelivered] = useState([])
    const [confirmed, setconfirmed] = useState([])

    return(
        <>
            <h1>Orders Incoming</h1>
                    
            <h1>Orders Delivered</h1>
        </>
    )
}