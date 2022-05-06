import React from 'react'
import Resume from '../../static/Abla-Hasan-CV.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

function DownloadCV({color}) {
  return (
    <div>
      <a href={Resume} className={`${color}-btn px-4 btn`} download>
        Download CV <AiOutlineDownload className="mb-1 ms-2 fs-4" />
      </a>
    </div>
  )
}

export default DownloadCV