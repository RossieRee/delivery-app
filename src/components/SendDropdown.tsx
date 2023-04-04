import Dropdown from 'react-bootstrap/Dropdown';
import { SendDropdownProps } from '../types';

export default function SendDropdown({selected, changeSelected}: SendDropdownProps) {    
    return(
        <Dropdown>
            <Dropdown.Toggle aria-selected id="dropdown-button" variant="secondary">
                {selected}
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" onClick={() => {changeSelected("Select Area")}}>Select Area</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => {changeSelected("UK Mainland")}}>UK Mainland</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => {changeSelected("Northern Ireland")}}>Northern Ireland</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}