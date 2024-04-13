import React, { useState } from 'react'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Selector from '../components/Selector'
import SoundButton from '../components/SoundButton'
import OpenNewTab from '../components/OpenNewTab'
import OmutatsuButtonInfoList from '../components/streamer/OmutatsuButtonList'
import styles from '../styles/Omutatsu.module.css'

const OmutatsuPage = () => {
  const title = 'こんちあああああああ'
  const streamerName = 'おむたつ'
  const about = (
    <p className="how_about">
      <OpenNewTab
        url="https://twitter.com/omrice4869"
        display={streamerName + 'さん'}
      />
      が喋ってくれるよ。かわちいね。<br></br>
      <OpenNewTab url="https://www.youtube.com/@omutatsu" display="Youtube" />
      配信から切り抜いています。音量の上げすぎには注意してね。
    </p>
  )
  const keywords = [
    streamerName + 'ボタン',
    title,
    '@omrice4869',
    streamerName,
    '配信者ボタン',
    '@waku_25',
    'わっくん',
  ]

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
    <div className={styles.omutatsu_button_page}>
      <Meta
        title={streamerName + 'ボタン'}
        keyword={keywords}
        streamer={streamerName}
        path={''}
      />
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
    </div>
  )
}

export default OmutatsuPage
