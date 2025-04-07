import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";


enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING  = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED"
}

const Agents = ({ userName }: AgentProps) => {
const callStatus = CallStatus.ACTIVE
  const isSpeaking = true;
  const messages = [
    "whats your name ", "i am John doe"
  ]
  const lastMessages = messages[messages.length-1]


  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src={"/ai-avatar.png"}
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src={"/user-avatar.png"}
              alt="user"
              height={540}
              width={540}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length >0 && (
        <div className="transcript-border">
            <div className="transcript">
                <p key={lastMessages} className={cn('transition-opacity duration-500 opacity-0 ' , "animate-fadeIn opacity-100")}>{lastMessages}</p>
            </div>
        </div>
      )}

      <div className="w-full flex justify-center ">
        { callStatus !== "ACTIVE" ? (
            <button className="relative btn-call">
                <span className={cn("absolute animate-ping rounded-full opacity-75 " , callStatus !== "CONNECTING" & "hidden")}
                    />
                <span className="relative">
                {callStatus === "INACTIVE" ||  callStatus === "FINISHED" ? "Call": ". . ."}
                </span>

            </button>
        ):(
            <button className="btn-disconnect">End</button>
        )}
      </div>
    </>
  );
};

export default Agents;
