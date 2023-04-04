import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function WeightDropdown() {
    const [weight, setWeight] = useState("Select Weight")
    
    return(
        <Dropdown>
                <Dropdown.Toggle aria-selected id="dropdown-button" variant="secondary">
                    {weight}
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" onClick={() => {setWeight("Select Weight")}}>Select Weight</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => {setWeight("1 kg")}}>1 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={() => {setWeight("2 kg")}}>2 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-4" onClick={() => {setWeight("3 kg")}}>3 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-5" onClick={() => {setWeight("4 kg")}}>4 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-6" onClick={() => {setWeight("5 kg")}}>5 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-7" onClick={() => {setWeight("6 kg")}}>6 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-8" onClick={() => {setWeight("7 kg")}}>7 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-9" onClick={() => {setWeight("8 kg")}}>8 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-10" onClick={() => {setWeight("9 kg")}}>9 kg</Dropdown.Item>
                    <Dropdown.Item href="#/action-11" onClick={() => {setWeight("10 kg")}}>10 kg</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    )
}