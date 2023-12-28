import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
import { ArrDataType } from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: ArrDataType[]
    onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {

    const mappedOptions: JSX.Element[] = options
        ? options.map((o, i) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o + '-' + i}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {

            onChangeOption(+e.currentTarget.value)
        }
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
