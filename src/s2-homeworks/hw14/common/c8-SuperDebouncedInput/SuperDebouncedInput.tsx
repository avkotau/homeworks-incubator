import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState } from 'react'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
} // илм экспортировать тип SuperInputTextPropsType
    & {
    onDebouncedChange?: (value: string) => void
}

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = (
    {
        onChangeText,
        onDebouncedChange,

        ...restProps
    }
) => {
    const [timerId, setTimerId] = useState<number | NodeJS.Timeout>()

    const onChangeTextCallback = (value: string) => {
        onChangeText?.(value)

        if (onDebouncedChange) {
            if (timerId !== undefined) {
                clearInterval(timerId)
            }

            let timeoutId = setTimeout(() => {
                onDebouncedChange(value)
            }, 1500)
            setTimerId(timeoutId)
        }
    }

    return (
        <SuperInputText onChangeText={onChangeTextCallback} {...restProps}/>
    )
}

export default SuperDebouncedInput
