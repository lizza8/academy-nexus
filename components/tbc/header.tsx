"use client"

import { useEffect, useState } from "react"

const NAV_LINKS = [
  { href: "#", label: "მთავარი" },
  { href: "#", label: "TBC IT" },
  { href: "#courses", label: "TBC x USAID" },
  { href: "#", label: "რისკები" },
]

export function TbcHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hiddenUp, setHiddenUp] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0

    const onScroll = () => {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop
      setScrolled(scrollOffset > 0)

      if (window.innerWidth <= 992) {
        if (scrollOffset > 90 && scrollOffset > lastScrollTop) {
          setHiddenUp(true)
        } else {
          setHiddenUp(false)
        }
      } else {
        setHiddenUp(false)
      }

      lastScrollTop = scrollOffset
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${hiddenUp ? " hidden-up" : ""}`}
    >
      <div className="header-container container">
        <a className="header-logo" href="#" aria-label="Home">
          <img src="/assets/images/common-images/logo.svg" alt="TBC Academy Logo" />
        </a>
        <nav className="main-navigation">
          <ul className="menu-list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`overlay-fade${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-menu-items">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button
          type="button"
          className={`mobile-menu-toggle${menuOpen ? " open-menu" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className="menu-bar bar1" />
          <div className="menu-bar bar2" />
          <div className="menu-bar bar3" />
        </button>
      </div>
    </header>
  )
}
