import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className="container">
      <div className="main_contents">
        <h1>404 - Not Found</h1>
        <p>
          ページが見つかりません。<br></br>
          The page you are looking for might not exist.
        </p>
        <Link href="/">トップへ戻る / Go back to home</Link>
      </div>
    </div>
  )
}

export default Custom404
