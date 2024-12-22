'use client'

import { HatchFooter } from '../ui'
import { DonationSubmit } from '../ui/Card'
import PaymentMethod from './components/payment-method'
import DonationHeader from './components/donation-header'
import { DonationType } from './components/donation-type'
import { DonationAmounts } from './components/donation-amounts'
import { useDonation } from './hooks/use-donation'
const CardFooter = () => {
    const {
        donationType,
        setDonationType,
        selectedAmount,
        setSelectedAmount,
        currentAmounts
    } = useDonation()

    return (
        <HatchFooter>
            <DonationHeader
                title="Make a donation"
                subtitle="Do something amazing"
            />
            <DonationType
                donationType={donationType}
                setDonationType={setDonationType}
            />
            <DonationAmounts
                amounts={currentAmounts}
                selectedAmount={selectedAmount}
                onSelectAmount={setSelectedAmount}
            />

            <DonationSubmit>
                Donate
            </DonationSubmit>
            <PaymentMethod />
        </HatchFooter>
    )
}

export default CardFooter