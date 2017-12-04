import React, { Component } from 'react';
import '../styles/listContent.css'

class ListContent extends Component {
    render () {
        return (
            <div className='list-content'>
                <h2 className='content-title'>Why I chose helio,</h2>
                <ul className='content-list'>
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