
/**
 * A wrapper component that applies all the styling for a regular card. All content is just passed in as a regular HTML child component
 * @param children The content to be wrapped in a card styling
 * @returns A full card with all content contained
 */
const StyledCard = ({ children }: {children: React.ReactNode}): JSX.Element => {

    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                { children }
            </div>
        </div>
    )
}

export default StyledCard