import React from 'react'

const Times = ({total}) => {
    return (
        <div>
            <span>
                {
                    (parseInt(total/3600)).toString().length < 2
                    ? '0' + (parseInt(total/3600))
                    : (parseInt(total/3600))
                }
            </span>
            <span>:</span>

            <span>
                {
                    (parseInt(total/60)).toString().length < 2
                    ? '0' + (parseInt(total/60))
                    : (parseInt(total/60))
                }
            </span>
            <span>:</span>

            <span>
                {
                    (total%60).toString().length < 2
                    ? '0' + (total%60) + 's'
                    : (total%60) + 's'
                }
            </span>
        </div>
    )
}

export default Times
