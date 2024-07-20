import Image from 'next/image'
import Header from './layout/Header/Header'

export default function Home() {
  return (
    <div>
      <section
        style={{
          height: '550px',
          background: 'linear-gradient(60deg, #fffeff 20%, #e2eff4)',
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Header />
        <div
          style={{
            flex: 1,
            position: 'relative'
          }}>
          <Image
            src="/images/home-image.png"
            alt="Home Image"
            width={822}
            height={436}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              marginRight: '150px'
            }}
          />
        </div>
      </section>
    </div>
  )
}
