// geting canvas by Boujjou Achraf
let c = document.getElementById("c");
let ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
//chinese characters - taken from the unicode charset
// let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";

// let matrix = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ123456789@#$%^&*()*&^%+-/~{[|`]}";


let matrix = "甲乙丙丁戊己庚辛壬癸申酉戌亥子丑寅卯辰巳午未申酉戌亥子丑寅卯辰巳午未火水木金土日月山川空海風雲雨雪雷霜花桜梅竹蘭菊松柳牡牛虎兎龍蛇馬羊猿犬猪北南東西上下左右中男女大小明暗新古高低長短広狭厚薄強弱硬軟重軽暖冷暑寒春夏秋冬朝昼晩夜真偽善悪美醜賢愚正邪幸不幸福不幸生死勝敗吉凶神仏天地人物動静円方直曲円角上下前後左右内外表裏真偽声音音楽歌舞画写真文学詩小説劇映画演劇舞台映像音声文字絵画彫刻建築工芸茶道華道生け花料理服飾家具器具道具工具乗り物運動競技野球サッカーテニスバスケットボールバレーボール卓球相撲柔道剣道空手合気道登山釣りキャンプ旅行散歩散策旅路旅客旅貨物旅郵便電話通信放送通信衛星通信情報情報技術情報セキュリティ情報処理情報システム情報ネットワーク情報データ情報通信技術情報通信工学情報通信学情報通信論理学情報通信工学科情報通信学部情報通信学科情報通信学科目情報通信学科目情報通信学部門情報通信学科門情報通信学科系情報通信学科制度情報通信学科制度改革情報通信学科改革案情報通信学科改革計画情報通信学科改革構想123456789@#$%^&*()*&^%+-/~{[|`]}";

//converting the string into an array of single characters
matrix = matrix.split("");

let font_size = 12;
let columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(let x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#FFFF00";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(let i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        let text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 100);
