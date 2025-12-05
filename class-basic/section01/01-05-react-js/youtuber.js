const 민지채널페이지 = (props) => {
    return (
        <div>
            <div>민지의 채널에 오신 것을 환영합니다.</div>

            <span>구독자 수: {props.rrr}</span>
            <button onClick={props.qqq}>구독하기</button>
        </div>
    )
}