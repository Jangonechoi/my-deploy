const 메인페이지 = () => {

    const [구독자수, 구독자수변경함수] = React.useState(0)

    const 구독자올리는기능 = () => {
        구독자수변경함수(구독자수 + 1)
    }

    const 목록페이지보여주는기능 = () => {
        document.getElementById("목록페이지보여주는곳").style = "display: block"
        document.getElementById("민지채널페이지보여주는곳").style = "display: none"
    }

    const 민지채널페이지보여주는기능 = () => {
        document.getElementById("목록페이지보여주는곳").style = "display: none"
        document.getElementById("민지채널페이지보여주는곳").style = "display: block"
    }

    return (
        <>
            <div>
                <button onClick= {목록페이지보여주는기능}>유튜브목록</button>
                <button onClick={민지채널페이지보여주는기능}>유튜버민지채널</button>
            </div>
            <div id="목록페이지보여주는곳">
                <목록페이지 zzz ={구독자수} /> {/* {목록페이지{ zzz: 구독자수}}} */}
            </div>
            <div id="민지채널페이지보여주는곳">
                <민지채널페이지 rrr = {구독자수} qqq = {구독자올리는기능} />
            </div>
        </>
    )
}