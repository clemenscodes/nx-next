import { useState } from 'react';
import './guests.module.scss';

/* eslint-disable-next-line */
export interface GuestsProps {}

export function Guests(props: GuestsProps) {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    };
    const renderGuests = () => {
        return guests.map((guest) => <li key={guest}>{guest}</li>);
    };
    return (
        <div>
            <h1>Guestlist</h1>
            <ul>{renderGuests()}</ul>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add guest</button>
        </div>
    );
}

export default Guests;
