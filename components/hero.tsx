import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap p-4 m-4">
    <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden space-y-4">
          <Image
           
            src={"./images/sanity.svg"}
            alt="blog" width={721} height={401}
            className='p-2'
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CMS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Sanity
            </h1>
            <p className="leading-relaxed mb-3">
            In the ever-evolving world of web development, content management systems (CMS) have undergone tremendous transformation. One of the standout players in this space is Sanity.
            </p>
            <div className="flex items-center flex-wrap">
                    <Link href="/blog/sanity" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
          </div>
        </div>
      </div>
        

    
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={'/images/api.png'}
            alt="blog" width={721} height={401}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Api
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            APIs: The Backbone of Modern Applications
            </h1>
            <p className="leading-relaxed mb-3">
            In the digital age, APIs (Application Programming Interfaces) have become the unsung heroes of the tech world. They enable communication between different software systems, making it possible for apps and services to integrate seamlessly. 
            </p>
            <div className="flex items-center flex-wrap">
                    <Link href="/blog/api" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
        
            src={'/images/nextjs.jpeg'}
            alt="blog" width={721} height={401}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Next.js
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Next.js: The React Framework for Production
            </h1>
            <p className="leading-relaxed mb-3">
            In the fast-paced world of web development, frameworks play a pivotal role in streamlining the development process. One such framework that has gained immense popularity is Next.js. 
            </p>
            <div className="flex items-center flex-wrap">
                    <Link href="/blog/nextjs" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
