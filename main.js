$(function(){
    console.log("from main.js");

    // タイプ一覧
    // $(".wrap-type-list").hide();

    let typeArr = { 
        ノーマル: {
            weak: ["かくとう"],
            strong: [],
            invalid: ["ゴースト"]},
        ほのお: {
            weak: ["みず", "じめん", "いわ"], 
            strong: ["ほのお", "くさ", "こおり", "むし", "はがね", "フェアリー"], 
            invalid: []},
        みず: {
            weak: ["でんき", "くさ"], 
            strong: ["ほのお", "みず", "こおり", "はがね"], 
            invalid: []},
        でんき: {
            weak: ["じめん"],
            strong: ["でんき", "ひこう", "はがね"],
            invalid: []},
        くさ: {
            weak: ["ほのお", "こおり", "どく", "ひこう", "むし"], 
            strong: ["みず", "でんき", "くさ", "じめん"], 
            invalid: []},
        こおり: {
            weak: ["ほのお", "かくとう", "いわ", "はがね"], 
            strong: ["こおり"], 
            invalid: []},
        かくとう: {
            weak: ["ひこう", "エスパー", "フェアリー"],
            strong: ["むし", "いわ", "あく"],
            invalid: []},
        どく: {
            weak: ["じめん", "エスパー"], 
            strong: ["くさ", "かくとう", "どく", "むし"], 
            invalid: []},
        じめん: {
            weak: ["みず", "くさ", "こおり"], 
            strong: ["どく", "いわ"], 
            invalid: ["でんき"]},
        ひこう: {
            weak: ["でんき", "こおり", "いわ"],
            strong: ["くさ", "かくとう", "むし"],
            invalid: ["じめん"]},
        エスパー: {
            weak: ["むし", "ゴースト", "あく"], 
            strong: ["かくとう", "エスパー"], 
            invalid: []},
        むし: {
            weak: ["ほのお", "ひこう", "いわ"], 
            strong: ["くさ", "かくとう", "じめん"], 
            invalid: []},
        いわ: {
            weak: ["みず", "くさ", "かくとう", "じめん", "はがね"],
            strong: ["ノーマル", "ほのお", "どく", "ひこう"],
            invalid: []},
        ゴースト: {
            weak: ["ゴースト", "あく"], 
            strong: ["どく", "むし"], 
            invalid: ["ノーマル", "かくとう"]},
        ドラゴン: {
            weak: ["こおり", "ドラゴン", "フェアリー"], 
            strong: ["ほのお", "みず", "でんき", "くさ"], 
            invalid: []},
        あく: {
            weak: ["かくとう", "むし", "フェアリー"],
            strong: ["ゴースト", "あく"],
            invalid: ["エスパー"]},
        はがね: {
            weak: ["ほのお", "かくとう", "じめん"], 
            strong: ["ノーマル", "くさ", "こおり", "ひこう", "エスパー", "むし", "いわ", "ドラゴン", "はがね", "フェアリー"], 
            invalid: ["どく"]},
        フェアリー: {
            weak: ["どく", "はがね"], 
            strong: ["かくとう", "むし", "あく"], 
            invalid: ["ドラゴン"]}
    }

    let itemNameArr = ["weak", "strong", "invalid"];

    let typeName;

    // タイプ選択時
    $(".type-btn").click(function(){
        togglePage();

        // クリックされたタイプ名
        typeName = $(this).find(".type-name").text();

        // タイトルをタイプ名に差し替え
        $("#title").text(typeName);

        // weak,strong,invalidそれぞれの値を取り出す
        for (let i = 0; i < itemNameArr.length; i++){
            let typeCompatibility = itemNameArr[i];
            let target = typeArr[typeName][typeCompatibility];

            if(target.length != 0){
                for (var item of target){
                    // 詳細ページへ値を注入
                    $("#" + typeCompatibility).append("<li>" + item + "</li>");
                }
            }else{
                // 詳細ページへ値を注入
                $("#" + typeCompatibility).append("<li>なし</li>");
            }
        }
    });

    // 戻るボタンクリック時
    $(".back").click(function(){
        togglePage();

        for (let i = 0; i < itemNameArr.length; i++){
            let typeCompatibility = itemNameArr[i];
            let target = typeArr[typeName][typeCompatibility];
            
            // 値を削除
            $("#" + typeCompatibility).empty();
        }

        // タイトルをもとにもどす
        $("#title").text("ポケモン弱点表");
        
    });

    // 一覧と詳細の切り替え
    function togglePage(){
        $(".wrap-type-list").toggle();
        $(".result").toggle();
    }
});
