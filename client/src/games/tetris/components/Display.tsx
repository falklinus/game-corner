const Display = ({ text, value }: { text: string; value: number }) => {
  return (
    <div className='inline-block w-full rounded-lg bg-gray-700 p-2'>
      <span className='text-xs font-bold uppercase text-white sm:text-base'>{text}</span>
      <span className='float-right text-white sm:text-xl'>{value.toLocaleString()}</span>
    </div>
  )
}

export default Display
