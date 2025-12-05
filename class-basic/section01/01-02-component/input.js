// 만약 컴포넌트 이름을 영어로 한다면 => 대문자로 시작할 것(진짜HTML의 input, div 들 중복되기때문) 
const 영희의인풋 = () => {

    const 나만의초기메세지 = "비밀번호를 입력하세요"

    // 한줄은 소괄호 생략 가능
    // 현재는 JS(가짜HTML) => 
    // 나중에 바벨이 변수까지 다 합쳐서 진짜HTML로 바꿔줌
    return(
        <input type="text" placeholder={나만의초기메세지}/>
    )
}