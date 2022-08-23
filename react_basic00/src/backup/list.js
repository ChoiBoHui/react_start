import Some from "./some"

// const Test = ({ list }) => {
const Test = ({ list, age, name, onClick }) => {
    console.log(onClick)
    // const {list} = props
    // console.log(props)
    // const { list, age, name } = props;
    return (
        <div>
            <button onClick={onClick}>^^*</button>
            {/* <h2>우영우{list} list</h2> */}
            <h2>
                my{list}{age} 친구 {name} list
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>
            </h2 >
            <Some name={list} />
            {/* {}중괄호 안치면 그냥 text */}
            < ul >
                <li>my name 01</li>
                <li>my name 02</li>
                <li>my name 03</li>
                <li>my name 04 잠온다요...</li>
            </ ul>
        </div >
    )
}

export default Test;