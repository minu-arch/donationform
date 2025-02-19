import { HTMLAttributes } from "react"

interface HatchProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Hatch({ children, className, ...props }: HatchProps) {
    return (
        <div
            className={`min-h-screen flex items-center justify-center bg-white p-1 ${className || ''}`}
            {...props}
        >
            <div className={`w-full h-screen sm:max-w-[1120px] sm:h-[616px] flex flex-col sm:flex-row sm:size-3/4 ${className || ''}`}>
                {children}
            </div>
        </div>
    )
}
