import React from "react"
import Resume from "../../static/AblaHasan_Resume_2024_Arabic.pdf"
import { AiOutlineDownload } from "react-icons/ai"

function ArabicCV({ color }) {
  return (
    <div className="resume-btn">
      <a href={Resume} className={`${color}-btn px-4 btn`} download>
        السيرة الذاتية <AiOutlineDownload className="mb-1 ms-2 fs-4" />
      </a>
    </div>
  )
}

export default ArabicCV
