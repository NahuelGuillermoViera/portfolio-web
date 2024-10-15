import React from 'react'
import Publication from './Publication'
import {useMediaQuery} from 'react-responsive'

const Feed = () => {
    const isDesktopOrLaptop = useMediaQuery ({
        query: '(min-width: 600px)'
      })

  return (
    <div className='feed'>
        {isDesktopOrLaptop &&
            <> 
                <div className='rows'>
                    <Publication />
                    <Publication />
                </div>
                <div className='rows'>
                    <Publication />
                    <Publication />
                </div>
            </>
        }
        {!isDesktopOrLaptop &&
            <>
            <Publication />
            <Publication />
            <Publication />
            <Publication />
            <Publication />
            <Publication />
            <Publication />
            </>
        }
    </div>
  )
}

export default Feed
