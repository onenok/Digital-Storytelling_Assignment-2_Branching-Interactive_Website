// 故事數據結構
const storyData = {
    start: {
        text: "晨音的後頸在灼燒。他蜷縮在新紀元城排水管道的陰影裡，手指死死扣住鏽蝕的金屬網格。遠處霓虹穿透潮濕霧氣，在積水中投下血紅色的倒影。",
        image: "images/start.jpg",
        choices: [
            {
                text: "等待清道夫離開",
                next: "wait"
            },
            {
                text: "冒險前進",
                next: "advance"
            }
        ]
    },
    wait: {
        text: "你選擇等待。三小時後，清道夫的巡邏終於結束。但你的體力也消耗殆盡，腦控晶片的警告聲越來越尖銳。",
        image: "images/wait.jpg",
        choices: [
            {
                text: "繼續等待",
                next: "waitMore"
            },
            {
                text: "趁機行動",
                next: "action"
            }
        ]
    },
    advance: {
        text: "你決定冒險前進。虛數視界突然不受控地啟動，整個世界在眼前分崩離析。",
        image: "images/advance.jpg",
        choices: [
            {
                text: "使用虛數視界",
                next: "useVision"
            },
            {
                text: "關閉虛數視界",
                next: "closeVision"
            }
        ]
    },
    waitMore: {
        text: "你繼續等待，但情況越來越糟。腦控晶片的警告聲已經到了極限，你感覺意識開始模糊。",
        image: "images/waitMore.jpg",
        choices: [
            {
                text: "強行突破",
                next: "breakout"
            },
            {
                text: "尋求幫助",
                next: "seekHelp"
            }
        ]
    },
    action: {
        text: "你趁著清道夫離開的間隙快速前進。遠處傳來星月的聲音：'找到你了。'",
        image: "images/action.jpg",
        choices: [
            {
                text: "接受星月的幫助",
                next: "acceptHelp"
            },
            {
                text: "保持警惕",
                next: "stayAlert"
            }
        ]
    },
    useVision: {
        text: "虛數視界中，你看到了驚人的景象：無數黑色音線如同巨樹根須，正穿透城市地基向城外蔓延。",
        image: "images/useVision.jpg",
        choices: [
            {
                text: "追蹤音線",
                next: "trackLines"
            },
            {
                text: "尋找安全路線",
                next: "findSafeRoute"
            }
        ]
    },
    closeVision: {
        text: "你強行關閉虛數視界，但這讓你更加迷失方向。黑暗中，你只能依靠聽覺來判斷周圍的情況。",
        image: "images/closeVision.jpg",
        choices: [
            {
                text: "聆聽周圍動靜",
                next: "listen"
            },
            {
                text: "摸索前進",
                next: "feelWay"
            }
        ]
    },
    // 新增分支和結局
    breakout: {
        text: "你決定強行突破。腦控晶片的警告聲達到極限，但你的意志戰勝了恐懼。",
        image: "images/breakout.jpg",
        choices: [
            {
                text: "使用EMP炸彈",
                next: "empEnding"
            },
            {
                text: "嘗試駭入系統",
                next: "hackEnding"
            }
        ]
    },
    seekHelp: {
        text: "你決定尋求幫助。在黑暗中，你聽到了熟悉的旋律。",
        image: "images/seekHelp.jpg",
        choices: [
            {
                text: "跟隨旋律",
                next: "melodyEnding"
            },
            {
                text: "保持警惕",
                next: "cautionEnding"
            }
        ]
    },
    acceptHelp: {
        text: "你接受了星月的幫助。她遞給你一個神秘的裝置。",
        image: "images/acceptHelp.jpg",
        choices: [
            {
                text: "立即使用裝置",
                next: "deviceEnding"
            },
            {
                text: "詢問裝置用途",
                next: "questionEnding"
            }
        ]
    },
    // 結局場景
    empEnding: {
        text: "EMP炸彈成功引爆，清道夫系統癱瘓。你終於獲得了自由，但代價是永遠失去了虛數視界。",
        image: "images/empEnding.jpg",
        isEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    hackEnding: {
        text: "你成功駭入系統，發現了驚人的真相。你選擇將真相公之於眾，引發了一場革命。",
        image: "images/hackEnding.jpg",
        isEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    melodyEnding: {
        text: "你追隨旋律找到了守護者們的秘密基地。在那裡，你學會了如何用音樂對抗控制。",
        image: "images/melodyEnding.jpg",
        isEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    cautionEnding: {
        text: "你的謹慎救了你。你發現這是一個陷阱，成功逃脫並找到了真正的盟友。",
        image: "images/cautionEnding.jpg",
        isEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    deviceEnding: {
        text: "裝置釋放出強大的能量，摧毀了控制系統。你成為了新紀元城的英雄，但代價是永遠失去了部分記憶。",
        image: "images/deviceEnding.jpg",
        isEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    },
    questionEnding: {
        text: "你的好奇心讓你發現了更大的陰謀。你與星月聯手，揭開了終焉協議的真相。",
        image: "images/questionEnding.jpg",
        isEnding: true,
        choices: [
            {
                text: "重新開始",
                next: "restart"
            }
        ]
    }
};

// 遊戲狀態
let currentScene = 'start';
let storyProgress = 0;

// DOM元素
const storyText = document.getElementById('storyText');
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

    // 更新文本
    storyText.textContent = scene.text;
    
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