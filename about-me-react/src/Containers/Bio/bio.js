import React, { Component } from 'react';
import NameDate from './components/nameDate';
import ListContent from './components/listContent';
import './styles/bio.css'

class Bio extends Component {
    render () {
        return(
            <div className='bio'>
                <NameDate className='name-date'/>
                <ListContent/>
            </div>
        )
    }
}

export default Bio;