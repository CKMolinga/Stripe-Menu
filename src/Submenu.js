import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page:{page, links}
  } = useGlobalContext()

  const [columns, setColumns] = useState('col-2')
  const container = useRef(null)

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length === 3) {
      setColumns('col-3')
    }
    if(links.length > 3) {
      setColumns('col-4')
    }
    
  }, [location])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
      <h4>{page}</h4>
      <div className={`submenu-center $
      ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
        </section>
      <div className={`submenu-center col-2`}></div>
    </aside>
  )
}

export default Submenu
