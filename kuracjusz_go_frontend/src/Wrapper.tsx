type WrapperProps={
    children:React.ReactNode
}
export default function Wrapper({children}:WrapperProps){
    return <div className="lg:px-12 md:px-6 sm:px-4  h-full relative">
        {children}
    </div>
}