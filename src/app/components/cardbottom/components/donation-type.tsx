import { DonationTypeSelector } from "../../ui/Card"

interface DonationTypeProps {
    donationType: 'single' | 'regular'
    setDonationType: (type: 'single' | 'regular') => void
}

export function DonationType({ donationType, setDonationType }: DonationTypeProps) {
    return (
        <DonationTypeSelector>
            <button
                onClick={() => setDonationType('single')}
                className={`px-6 py-2 rounded-full font-semibold sm:w-[180px] sm:h-[64px] w-[136px] h-[48px] ${donationType === 'single'
                        ? 'bg-[#1B3B36] text-white'
                        : 'border border-[#1B3B36] text-[#1B3B36]'
                    }`}
            >
                Single
            </button>
            <button
                onClick={() => setDonationType('regular')}
                className={`px-6 py-2 rounded-full font-semibold sm:w-[180px] sm:h-[64px] w-[136px] h-[48px] ${donationType === 'regular'
                        ? 'bg-[#1B3B36] text-white'
                        : 'border border-[#1B3B36] text-[#1B3B36]'
                    }`}
            >
                Regular
            </button>
        </DonationTypeSelector>
    )
}