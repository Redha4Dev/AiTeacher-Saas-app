import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
        <div className="cta-badge">
            Start Learning Right NOW!
        </div>
        <h2 className="text-3xl font-bold">Build personalized learning paths</h2>
        <p>choose a name, subject, voice and topic - and start learning through voice conversations that feel natural and fun</p>
        <Image src="images/cta.svg" alt="cta" width={362} height={232}  />
        <button className="btn-primary">
            <Image src="icons/plus.svg" alt="plus" width={12} height={12} />
            <Link href="/companions/new">Create a new companion</Link>
        </button>
    </section>
  )
}

export default CTA