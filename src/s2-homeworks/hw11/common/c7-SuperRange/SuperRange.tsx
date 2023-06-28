import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '50%',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    color: '#00CC22',
                    width: '18px',
                    height: '18px',
                    border: '1px solid #00CC22',
                    backgroundColor: '#FFFFFF',
                    // backgroundColor: 'transparent',
                    '&::before': {
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00CC22',
                    },
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
