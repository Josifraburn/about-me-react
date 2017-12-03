import React, { Component } from 'react';
import '../styles/listContent.css'

class ListContent extends Component {
    render () {
        return (
            <div className='list-content'>
                <h2>Why I chose helio</h2>
                <ul>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
            </div>
        )
    }
}

export default ListContent;