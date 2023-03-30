var tipuesearch = {"pages": [{'title': 'About', 'text': '成員:張昱棠(41023153)，王翔楷(41023113) \n 倉儲: https://github.com/mdecd2023/2a-pj1ag14 \xa0 \n 網站: https://mdecd2023.github.io/2a-pj1ag14 \xa0\xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'w3', 'text': 'w3 - 2023.03.10.16 已經完成分組網頁者, 可以得到分組網頁評分 \n w3 - 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n w3 開始執行 \xa0 https://mde.tw/pjcopsim/content/bubbleRobTutorial.html \n \n 課程內容:創建以及了解如何共同維護團隊的倉儲 \n 心得:在我們剛創建倉儲時不小心把倉儲Fork至我們個人的github倉儲下了，導致老師那邊的團隊倉儲連線不到我們更改的網站以及倉儲，再詢問老師時，老師以非常好理解的方式講解給我們理解，並讓我們理解了哪一步做錯了，老師也以引導的方式讓我們慢慢理解該如何解決，並告訴我們日後該如何與組員達到協同設計， \n \n', 'tags': '', 'url': 'w3.html'}, {'title': '張昱棠41023153心得', 'text': '張昱棠:由於上學期的usb隨身倉儲故障了，這學期用了一顆新的隨身碟，在一開始建立團隊倉儲acp時，發現新的隨身系統並未綁定github帳戶導致無法推送，綁定完後開始建立團隊的共同倉儲，發現我們共同倉儲由於不小心fork到我們的個人github下，導致無法連線至老師的團體倉儲後詢問老師問題，並且與組員及同學一起討論並且解決成功連線上。 \n \n \n', 'tags': '', 'url': '張昱棠41023153心得.html'}, {'title': '王翔楷41023113心得', 'text': '王翔楷:雖然先前在嚴老師的課上常常與同學共同討論課程內容 ，這是首次要跟同學合作，建立共同倉儲，雖然剛開始弄得不是很順利，但最後藉著詢問老師，並且與同學共同討論後成功連上 。 \n', 'tags': '', 'url': '王翔楷41023113心得.html'}, {'title': 'tutorial1', 'text': 'tutorial1簡報內容(含過程以及製作結果跟心得) ag14 tutorial presentation \n ---------------------------------------------------------- \n 本體建立及加入感測器、輪子及joint(傳動軸) \n \n \n ---------------------------------------------------------- \n \n 因bubbleRob本體(影片內圓球)被我們定義為  dynamic(可動的)、 respondable(可回應的)、Collidable(可碰撞)、Measurable(可測量)、Detectable(可被察覺的) ，因此當我們選擇Edit-> Copy selected objects(複製所選的物體)->按下模擬後，再次選擇Edit->Paste buffer(貼上物件)後，由上方落下的(複製出來的球體)，也具備我們所定義的性質，所以 兩球接觸後會彈開 。 \n ---------------------------------------------------------- \n \n 因bubbleRob本體(上述所有的物體)跟上面所述一樣被我們定義為  dynamic(可動的)、 respondable(可回應的)、Collidable(可碰撞)、Measurable(可測量)、Detectable(可被察覺的) ，因此當我們按下模擬後， 本體會受重力影響，向後傾倒，無法正常向前運動 ，因此下個步驟我們將加入滑塊支撐，使其不再傾倒。 \n ---------------------------------------------------------- \n \n 這邊我們為了上面所模擬出得結果，加入滑塊穩定本體。 (滑塊也必須定義為dynamic(可動的)、 respondable(可回應的)、Collidable(可碰撞)、Measurable(可測量)、Detectable(可被察覺的) 、並連結到本體上，才能正常做動。 \n ---------------------------------------------------------- \n \n \n 程式部分詳細解說分頁: https://mdecd2023.github.io/2a-pj1ag14/content/%E7%A8%8B%E5%BC%8F%E8%AC%9B%E8%A7%A3.html \n \n 上面為模擬成果，sensor偵測到前方障礙物後進行避障。 \n ---------------------------------------------------------- \n 檔案: \n bubbleRob本體 \n slider \n wheels \n \n \n', 'tags': '', 'url': 'tutorial1.html'}, {'title': '心得', 'text': '\n 張昱棠: \n 我們在製作過程中遇到了相當多的問題，光語言的部分我們就開了一個翻譯的網頁在旁邊一起配著原文版看，在一開始時，有點不太理解調整數值是必須輸入註解內的數值還是本文內的，導致數值有些輸入錯誤，在一連串的錯誤後，我們果斷選擇，直接開一個新檔案重做，由於當天我們留在學校做，大概從七點開始一路錯誤重來錯誤重來到快凌晨一點才回家，終於在隔天成功做出結果來了，在學習coppeliasim 的部分，接續上學期學到的在這學期應用，並且學習了許多新的知識 \n 王翔楷: \n 製作初期其實並不順利，我們這組和另外兩個同學一起從七點弄到凌晨一點才回家，過程中最難克服的是對軟體的不熟悉，隔天利用下午沒課的時間慢慢摸索，最後才順利完成建置，再利用晚上上課的時間向老師請教感測器內部程式的問題後回到座位上研究，最後才順利完成功課。 \n \n', 'tags': '', 'url': '心得.html'}, {'title': '問題', 'text': '1. coppeliasim中的scene與model有何不同? \n 在CoppeliaSim中，Scene是一個包含多個物理仿真模型和其他環境元素（例如燈光、相機、傳感器等）的虛擬環境。這些模型可以是機器人、機械臂、傳送帶、機場跑道等等。 Scene通常用於仿真應用程序的開發和測試。而Model是CoppeliaSim中的一個概念，是一種可以單獨保存的物理仿真模型，可以將其作為場景中的組成部分進行導入和編輯。 Model包含一個或多個物體，例如一個機器人、一個傳感器、一個關節等等。 Model可以在場景中多次使用，也可以在不同場景之間共享。簡而言之，Scene是包含多個物理仿真模型和其他環境元素的虛擬環境，而Model是可以單獨保存的物理仿真模型，可以在不同場景中共享使用。 \n 整理: \n Scene:是一個包含多個物理仿真模型和其他環境元素（例如燈光、相機、傳感器等）的虛擬環境，Scene通常用於仿真應用程序的開發和測試 model:是一種可以單獨保存的物理仿真模型，可以將其作為場景中的組成部分進行導入和編輯，可以在不同場景中共享使用。 \n \n 2. 在CoppeliaSim scene中，何謂clean model? \n 在CoppeliaSim中，"clean model" 通常指的是優化模型的過程，通過這個過程可以減少模型中無用的物件和多餘的細節，從而提高模擬的效率。 \n 具體來說，進行模型優化可以通過以下步驟完成： \n \n \n 刪除多餘的物體：在模型中刪除一些不必要的物體或場景，這些物體可能是你在建模時添加的一些細節，但對整個模型的性能並沒有太大的貢獻。 \n \n \n 合併網格：網格是模型中的一些基本元素，當模型中存在過多的網格時，模型的渲染和運行速度就會變慢。因此，可以將一些相似的網格合併在一起，從而減少網格的數量。 \n \n \n 簡化細節：當模型中存在過多的細節時，會使模擬變得非常緩慢。因此，可以將一些不必要的細節簡化或者刪除，從而提高模擬的效率。 \n \n \n 簡單來說，通過進行模型優化可以使CoppeliaSim的運行速度更快，從而更加有效地進行模擬和測試。 \n 3. 如何在CoppeliaSim中，利用Lua以及Python建立primitive type object，並利用程式設定物件位置? \n 以下是Lua語言範例: \n -- 創建立方體並設定位置 cubeHandle = sim.createPureShape(1, 3, {0.1, 0.1, 0.1}, 0.1) sim.setObjectPosition(cubeHandle, -1, {0, 0, 0.5}) \n 以下python語言範例: \n # 導入sim模塊 import sim \n # 創建立方體並設定位置 cubeHandle = sim.simCreatePureShape(1, 3, [0.1, 0.1, 0.1], 0.1) sim.simSetObjectPosition(cubeHandle, -1, [0, 0, 0.5]) \n 4. CoppeliaSim.ttt檔案格式與.simscene.xml檔案格式有何不同? \n CoppeliaSim中的場景文件有兩種格式：.ttt和.simscene.xml。這兩種格式的主要區別在於它們的內容和用途不同。 \n .ttt格式是CoppeliaSim自有的文件格式，它是一個二進制文件，包含了所有場景、對象和設置的信息。這種格式可以通過CoppeliaSim的GUI界面直接打開和編輯，也可以通過Lua腳本編程方式創建、編輯和保存。.ttt格式具有以下特點： \n \n 包含完整的場景、對象和設置的信息； \n 可以包含Lua腳本代碼和編程接口； \n 支持多種版本的CoppeliaSim； \n 不能通過文本編輯器直接查看和編輯。 \n \n .simscene.xml格式則是一種通用的XML文件格式，其中包含了CoppeliaSim場景的描述信息。這種格式可以通過文本編輯器或者其他XML編輯器進行編輯，也可以通過Python等腳本語言讀取和編輯。.simscene.xml格式具有以下特點： \n \n 是一種通用的XML文件格式； \n 可以通過文本編輯器或者其他XML編輯器進行編輯； \n 不包含Lua腳本代碼和編程接口； \n 可以被其他模擬軟件讀取和使用。 \n \n 總的來說，.ttt格式更適合在CoppeliaSim中進行場景的創建和編輯，而.simscene.xml格式則更適合與其他軟件進行數據交換和共享。 \n', 'tags': '', 'url': '問題.html'}, {'title': '程式講解', 'text': '首先這是一個Lua語言，在CoppeliaSim仿真環境中運行。該腳本定義了兩個函數： sysCall_init 和 sysCall_vision 。 \n sysCall_init函數是仿真環境初始化時自動調用的函數，該函數目前是空的，即不執行任何操作。 \n sysCall_vision函數是CoppeliaSim的視覺模組塊（Vision Module）在每次運行時會調用的函數，該函數的作用是對視覺傳感器的圖像進行邊緣檢測（edge detection）。具體來說，函數中的三個函數調用分別為： \n \n simVision.sensorImgToWorkImg(inData.handle) ：將視覺傳感器的圖像複製到工作圖像中； \n simVision.edgeDetectionOnWorkImg(inData.handle,0.2) ：對工作圖像進行邊緣檢測，檢測閾值為0.2； \n simVision.workImgToSensorImg(inData.handle) ：將處理後的工作圖像複製回視覺傳感器的圖像緩衝區中。 \n \n 其中，inData是一個包含了視覺模組塊的一些信息的table對象，例如handle（視覺傳感器的句柄）等。simVision是CoppeliaSim中提供的用於處理視覺相關任務的庫。 \n \n \n function   speedChange_callback(ui,id,newVal)  speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100 end \n 這個函數會在使用者調整了速度控制UI元素後被呼叫。它接收3個參數： ui ，這是UI元素的句柄； id ，這是UI元素的ID； newVal ，這是UI元素的新值。函數會根據新值計算出一個速度值 speed 。 \n function   sysCall_init() \n 這個函數是模擬程式的初始化函數，它只會被執行一次，當模擬程式啟動時。這個函數主要是執行一些初始化設置，例如設置模型的基礎物體、感測器和控制器，以及創建一些繪圖對象和UI元素。 \n bubbleRobBase=sim.getObject(\'.\') \n 這行代碼會獲取模型的根物體的句柄。在這個例子中，模型的根物體是代表機器人的物體。 \n leftMotor=sim.getObject ( "./leftMotor" ) rightMotor=sim.getObject ( "./rightMotor" ) noseSensor=sim.getObject ( "./sensingNose" ) \n 這些行會獲取左右馬達和前方感測器的句柄。這些句柄會在後續的代碼中用於控制馬達和讀取感測器。 \n minMaxSpeed={50*math.pi/180,300*math.pi/180} \n 這行會定義最小和最大速度。在這個例子中，速度是以弧度每秒為單位表示的，最小速度為50度每秒，最大速度為300度每秒。 \n backUntilTime=-1 \n 這行代碼定義了一個變數 backUntilTime ，用於在後續的代碼中區分機器人是向前移動還是向後移動。 \n robotCollection=sim.createCollection(0) sim.addItemToCollection(robotCollection,sim.handle_tree,bubbleRobBase,0) \n 這些行代碼用於創建一個物體集合並將機器人物體添加到其中。這將使得感測器能夠檢測到機器人周圍的其他物 \n function sysCall_actuation()： \n 這個函數控制BubbleRob的行動。它首先讀取接近傳感器的數據，以檢測是否有東西在BubbleRob的前方。如果傳感器檢測到障礙物，則將backUntilTime設置為當前仿真時間加上4秒，表示BubbleRob現在處於倒車模式。否則，如果backUntilTime小於當前仿真時間，則BubbleRob處於前進模式，並且將左右馬達的目標速度設置為speed。否則，BubbleRob處於倒車模式，並且左右馬達的目標速度設置為一定的值，以實現向後行駛的效果。 \n function sysCall_cleanup()： \n 這個函數在仿真結束時被調用，以清理代碼中使用的任何資源。在這個例子中，它摧毀了UI對象，以避免內存洩漏。 \n', 'tags': '', 'url': '程式講解.html'}, {'title': '專案規劃', 'text': '\n \n 1.定義範疇-這是一個規劃專案的重要第一步， 此專案要做甚麼、包含的範圍有多廣，必須在何時完成 ，必須把這個大餅畫出來再做細分，才能夠掌握此專案的正確方向。 \xa0  \n 2.確定專案發起人-每一個專案都會有一個發起人或利益相關者，找出這些人都是誰。 他們必定會對此專案有一定的影響力，以確保該專案向前推進時，該找誰來溝通，並且一同策劃專案的方向， 有了這個專案發起人，可以讓專案的共同參與者更輕鬆的管理專案 。 \xa0  \n 3.確定可用資源- 當在定義範疇的時候，就必須清楚需要多少的資源才得以完成此專案 ，是具技術性質的嗎？需要特殊的技能或培訓嗎？已經在團隊裡面嗎？ 專案開始之前，必須把資源分配好。 \xa0  \n 4.檢查時程- 專案規劃最重要的部分就是專案時程，必須要了解有多少的事情要做，搭配上資源必須花費多少的時間 ，雖然時間總是在變、有許多無法控制的因子、沒有辦法確定正確的時間......等，但是如果有一個完美的 甘特圖 ，可以讓檢視報告的師長或同組組員更能夠掌握專案的進度。 \n 5.建立WBS(工作細目結構)-將專案展開，越小的事越容易完成，所以把WBS展開的仔細點，會更有幫助。許多人都會選擇用 心智圖 的方式， 能夠簡單明瞭的看到所有的任務項目，在報告的時候也可以有漂亮且專業的圖來呈現 。 \n 6.切分成小步驟-如果接到手上的是一個很大的專案，可能不知道該從何處下手， 如果把專案切得越細，就可以更清楚，所需要的資源和時間，也更能夠做細部的掌控 ，所以只要有一個好的觀念，相信再大的專案也難不倒。 \xa0 \n 7.制定一個計劃草案- 當正在做一個專案時，必須清楚到成本、時間、資源，大致上需要做些什麼。可以把這些擬定成一個計畫草案 ，這是第一次把所有的東西都整合在一起，也有可能會寫上專案開始的時間以及預計完成的時間，讓團隊及組員們能夠知道整個計畫的概要。 \xa0 \n 8.草案檢討與反饋-當你完成了第七步驟的草案後，你就可以發佈給團隊組員們， 大家找個時間做個會議，在會議當中，團隊成員們可以對草案提出反饋 ，在這樣的溝通與互動過程中，能夠將專案計畫導到更接近完美的專案計畫。 \xa0 \n 9.完成精確計畫-現在該計劃正在向前推進，透過反饋與檢討讓專案計畫逼近完美了，現在就開始把這些資訊整理、討論該如何去做執行，讓這個專案開始啟動吧！ \xa0 \n 10.監測進展情況- 開始做執行的階段，必須不斷監測也許是每一周或是每一天，必須要好好的規劃，在執行的過程中，難免會出現一些意料之外的事情，所以必須要趕緊處理，也許是停止或者找解決的方法 。 身為一個專案參與者，在這個時候是非常重要的，如果搭配一個好的專案軟體，會讓專案更加順利。\xa0 \xa0 \n 11.保留所有文件-在執行一個專案時，我們無法確保此專案會一直照著我們的規劃走， 如果有些突發狀況，雖然不是我們預期的，但我們還是要把他記錄下來，這樣的專案紀錄可以讓整個專案更逼近寫實，也可以讓之後的成員們，有一些資料能夠參考與學習。  \xa0 \n 12.專案結束仍要保持聯繫-最後， 已經完成專案了，但是不能確保此專案之後不會有任何問題 ，有些地方還是需要其他組員的幫忙，如那就必須要隨時與你的組員聯繫，如果哪一天突然發生突發狀況，才不會找不到人來幫你處理， 隨時關心團隊成員 ，也可以建立良好的人脈關係！ \n', 'tags': '', 'url': '專案規劃.html'}, {'title': '如何專案管理', 'text': '1. 協作 \n 協作是所有專案管理技能的基石，無論軟實力、硬技能或技術性技能皆是如此。在專案管理中，協作能幫助您成為更具團隊精神的成員。當您能夠有效地進行協作，您便可以與團隊溝通得更好，並且完成出色的工作。 \n 2. 溝通 \n 有效溝通是專案管理的關鍵能力之一，也是有效協作的核心所在。為培養您的溝通技能，請練習與同事坦誠相待。這需要您和團隊成員之間的高度信任。為了透過開放式溝通建立信任，請鼓勵您的團隊成員在討論中提出任何想法，即便您不同意他們的想法也要這麼做。隨著您持續練習開放式溝通，您將會提升團隊協作和完成出色工作的能力。 \n 3. 團隊合作 \n 在工作空間中進行團隊合作的宗旨在於支持您的團隊，並鼓勵他們「共同」完成出色的工作。團隊中的每位成員都有其長處，故團隊作為整體會比個別成員單獨工作來得更加有效。協作是團隊合作的一部份，但團隊合作的範圍更廣，還包括了確保每位成員都感到被接納並能做出貢獻。 \n 如果您正在努力提升您的團隊合作技能，請練習提問。深入探討團隊腦力激盪的內容、一對一對話，以及所有團隊成員的意見。問問自己是否有人好一陣子沒有發言，或者是否另一位團隊成員可能有好的想法或相關的技能組合。 \n 4. 解決問題 \n 解決問題的技能是一種協作的、疊代的技能，可幫助您處理問題並最終解決之。培養解決問題的技能並不代表對每個問題都有「正確」的答案，相反地，具有出色解決問題能力的人會練習以新的角度看待問題，並有條不紊地尋求解決方案。 \n 要成為出色的問題解決者，請開始更深入地瞭解您所做的決定。您為何會做出某個選擇、是否有可能做出不同選擇？即便答案是否定的，質疑您的內在動機和解決方案也可以幫助您練習解決問題的技巧，並在未來以更好的方式處理問題。 \n 5. 組織 \n 對很多專案經理來說，組織技能是最令人生畏的軟技能。您可能認為組織技能是一種全有全無的技能。不過，就如同本文中提到的所有專案管理技能，您可以培養自己的組織技能，並憑藉自己的力量成為近藤麻理惠 (一位日本專業整理師) 般的人物。 \n 成為更好的組織者的最佳方式，就是為您和您團隊的工作建立 (並維護) 一個集中事實來源。我們經常因為工作中斷而變得雜亂無章，事實上，員工平均每天在10種工具之間切換。如果您的資訊散落於各處，您必然會感到缺乏條理。請不要將時間分散在 10 種工具上，而是改變作法，嘗試使用 Asana 作為您的組織工具，讓您和團隊得以擁有一個集中的事實來源。 \n 6. 時間管理 \n 時間管理和組織技能是相輔相成的。隨著您組織任務的能力更加精進，您也會更清楚手上的工作有哪些，並知道將至的任務需要花費多少時間。 \n 儘管如此，定下心來對工作進行優先排序還是可能很困難。為了提升您的時間管理技能並強力對抗拖延，請使用工作管理工具追蹤每項任務的相對優先順序。當您清楚知道哪些任務屬於高優先層級，您便可以先解決它們，以確保沒有任何工作進度落後或被遺漏。 \n 7. 領導技能 \n 若您正在管理一項專案，那麼您不僅是專案經理，同時也是一名領導者。即便您不是如此看待自己，您的專案團隊也正在尋求您的領導、指引和支持。 \n 為了培養您的領導技能，請練習以同理心和理解處理情況。優秀的領導者能將眾人聚集在一起，並有助於促進團隊合作和協作。您也應該花一些時間決定您想成為哪種類型的領導者。以下是一些常見的領導風格： \n 服務型領導。 如果您的主要目標是為您的團隊服務，您可能會對服務型領導感興趣。服務型領導者專注於幫助他們的團隊儘可能地發展和表現。 \n 參與型領導。 這類型的領導風格又稱為「民主式領導」，他們鼓勵整個專案團隊共同進行決策。 \n 變革型領導。 變革型領導的領導者非常關注團隊的願景，他們與團隊成員合作以實現具啟發性的變革。 \n 威權型 (獨裁型) 領導。 威權型的領導者會簡化專案的決策過程，不讓專案團隊有太多參與決策的機會。這種作法能夠幫助團隊專注於他們的專案目標並快速做出決策。 \n 委任型 (自由放任型) 領導。 這種風格的領導者鼓勵專案團隊發揮創意和彈性。「Laissez-faire」在法語中是「放手」的意思，而委任型的領導者接受的正是這種心態。 \n 8. 適應性 \n 不論是這項專案或下一項專案，有些時候專案計畫中的某些要素會發生變化。您的工作期限或優先事項可能會改變，使您必須相應地調整您的工作流程。優秀的專案經理能夠調整並適應新情況，以便持續引導他們的專案團隊朝正確的方向前進。提升適應力的重點在於瞭解何時該進行應變以及如何應變。如果不能清楚掌握當下進行的每件事項，便很難修正路線或決定最佳的行動方案。培養適應力的最佳方式是清楚掌握每件事情的動態，您可以透過在專案管理工具中追蹤專案以做到這點。 \n 9.解決衝突 \n 在管理專案的過程中會出現衝突，這是無可避免的。起因有可能是某位團隊成員不同意交付項目的重要級別、某位專案關係人試圖改變專案的範疇，或者是因為您超出了預算或期限。 \n 解決衝突需要同時處理衝突的雙方，讓每個人都感覺受到聆聽和支持。如果有人受到傷害，請花時間傾聽他們的想法，並試著找出適合所有人的解決方案。就算無法做到這點，以耐心和同理心進行對話也可以幫助化解可能產生的沮喪情況，並帶來更好的結果。 \n 10.批判性思考 \n 批判性思考和解決問題一樣，都沒有標準的「解決方案」。您無法在批判性思考中「獲得勝利」，但您可以練習以邏輯思維處理問題，而不單只是依據情緒做出決定。出色的批判性思考者會練習分析他們面前的資訊，並根據事實形成自己的結論，這就是福爾摩斯解開謎團的方式。 \n 要練習批判性思考，請退後一步問自己：我是如何得出這個結論的？還能有別的答案嗎？我的想法是否被事實資訊以外的東西所左右？情緒化的決定並不一定不好，事實上，有些最好的決定全因我們的熱情所在。但批判性思考可以提供幫助，確保您以正確的角度處理情況。 \n \n \n \n', 'tags': '', 'url': '如何專案管理.html'}, {'title': 'football', 'text': '\n 球場及感測器建立 \n \n 球場及感測器 \n 加入bubbleRob及球 \n \n \n 球場、感測器、球、bubbleRob \n', 'tags': '', 'url': 'football.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}]};