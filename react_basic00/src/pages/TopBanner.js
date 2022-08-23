import { useState } from 'react';
import { BsChevronBarUp } from 'react-icons/bs';
import xxx from './Topbanner.module.css';

const TopBanner = () => {
    console.log(xxx)
    // 1. 아이콘을 클릭한다.
    // 2. 아이콘을 클릭하면 TopBanner 에 class "on" 을 붙인다. / 뗀다. 는 계획
    // 3. 변수를 만들어서 true / false 되는 스위치를 만들고,
    // 4. true / false 에 따라서 class "on" 을 붙인다. / 뗀다.

    const [toggle, setToggle] = useState(false)

    const css = {
        fontSize: '100px',
        color: '#f00'
    }

    return (
        <>
            <div className={`TopBanner ${toggle ? 'on' : ''}`}>
                {/* 리액트 안에서는 if문이나 for문을 쓸수가 없다.? */}
                <h2>Lorem ipsum dolor sit. {toggle ? 'on' : ''}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, expedita!</p>
                <a href="" onClick={
                    (e) => {
                        e.preventDefault();
                    }
                }>more</a>
                {/* 리액트는 싱글 페이지??? 이기 때문에 어디로 가라는 태그는 link to 를 사용한다. */}
            </div>
            <span onClick={() => {
                setToggle(!toggle)
            }} className={toggle ? 'btn on' : 'btn'}>
                <BsChevronBarUp />
            </span>
            <div style={xxx}>style test</div>
        </>
    )
}
// scss / styled-component / css module / style={{}} / const style = {}

export default TopBanner;