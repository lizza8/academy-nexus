"use client"

import { useCallback, useEffect, useState } from "react"

const SLIDES = [
  [
    { src: "/assets/images/slider-images/usaid.png", alt: "USAID logo" },
    { src: "/assets/images/slider-images/space.png", alt: "Space Int. logo" },
    { src: "/assets/images/slider-images/tineti.png", alt: "Tineti logo" },
  ],
  [
    { src: "/assets/images/slider-images/tegeta.png", alt: "Tegeta logo" },
    { src: "/assets/images/slider-images/spectre.png", alt: "Spectre logo" },
    { src: "/assets/images/slider-images/tbc-lizingi.png", alt: "TBC lizingi" },
  ],
  [{ src: "/assets/images/slider-images/UFC.png", alt: "UFC logo", last: true }],
]

export function TbcPartnersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"right" | "left">("right")
  const [paused, setPaused] = useState(false)

  const goToSlide = useCallback((index: number, fromIndex?: number) => {
    const prev = fromIndex ?? currentIndex
    setDirection(index >= prev ? "right" : "left")
    setCurrentIndex(index)
  }, [currentIndex])

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setDirection("right")
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [paused])

  const currentSlide = SLIDES[currentIndex]

  return (
    <section className="slider-section">
      <div className="slider-title container">
        <h2>პროექტის პარტნიორები</h2>
      </div>
      <div
        className="slider-container"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <svg
          className="slider-arrow arrow"
          id="prev-arrow"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 41"
          onClick={() => {
            const next = (currentIndex - 1 + SLIDES.length) % SLIDES.length
            goToSlide(next, currentIndex)
          }}
          role="button"
          aria-label="Previous partners"
        >
          <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z" />
        </svg>

        <div
          className={`slide ${direction === "right" ? "slideRightAnime" : "slideLeftAnime"}`}
          key={currentIndex}
        >
          {currentSlide.length === 1 && currentSlide[0].last ? (
            <div className="last-slide">
              <img src={currentSlide[0].src} alt={currentSlide[0].alt} />
            </div>
          ) : (
            <div className="slides-box">
              {currentSlide.map((logo) => (
                <img key={logo.src} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          )}
        </div>

        <svg
          className="slider-arrow arrow"
          id="next-arrow"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 41"
          onClick={() => {
            const next = (currentIndex + 1) % SLIDES.length
            goToSlide(next, currentIndex)
          }}
          role="button"
          aria-label="Next partners"
        >
          <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z" />
        </svg>
      </div>
      <div className="slider-bullets">
        {SLIDES.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`bullet${index === currentIndex ? " active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
