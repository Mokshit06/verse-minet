import Link from 'next/link';

export default function Home() {
  return (
    <div className="cover home">
      <div className="image">
        <div className="image-wrapper">
          <h1>Verse</h1>
          <p>Evolving meta for people</p>

          <div className="links">
            <Link href="/auth">
              <a className="link">Try it</a>
            </Link>
            <a href="https://docs.verse.mokshitjain.co" className="link">
              View docs
            </a>
          </div>
        </div>
      </div>
      <div className="in-car">
        <h2>Improving the experience</h2>
        <p>
          Metaverse has been the talk of the town for a little too long now, and
          after a keen and in depth analysis of the meta, we’ve come to the
          conclusion of the cons and pros it carries with itself. While its
          existence still remains a question, we decided to build a product that
          solves the many problems that the metaverse brings in, so that
          whenever it comes out - it is clean and user friendly. - <i>VERSE</i>{' '}
          <b>evolving meta for people</b>. VERSE has been designed to cater to
          the needs of the people being the topmost priority, so that every fear
          of theirs ranging from identity theft to a unique one, from addiction
          to frequent prompts, we have incorporated every bit of their problems
          to create VERSE which solves them all.
        </p>
      </div>
      <div className="features">
        <div className="flex">
          <div
            className="flex-image"
            style={{
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '15px',
            }}
          >
            <img
              style={{ objectFit: 'cover', maxHeight: '35vh' }}
              src="/addiction.jpg"
              alt=""
            />
          </div>
          <div className="flex-info">
            <h2>
              Solving the impending topic - <i>Addiction</i>
            </h2>
            <p>
              VERSE seeks to overcome the problem of addiction through frequent
              prompts that instruct the users to have a break from the virtual
              land and utilize the time in the real physical world, the prompt
              will be shown as a warning sign when the time spent on the
              platform is more than the average usage limit.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-info">
            <h2>
              Diluting <i>Identity Theft</i>
            </h2>
            <p>
              With the usage of already existing technologies such as
              blockchain, VERSE resolves the problem of identity theft, as every
              user will have a unique identity which will never be revealed,
              every user will be able to control their data through private and
              public keys, allowing them to own it.
            </p>
          </div>
          <div
            className="flex-image"
            style={{
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '15px',
            }}
          >
            <img
              style={{ maxHeight: '30vh', objectFit: 'cover' }}
              src="/theft.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-image">
            <img src="/sign.jpg" alt="" />
          </div>
          <div className="flex-info">
            <h2>
              <i>Single Sign-in</i>, ending the interminable
            </h2>
            <p>
              VERSE provides the users to access all the facilities through a
              single verse account while being on the platform. No sign in will
              be required for facebook, google or any other external service, a
              single VERSE account will allow the users to access all the
              facilities offered by them in the metaverse.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-info">
            <h2>Public API</h2>
            <p>
              VERSE will also serve as a storehouse for anonymous telemetry data
              which will be available to the companies in the metaverse to
              enhance and upgrade their services in the virtual world and
              improve the total user satisfaction score.
            </p>
          </div>
          <div className="flex-image">
            <img src="/api.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="try-wrapper">
        <div className="try-container">
          <div className="try-text">
            <h2>Try it right now!</h2>
            <p>Try Verse right here in your browser!</p>
            <Link href="/auth">
              <a className="link">Try</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
