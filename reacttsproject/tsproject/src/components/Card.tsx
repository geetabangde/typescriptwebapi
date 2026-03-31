import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string
    description: string
    imageUrl: string
    footer?: ReactNode
}
export function Card({ title, children, description, imageUrl, footer }: CardProps) {
    return (
        <>
            <h1>{title}</h1>
            <p>{children}</p> 
            <p>{description}</p>
            <img src={imageUrl} alt={title} />
            {footer}
        </>
    )
    
}