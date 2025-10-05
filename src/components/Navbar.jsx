import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Navbar() {
    useGSAP(() => {
        gsap.from(".anim", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
            stagger: .25,
            delay: 1.2
        })
    })
    return (
        <nav className="py-7 relative">
            <div className="border size-[341px] absolute top-[-200%] right-[-7rem] rounded-full">

            </div>
            <div className="flex items-center justify-between">
                <h3 className="uppercase text-[30px] font-semibold anim">Swimmie.</h3>
                <ul className="flex items-center gap-2 justify-between w-full max-w-xl text-[20px] font-semibold">
                    <li className="anim">About</li>
                    <li className="anim">Shop</li>
                    <li className="anim">Contact</li>
                </ul>
                <button className="anim">
                    <img src="/menu.png" alt="" />
                </button>
            </div>
        </nav>
    )
}
