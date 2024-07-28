const Header = () => {
    return (
        <div className="mt-8">
            <h1 className='text-7xl md:text-9xl font-semibold text-yellow-400 relative'>
                1
                <span className='w-2 h-2 bg-yellow-400 absolute bottom-[6px]'>
                </span>
                <span className='ml-4'>2</span>
                <span className='w-2 h-2 bg-yellow-400 absolute bottom-[6px]'>
                </span>
                <span className='ml-4'>3</span>
                <span className='w-2 h-2 bg-yellow-400 absolute bottom-[6px]'>
                </span>
            </h1>
        </div>
    );
};

export default Header;