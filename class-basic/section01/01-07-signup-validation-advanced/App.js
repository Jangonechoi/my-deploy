const App = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [emailError, setEmailError] = React.useState("")

    // 이벤트 핸들러 함수
    // handleChangeEmail 형태도 많이 쓰임
    const onChangeEmail = (event) => {
        console.log(event.target) // 작동된 태그
        console.log(event.target.value) // 작동된 태그에 입력된 값
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickSignup = (event) => {
        console.log(email) // 저장이 잘 됐는지 확인하기
        console.log(password) // 저장이 잘 됐는지 확인

        // 검증
        if(email.includes("@") === false) {
            // 정상이므로 백엔드 컴퓨터에 정보 전달 => 나중에 배움
            setEmailError("이메일이 올바르지 않습니다!! @없음!!")
        } else{
        //퀴즈) 코드작성하여 이메일아래쪽에 에러메시지 보여주기! (힌트: 새로운 state 만들어서 사용하기)
            alert("회원가입을 축하합니다!!!")

        }
    }

    return (
        <div className="철수의App">
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            {/* <div></div> */}
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}