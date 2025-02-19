interface HatchFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function HatchFooter({ children, className, ...props }: HatchFooterProps) {
    return (
        <div
            className={`p-8 text-center h-screen sm:h-auto sm:w-1/2 sm:flex sm:flex-col sm:justify-center bg-[#EAEDEB] sm:rounded-r-md ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    )
}
