import React, {useState, useEffect} from 'react';
import {useChatContext } from 'stream-chat-react';
import {FiSearch} from "react-icons/fi"

const ChannelSearch = () => {
        const [query, setQuery] = useState(''); 
        const [loading, setLoading] = useState(false);

        const getChannel = async (text) => {
            try {
                // TODO: fectch channels
            } catch (error) {
                setQuery('')
            }
        }

        const onSearch = (event)=>{
            event.preventDefault();

            setLoading(true);
            setQuery(event.target.value);
            getChannel(event.target.value)

        }


  return (
    <div className="channel-search__container">
        <div className="channel-search__input__wrapper">
            <div className="channel-search__input__icon">
                <FiSearch/>
            </div>
            <input
                className="channel-search__input__text"
                placeholder="Search"
                type="text"
                value={query}
                onChange={onSearch} 
            />
        </div>
         
    </div>
  )
}

export default ChannelSearch