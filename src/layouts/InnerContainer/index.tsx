export default function InnerContainer({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className='w-full h-full flex justify-center'>
                <div className='w-full max-w-[120rem] px-4 md:px-6'>
                    { children }
                </div>
            </div>
        </>
    )
}
