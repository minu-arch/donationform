import { DonationAmountSelector } from "../../ui/Card"

interface DonationAmountsProps {
    amounts: number[]
    selectedAmount: number
    onSelectAmount: (amount: number) => void
}

export function DonationAmounts({ amounts, selectedAmount, onSelectAmount }: DonationAmountsProps) {
    return (
        <DonationAmountSelector>
            {amounts.map((amount) => (
                <button
                    key={amount}
                    onClick={() => onSelectAmount(amount)}
                    className={`
              rounded-full px-4 py-2 font-semibold 
              sm:w-[86px] sm:h-[64px] w-[64px] h-[48px]
              transition-colors duration-200
              focus:outline-none focus:ring-[#1B3B36] focus:ring-offset-2
              ${amount === selectedAmount
                            ? 'bg-[#1B3B36] text-white'
                            : 'border border-[#1B3B36] text-[#1B3B36] hover:bg-[#1B3B36]/10'
                        }
            `}
                >
                    £{amount}
                </button>
            ))}
        </DonationAmountSelector>
    )
}