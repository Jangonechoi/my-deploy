import 좋은과일 from './fruit.js'

console.log("좋은과일: ", 좋은과일)



import { 사과,포도 } from './fruit.js'

console.log("사과: ", 사과)
console.log("포도: ", 포도)


// 합쳐서 불러오기도 가능함
// import 좋은과일, { 사과, 포도 } from "./fruit.js"

import * as 과일뭉치 from './fruit.js'

console.log("과일뭉치: ", 과일뭉치)
console.log("과일뭉치.사과: ", 과일뭉치.사과)
console.log("과일뭉치.포도: ", 과일뭉치.포도)
console.log("과일뭉치.default: ", 과일뭉치.default)