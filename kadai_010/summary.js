// 文字色変化というボタンを押したら任意色に更新する
$('#change-color').on('click', function() {
    $('#target').css('color', 'red');
});

// 文字内容変化というボタンを押したら任意の文字内容に更新する
$('#change-text').on('click', function() {
    console.log('コンソール出力OK');
    $('#target').text('Hello!');    
});

// フェードアウトというボタンを押したらフェードアウトで文字が消える
$('#fade-out').on('click', function() {
    $('#target').fadeOut();
});

// フェードインというボタンを押したらフェードインで文字が現れる
$('#fade-in').on('click', function() {
    $('#target').fadeIn();
});