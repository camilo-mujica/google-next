import React from 'react'

interface Props {
    children: React.ReactNode
}
const PrimaryLayout = ({ children }: Props) => {
    return <>{children}</>
}

export default PrimaryLayout
