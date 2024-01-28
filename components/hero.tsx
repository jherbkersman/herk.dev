import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative mt-24">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-6 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">

            <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
              Herk Technical
            </h1>
            <p className="text-xl text-slate-400 mb-10" data-aos="fade-up" data-aos-delay="100">
              Artificial Intelligence, Web Development, Big Data, and more; all in the name of building better businesses.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group" href="#call">
                  Get in Touch{' '}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}