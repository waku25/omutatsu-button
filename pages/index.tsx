import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Selector from '../components/Selector'
import SoundButton from '../components/SoundButton'
import OpenNewTab from '../components/OpenNewTab'
import OmutatsuButtonInfoList from '../components/streamer/OmutatsuButtonList'

const OmutatsuPage = () => {
  const title = 'こんちあああああああ'
  const about = (
    <p className="how_about">
      <OpenNewTab url="https://twitter.com/omrice4869" display="おむたつさん" />
      が喋ってくれるよ。かわちいね。<br></br>
      <OpenNewTab url="https://www.youtube.com/@omutatsu" display="Youtube" />
      配信から切り抜いています。音量の上げすぎには注意してね。
    </p>
  )
  const [sortOrder, setSortOrder] = useState<'display' | 'stream'>('display')
  const [buttonInfoList, setButtonInfoList] = useState([
    ...OmutatsuButtonInfoList,
  ])

  const sortButtonInfoList = (list: any[]) => {
    const sortedList = [...list].sort((a, b) =>
      sortOrder === 'display'
        ? a.display.localeCompare(b.display)
        : a.streamId.localeCompare(b.streamId),
    )
    return sortedList
  }
  const handleSortChange = (newSortOrder: 'display' | 'stream') => {
    setSortOrder(newSortOrder)
    setButtonInfoList(sortButtonInfoList(OmutatsuButtonInfoList))
  }

  const buttonList = sortButtonInfoList(buttonInfoList).map((info) => (
    <SoundButton streamer="omutatsu" key={info.fileName} {...info} />
  ))

  return (
    <div className="container">
      <Header title={title} />
      <div className="main_contents">
        {about}
        <Selector sortOrder={sortOrder} handleSortChange={handleSortChange} />
        <hr></hr>
        <div className="button_list">{buttonList}</div>
      </div>
      <Footer />
    </div>
  )
}

export default OmutatsuPage
