import { Cell } from '.'

const NextTetris = ({ nextPreview }: { nextPreview: string[][] }) => {
	return (
		<>
			<p className='self-start font-bold'>Next</p>

			<div className='grid grid-cols-4'>
				{nextPreview.map((row: string[]) =>
					row.map((color: string, index: number) => (
						<Cell key={index} color={color} />
					))
				)}
			</div>
		</>
	)
}

export default NextTetris
