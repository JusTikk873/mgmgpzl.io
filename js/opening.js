var gAudio;
var gBgmFlg = 0;
var gScale;
var gDegTest;
var gAlphaTest;
var gScaleFlg;
var gDegFlg;
var gDegTest1;
var gBackGround;
var gDispCnt = 0;
var gGameMode = 0;


var gStartMove = 0;
var gStartMoveIdx = 0;
var gStartMoveDeg = [10, -10, 0, 0, 0];
var gFoodMove = 1;
var gFoodMoveIdx = 0;
var gFoodMoveDeg = [10, -10, 0, 0, 0];

//////////////////////////////
// オープニング画面
function opening() {
    //////////////////////////////
    // 初期化処理
    if (gFirstOpnFlg == 1) {
        gImageLogo = new image("./images/03_Logo.png");
        gImageStart = new image("./images/02_start.png");
        gImageTitle = new image("./images/01_title.png");
        gImageInfo = new image("./images/04_information.png")
        gImageF1 = new image("./images/F1.png");
        gImageF2 = new image("./images/F2.png");
        gImageF3 = new image("./images/F3.png");
        gImageF4 = new image("./images/F4.png");
        gImageF5 = new image("./images/F5.png");
        gImageF6 = new image("./images/F6.png");
        gImageF7 = new image("./images/F7.png");
        gImageF8 = new image("./images/F8.png");
        gDispCnt = 0;
        gScale = 1;
        gDegTest = 0.0;
        gDegTest1 = 0.0;
        gAlphaTest = 0.0;
        gScaleFlg = 0;
        gDegFlg = 0;
        gAudio = new Audio("./wav/travel.mp3");
        gBgmFlg = 0;
        gStartMove = 0;
        gStartMoveIdx = 0;
        gFoodMove = 1;
        gFoodMoveIdx = 0;
        gFirstOpnFlg = 0;
    }

    gImageTitle.draw(0, 0, 0, 0, 1366, 834);

    //    gImageStart.setAlpha(gAlphaTest);
    //    gImageStart.drawTransForm(486, 560, 0, 0, 1571, 735, gDegTest, 1.0);
    gImageStart.drawTransForm(486, 560, 0, 0, 395, 101, gDegTest, 1.0);
    //    gImageStart.drawTransForm(486, 560, 0, 0, 395, 101, 0.0, gDegTest );

    //    gImageLogo.drawTransForm((width/2 - 140), (height/2 - 200), 0, 0, 280, 400, 0, gScale);
    gImageLogo.drawTransForm((400), (240), 0, 0, 568, 234, 0, gScale);
    if (gScaleFlg == 0) {
        gScale += 0.005;
        if (gScale >= 1) {
            gScaleFlg = 1;
        }
    } else {
        gScale -= 0.01;
        if (gScale <= 0.5) {
            gScaleFlg = 0;
        }
    }
    gImageInfo.draw(280, 740, 0, 0, 250, 750);
    gImageF1.drawTransForm(240, 540, 0, 0, 384, 684, gDegTest1, 1.0);
    gImageF2.drawTransForm(210, 380, 0, 0, 354, 524, gDegTest1, 1.0);
    gImageF3.drawTransForm(240, 240, 0, 0, 384, 384, gDegTest1, 1.0);
    gImageF4.drawTransForm(1040, 540, 0, 0, 896, 484, gDegTest1, 1.0);
    gImageF5.drawTransForm(1010, 380, 0, 0, 896, 524, gDegTest1, 1.0);
    gImageF6.drawTransForm(1040, 240, 0, 0, 896, 384, gDegTest1, 5.0);
    gImageF7.drawTransForm(720, 40, 0, 0, 676, 184, gDegTest1, 1.0);
    gImageF8.drawTransForm(520, 60, 0, 0, 376, 204, gDegTest1, 1.0);

    if (gFoodMove > 0) {
        gFoodMove++;

        gDegTest1 = gFoodMoveDeg[gFoodMoveIdx];


        if (gFoodMove % 10 == 0) {
            gFoodMoveIdx++;
            if (gFoodMoveIdx > 4) {
                gFoodMoveIdx = 0;
            }
        } 
    }
    //////////////////////////////
    // キー入力処理
    if (isClick()) {
        var clickX = getClickPos()[0];
        var clickY = getClickPos()[1];

        if (280 < clickX && clickX < 320) {
            if (750 < clickY && clickY < 775) {
                gGameMode = ST_RULE;
            }
        }
        if (500 < clickX && clickX < 895) {
            if (600 < clickY && clickY < 701) {
                //	            gAlphaTest += 1;
                gStartMove = 1;
            }
        }
    }

    if (gStartMove > 0) {
        gStartMove++;
        //		if( gStartMove % 30 == 0 ){
        //			gDegTest = 10;
        //		}else{
        //			gDegTest = 0;
        //		}

        gDegTest = gStartMoveDeg[gStartMoveIdx];


        if (gStartMove % 10 == 0) {
            gStartMoveIdx++;
            if (gStartMoveIdx > 4) {
                gStartMoveIdx = 0;
            }
        }
        if (gStartMove > 200) {
            gStartMove = 0;
            gGameMode = ST_TOP;
        }
    }

    //    if (gAlphaTest > 300.0) {
    //        gAlphaTest = 0.0;
    //        gGameMode = ST_TOP;
    //    }    
    //   if (gDegFlg == 0) {
    //       gDegTest += 0.5;
    //       if (gDegTest >= 30.0) {
    //           gDegFlg = 1;
    //       }
    //   } else {
    //       gDegTest -= 0.5;
    //       if (gDegTest <= -30.0) {
    //           gDegFlg = 0;
    //       } 
    //   }
    //////////////////////////////
    // 終了処理(次ステータスへ遷移)
    if (gGameMode != 0) {
        delete gImageLogo;
        delete gImageStart;
        delete gImageRule;
        gFirstOpnFlg = 1;
        gState = gGameMode;

    }
}
