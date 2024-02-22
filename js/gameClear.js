////////////////////////////////
// ゲームループメイン関数
////////////////////////////////
var gFirstClrFlg = 1;
var TILE_W = 146; 			// タイル幅
var TILE_H = 146; 			// タイル高
var OFFSET_X = 171; 			// 表示オフセット値
var OFFSET_Y = 102; 			// 表示オフセット値
var NUM_H = 5; 				// 表示タイル数
var NUM_W = 7; 				// 表示タイル数
var CVS_X = 310; 			// カーソルオフセット値
var CVS_Y = 105; 			// カーソルオフセット値
var TERN = TERN_A = 14;  //ターン数
var TERN_O = 0;
var gDispCnt_s = 0;
var gDispCnt_e = 0;
var gDispCnt_end = 0;
var gGameMode = 0;
// ゲームデータ

var TERN_MODE = [14];

var gameDat = 
[
	[0, 1, 2, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 6, 0],
	[2, 3, 4, 8, 6, 0, 1],
	[3, 4, 5, 6, 0, 1, 2],
	[4, 5, 6, 0, 1, 2, 3],
];
 //ゲームスコアデータ
var gameDat_S =
[
	[0, 1, 2, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 6, 0],
	[2, 3, 4, 8, 6, 0, 1],
	[3, 4, 5, 6, 0, 1, 2],
	[4, 5, 6, 0, 1, 2, 3],
];

// スコアデータ
var scoreDat =
[
    1000,
    3000,
    4000,
    5000,
    7000,
    8000,
    10000,
    10000,
    0,
];
//ゲームターンデータ
var gameTERN =
[
	[7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
];
var gameTERN_A =
[
	[7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],

];
// グローバル変数
var gImgTile; 				// 画像表示用
var gImgPlayer;
var gImageClear;
var gImageTile;
var gImageNusi;
var gImageKousi;
var gImageStart;
var gImageShuryou;
var gImageResalt;
var gBlinkFlg;


var gPlayerX; 				// 現在位置(Tile)X
var gPlayerY; 				//               Y
var gPlayerDistX; 			// 目的位置(Tile)X
var gPlayerDistY; 			//               Y
var gPlayerMode; 			// 0:停止中(入力可) 1-4:移動中(入力不可)1:→ 2:↓ 3:← 4:↑
var gPlayerPosX; 			// 表示位置(座標)X
var gPlayerPosY; 			//               Y
var gFirstFlg = 1;
var gScore_P;
var gScore_K;
var gScore;
var gScore_M;
var gScore_T;
var gScore_m;
var pos = getMousePos(); 							// マウスカーソル位置取得
var row = calcRow(pos[1])								// タイル位置変換Y
var col = calcCol(pos[0])								// タイル位置変換X

function gameClear() {
    var row;
    var col;
    //////////////////////////////
    // 初期化処理
    if (gFirstClrFlg == 1 && gMode == 1) {
        gMode = 0;
        gImgTile = new image("./images/Tile3.png");
        gImgPlayer = new image("./images/Main.png");
        gImageNormalStage = new image("./images/NormalStage.png");
        gImageNusi = new image("./images/pac.png");
        gImageKousi = new image("./images/kousi.png");
        gImageStart = new image("./images/start.png");
        gImageShuryou = new image("./images/shuryou.png");
        gImageResult = new image("./images/result.png");
        gImageFreeze = new image("./images/freeze.png");
        gPlayerX = 3;
        gPlayerY = 2;
        gPlayerDistX = 0;
        gPlayerDistY = 0;
        gPlayerPosX = calcTileToPosX(gPlayerX);
        gPlayerPosY = calcTileToPosY(gPlayerY);
        gPlayerMode = 0;
        gDispCnt_s = 0;
        gDispCnt_e = 0;
        gBlinkFlg = 1;
        gFirstClrFlg = 0;
        gGameMode = 0;
        gScore_K = 0;
        gScore_P = 0;
        // TERN = TERN_A;
        TERN = TERN_MODE[gMode];
        TERN_O = 0;
        gScore = 0;
        gScore_M = 0;
        gScore_T = 0;
        gScore_m = 0;
        gameDat =
[
	[0, 1, 2, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 6, 0],
	[2, 3, 4, 8, 6, 0, 1],
	[3, 4, 5, 6, 0, 1, 2],
	[4, 5, 6, 0, 1, 2, 3],
];
        gameDat_A =
[
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
];

        gameDat_S =
[
	[0, 1, 2, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 6, 0],
	[2, 3, 4, 8, 6, 0, 1],
	[3, 4, 5, 6, 0, 1, 2],
	[4, 5, 6, 0, 1, 2, 3],
];
        gameDat_AS =
[
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
	[4, 5, 6, 0, 1, 2, 3],
];
        gameTERN =
[
	[7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
];
        gameTERN_A =
[
	[7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7],

];
    }

    if (gPlayerMode == 0 && TERN > 0) {

        if (isUp()) {		// ↑検出
            gPlayerMode = 4;
            gPlayerDistX = gPlayerX;
            gPlayerDistY = gPlayerY - 1;
            if (gPlayerDistY < 0) {
                gPlayerDistY = 0;
                gPlayerMode = 0; 	// 修正
                gScore_P = 0;
            } else {						// 修正
                TERN = TERN - 1; 	// 修正
            }

            gPlayerPosX = calcTileToPosX(gPlayerX);
            gPlayerPosY = calcTileToPosY(gPlayerY);
        }

        if (isDown()) {		// ↓検出
            gPlayerMode = 2;
            gPlayerDistX = gPlayerX;
            gPlayerDistY = gPlayerY + 1;
            if (gPlayerDistY > (NUM_H - 1)) {
                gPlayerDistY = (NUM_H - 1);
                gPlayerMode = 0; 	// 修正
                gScore_P = 0;
            } else {						// 修正
                TERN = TERN - 1; 	// 修正
            }

            gPlayerPosX = calcTileToPosX(gPlayerX);
            gPlayerPosY = calcTileToPosY(gPlayerY);
        }

        if (isLeft()) {		// ←検出
            gPlayerMode = 3;
            gPlayerDistX = gPlayerX - 1;
            gPlayerDistY = gPlayerY;
            if (gPlayerDistX < 0) {
                gPlayerDistX = 0;
                gPlayerMode = 0;
                gScore_P = 0;
            } else {
                TERN = TERN - 1;

            }

            gPlayerPosX = calcTileToPosX(gPlayerX);
            gPlayerPosY = calcTileToPosY(gPlayerY);
        }

        if (isRight()) {	// →検出
            gPlayerMode = 1;
            gPlayerDistX = gPlayerX + 1;
            gPlayerDistY = gPlayerY;
            if (gPlayerDistX > (NUM_W - 1)) {
                gPlayerDistX = (NUM_W - 1);
                gPlayerMode = 0;
                gScore_P = 0;
            } else {						// 修正
                TERN = TERN - 1; 	// 修正

            }

            gPlayerPosX = calcTileToPosX(gPlayerX);
            gPlayerPosY = calcTileToPosY(gPlayerY);
        }
    } else {
        var speed = 2;
        if (gPlayerMode == 4) {	// ↑
            gPlayerPosY = gPlayerPosY - speed;
            if (gPlayerPosY < calcTileToPosY(gPlayerDistY)) {
                setPlayerPos();
                setPlayerPos_A();
                setgameTERN();
                setgameTERN_A();
                setScore();
            }

            gPlayerMode == 0;
        }
        if (gPlayerMode == 2) {	// ↓
            gPlayerPosY = gPlayerPosY + speed;
            if (gPlayerPosY > calcTileToPosY(gPlayerDistY)) {
                setPlayerPos();
                setPlayerPos_A();
                setgameTERN();
                setgameTERN_A();
                setScore();
            }
            gPlayerMode == 0;
        }
        if (gPlayerMode == 3) {	// ←
            gPlayerPosX = gPlayerPosX - speed;
            if (gPlayerPosX < calcTileToPosX(gPlayerDistX)) {
                setPlayerPos();
                setPlayerPos_A();
                setgameTERN();
                setgameTERN_A();
                setScore();
            }

            gPlayerMode == 0;
        }
        if (gPlayerMode == 1) {	// →
            gPlayerPosX = gPlayerPosX + speed;
            if (gPlayerPosX > calcTileToPosX(gPlayerDistX)) {
                setPlayerPos();
                setPlayerPos_A();
                setgameTERN();
                setgameTERN_A();
                setScore();
            }

            gPlayerMode == 0;
        }
    }
    //////////////////////////////
    // 表示処理	
    gImageNormalStage.draw(0, 0, 0, 0, 1366, 834)

    // タイル表示
    if (TERN >= 7) {
        for (row = 0; row < NUM_H; row++) {
            for (col = 0; col < NUM_W; col++) {
                if (gameTERN[row][col] > 0) {
                    gImgTile.draw(
				(col * TILE_W) + OFFSET_X,
				(row * TILE_H) + OFFSET_Y,
				((gameDat[row][col] % 3) * TILE_W),
				(Math.floor((gameDat[row][col] / 3)) * TILE_H),
				 TILE_W,
				 TILE_H
			);
                } else {
                    gImgTile.draw(
				(col * TILE_W) + OFFSET_X,
				(row * TILE_H) + OFFSET_Y,
				((8 % 3) * TILE_W),
				(Math.floor((8 / 3)) * TILE_H),
				 TILE_W,
				 TILE_H
			);
                    gameDat_S[row][col] = 8;
                }
            }
        }
    }
    if (TERN <= 6) {
        for (row = 0; row < NUM_H; row++) {
            for (col = 0; col < NUM_W; col++) {
                if (gameTERN_A[row][col] > 0) {
                    gImgTile.draw(
				(col * TILE_W) + OFFSET_X,
				(row * TILE_H) + OFFSET_Y,
				((gameDat_A[row][col] % 3) * TILE_W),
				(Math.floor((gameDat_A[row][col] / 3)) * TILE_H),
				 TILE_W,
				 TILE_H
			);
                } else {
                    gImgTile.draw(
				(col * TILE_W) + OFFSET_X,
				(row * TILE_H) + OFFSET_Y,
				((8 % 3) * TILE_W),
				(Math.floor((8 / 3)) * TILE_H),
				 TILE_W,
				 TILE_H
			);
                    gameDat_S[row][col] = 8;
                }
            }
        }
    }
    //格子表示
    gImageKousi.draw(0, 0, 0, 0, 1366, 834)

    // Player表示	
    gImgPlayer.draw(
			gPlayerPosX,
			gPlayerPosY,
			(gPlayerMode * 144),
			0,
			144,
			144);
    // データ表示
    drawString(950, 75, "BLACK", "60px 'HG創英角ｺﾞｼｯｸUB'", "" + TERN);
    drawString(300, 75, "BLACK", "60px 'HG創英角ｺﾞｼｯｸUB'", "" + gScore);

    if (gScore_P == 1 && TERN >= 7) {
        gDispCnt_end++;
        if (gDispCnt_end <= 50) {
            drawString(500, 75, "RED", "50px 'HG創英角ｺﾞｼｯｸUB'", "+" + gScore_K);
        } 
    }
    if (gScore_P == 1 && TERN <= 6) {
        gDispCnt_end++;
        if (gDispCnt_end <= 50) {
            drawString(500, 75, "RED", "50px 'HG創英角ｺﾞｼｯｸUB'", "+" + gScore_K);
        } 
    }
    if (TERN >= 7) {
        for (row = 0; row < NUM_H; row++) {
            for (col = 0; col < NUM_W; col++) {
                if (gameDat[row][col] == 8) {
                    gameTERN[row][col] = 0;
                }
                if (gameTERN[row][col] > 0) {
                    drawString(
                (col * TILE_W) + OFFSET_X,
                (row * TILE_H) + OFFSET_Y + 50,
             "BLUE", "60px 'HG創英角ｺﾞｼｯｸUB'", "" + gameTERN[row][col]);
                } 
            } 
        } 
    }

    if (TERN <= 6) {
        for (row = 0; row < NUM_H; row++) {
            for (col = 0; col < NUM_W; col++) {
                if (gameDat_A[row][col] == 8) {
                    gameTERN_A[row][col] = 0;
                }
                if (gameTERN_A[row][col] > 0) {
                    drawString(
                (col * TILE_W) + OFFSET_X,
                (row * TILE_H) + OFFSET_Y + 50,
             "BLUE", "60px 'HG創英角ｺﾞｼｯｸUB'", "" + gameTERN_A[row][col]);
                }
            }
        } 
    }
    //スタート合図		
    gDispCnt_s++;
    if (gDispCnt_s <= 120) {
        gImageStart.draw(0, 0, 0, 0, 1366, 834);
    }

    //終了合図
    if (TERN == 0) {
        gDispCnt_e++;
        if (gDispCnt_e >= 120 && gDispCnt_e <= 300) {
            gImageShuryou.draw(0, 0, 0, 0, 1366, 843);
        }
        else if (gDispCnt_e >= 300) {
            setScore_T();
            gImageResult.draw(0, 0, 0, 0, 1366, 843);
            drawString(580, 310, "BLACK", "80px 'HG創英角ｺﾞｼｯｸUB'", "000" + gScore);
            drawString(580, 475, "BLACK", "80px 'HG創英角ｺﾞｼｯｸUB'", "000" + gScore_M);
            drawString(580, 660, "BLACK", "80px 'HG創英角ｺﾞｼｯｸUB'", "000" + gScore_T);
        }
    }
    if (isClick()) {                            ////////画面遷移のクリックが初期化と重なり無限ループする
        var clickX = getClickPos()[0];
        var clickY = getClickPos()[1];
        if (gDispCnt_e >= 400) {
            if (240 < clickX && clickX < 640) {
                if (200 < clickY && clickY < 800)
                    gGameMode = ST_OPENING;
            }
            
            if (740 < clickX && clickX < 1140) {
                if (200 < clickY && clickY < 800)
                    gGameMode = ST_TOP;
            }
        }
    }
    //////////////////////////////
    // 終了処理(次ステータスへ遷移)
    if (gGameMode != 0) {
        delete gImageClear;
        gFirstClrFlg = 1;
        gState = gGameMode;
        gScore = 0;
        gScore_M = 0;
        gScore_T = 0;
        gScore_m = 0;
    } 
}


// スコア更新処理(小計)
function setScore() {
    if (TERN > 7) {
        gScore = gScore + scoreDat[gameDat_S[gPlayerY][gPlayerX]];
        gScore_K = scoreDat[gameDat_S[gPlayerY][gPlayerX]];
        setScore_P();
    } else if (TERN < 8) {
    gScore = gScore + scoreDat[gameDat_AS[gPlayerY][gPlayerX]];
    gScore_K = scoreDat[gameDat_AS[gPlayerY][gPlayerX]];
        setScore_AP();
    }
}
// スコア更新処理(加点)
function setScore_P() {
    gScore_P = 1;
    gDispCnt_end = 0;
}
function setScore_AP() {
    gScore_P = 1;
    gDispCnt_end = 0;
}
// スコア更新処理(マイナス)
function setScore_M() {
    gScore_M = gScore_M + 200;
}
// スコア更新処理(合計)
function setScore_T() {
    gScore_T = gScore - gScore_M;
}
// カーソル位置→タイル位置変換処理
function calcRow(curY) {
    return Math.floor((curY - OFFSET_Y - CVS_Y) / TILE_H);
}

// カーソル位置→タイル位置変換処理
function calcCol(curX) {
    return Math.floor((curX - OFFSET_X - CVS_X) / TILE_W);
}

// タイル位置→位置変換処理
function calcTileToPosX(tlX) {
   return OFFSET_X + (TILE_W * tlX);
}

// タイル位置→位置変換処理
function calcTileToPosY(tlY) {
    return OFFSET_Y + (TILE_H * tlY);
}

// Player情報更新処理
function setPlayerPos() {
    if (TERN >= 7) {
        gPlayerPosX = calcTileToPosX(gPlayerDistX);
        gPlayerPosY = calcTileToPosY(gPlayerDistY);
        gPlayerX = gPlayerDistX;
        gPlayerY = gPlayerDistY;
        gPlayerMode = 0;
        gameDat[gPlayerY][gPlayerX] = 8;
    } 
}
// Player情報更新処理
function setPlayerPos_A() {
    if (TERN <= 6) {
        gPlayerPosX = calcTileToPosX(gPlayerDistX);
        gPlayrPosY = calcTileToPosY(gPlayerDistY);
        gPlayerX = gPlayerDistX;
        gPlayerY = gPlayerDistY;
        gPlayerMode = 0;
        gameDat_A[gPlayerY][gPlayerX] = 8;
    } 
}

function setgameTERN() {
        for (var row = 0; row < NUM_H; row++) {
            for (var col = 0; col < NUM_W; col++) {
                if (TERN >= 7) {
                if (gameTERN[row][col] > -10) {
                    gameTERN[row][col] = gameTERN[row][col] - 1;
                }
                if (gameTERN[row][col] == 0) {
                    setScore_M();
                }
            }
        }
    } 
}
function setgameTERN_A() {
    for (var row = 0; row < NUM_H; row++) {
        for (var col = 0; col < NUM_W; col++) {
            if (TERN <= 6) {
                if (gameTERN_A[row][col] > -10) {
                    gameTERN_A[row][col] = gameTERN_A[row][col] - 1;
                }
                if (gameTERN_A[row][col] == 0) {
                    setScore_M();
                }
            }
        }
    }
}
function setEnding() {
    gDispCnt_end++
    if (gDispCnt_end >= 0 && gDispCnt_end <= 200) {
        gImageFreeze.draw(0, 0, 0, 0, 1366, 834);
        if (gDispCnt_end >= 200) {
            gGameMode = ST_OPENING;
        } 
    } 
}