const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3 ">
                <div className="social-icon flex justify-center items-center w-10 h-10">
                    <a href="https://github.com/gargDhruv12" target="_blank">
                        <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
                    </a>
                </div>

                <div className="social-icon flex justify-center items-center w-10 h-10">
                    <a href="https://www.linkedin.com/in/dhruv-garg-ab15302b4" target="_blank">
                        <img src="/assets/linkedin.svg" alt="twitter" className="w-6 h-6" />
                    </a>
                </div>

                <div className="social-icon flex justify-center items-center w-10 h-10">
                    <a href="https://www.instagram.com/dhruv_garg.512/" target="_blank">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
                    </a>
                </div>
                <div className="social-icon flex justify-center items-center w-10 h-10">
                    <a href="https://x.com/DhruvGarg862389" target="_blank">
                        <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
                    </a>
                </div>

            </div>

            <p className="text-white-500">© 2025 Dhruv Garg. All rights reserved.</p>
        </section>
    )
}

export default Footer
