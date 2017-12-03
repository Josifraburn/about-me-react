import React, { Component } from 'react';
import NameDate from './components/nameDate';
import ListContent from './components/listContent';

class Bio extends Component {
    render () {
        return(
            <div>
                <NameDate/>
                <ListContent/>
            </div>
        )
    }
}

export default Bio;