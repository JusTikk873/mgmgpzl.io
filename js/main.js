////////////////////////////////
// �Q�[�����[�v���C���֐�
////////////////////////////////

//////////////////////////////
// �萔
var ST_OPENING = 0;
var ST_TOP = 1;
var ST_GAME = 2;
var ST_GAMEOVER = 3;
var ST_GAMECLEAR = 4;
var ST_RULE = 5;
var ST_ITEM = 6;

//////////////////////////////
// �O���[�o���ϐ�
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
// ���C�����[�v
function update() {

    //////////////////////////////
    // ����������
    if (gFirstFlg == 1) {
        gFirstFlg = 0;
    }

    //////////////////////////////
    // �`�揈��
    drawFill(0, 0, width, height, "white");                                         // �w�i

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

