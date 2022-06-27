import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './renderGame.scss';

RenderGame.propTypes = {

};

// hàm đếm ngược thời gian
function Time() {
    
}

// hàm lấy số bất kì từ 1 đến 9
function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
}

// hàm lấy toán tử bất kì
function randomOperator() {
    const operators = ['+', '-'];
    let index = Math.floor(Math.random() * operators.length);
    return operators[index];
}

// hàm tính kết quả của phép tính random
function caculator(a, operator, b) {
    let total = eval(`${a} ${operator} ${b}`);
    return total;
}

// hàm lấy màu ngẫu nhiên
function changeColor() {
    let res = [];
    for (let i = 0; i < 3; i++) {
        res[i] = Math.floor(Math.random() * 256);
    }

    return `rgb(${res.toString()})`;
}

// hàm render
function RenderGame({ key }) {

    // useState để thay đổi điểm số
    const [score, setScore] = useState(0);

    // useState để thay đổi các giá trị phép tính
    const [array, setArray] = useState({
        firstNumber: 1,
        secondNumber: 2,
        operator: "+",
        resultNumber: 3,
    });



    // useState thay đổi màu nền
    const [color, setColor] = useState('burlywood');

    // hàm khi bấm button true
    function handleClick1() {
        // thay đổi giá trị trong phép tính
        setArray({
            firstNumber: randomNumber(),
            secondNumber: randomNumber(),
            operator: "+",
            resultNumber: randomNumber(),
        }
        )

        // thay đổi màu nền
        setColor(changeColor());

        // tính kết quả phép tính random
        let result = caculator(array.firstNumber, array.operator, array.secondNumber);
        console.log(result);
        // kiểm tra xem kết quả random đúng không, nếu đúng thì tăng điểm
        if (result == array.resultNumber) {
            setScore(score + 1);
        } else {
            alert('End game');
            setScore(0);
        }
    };

    const [countdown, setCountdown] = useState(10);
    useEffect(() => {
        setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
    }, [])

    // hàm khi bấm button false
    function handleClick2() {
        setArray({
            firstNumber: randomNumber(),
            secondNumber: randomNumber(),
            operator: "+",
            resultNumber: randomNumber(),
        }
        )

        setColor(changeColor());

        let result = caculator(array.firstNumber, array.operator, array.secondNumber);
        console.log(result);
        if (result != array.resultNumber) {
            setScore(score + 1);
        } else {
            alert('End game');
            setScore(0)
        }

    };

    return (
        <div className='game' style={{ backgroundColor: color }}>
            <div className='time'>
                <p>Time: </p>
                <p>{countdown}</p>
            </div>

            <div className='score'>
                <p>Points: </p>
                <p>{score}</p>
            </div>

            <div className='answer'>
                <span>{array.firstNumber}</span>
                <span>{array.operator}</span>
                <span>{array.secondNumber}</span>
                <span>=</span>
                <span>{array.resultNumber}</span>
            </div>

            <div className='icon'>
                <button onClick={handleClick1}>TRUE</button>
                <button onClick={handleClick2}>FALSE</button>
            </div>
        </div>
    )
}

export default RenderGame;