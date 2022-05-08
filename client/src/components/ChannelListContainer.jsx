import React from 'react'
import {ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
// import HospitalIcon from '../assets/hospital.png'
// import LogoutIcon from '../assets/logout.png'
import { FiLogOut } from 'react-icons/fi'
import {FaHospitalAlt} from 'react-icons/fa'


const SideBar = () =>(
    <div className="channel-list__sidebar">
          <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
            <FaHospitalAlt width="30"/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <FiLogOut stylesheet={{width:30}}/>
            </div>
        </div>

    </div>
)

const CompanyHeader = () =>(
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)

const ChannelListContainer = () => {
  return (
    <>
        
        
            <SideBar/> 
            <div className="channel-list__list__wrapper">
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{} }
                    List={(listProps)=>(
                          <TeamChannelList
                            {...listProps}
                            type="team"
                        />
                    )}
                    Preview={(previewProps)=>(
                            <TeamChannelPreview
                                {...previewProps}
                                type="team"
                            />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{} }
                    List={(listProps)=>(
                          <TeamChannelList
                            {...listProps}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps)=>(
                            <TeamChannelPreview
                                {...previewProps}
                                type="messaging"
                            />
                    )}
                />
           
        </div>
    </>
  )
}
 
export default ChannelListContainer