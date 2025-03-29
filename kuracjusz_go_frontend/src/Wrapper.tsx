type WrapperProps={
    children:React.ReactNode
}
export default function Wrapper({children}:WrapperProps){
    return <div className="max-lg:px-24 max-md:px-12 max-sm:px-4 w-full h-full">
        {children}
    </div>
}