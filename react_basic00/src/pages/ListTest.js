const DATA = [
    { id: 1, name: 'Emma', age: 21, sleep: true },
    { id: 2, name: 'Nive', age: 24, sleep: false },
    { id: 3, name: 'Emily', age: 29, sleep: true, job: 'nurse' }
    // 여기에 job 을 쓰면 오류가 나던데.. 왜그럴까나..? => 아진짴ㅋㅋ 숫자를 제외한 모든 글자는 '' 따옴표 써서 문자로 따옴표 안에 넣어줘야함
]

const ListTest = () => {
    return (
        <ul>
            {/* <li>{DATA[0].name}</li> */}
            {/* <li>{DATA.map(it => it.name)}</li> */}
            {/* {DATA.map(it => <li>{it.name}은 {it.age}살 {it.sleep ? '자고 있음' : '놀고있음'}</li>)} */}
            {DATA.map(
                (it, idx) =>
                    <li key={it.id}>
                        {/* 아주 특별한 경우가 아니면 it, idx의 idx값과 key={idx} 값을 같이 쓰지 말라고 함. 그럼 무엇을 쓰는가? 위에 배열에 넣어둔 id 값을 주로 쓴다. */}
                        {idx + 1}번 {it.name}은 {it.age}살 {it.sleep ? '자고 있음' : '놀고있음'}
                    </li>
            ).slice(0, 2).reverse()
            }

            {DATA.map(it =>
                <li key={it.id}>
                    {it.name} {it.age} {it.sleep ? "sleeping" : "playing"}
                </li>)
            }

            {/* ?쓰는걸 사망연산자라고 하는 것 같음. 얘는 항상 짝이 있어야 해서 false 일 경우 : 를 써준다. */}
            {/* {DATA[0].name} 는 {DATA[0].age}살 {DATA[0].sleep && '자고있음'} */}
            {/* {DATA.map(function (it) { return it.name })} */}
        </ul>
    )
}

export default ListTest;
