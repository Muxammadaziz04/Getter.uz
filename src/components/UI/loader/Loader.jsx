import React from 'react'
import cls from './Loader.module.scss'

export default function Loader() {
    return (
        <div className={cls.loader}>
            <img src="/amalie-steiness.gif" />
        </div>
    )
}
