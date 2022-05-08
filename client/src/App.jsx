import React from 'react'
import {StreamChat } from 'stream-chat';
import {Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css'

import { ChannelListContainer, ChannelContainer, Auth} from './components'
// import ChannelListContainer from'./components/ChannelListContainer.jsx'
// import ChannelContainer from'./components/ChannelContainer.jsx'


const apikey = 'vsy5akesr9jz'; 
const client = StreamChat.getInstance(apikey);


const authToken = false;


const App = () => {

  if(!authToken) return <Auth/>

  return (
    <div className="app__wrapper">
        <Chat client={client} theme="team light">
            <ChannelListContainer
            
            />
            <ChannelContainer
            
            />

        </Chat>
         
    </div>
  );
}

export default App 