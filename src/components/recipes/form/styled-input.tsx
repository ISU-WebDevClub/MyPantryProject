

type MyPantryInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {

}

const MyPantryInput = (props: MyPantryInputProps) => {

    const defaultClasses:string = "block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    return (
        <input
            type={props.type}
            id={props.id}
            className={`${defaultClasses} ${props.className ?? ""}`}
            placeholder={props.placeholder}
            required={props.required}
            name={props.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
        />
    )
}

export default MyPantryInput