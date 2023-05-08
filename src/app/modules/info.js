export default function Info({props}) {
    return (
      <section>
        <article>
            <h2>IP Address</h2>
            <p>{props.IP}</p>
        </article>
        <article>
            <h2>Location</h2>
            <p>{props.location}</p>
        </article>
        <article>
            <h2>Timezone</h2>
            <p>{props.timezone}</p>
        </article>
        <article>
            <h2>Isp</h2>
            <p>{props.isp}</p>
        </article>
      </section>
    )
  }