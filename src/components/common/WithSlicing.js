import React from 'react'


function orderByDate(arr) {
  return arr.slice().sort(function (a, b) {

    const aSplitDate = a.start_date.split('/')
    const aMonth = aSplitDate[1] - 1
    const aDate = new Date(aSplitDate[2], aMonth, aSplitDate[0])

    const bSplitDate = b.start_date.split('/')
    const bMonth = bSplitDate[1] - 1
    const bDate = new Date(bSplitDate[2], bMonth, bSplitDate[0])

    const parsedaDate = Date.parse(aDate)
    const parsedbDate = Date.parse(bDate)

    return parsedbDate - parsedaDate
  })
}

function WithSlicing(Component) {
  return function WithSlicingComponent({ filteredExhibitions, ...props }) {
    return (<Component
      filteredExhibitions={orderByDate(filteredExhibitions).slice(0, 4)}
      {...props}
    />)
  }
}

export default WithSlicing
