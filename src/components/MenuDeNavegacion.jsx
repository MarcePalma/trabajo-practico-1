import Link from "next/link"

export default function MenuDeNavegacion(){
    return(
        <ul>
            <li><Link className="text-cyan-400" href="/">Inicio</Link></li>
            <li><Link className="text-cyan-400" href="/contacto">Contacto</Link></li>
        </ul>
    )
}