import { useState } from 'react'

export function useDonation() {
    const [donationType, setDonationType] = useState<'single' | 'regular'>('single')
    const [selectedAmount, setSelectedAmount] = useState<number>(10)

    const amounts = {
        single: [5, 10, 20, 50],
        regular: [10, 20, 40, 100]
    }

    const currentAmounts = amounts[donationType]

    return {
        donationType,
        setDonationType,
        selectedAmount,
        setSelectedAmount,
        currentAmounts
    }
}