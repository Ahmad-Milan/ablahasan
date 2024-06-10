import React from "react"
import Resume from "../../static/AblaHasan_Resume_2024.pdf"
import { AiOutlineDownload } from "react-icons/ai"

function DownloadCV({ color }) {
  return (
    <div className="resume-btn mb-2">
      <a href={Resume} className={`${color}-btn px-4 btn`} download>
        Download CV <AiOutlineDownload className="mb-1 ms-2 fs-4" />
      </a>
    </div>
  )
}

export default DownloadCV
