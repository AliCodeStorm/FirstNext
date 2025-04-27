'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HeroSection() {
  return (
    <div className="relative isolate bg-gray-50 h-screen px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      
      {/* Top Gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] w-[36rem] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-400 to-lime-300 opacity-60 sm:left-[calc(50%-30rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-2xl flex flex-col items-center justify-center text-center">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-300 hover:ring-gray-400 transition">
            Announcing product updates.{' '}
            <a href="#" className="font-semibold text-green-600 hover:text-green-800">
              Read more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Data-Driven Insights for Business Success
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Get the insights you need to make informed decisions and supercharge your online strategies.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition"
          >
            Start your free trial
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
            Learn more →
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] w-[36rem] sm:w-[72rem] aspect-[1155/678] -translate-x-1/2 bg-gradient-to-tr from-green-400 to-lime-300 opacity-60 sm:left-[calc(50%+36rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
