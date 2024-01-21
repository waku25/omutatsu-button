import React from 'react'
import OpenNewTab from './OpenNewTab'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div>
        音声等の権利は、すべて元著作権利者に帰属します。 Copyrights to audio and
        other materials belong to the original copyright holders.
        <br></br>
        ソースコードは
        <OpenNewTab
          url="https://github.com/waku25/omutatsu-button"
          display="GitHub"
        />
        で公開しています。音声追加・要望・問題等ありましたら、GitHubの
        <OpenNewTab
          url="https://github.com/waku25/omutatsu-button/issues/new"
          display="Issue"
        />
        か、
        <OpenNewTab url="https://twitter.com/waku_25" display="X(Twitter)" />
        までお願いします。
      </div>
    </footer>
  )
}

export default Footer
