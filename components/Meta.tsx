import Head from 'next/head'

interface MetaProps {
  title: string
  keyword: string[]
  streamer: string
  path: string
}

const Meta: React.FC<MetaProps> = ({ title, keyword, streamer, path }) => {
  const DOMAIN_URL = 'https://omutatsu-button.vercel.app'
  const SITE_URL = DOMAIN_URL + '/'
  const keywords = keyword.join(', ')
  const siteUrl = SITE_URL + path
  const imageUrl = SITE_URL + 'site_image.webp'
  const siteDisc = 'ボタンを押すと ' + streamer + ' さんが話してくれるよ。'
  return (
    <Head>
      {/* 必須のメタタグ */}
      <title>{title}</title>
      <meta name="description" content={siteDisc} />
      {/* その他のメタタグ */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content="waku_25" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@waku_25" />
      <meta name="twitter:domain" content={DOMAIN_URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={siteDisc} />
      <meta name="twitter:image" content={imageUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={siteDisc} />
      <meta property="og:site_name" content={title} />
      {/* その他 */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={DOMAIN_URL} />
    </Head>
  )
}

export default Meta
