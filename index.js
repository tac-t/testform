var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var simei = $('input[name="simei"]').val();
        var furigana = $('input[name="furigana"]').val();
        var sei = $('input[name="sei"]').val();
        var denwa = $('input[name="denwa"]').val();
        var yubin = $('input[name="yubin"]').val();
        var ken = $('input[name="ken"]').val();
        var siku = $('input[name="siku"]').val();
        var heya = $('input[name="heya"]').val();
        var meado = $('input[name="meado"]').val();
        
        var msg = `名前：${simei}\nフリガナ：${furigana}\n生年月日：${sei}\n電話番号：${denwa}\n郵便番号：${yubin}\n都道府県：${ken}\n市区町村：${siku}\n建物名・部屋番号：${heya}\nメール：${meado}`;

        sendText(msg);

        return false;
    });
});
