import { useState } from 'react';
import Postcode from '../components/Postcode';
import SendDropdown from '../components/SendDropdown';
import WeightDropdown from '../components/WeightDropdown';
import { SendDropdownProps } from '../types';

export default function SendParcelPage() {
    const [fromArea, setFromArea] = useState("Select Area")
    const [toArea, setToArea] = useState("Select Area")

    function sendData() {
        console.log("trying to send data...")
    }

    return (
        <div>
            <h1>Send a parcel</h1>
            <p>Send parcels the easy way, from £2.32 (exc VAT)</p>

            <h3>From</h3>
            <SendDropdown selected={fromArea} changeSelected={setFromArea} />
            <Postcode />

            <h3>To</h3>
            <SendDropdown selected={toArea} changeSelected={setToArea}/>
            <Postcode />

            <h3>Weight</h3>
            <WeightDropdown />

            <button onClick={sendData}>Get Quote</button>
        </div>
    )
}