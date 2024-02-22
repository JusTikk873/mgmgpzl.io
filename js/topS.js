//////////////////////////////
// 難易度選択画面
var gBlinkFlg;
var gImageLevel;
var gDispCnt = 0;
var gSoundManager;
var gImageNorma;
var gImageHard;
var gImageMode;
var gMode = 0;

function topS() {
    //////////////////////////////
    // 初期化処理
    if (gFirstTopFlg == 1) {
        gImageNormal = new image("./images/Normal.png");
        gImageHard = new image("./images/Hard.png");
        gImageMode = new image("./images/Mode.png");
        gDispCnt = 0;
        gBlinkFlg = 1;
        gFirstTopFlg = 0;
        gMode = 0;
    }
    //////////////////////////////
    //画像処理
    gImageMode.draw(0, 0, 0, 0, 1366, 834);
    gImageNormal.draw(240, 200, 0, 0, 640, 800);
    gImageHard.draw(740, 200, 0, 0, 1140, 800);
    //////////////////////////////
    // キー入力処理
    if (isClick()) {
        var clickX = getClickPos()[0];
        var clickY = getClickPos()[1];

        if (240 < clickX && clickX < 640) {
            if (200 < clickY && clickY < 800)
                gGameMode = ST_GAMECLEAR;
            gMode = 1;
        }
        if (740 < clickX && clickX < 1140) {
            if (200 < clickY && clickY < 800)
                gGameMode = ST_GAME;
            gMode = 2;
        }
        if (940 < clickX && clickX < 1340) {
            if (10 < clickY && clickY < 120)
                gGameMode = ST_OPENING;
        }
    }
    //////////////////////////////
    // 終了処理(次ステータスへ遷移)
    if (gGameMode != 0) {
        delete gImageLogo;
        gFirstTopFlg = 1;
        gState = gGameMode;
    }
}