import Link from "next/link";
import { FC } from "react";

interface NavLinksProps{
    destination: string,
    label: string
}

const NavLinks: FC<NavLinksProps> = (props) => {
    return (
        <div id="navLinkContainer">
            <Link href={props.destination}
             style={{
                padding: "0.75rem 1rem",
                margin: "1rem 0.25rem"
            }}>
                {props.label}
            </Link>
        </div>
    )
}

export default NavLinks