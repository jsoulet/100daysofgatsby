import React from 'react'

const Footer = () => {
    return <footer className="bg-white border-t border-gray-400">	
    <div className="container max-w-4xl mx-auto flex py-8">
        <div className="w-full mx-auto">
            <div className="py-4 text-gray-600 text-sm text-center w-full">
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org" className="underline">Gatsby</a>
            </div>  
        </div>
    </div>
</footer>
}

export default Footer;