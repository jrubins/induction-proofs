import React from 'react'

import MathDisplay from '../../reusable/math/MathDisplay'

const SummationNNumbersPage = () => {
  const summation = String.raw`1 + 2 + \dotsc + 3 + n`
  const endResult = String.raw`\frac{n(n + 1)}{2}`

  return (
    <div className="summation-n-nummbers-page">
      <div className="induction__step">
        <div className="induction__step-header">Theorem:</div>{' '}
        <MathDisplay mathStr={`${summation} = ${endResult}`} />
        <div className="induction__method">Proof by induction.</div>
      </div>
      <div className="induction__step">
        <div className="induction__step-header">Predicate:</div>{' '}
        <MathDisplay mathStr={`P(n) = ${summation} = ${endResult}`} />
      </div>
      <div className="induction__step">
        <div className="induction__step-header">Base Case:</div>{' '}
        <MathDisplay
          mathStr={String.raw`
          \begin{aligned}
            P(1) = 1 &= \frac{1(1+1)}{2} \\
            & = \frac{1(2)}{2} \\
            & = \frac{2}{2} \\
            & = 1 \\
          \end{aligned}
        `}
        />
      </div>
      <div className="induction__step">
        <div className="induction__step-header">Inductive Step:</div> Assume
        that <MathDisplay mathStr={String.raw`P(n)`} /> is true. Show that this
        implies <MathDisplay mathStr={String.raw`P(n + 1)`} /> is true.
      </div>
      <div>
        <MathDisplay
          mathStr={String.raw`
          \begin{aligned}
            P(n + 1) = ${'\\underbrace'}{${summation}}_{\text{our predicate}} + (n + 1) &= \frac{(n + 1)((n + 1) + 1))}{2} \\[3ex]
            ${endResult} + (n + 1) &= \frac{(n + 1)(n + 2)}{2} \\[3ex]
            \frac{n(n+1)+2(n+1)}{2} &= \frac{(n + 1)(n + 2)}{2} \\[3ex]
            \frac{(n + 1)(n + 2)}{2} &= \frac{(n + 1)(n + 2)}{2}
          \end{aligned}
        `}
        />
      </div>
    </div>
  )
}

export default SummationNNumbersPage
