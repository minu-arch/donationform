interface HatchHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function HatchHeader({ children, className, ...props }: HatchHeaderProps) {
    return (
        <div
            className={`w-full sm:w-1/2 ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    )
}
