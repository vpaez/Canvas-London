import React from 'react'


// function handleCurrentExhibitions(exhibitions, keywords) {
function whatsOn(arr) {
  return arr.filter(exhib => {

    const startSplitDate = exhib.start_date.split('/')
    const startMonth = startSplitDate[1] - 1
    const startDate = new Date(startSplitDate[2], startMonth, startSplitDate[0])

    const endSplitDate = exhib.end_date.split('/')
    const endMonth = endSplitDate[1] - 1
    const endDate = new Date(endSplitDate[2], endMonth, endSplitDate[0])

    const startParsed = Date.parse(startDate)
    const endParsed = Date.parse(endDate)
    const currentParsed = Date.parse(new Date())

    if (currentParsed > startParsed && currentParsed < endParsed ){
      return exhib
    }
  })
}

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




function WithCurrentFilter(Component) {
  return function WithCurrentFilterComponent({ exhibitions, ...props }) {
    const current = whatsOn(exhibitions)
    const currentSorted = orderByDate(current).slice(0, 10)
    return (<Component
      filteredExhibitions={currentSorted}
      {...props}
    />)
  }
}

export default WithCurrentFilter
