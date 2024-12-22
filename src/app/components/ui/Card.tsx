import * as React from "react"

// Root component
interface DonationCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

// Title
const DonationTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className="text-4xl font-bold text-[#1B3B36] mb-2"
                {...props}
            >
                {children}
            </h1>
        )
    }
)
DonationTitle.displayName = "DonationTitle"

// Subtitle
const DonationSubtitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className="text-xl text-[#4d7972] mb-8"
                {...props}
            >
                {children}
            </p>
        )
    }
)
DonationSubtitle.displayName = "DonationSubtitle"

// Type Selector
const DonationTypeSelector = React.forwardRef<HTMLDivElement, DonationCardProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className="flex gap-4 justify-center mb-6"
                {...props}
            >
                {children}
            </div>
        )
    }
)
DonationTypeSelector.displayName = "DonationTypeSelector"

// Amount Selector
const DonationAmountSelector = React.forwardRef<HTMLDivElement, DonationCardProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className="flex gap-2 mb-8 justify-center"
                {...props}
            >
                {children}
            </div>
        )
    }
)
DonationAmountSelector.displayName = "DonationAmountSelector"

// Submit Button
const DonationSubmit = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className="bg-[#FDB813] text-[#1B3B36] rounded-full py-3 mb-8 font-semibold sm:max-w-[368px] sm:h-[64px] w-full h-[48px] self-center"
                {...props}
            >
                {children}
            </button>
        )
    }
)
DonationSubmit.displayName = "DonationSubmit"

// Payment Methods
const DonationPaymentMethods = React.forwardRef<HTMLDivElement, DonationCardProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                {...props}
            >
                {children}
            </div>
        )
    }
)
DonationPaymentMethods.displayName = "DonationPaymentMethods"

export {
    DonationTitle,
    DonationSubtitle,
    DonationTypeSelector,
    DonationAmountSelector,
    DonationSubmit,
    DonationPaymentMethods
}