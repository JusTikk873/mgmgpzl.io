//////////////////////////////
// 終了画面
var gImageOver;
var gDispCnt_END = 0;

function gameOver() {
    //////////////////////////////
    // 初期化処理
    if (gFirstOveFlg == 1) {
        gImageEnding1 = new image("./images/51_end.png");
        gImageEnding2 = new image("./images/52_end.png");
        gImageEnding3 = new image("./images/53_end.png");
        gDispCnt_END = 0;
    }

    gDispCnt_END++;
    if (gDispCnt_END <= 50) {
        gImageEnding1.draw(0, 0, 0, 0, 1366, 834);
    } else if (50 <= gDispCnt_END && gDispCnt_END <= 200) {
        gImageEnding2.draw(0, 0, 0, 0, 1366, 834);
    } else if (200 <= gDispCnt_END && gDispCnt_END <= 400) {
        gImageEnding3.draw(0, 0, 0, 0, 1366, 834);
    }
    drawString(580, 660, "BLACK", "80px 'HG創英角ｺﾞｼｯｸUB'", "000" + gDispCnt_END);
    //////////////////////////////
    // 終了処理(次ステータスへ遷移)
    if (gGameMode != 0) {
        if (gDispCnt_END >= 400) {
            gState = ST_OPENING;
        }
    }
}