/// <reference types="react" />
import "./mylabel.css";
export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
    color?: "primary" | "secondary" | "tertiary";
    fonstColor?: string;
    allCaps?: boolean;
}
export declare const MyLabel: ({ label, size, color, allCaps, fonstColor }: Props) => JSX.Element;
