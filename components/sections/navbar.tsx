import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-12 h-16 shadow-md bg-white">
            <div className="h-16 flex items-center">
                <Image
                    alt="logo"
                    src={"/imgs/logo.png"}
                    width={98 * 0.75}
                    height={67 * 0.75}
                />
            </div>
            <div className="flex items-center justify-center gap-14 text-[#ED4935] font-semibold text">
                <Link href={"/#"}>Home</Link>
                <Link href={"/#"}>Join The Community</Link>
                <Link href={"/#"}>View Our Expert Profile</Link>
            </div>
            <div></div>
        </nav>
    )
}