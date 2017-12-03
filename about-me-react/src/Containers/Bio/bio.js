import React, { Component } from 'react';
import NameDate from './components/nameDate';
import ListContent from './components/listContent';
import './styles/bio.css'

class Bio extends Component {
    render () {
        return(
            <div className='bio'>
                <div className='photo'>
                    <img src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA2tAAAAJDkzYTJlOTQ5LWQzM2YtNDhjMS1iMzY0LTk5ODAwYjU0NDgyYg.jpg'/>
                </div>
                <div className='content'>
                    <NameDate/>
                    <ListContent/>
                </div>    
            </div>
        )
    }
}

export default Bio;