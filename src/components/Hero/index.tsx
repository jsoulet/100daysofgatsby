import React from "react"

import Avatar from "../../../content/images/avatar.jpg"

const Hero = () => {
  return (
    <div className="align-center mb-6">
      <img
        className="h-20 w-20 rounded-full m-auto mb-3"
        src={Avatar}
        alt="avatar"
      />
      <div className="text-xl text-center text-gray-800 m-auto max-w-xl">
        Hi, I'm Johan! To kick off 2020, I'm joining the{" "}
        <a
          href="https://twitter.com/search?q=%23100DaysOfGatsby"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:underline"
        >
          #100DaysOfGatsby
        </a>{" "}
        Challenge. This blog will document my journey.
      </div>
    </div>
  )
}

export default Hero
