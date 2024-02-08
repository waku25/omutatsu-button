import React from 'react'
import Tooltip from './Tooltip'
import { StreamList } from './StreamList'

interface SoundButtonProps {
  fileName: string
  streamer: string
  display: string
  streamId: string
}

const SoundButton: React.FC<SoundButtonProps> = ({
  fileName,
  streamer,
  display,
  streamId,
}) => {
  const soundFilePath = `/sounds/${streamer}/${fileName}.mp3`
  const handleButtonClick = () => {
    console.log(soundFilePath)
    const audio = new Audio(soundFilePath)
    audio.play()
  }
  const streamInfo = StreamList.find((item) => item.stream === streamId)
  const streamName = streamInfo ? streamInfo.title : ''
  const streamPlatform = streamInfo ? streamInfo.platform : ' '
  return (
    <button onClick={handleButtonClick}>
      {display}
      <Tooltip
        name={streamName}
        streamId={streamId}
        platform={streamPlatform}
      ></Tooltip>
    </button>
  )
}

export default SoundButton
