// 故事數據結構
const storyData = {
    start: {
        text: "新紀元城，一座由數據與鋼鐵構築的未來都市。在這裡，每個市民的後頸都植入著腦控晶片，用於維持社會的「和諧」。但這份和諧的代價，是將人類意識轉化為可量化的數據。\n\n新秩序公司，這座城市的實際統治者。他們開發了終焉協議，一個企圖將人類意識完全數據化的超級AI系統。在他們的宣傳中，這是一個完美的烏托邦，每個人都能獲得永恆的「和諧」。但代價是失去自由意志，成為數據海洋中的一個節點。他們暗中將人類意識轉化為可量化的數據，企圖將旋律之樹改造成活體伺服器，通過腦控晶片控制市民，抹殺自由意志。\n\n你，晨音，一個特殊的少年。你的父親是終焉協議的開發者，母親則是回聲谷的守護者祭司。這種矛盾的出身，讓你成為了連接科技與自然的橋樑。五年前，父親在實驗室中失踪，母親因反對晶片計劃被「意外」身亡，只留下你獨自在新紀元城中掙扎求生。\n\n在母親離世的那個雨夜，你體內的腦控晶片突然失效，取而代之的是一種全新的能力——虛數視界。這種能力讓你能夠直視數據與能量的流動，看見隱藏在現實背後的虛數領域。在那裡，混凝土化作流動的二進制代碼，金屬骨架顯露真容，而最令人震撼的是地底深處——無數黑色音線如同巨樹根須，正穿透城市地基向城外蔓延。這些都是終焉協議的神經突觸，它們纏繞的方向正是回聲谷。這種能力，或許是母親留給你最後的禮物，讓你能夠看見這個世界最真實的模樣。\n\n三個月前，在回聲谷的廢墟中，你遇見了星月。她表面上是新秩序公司的實習生，負責監控終焉協議的運行狀況。但實際上，她是守護者的後裔，在加入新秩序公司前就已精通駭客技術。她利用職務之便，暗中調查終焉協議的真相，尋找拯救回聲谷的方法。從那時起，你們開始合作調查真相，尋找父親留下的線索。\n\n現在，你蜷縮在新紀元城排水管道的陰影裡，手指死死扣住鏽蝕的金屬網格。遠處霓虹穿透潮濕霧氣，在積水中投下血紅色的倒影。三小時前，你在第七次潛入父親的實驗室時觸發了警報，清道夫的激光掃描網正沿著十二號街區地毯式推進。\n\n腦控晶片在耳蜗深處發出警告：「呼吸頻率超標，建議注射鎮定劑。」你咬破舌尖，鐵鏽味混著排水管道的腐臭衝入鼻腔。",
        image: "images/start.jpeg",
        choices: [
            {
                text: "等待清道夫離開",
                next: "wait"
            },
            {
                text: "嘗試逃跑",
                next: "badEnding1"
            }
        ]
    },
    badEnding1: {
        text: "你決定冒險逃跑。但就在你剛要起身的瞬間，腦控晶片的警告聲突然變得尖銳。你的呼吸頻率完全失控，身體不受控制地抽搐。清道夫的激光掃描網捕捉到了你的異常生物信號。\n\n「發現異常目標，執行清除程序。」\n\n你最後看到的，是清道夫冰冷的金屬利爪。",
        image: "images/badEnding1.jpeg",
        isBadEnding: true,
        choices: [
            {
                text: "返回上一個選項",
                next: "start"
            },
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    wait: {
        text: "你選擇等待。三小時後，清道夫的巡邏終於結束。但你的體力也消耗殆盡，腦控晶片的警告聲越來越尖銳。\n\n虛數視界突然不受控地啟動。整個世界在眼前分崩離析。混凝土化作流動的二進制代碼，遠處的清道夫顯露出金屬骨架，而最令你窒息的是地底——無數黑色音線如同巨樹根須，正穿透城市地基向城外蔓延。那是終焉協議的神經突觸，它們纏繞的方向正是回聲谷。\n\n你想起五年前父親失踪那夜，終焉協議首次啟動，全城四萬人同時停止呼吸三秒。此刻你終於明白，那是吞噬回聲谷守護者的能量波動。",
        image: "images/wait.jpeg",
        choices: [
            {
                text: "趁機行動",
                next: "action"
            },
            {
                text: "繼續等待",
                next: "badEnding2"
            }
        ]
    },
    badEnding2: {
        text: "你決定繼續等待。但長時間的缺氧和疲勞終於擊垮了你的意志。你的意識開始模糊，虛數視界失控地閃爍。\n\n當你再次醒來時，發現自己已經被清道夫包圍。更糟的是，你的腦控晶片似乎被重新激活了。\n\n「目標已重新接入終焉協議，執行記憶清除程序。」\n\n你最後的記憶，是母親教你的搖籃曲。",
        image: "images/badEnding2.jpeg",
        isBadEnding: true,
        choices: [
            {
                text: "返回上一個選項",
                next: "wait"
            }, 
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    action: {
        text: "你趁著清道夫離開的間隙快速前進。遠處傳來星月的聲音：「找到你了。」她的全息投影在管道另一端閃爍，散發著熟悉的藍光。\n\n你想起三個月前，在回聲谷的廢墟中第一次遇見她。那時她正在用駭客技術破解終焉協議的防護網，而你則在尋找父親留下的線索。從那時起，你們就開始合作調查真相。\n\n「你父親的日誌在B-7區伺服器，但那裡有音波陷阱。」星月拋來一枚芯片和一個小型數據分析裝置，「數據分析裝置插入伺服器後，我可以遠程協助你破解加密。等下你用這個芯片改寫你的生物頻率，這樣就能讓他們暫時發現不了你。但記住，你只有十七分鐘，之後就會失效。」",
        image: "images/action.jpeg",
        choices: [
            {
                text: "立即使用芯片",
                next: "useChip"
            },
            {
                text: "先檢查芯片",
                next: "badEnding3"
            }
        ]
    },
    badEnding3: {
        text: "你決定先檢查芯片。但就在你低頭查看的瞬間，遠處突然傳來清道夫的腳步聲。\n\n「目標生物頻率異常，執行清除程序。」\n\n你這才意識到，猶豫的代價是死亡。如果當初直接使用芯片，或許還能爭取到一線生機。",
        image: "images/badEnding3.jpeg",
        isBadEnding: true,
        choices: [
            {
                text: "返回上一個選項",
                next: "action"
            },
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    useChip: {
        text: "芯片插入頸側時，你聽到旋律之樹的悲鳴突然清晰。之前，你在虛數領域看到的景象浮現眼前：山谷的守護者們排成環形，用歌聲編織屏障，而黑色音線正從他們眼耳口鼻中鑽出。\n\n",
        image: "images/useChip.jpeg",
        choices: [
            {
                text: "休息一下",
                next: "ventilation"
            },
            {
                text: "繼續前進",
                next: "badEnding4"
            }
        ]
    },
    badEnding4: {
        text: "你決定頂著疲倦的身體繼續前進。但當你走到轉角時，發現一個巨大的數據漩渦。\n\n「發現異常個體，執行清除程序。」\n\n可是你已經沒有足夠的力氣逃跑了。\n\n你的最後一個念頭是：如果當初休息一下......",
        image: "images/badEnding4.jpeg",
        isBadEnding: true,
        choices: [
            {
                text: "返回上一個選項",
                next: "action"
            },
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    ventilation: {
        text: "你休息了一陣子，確保身體各項機能恢復。你衝進通風管道，並成功躲避了一個清道夫，虛數視界將世界切割成雙重現實。在物質層面，你看見巡邏機械犬的紅外掃描；在能量層面，音波陷阱如同發光的蛛網，每一根弦都連接著自毀程序。",
        image: "images/ventilation.jpeg",
        choices: [
            {
                text: "使用音律破解",
                next: "serverRoom"
            },
            {
                text: "嘗試強行破壞音波陷阱",
                next: "badEnding5"
            }
        ]
    },
    badEnding5: {
        text: "你決定破壞音波陷阱。但當你觸碰到陷阱的瞬間，一股強大的能量反噬而來。\n\n「檢測到未授權的能量接觸，執行自毀程序。」\n\n你的虛數視界在能量衝擊下徹底失控。你最後看到的，是無數破碎的數據碎片。",
        image: "images/badEnding5.jpeg",
        isBadEnding: true,
        choices: [
            {
                text: "返回上一個選項",
                next: "ventilation"
            },
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    serverRoom: {
        text: "父親教你的古老歌謠在喉間顫抖，那是破解音律鎖的密鑰。「當星辰墜落於鏡海......」\n\n第一道音網應聲碎裂。\n你的手指在管道壁留下血痕，腦控晶片的警報聲越來越尖銳。\n\n伺服器室的冷凍液氮白霧中，你找到了父親最後的全息記錄。\n\n「他們想將旋律之樹改造成活體伺服器。」父親的身影在顫抖，背景是終焉織者的黑色剪影，「要阻止這一切，需要兩個關鍵：共鳴器和共鳴容器。共鳴器在B-7區的保險箱中，而共鳴容器......」記錄突然扭曲，你看到自己的臉倒映在父親瞳孔裡，而黑色音線正從父親太陽穴鑽出。\n\n你終於明白，終焉協議不僅扭曲了旋律之樹的本質，還將初代守護者的意識污染，使其成為了數據與音線的結合體——終焉織者。它認為「絕對控制=終極和諧」，試圖用黑色音線同化所有生命。\n\n「共鳴器。」你的手指撫過旁邊的保險箱的金屬表面。這個看似普通的六面體裝置，表面佈滿了細密的能量導管，中央是一個呈螺旋狀的音波發生器。父親的全息影像中曾提到，這是他耗費十年心血打造的裝置，能夠將人類意識轉化為純粹的能量波動，與旋律之樹產生共鳴。\n\n當你將共鳴器握在手中時，虛數視界突然變得異常清晰。你看見裝置內部有無數微小的光點在流動，那是被壓縮的音波能量。而在能量層面，共鳴器散發出的波紋與你體內的守護者血脈產生了某種奇異的共振。\n\n「等等，」星月突然說道，她正在用你插入的數據分析裝置掃描伺服器，「我發現了一些東西。終焉織者不僅是初代守護者的意識被污染，它還吸收了所有被終焉協議控制的市民意識。要阻止它，我們需要一個能同時承載自然能量和數據流的容器。」\n\n她快速翻閱著數據，「你父親的研究顯示，只有擁有特殊基因序列的人才能成為這樣的容器。而你的基因序列，正是從你母親那裡繼承的守護者血脈，和你父親植入的終焉協議晶片完美融合的結果。但...」\n\n「但什麼？」你追問，手中緊握著剛從保險箱取出的共鳴器。\n\n「但成為容器意味著......」星月的聲音突然停頓，因為警報轟鳴。",
        image: "images/serverRoom.jpeg",
        choices: [
            {
                text: "扯出腦控晶片",
                next: "finalBattle"
            },
            {
                text: "嘗試破解警報",
                next: "badEnding6"
            }
        ]
    },
    badEnding6: {
        text: "你決定嘗試破解警報。但當你觸碰到控制面板時，一股強大的電流貫穿全身。\n\n「檢測到未授權的系統入侵，執行防禦程序。」\n\n你的意識在電流中消散。最後一個念頭是：如果當初直接扯出晶片......",
        image: "images/badEnding6.jpeg",
        isBadEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    finalBattle: {
        text: "清道夫的合金利爪穿透牆壁時，星月的EMP炸彈準時引爆。你在數據洪流中下墜，虛數視界徹底失控。你看見新紀元城的地基正在融化，黑色音線纏繞著每個市民的脊椎，而遙遠的地平線上，旋律之樹的最後一片葉子正在凋零。\n\n「我們已經有了共鳴器，」星月的聲音從現實與虛數的夾縫傳來，「但要啟動它需要一個能承載能量的容器。你的基因序列是唯一鑰匙，但成為容器意味著......」\n\n你沒讓她說完。「我知道」你扯出後頸的腦控晶片並說道，帶血的金屬碎片劃過伺服器核心。父親教你的第二段歌謠衝口而出，這次是毀滅的調式。\n\n虛數領域轟然洞開。",
        image: "images/finalBattle.jpeg",
        choices: [
            {
                text: "面對終焉織者, 你選擇成為容器",
                next: "mainEnding"
            },
            {
                text: "嘗試直接摧毀終焉織者",
                next: "badEnding7"
            }
        ]
    },
    badEnding7: {
        text: "你決定直接摧毀終焉織者。但當你舉起共鳴器時，一股強大的能量反噬而來。\n\n「檢測到未授權的能量接觸，執行自毀程序。」\n\n你的意識在能量衝擊中消散。最後一個念頭是：如果當初選擇成為容器......",
        image: "images/badEnding7.jpeg",
        isBadEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    mainEnding: {
        text: "伺服器室的空間在你眼前扭曲變形，數據流如瀑布般傾瀉而下。你看見無數光點在黑暗中凝聚，彷彿星辰墜落，最終匯聚成一個龐大的存在。那是終焉織者，一個由數據與能量交織而成的巨大實體，它的形態不斷變化，時而如同巨樹，時而如同人形。\n\n終焉織者降臨的瞬間，你理解了何謂完美控制。那是由無數市民腦波編織的實體，每一根音線都是被量化的慾望，每道數據流都是被馴服的恐懼。它的歌聲讓你想起母親——那位因反對晶片計劃被「意外」身亡的守護者祭司。\n\n「加入永恆和諧。」終焉織者的聲音是父親與母親的合聲。\n\n你將芯片刺入心臟，同時啟動了共鳴器。劇痛中，你看見自己的血管變成發光根須，聽見骨骼生長出晶格結構。星月的尖叫從很遠的地方傳來，但你正在成為更宏大的存在。你即是旋律之樹的新生枝椏，也是風暴的核心。當第一道音波利刃斬斷終焉織者的觸須時，新紀元城的玻璃幕牆同時炸裂。\n\n「你正在超過承載極限！」星月試圖關閉共鳴器。\n\n你在虛數領域微笑。你看見父親的手與自己的手重疊，在終焉協議的源代碼上刻下最後一段旋律。那是母親教你的搖籃曲，每個音符都帶著谷中晨露的重量。\n\n當第七重音階響起時，終焉織者開始崩解。黑色音線退潮般縮回地底，市民們如大夢初醒般呆立街頭。你感覺自己在虛數領域飄散，星月拼命抓向你的殘影卻只握住一把發光樹葉。\n\n「這不是結束......」你的聲音帶著電流雜音，「而是新的開始。我將以新的形態繼續守護這座城市，就像旋律之樹的根系滋養著每一寸土地。」\n\n你的意識消散在數據風暴中，化作無數光點融入城市的數據洪流。",
        image: "images/mainEnding.jpeg",
        isEnding: true,
        choices: [
            {
                text: "你將以新另一種型態守護這座城市",
                next: "epilogue"
            }
        ]
    },
    epilogue: {
        text: "三年後的雨季，星月站在新生的音律之都穹頂。玻璃幕牆外，旋律之樹的熒光根系纏繞著新秩序公司的舊址，孩子們用廢棄晶片製作的豎琴在風中輕響。她頸間的樹葉吊墜突然發燙，全城廣播系統毫無預兆地啟動。\n\n一段從未聽過的旋律流淌在街巷間。\n\n星月笑著流淚，她知道這是晨音從虛數領域發來的新樂章。在遙遠的數據海裡，某個意識體正用無數市民的心跳聲，譜寫永不終結的破曉交響曲。",
        image: "images/epilogue.jpeg",
        isEnding: true,
        choices: [
            {
                text: "故事結束。願音律永存。",
                next: "epilogue"
            }
        ]
    }
};

// 遊戲狀態
let currentScene = 'start';
let storyProgress = 0;

// DOM元素
const storyText = document.getElementById('storyText').querySelector('#storyTextBox');
const storyImage = document.getElementById('storyImage');
const choicesContainer = document.getElementById('choices');
const progressBar = document.getElementById('storyProgress');
const restartBtn = document.getElementById('restartBtn');

// 更新故事進度條
function updateProgress() {
    const totalScenes = Object.keys(storyData).length;
    storyProgress = (Object.keys(storyData).indexOf(currentScene) / totalScenes) * 100;
    progressBar.style.width = `${storyProgress}%`;
}

// 顯示當前場景
function showScene(sceneId) {
    const scene = storyData[sceneId];
    if (!scene) return;

    // 更新文本，將 \n 轉換為 <br>
    storyText.innerHTML = scene.text.replace(/\n/g, '<br>');
    
    // 更新圖片
    if (scene.image) {
        storyImage.innerHTML = `<img src="${scene.image}" alt="故事場景">`;
    } else {
        storyImage.innerHTML = '';
    }
    
    // 清空並更新選擇按鈕
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.addEventListener('click', () => makeChoice(choice.next));
        choicesContainer.appendChild(button);
    });

    // 更新進度條
    updateProgress();

    // 更新容器樣式
    const storyContainer = document.querySelector('.story-container');
    if (scene.isBadEnding) {
        storyContainer.classList.add('bad-ending');
    } else {
        storyContainer.classList.remove('bad-ending');
    }

    // 如果是結局，顯示重新開始按鈕
    if (scene.isEnding) {
        restartBtn.classList.remove('hidden');
    } else {
        restartBtn.classList.add('hidden');
    }
}

// 處理選擇
function makeChoice(nextScene) {
    if (nextScene === 'restart') {
        restartGame();
    } else {
        currentScene = nextScene;
        showScene(nextScene);
    }
}

// 重新開始遊戲
function restartGame() {
    currentScene = 'start';
    storyProgress = 0;
    showScene('start');
    restartBtn.classList.add('hidden');
}

// 初始化遊戲
function initGame() {
    showScene('start');
    restartBtn.addEventListener('click', restartGame);
}

// 啟動遊戲
initGame(); 