import NavBar from "./nav-bar"

/**
 * A wrapper component that applies both a Nav Bar, and a restricted content width, allowing for easy consistent styling across pages.
 * @param children The page to be wrapped
 * @returns A full page with both the page, and everything that it has been wrapped with
 */
const PageWrapper = ({ children }: {children: React.ReactNode}): JSX.Element => {
    return (
        <>
            <NavBar />
            <div className="bg-gray-100 w-full h-full py-10 grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4">
                    {children}
                </div>
            </div>
        </>
    )
}

export default PageWrapper