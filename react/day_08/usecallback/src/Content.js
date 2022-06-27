import { memo } from 'react'

function Content({ onIncrease }) {
    console.log("re-render");

    return (
        <div>
            <h2>Phương Loan</h2>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}

export default memo(Content)