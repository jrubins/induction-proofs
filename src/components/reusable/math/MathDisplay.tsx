import React, { useEffect, useRef } from 'react'
import katex from 'katex'

/**
 * Renders a better looking mathematical display using the katex library: https://katex.org/.
 */
const MathDisplay = ({ mathStr }: { mathStr: string }) => {
  const mathRoot = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (mathRoot.current) {
      katex.render(mathStr, mathRoot.current, {
        throwOnError: false,
      })
    }
  }, [mathStr])

  return <span ref={mathRoot}></span>
}

export default MathDisplay
