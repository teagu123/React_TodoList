import styled from 'styled-components'
function Header({ filter, filters, setFilter }) {
	return (
		<Headers>
			<h2>To do List</h2>
			<Ul>
				{filters.map((el, idx) => (
					<Li key={idx} state={filter === el}>
						<Btn onClick={() => setFilter(el)}>{el}</Btn>
					</Li>
				))}
			</Ul>
		</Headers>
	)
}
export default Header

const Headers = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-bg-dark);
	border-bottom: 1px solid var(--color-gray);
	& > h2 {
		margin-left: 1rem;
		font-size: 30px;
		color: #f57f17;
	}
`
const Ul = styled.ul`
	display: flex;
`
const Li = styled.li`
	border-bottom: 2px solid ${({ state }) => (state ? '#f57f17' : 'transparent')};
`
const Btn = styled.button`
	font-size: 1.4rem;
	margin: 0.3rem;
	text-transform: capitalize;
	background-color: transparent;
	color: var(--color-accent);
	opacity: 0.8;
	font-weight: bold;

	:hover {
		opacity: 1;
	}
`
