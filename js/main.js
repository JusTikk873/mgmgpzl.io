////////////////////////////////
// ゲームループメイン関数
////////////////////////////////

//////////////////////////////
// 定数
var ST_OPENING = 0;
var ST_TOP = 1;
var ST_GAME = 2;
var ST_GAMEOVER = 3;
var ST_GAMECLEAR = 4;
var ST_RULE = 5;
var ST_ITEM = 6;

//////////////////////////////
// グローバル変数
var gFirstFlg = 1;
var gFirstOpnFlg = 1;
var gFirstTopFlg = 1;
var gFirstGamFlg = 1;
var gFirstOveFlg = 1;
var gFirstClrFlg = 1;
var gFirstRulFlg = 1;
var gFirstIteFlg = 1;

var gState = ST_OPENING;
//var gState = ST_TOP;
//var gState = ST_GAME;

var gImageLogo;

var gMode = 0;			// 0:Normal 1:Hard
//////////////////////////////
// メインループ
function update() {

    //////////////////////////////
    // 初期化処理
    if (gFirstFlg == 1) {
        gFirstFlg = 0;
    }

    //////////////////////////////
    // 描画処理
    drawFill(0, 0, width, height, "white");                                         // 背景

    if (gState == ST_OPENING) {
        opening();
    } else if (gState == ST_TOP) {
        topS();
    } else if (gState == ST_GAME) {
        game();
    } else if (gState == ST_GAMEOVER) {
        gameOver();
    } else if (gState == ST_GAMECLEAR) {
        gameClear();
    } else if (gState == ST_RULE) {
        Rule();
    } else if (gState == ST_ITEM) {
        Item();
    }
}

