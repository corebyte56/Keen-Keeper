import { Video } from 'lucide-react'
import React from 'react'

const VideoCard = ({video}) => {
  return (
    <div
            className="flex items-center gap-4 bg-white rounded-xl shadow-sm  p-4 
      hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="text-2xl">
              <Video />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center gap-3 py-3">
                <p className="text-xl">Video</p>
                <span className="text-lg text-gray-500 font-normal">
                  with {video.name}
                </span>
              </h3>
              <p className="font-medium  text-gray-500">{video.next_due_date}</p>
            </div>
          </div>
  )
}

export default VideoCard
