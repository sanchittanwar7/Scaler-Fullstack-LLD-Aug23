import React from 'react'

const Pagination = (props) => {
    const {pageNumberProp, onNext, onPrevious} = props
    
    return (
        <div className='flex justify-center'>
            <div onClick={onPrevious} className='m-4 p-2 border-2'>
                Previous
            </div>
            <div className='m-4 p-2 border-2'>
                {pageNumberProp}
            </div>
            <div onClick={onNext}className='m-4 p-2 border-2'>
                Next
            </div>
        </div>
  )
}

export default Pagination