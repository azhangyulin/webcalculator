// 获取显示元素
const display = document.getElementById('display');

// 添加内容到显示
function appendToDisplay(value) {
    display.value += value;
}

// 清空显示
function clearDisplay() {
    display.value = '';
}

// 删除最后一个字符
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// 计算结果
function calculateResult() {
    try {
        // 替换 % 为 /100
        let expression = display.value.replace(/%/g, '/100');
        // 计算表达式
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// 计算平方根
function calculateSquareRoot() {
    try {
        const value = parseFloat(display.value);
        if (value >= 0) {
            display.value = Math.sqrt(value);
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// 键盘支持
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // 允许的键
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9',
                        '.','+','-','*','/','%','(',')','Enter','Backspace','s'];
    
    if (allowedKeys.includes(key)) {
        event.preventDefault();
        if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            deleteLast();
        } else if (key === 's') {
            calculateSquareRoot();
        } else {
            appendToDisplay(key);
        }
    }
});
