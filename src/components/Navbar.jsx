export default function Navbar() {
    return (
        <nav className="py-7">
            <div className="flex items-center justify-between">
                <h3 className="uppercase text-[30px] font-semibold">Swimmie.</h3>
                <ul className="flex items-center gap-2 justify-between w-full max-w-xl text-[20px] font-semibold">
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                <button>
                    <img src="/menu.png" alt="" />
                </button>
            </div>
        </nav>
    )
}
