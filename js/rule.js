///////////////////////
//ルール画面
var gImageSetumei
var gGameMode = 0;

function Rule() {

    /////////////////////////   
    //初期化処理
    if (gFirstRulFlg == 1) {
        gImageSetumei = new image("./images/rule.png");
        gFirstRulFlg = 0;
    }
    gImageSetumei.draw(0, 0, 0, 0, 1366, 834);

    if (isClick()) {
        var clickX = getClickPos()[0];
        var clickY = getClickPos()[1];

        if (1144 < clickX && clickX < 1333) {
            if (700 < clickY && clickY < 820)
                gGameMode = ST_OPENING;
        }
    }
    if (isClick()) {
        delete gImageSetumei;
        gFirstRulFlg = 1;
        gState = ST_OPENING;

    }
}
