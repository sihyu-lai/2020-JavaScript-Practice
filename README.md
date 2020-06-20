# 2020-JavaScript-Practice
 練習JS六角直播班作業


https://codepen.io/sihyu/pen/pogRqpK?editors=1010
有以下問題：
	1. Input 我在34行宣告，35行用console.log檢查，但我不知道為什麼console.log沒反應
	2. 您提示我的&&寫錯了，但我去複製其他人的半形＆好像就會變成我寫的這樣．．
	3. 我用if去跑input可是我不知道怎麼確認input有沒有被抓到？
	4. 我把else註解掉，讓他去跑if{]else{}內容，但結果仍沒變，一直出現不借

求助的回答
1. 我看你第34行寫法正確
console.log typeof 也有出現 number 型別，所以是正常的
2. 我不太確定你看到的參考寫法如何，但應該要長這樣
 if (0<input && input<=1000){}
3.第35行的console.log可以不用確認型別，直接寫console.log(input);就好
4.同2解，判斷式對了的話 else 也會正常顯示

第一點
把按鈕寫在function測試
![](https://i.imgur.com/I02i6Hi.jpg)

第二點
我寫成 0<input<=1000（ 我北七）
