import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from "react-tinder-card"
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://media.beam.usnews.com/b0/dc/a8c09faa43868dd7e51ec254b099/191025-bezos-editorial.jpg',
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                     className="swipe"
                     key={person.name}
                     preventSwipe={["up", "down"]}
                     onSwipe={(dir) => swiped(dir, person.name)}
                     onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                          style={{ backgroundImage: `url(${person.url})`}}
                          className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default TinderCards
