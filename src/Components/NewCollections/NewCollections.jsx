import React from 'react';
import './NewCollections.css';
import Item from '../Items/Item';
import new_collections from '../Assets/new_collections';

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default NewCollections
