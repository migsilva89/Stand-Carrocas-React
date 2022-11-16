import React from 'react'

function PagesLayout(props) {
  return (
    <section className="max-w-8xl m-auto px-12">
        {props.children}
    </section>
  )
}

export default PagesLayout