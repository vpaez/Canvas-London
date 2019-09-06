import React from 'react'


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




function WithCurrentFilter(Component) {
  return function WithCurrentFilterComponent({ exhibitions, ...props }) {
    return (<Component
      filteredExhibitions={whatsOn(exhibitions)}
      {...props}
    />)
  }
}

export default WithCurrentFilter
