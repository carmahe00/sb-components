import "./mylabel.css"
export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string
    /**
     * Este es el tamaño de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3"

    color?: "primary" | "secondary" | "tertiary",

    fonstColor?: string,

    allCaps?: boolean
}
export const MyLabel = ({ label = "No label", size = "normal", color = "primary", allCaps = false, fonstColor }: Props) => {
    return (
        <span className={`label ${size} text-${color} `} style={{color: fonstColor}} >
            {allCaps ? label.toUpperCase() : label.toLowerCase()}
        </span>
    )
}
