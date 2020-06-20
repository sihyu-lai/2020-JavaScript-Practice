
var JayHas=5000000; //杰倫原有5,000,000元;
//試算
/*借款低於 1000 元，不借款
1001 ~ 10000 年利率 20%
10001 ~ 100000 年利率 18%
100001 年利率 15%*/


// var input=document.querySelector('#input') ;//宣吿input
var submit =document.querySelector('#submit');//用JS選取HTML 送出按鈕
var result=document.querySelaector('#result');//用JS選取HTML 貸款結果
var loanBtn=document.querySelector('#loanBtn'); //用JS選取HTML 『鄰居決定貸款』按鈕

//if裡面常用的變數
var oneYear=document.querySelector('#oneYear');//第一年
var twoYears=document.querySelector('#twoYears');//第二年
var threeYears=document.querySelector('#threeYears');//第三年
var result=document.querySelector('#result'); //貸款結果
var remaining=document.querySelector('#remaining');//杰倫還剩下多少錢      
var profit=document.querySelector('#profit'); //三年後有多少錢
//把出input的值拿去做事件監聽，點擊之後，出現函式if判斷
//input的值低於1000的話，貸款結果要寫『不借』，而『鄰居決定貸款』的按鈕要加上.disabled=true

submit.addEventListener('click',subMit); //按下送出按鈕，產生事件監聽

function subMit(){             //按下送出按鈕，產生的函式
    result.textContent= " "; //貸款結果
    oneYear.textContent= " ";//第一年
    twoYears.textContent= " ";//第二年
    threeYears.textContent=" ";//第三年
    remaining.textContent=" ";   //杰倫目前還剩下
    profit.textContent=" ";    //三年後杰倫有多少錢
    var input=parseInt(document.querySelector('#input').value); //input的字串->數字
    console.log(input);//為什麼沒反應？

      //函式/*
      if (0<input && input<=1000){
          //借款大於0，小於等於1000，貸款結果寫『不借』;『鄰居決定貸款』 的按鈕要加上要鎖起來
              result.textContent= '不借';//貸款結果寫『不借』;
              loanBtn.disabled=true;//『鄰居決定貸款』 的按鈕要鎖起來
              remaining.textContent=" ";
              profit.textContent=" ";
              
              }  else if(input>1000 && input <= 10000){
                //借款1001-~10,000的話，貸款結果要出現借，input的值要出現再一年期、二年期、三年期上
                // 年利率 20%
                loanBtn.disabled=false;
                result.textContent= '借';//貸款結果出現『借』
                oneYear.textContent= Math.round(input*1.2);//第一年
                twoYears.textContent= Math.round(input*1.2*1.2);//第二年
                threeYears.textContent=Math.round(input*1.2*1.2*1.2);//第三年
              
                //監聽：『鄰居決定貸款』 的按鈕,點擊後，需出現兩種結果：杰倫現在有多少錢(剩下多少錢)，三年後杰倫會有多少錢
                loanBtn.addEventListener('click',loanResult);
                function loanResult() {
                  
                  
                  JayHas -=input;
                  remaining.textContent=JayHas;
                  threeYears=Math.round(input*1.2*1.2*1.2);
                  profit.textContent=threeYears+JayHas;

                  }
                }else if(input >10000 && input <= 100000){
                //借款10001-~100000的話，貸款結果要出現借，input的值要出現再一年期、二年期、三年期上
                //年利率 18%
                  result.textContent= '借';
                  oneYear.textContent= Math.round(input*1.18);
                  twoYears.textContent= Math.round(input*1.18*1.18);
                  threeYears.textContent= Math.round(input*1.18*1.18*1.18);
                  

                //監聽
                  loanBtn.addEventListener('click',loanResult);
                  
                  function loanResult() {
                    JayHas -=input;
                    remaining.textContent=JayHas;
                    threeYears=Math.round(input*1.2*1.2*1.2);
                    profit.textContent=threeYears+JayHas;
                
              }   
            }
             else{
                //借款>100000的話，貸款結果要出現『借』，input的值要出現再一年期、二年期、三年期上
                // 年利率 15%
                  result.textContent= '借';
                  loanBtn.disabled=false;//『鄰居決定貸款』 的按鈕要開起來
                  oneYear.textContent= Math.round(input*1.15);
                  twoYears.textContent= Math.round(input*1.15*1.15);
                  threeYears.textContent= Math.round(input*1.15*1.15*1.15);
                //監聽

                loanBtn.addEventListener('click',loanResult);
                function loanResult() {
                  JayHas -=input;
                  remaining.textContent=JayHas;
                  threeYears=Math.round(input*1.2*1.2*1.2);
                  profit.textContent=threeYears+JayHas;
              
        }  
        }
 


















      }
