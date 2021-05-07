import React, { useEffect, useState } from 'react'
import './EmailList.css'
import {Checkbox, IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from'@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection('emails').orderBy('timeStamp', 'desc').onSnapshot
        (onSnapshot => setEmails(onSnapshot.docs.map(doc => ({
            id:doc.id,
            data:doc.data(),
        })))) 
    },[])
    return (
        <div className="emailList">
            <div className="emailList_settings">
              <div className="emailList_settingsLeft">
                  <Checkbox />
                  <IconButton>
                      <ArrowDropDownIcon />
                  </IconButton>
                  <IconButton>
                      <RedoIcon />
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon />
                  </IconButton>
              </div>
              <div className="emailList_settingsRight">
                  <IconButton>
                      <ChevronLeftIcon />
                  </IconButton>
                  <IconButton>
                      <ChevronRightIcon />
                  </IconButton>
                  <IconButton>
                      <KeyboardHideIcon />
                  </IconButton>
                  <IconButton>
                      <SettingsIcon />
                  </IconButton>

              </div>
            </div>
            <div className="emailList_sections">
              <Section Icon={InboxIcon} title="Primary" color='red' selected />
              <Section Icon={PeopleIcon} title="Social" color="#1A73EB" />
              <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList_list">
                {emails.map(({id, data: {to, subject, message, timeStamp}}) => (
                    <EmailRow
                      id={id}
                      key={id}
                      title={to}
                      subject={subject}
                      description={message}
                      time={new Date(timeStamp?.seconds * 1000).toUTCString()}
                    />
                ))}
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
              <EmailRow 
              title="twitch"
              subject="Hey fellow streamer"
              description="This is a test"
              time="10pm"
              />
            </div>
        </div>
    )
}


export default EmailList
