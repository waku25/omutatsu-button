import React from 'react'

interface SoundButtonProps {
  fileName: string
  streamer: string
  display: string
}

const SoundButton: React.FC<SoundButtonProps> = ({
  fileName,
  streamer,
  display,
}) => {
  const soundFilePath = `/sounds/${streamer}/${fileName}.mp3`
  const handleButtonClick = () => {
    console.log(soundFilePath)
    const audio = new Audio(soundFilePath)
    audio.play()
  }
  return <button onClick={handleButtonClick}>{display}</button>
}

export default SoundButton
