import React from 'react'

function Header({ src }: any) {
  return <h2>{src}</h2>
}

function Buttons({ str }: any) {
  return (
    <div>
      <button>{str}</button>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div>
        音声等の権利は、すべて元著作権利者に帰属します。 Copyrights to audio and
        other materials belong to the original copyright holders.
      </div>
    </footer>
  )
}

export default function RootPage() {
  return (
    <div>
      <h1>こんちああああ</h1>
      <hr />
      <Header src="おむたつぼたん" />
      <Buttons str="aaa" />
      <Footer />
    </div>
  )
}
