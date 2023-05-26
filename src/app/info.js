'use client'
export default function Info(props) {
    return (
      <section id="info-box">
        <article className="info"> 
            <h2>IP Address</h2>
            <p>{props.ip}</p>
        </article>
        <article className="info">
            <h2>Location</h2>
            <p>{props.location}</p>
        </article>
        <article className="info">
            <h2>Timezone</h2>
            <p>{props.timezone}</p>
        </article>
        <article className="info">
            <h2>Isp</h2>
            <p>{props.isp}</p>
        </article>
      </section>
    )
  }