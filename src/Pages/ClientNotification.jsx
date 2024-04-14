import axios from "axios";
import React, { useState,useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const ClientNotification = () => {
  const [notification, setNotification] = useState(null);

  const id = localStorage.getItem('id')
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/core/api/client/dashboard/${id}/client-notifications/`)
      .then(res => setNotification(res.data))
      .catch(err => console.log(err));
  }, []);

  function markAllUnread(){
    setNotification((prev) => prev.map(notify => ({...notify, isUnread: false})))
  }

  function handleNotificationClick(id){
    setNotification((prev) => prev.map(notify => (
      notify.id === id
        ? {...notify, isUnread: false}
        : notify
    )))
  }
  console.log(notification)
  return (
    <div className="bg-[#F4EDE4] flex justify-center ">
      <div className="bg-[#fff] mt-8 flex flex-col rounded-md">
        <div className="flex justify-between p-8 text-bold text-3xl">
          <h1>Notification</h1>
          <button className="text-sm bg-[#e6e9eb] rounded-xl p-2 items-end" onClick={markAllUnread}>Mark all as read</button>
        </div>
        {notification &&
          notification.map((notify) => (
            <div className="bg-[#fff] m-5 p-1 flex hover:bg-[#eff5f5]" key={notify.id} onClick={() => handleNotificationClick(notify.id)}  data-unread={notify.isUnread}>
              <div className="text-4xl p-7 m-2 rounded-full bg-[#b5b2a8]  ">
                <AiOutlineUser />
              </div>
              <div className="ml-2 flex flex-col justify-between">
                <div>
                
                 {notify.message}
                </div>
                {!notify.message.includes("approved") && (
                  <div>
                    <button className=" w-1/4 rounded font-bold bg-gradient-to-r from-[#a1bec9] to-green-500 ">
                  accept
                </button>
                <Link to={`/tutordetail/${notify.tutor}`} className="font-bold mr-2">
                   View Detail
                  </Link>
                <div className="text-blue-500">{notify.time}</div>
                  </div>
                )}
              </div>
              {notify.isUnread && (
                  <div className="w-3 h-3 m-2 p-1 rounded-full bg-[#d12b26]"></div>
               )}
             
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClientNotification;
