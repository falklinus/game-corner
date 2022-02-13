const Display = ({ text, value }: { text: string; value: number }) => {
  return (
    <div className='flex items-center justify-between w-full rounded-lg bg-gray-700 p-2'>
      <span className='text-[0.5rem] font-bold uppercase text-white sm:text-base align-middle'>
        {text}
      </span>
      <span className='float-right text-xs text-white sm:text-xl align-middle'>
        {value.toLocaleString()}
      </span>
    </div>
  )
}

export default Display
