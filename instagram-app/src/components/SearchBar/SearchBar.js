import React, { Component } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaCompass} from "react-icons/fa";
import logo from '../../assets/instagram-logo.png'
import icon from '../../assets/instagram-icon.png'
import './SearchBarStyles.css' 

class SearchBar extends Component {
    render() {
        return (
            <div className='div'>
                <input
                    name="search"
                    onChange={this.props.searchFilter}
                    placeholder="search..."
                    type="text"
                // value={this.props.newSearch}
                />
                <FaHeart />
                <FaCompass/>
              
             <img className='logo' src={logo} alt='logo'/>
             <img className='logo' src={icon} alt='icon'/>
              
           


            
            </div>
        );
    }
}

export default SearchBar;