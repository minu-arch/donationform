import React from 'react'
import { DonationTitle, DonationSubtitle } from '../../ui/Card'

interface DonationHeaderProps {
    title: string
    subtitle: string
}

const DonationHeader = ({ title, subtitle }: DonationHeaderProps) => {
    return (
        <>
            <DonationTitle>{title}</DonationTitle>
            <DonationSubtitle>{subtitle}</DonationSubtitle>
        </>
    )
}

export default DonationHeader