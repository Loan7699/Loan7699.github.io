import { useState, memo } from 'react'

// memo() => ko phải là 1 hooks, là 1 HOC (Higher Order Component)
// ghi nhớ lại những props của 1 component quyết định render Com đó ko => tránh bị re-render trong tình huống ko cần thiết

function Content() {
    console.log('re-render');
    // khi sử dụng memo do ko có props nào trong Content thay đổi nên nó ko bị re-render mỗi khi file App re-render

    return (
        <div>
            <h1>Phương Loan</h1>
        </div>
    )
}

export default memo(Content)
// nhận vào 1 Component và check các props của Com có thay đổi sau mỗi lần re-render ko, nếu có ít nhất 1 props bị thay đổi thì Com sẽ re-render, ngược lại ko re-render, sử dụng ===