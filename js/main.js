//問題文
let Q = ["apple","banana","melon","mango","starwberry","blueberry","orange"];

//問題をランダムで出題する
let Q_No = Math.floor( Math.random() * Q.length);

//回答初期値・現在単語どこまで合っているか判定している文字番号
let Q_i = 0;
//計算用の文字の長さ
let Q_l = Q[Q_No].length;


window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){

let keyCode = event.key;
if (Q_l == Q_l-Q_i){

    //問題を書き出す
    document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); 
    }

    //押したキーが合っていたら
if (Q[Q_No].charAt(Q_i) == keyCode) { 

    //判定する文章に１足す
    Q_i++; 
    //問題を書き出す
    document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); 

    //全部正解したら
    if (Q_l-Q_i === 0){ 

        //問題をランダムで出題する
        Q_No = Math.floor( Math.random() * Q.length);
        //回答初期値・現在どこまで合っているか判定している文字番号
        Q_i = 0;
        //計算用の文字の長さ
        Q_l = Q[Q_No].length;

        //新たな問題を書き出す
        document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); 

    }
}
}