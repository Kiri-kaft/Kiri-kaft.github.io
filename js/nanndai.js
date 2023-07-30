//問題文
let Q = ["race","rabbit","hieroglyphic","midnight","agonizing","abuse","post-traumatic stress disorder","psychotherapy","parent-teacher association","lexicography",
"honorarium","disciple","departmentalization","constitution","I like sushi very much.","In fact, we cannot agree with you in the point.","Do you need anything?","What can be inferred from the results?",
"The heavy snow prevented me from shadowboxing.","Shall we dance?-Yes,but I have to remove my watch due to contemporary dance.","May I help you?-Yes, I need some money to go to America.","Where are you!?-Don't worry! I'm on the bed in my house!"]
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